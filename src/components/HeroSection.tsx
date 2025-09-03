import { Button } from "@/components/ui/button";
import { Phone, Eye, FileText, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+261337106334";
  };

  const handleCatalogue = () => {
    document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDevis = () => {
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Imprimantes Canon Madagascar" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Tongasoa</span>
              <span className="block text-accent-light">chez Tsena Imprimante</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Votre partenaire imprimante à Madagascar
            </p>
            
            <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
              Canon, HP, Epson, Brother • Jet d'encre, Laser, Réservoir • 
              Livraison province • Installation GRATUITE à Tana
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={handleCall}
              className="btn-hero bg-success hover:bg-success/90 text-lg px-8 py-6 shadow-glow"
              size="lg"
            >
              <Phone className="h-5 w-5 mr-3" />
              Appeler 033 71 063 34
            </Button>
            
            <Button 
              onClick={handleCatalogue}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
              size="lg"
            >
              <Eye className="h-5 w-5 mr-3" />
              Voir le Catalogue
            </Button>
            
            <Button 
              onClick={handleDevis}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
              size="lg"
            >
              <FileText className="h-5 w-5 mr-3" />
              Demander un Devis
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>033 71 063 34</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <a 
                href="https://www.facebook.com/TsenaImprimante" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-light transition-colors"
              >
                Facebook Messenger
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default HeroSection;