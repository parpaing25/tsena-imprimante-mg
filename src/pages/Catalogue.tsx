import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Printer, 
  Phone,
  SlidersHorizontal
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import QuoteForm from "@/components/QuoteForm";
import { products, Product } from "@/data/products";

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [quoteProductId, setQuoteProductId] = useState<string>("");

  const handleCall = () => {
    window.location.href = "tel:+261337106334";
  };

  // Filtrage des produits
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    const matchesType = !selectedType || product.type === selectedType;
    
    let matchesPrice = true;
    if (priceRange) {
      const price = product.priceMin;
      switch (priceRange) {
        case "budget":
          matchesPrice = price <= 500000;
          break;
        case "mid":
          matchesPrice = price > 500000 && price <= 1000000;
          break;
        case "premium":
          matchesPrice = price > 1000000;
          break;
      }
    }

    return matchesSearch && matchesBrand && matchesType && matchesPrice;
  });

  // Tri des produits
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.priceMin - b.priceMin;
      case "price-desc":
        return b.priceMin - a.priceMin;
      case "brand":
        return a.brand.localeCompare(b.brand);
      case "popular":
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const brands = [...new Set(products.map(p => p.brand))];
  const types = [...new Set(products.map(p => p.type))];

  const handleRequestQuote = (productId: string) => {
    setQuoteProductId(productId);
    setIsQuoteFormOpen(true);
  };

  const handleViewDetails = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("");
    setSelectedType("");
    setPriceRange("");
    setSortBy("name");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Printer className="h-16 w-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-primary mb-4">
              Catalogue Complet
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez toute notre gamme d'imprimantes Canon, HP, Epson et Brother. 
              Plus de 20 modèles en stock permanent.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Badge variant="outline" className="text-sm">
                {products.length} produits disponibles
              </Badge>
              <Badge variant="outline" className="text-sm">
                {products.filter(p => p.inStock).length} en stock
              </Badge>
              <Badge variant="outline" className="text-sm">
                Livraison 24-48h Tana
              </Badge>
            </div>
          </div>

          {/* Filtres et Recherche */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtres et Recherche
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                {/* Recherche */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher une imprimante..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Marque */}
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes marques" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Toutes marques</SelectItem>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Type */}
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Tous types</SelectItem>
                    <SelectItem value="inkjet">Jet d'encre</SelectItem>
                    <SelectItem value="tank">Réservoir</SelectItem>
                    <SelectItem value="laser">Laser</SelectItem>
                  </SelectContent>
                </Select>

                {/* Prix */}
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous prix" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Tous prix</SelectItem>
                    <SelectItem value="budget">- 500 000 MGA</SelectItem>
                    <SelectItem value="mid">500 000 - 1 000 000 MGA</SelectItem>
                    <SelectItem value="premium">+ 1 000 000 MGA</SelectItem>
                  </SelectContent>
                </Select>

                {/* Tri */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Trier par..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nom A-Z</SelectItem>
                    <SelectItem value="price-asc">Prix croissant</SelectItem>
                    <SelectItem value="price-desc">Prix décroissant</SelectItem>
                    <SelectItem value="brand">Marque</SelectItem>
                    <SelectItem value="popular">Popularité</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <Button onClick={clearFilters} variant="outline" size="sm">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Effacer les filtres
                  </Button>
                  <Button onClick={handleCall} className="btn-call" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Conseil gratuit
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Résultats */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {filteredProducts.length} imprimante{filteredProducts.length > 1 ? "s" : ""} 
                {searchTerm && ` pour "${searchTerm}"`}
              </h2>
              {filteredProducts.length === 0 && (
                <Button onClick={clearFilters} variant="outline">
                  Voir tous les produits
                </Button>
              )}
            </div>
          </div>

          {/* Grille de Produits */}
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }>
              {sortedProducts.map((product) => (
                <div key={product.id} className={viewMode === "list" ? "max-w-none" : ""}>
                  <ProductCard
                    product={product}
                    onRequestQuote={handleRequestQuote}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <Printer className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun produit trouvé</h3>
                <p className="text-muted-foreground mb-4">
                  Essayez d'ajuster vos critères de recherche ou contactez-nous directement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={clearFilters} variant="outline">
                    Effacer les filtres
                  </Button>
                  <Button onClick={handleCall} className="btn-call">
                    <Phone className="h-4 w-4 mr-2" />
                    Nous contacter
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Card className="text-center">
              <CardContent className="py-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {products.length}
                </div>
                <div className="text-sm text-muted-foreground">Modèles disponibles</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {brands.length}
                </div>
                <div className="text-sm text-muted-foreground">Marques partenaires</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {products.filter(p => p.inStock).length}
                </div>
                <div className="text-sm text-muted-foreground">En stock immédiat</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-6">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Livraison Antananarivo</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />

      {/* ProductDetailModal uniquement */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={handleRequestQuote}
        />
      )}
    </div>
  );
};

export default Catalogue;