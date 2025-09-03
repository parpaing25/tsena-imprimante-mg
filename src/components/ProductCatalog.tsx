import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, Product, getPopularProducts } from "@/data/products";
import { toast } from "sonner";

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [hasWifi, setHasWifi] = useState<boolean | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const brands = Array.from(new Set(products.map(p => p.brand)));
  const types = Array.from(new Set(products.map(p => p.type)));

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = selectedType === "all" || product.type === selectedType;
      const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
      const matchesWifi = hasWifi === null || product.hasWifi === hasWifi;
      
      let matchesPrice = true;
      if (priceRange !== "all") {
        const price = product.priceMin;
        switch (priceRange) {
          case "low":
            matchesPrice = price < 500000;
            break;
          case "medium":
            matchesPrice = price >= 500000 && price < 1000000;
            break;
          case "high":
            matchesPrice = price >= 1000000;
            break;
        }
      }

      return matchesSearch && matchesType && matchesBrand && matchesPrice && matchesWifi;
    });
  }, [searchTerm, selectedType, selectedBrand, priceRange, hasWifi]);

  const handleRequestQuote = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      toast.success(`Demande de devis pour ${product.name}`, {
        description: "Vous allez être redirigé vers le formulaire de devis.",
        action: {
          label: "Continuer",
          onClick: () => {
            // Scroll to quote form
            document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }
  };

  const handleViewDetails = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      toast.info(`Détails de ${product.name}`, {
        description: "Fonctionnalité en cours de développement"
      });
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setSelectedBrand("all");
    setPriceRange("all");
    setHasWifi(null);
  };

  const popularProducts = getPopularProducts();

  return (
    <section id="catalogue" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Notre Catalogue d'Imprimantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection d'imprimantes Canon, HP, Epson et Brother. 
            Livraison en province • Installation gratuite à Tana
          </p>
        </div>

        {/* Popular Products */}
        {popularProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Badge className="bg-accent text-accent-foreground">Populaires</Badge>
              <h3 className="text-2xl font-semibold">Nos Bestsellers</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {popularProducts.slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onRequestQuote={handleRequestQuote}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtres et Recherche
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {showFilters ? "Masquer" : "Afficher"} les filtres
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher une imprimante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="tank">Réservoir</SelectItem>
                    <SelectItem value="laser">Laser</SelectItem>
                    <SelectItem value="inkjet">Jet d'encre</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Marque" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les marques</SelectItem>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Prix" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les prix</SelectItem>
                    <SelectItem value="low">Moins de 500 000 MGA</SelectItem>
                    <SelectItem value="medium">500 000 - 1 000 000 MGA</SelectItem>
                    <SelectItem value="high">Plus de 1 000 000 MGA</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={hasWifi?.toString() || "all"} onValueChange={(value) => {
                  setHasWifi(value === "all" ? null : value === "true");
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wi-Fi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Avec ou sans Wi-Fi</SelectItem>
                    <SelectItem value="true">Avec Wi-Fi</SelectItem>
                    <SelectItem value="false">Sans Wi-Fi</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={clearFilters} variant="outline" className="w-full">
                  Effacer les filtres
                </Button>
              </div>
            )}

            {/* Results count */}
            <div className="text-sm text-muted-foreground">
              {filteredProducts.length} imprimante{filteredProducts.length > 1 ? 's' : ''} trouvée{filteredProducts.length > 1 ? 's' : ''}
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestQuote={handleRequestQuote}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Aucune imprimante trouvée</h3>
            <p className="text-muted-foreground mb-4">
              Essayez de modifier vos critères de recherche
            </p>
            <Button onClick={clearFilters} variant="outline">
              Effacer les filtres
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;