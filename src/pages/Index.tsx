import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import ContactSection from "@/components/ContactSection";
import QuoteForm from "@/components/ProformaQuoteForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Calculator, 
  Shield, 
  Truck, 
  Phone, 
  Zap, 
  Printer, 
  Wifi,
  Star,
  CheckCircle
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Tsena Imprimante Madagascar - Canon, HP, Epson | Livraison Province";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Vente d\'imprimantes Canon, HP, Epson, Brother à Madagascar. Jet d\'encre, laser, EcoTank. Livraison province, installation gratuite Tana. Devis gratuit ☎ 033 71 063 34'
      );
    }
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+261337106334";
  };

  const advantages = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Livraison Province",
      description: "Nous livrons dans toute l'île de Madagascar"
    },
    {
      icon: <Shield className="h-8 w-8 text-success" />,
      title: "Installation Gratuite",
      description: "Service d'installation gratuit à Antananarivo"
    },
    {
      icon: <Phone className="h-8 w-8 text-accent" />,
      title: "Support Technique",
      description: "Assistance et SAV par téléphone"
    },
    {
      icon: <Star className="h-8 w-8 text-warning" />,
      title: "Marques Reconnues",
      description: "Canon, HP, Epson, Brother - Qualité garantie"
    }
  ];

  const printerTypes = [
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      name: "EcoTank",
      description: "Très économique, idéal pour gros volumes",
      price: "À partir de 690 000 MGA",
      popular: true
    },
    {
      icon: <Printer className="h-6 w-6 text-primary" />,
      name: "Laser",
      description: "Rapide et précis pour bureaux",
      price: "À partir de 1 530 000 MGA"
    },
    {
      icon: <Wifi className="h-6 w-6 text-success" />,
      name: "Jet d'encre Wi-Fi",
      description: "Impression sans fil depuis mobile",
      price: "À partir de 340 000 MGA"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Pourquoi Choisir Tsena Imprimante ?
              </h2>
              <p className="text-lg text-muted-foreground">
                Votre satisfaction, notre engagement depuis des années
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Printer Types */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Quel Type d'Imprimante Choisir ?
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous vous aidons à faire le bon choix selon vos besoins
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {printerTypes.map((type, index) => (
                <Card key={index} className="relative hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  {type.popular && (
                    <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">
                      Populaire
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {type.icon}
                      {type.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{type.description}</p>
                    <p className="font-semibold text-primary">{type.price}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Voir les modèles
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button onClick={handleCall} className="btn-call">
                <Phone className="h-4 w-4 mr-2" />
                Besoin de conseils ? Appelez-nous !
              </Button>
            </div>
          </div>
        </section>

        <ProductCatalog />

        {/* Quick Tips */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                <Lightbulb className="h-8 w-8 mx-auto mb-2" />
                Conseils Pratiques
              </h2>
              <p className="text-lg text-muted-foreground">
                Nos experts vous guident pour faire le meilleur choix
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">💡 Coût par page</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>EcoTank:</strong> ~0.02 MGA/page couleur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Laser:</strong> ~50-80 MGA/page N&B</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Cartouche:</strong> ~200-400 MGA/page</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">📊 Volume recommandé</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Domestique:</strong> 50-200 pages/mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Petit bureau:</strong> 200-800 pages/mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Entreprise:</strong> 1000+ pages/mois</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">⚡ Fonctionnalités clés</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Wi-Fi:</strong> Impression mobile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>ADF:</strong> Scan multi-pages auto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Duplex:</strong> Impression R/V auto</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <ContactSection />

        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
