import { Button } from "@/components/ui/button";
import { Phone, Eye, FileText, MessageCircle, Zap } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { products } from "@/data/products";
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(p => p.isPopular).slice(0, 5);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);
  const handleCall = () => {
    window.location.href = "tel:+261337106334";
  };
  const handleCatalogue = () => {
    document.getElementById("catalogue")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const handleDevis = () => {
    document.getElementById("devis")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated Product Carousel Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/70 z-20"></div>
        <div className="relative h-full">
          {featuredProducts.map((product, index) => <div key={product.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-30' : 'opacity-0'}`}>
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </div>)}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block animate-bounce-in">Tongasoa</span>
                <span className="block text-accent-light animate-bounce-in" style={{
                animationDelay: '0.2s'
              }}>
                  chez Tsena Imprimante
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-scale" style={{
              animationDelay: '0.4s'
            }}>
                Votre partenaire imprimante à Madagascar
              </p>
              
              <p className="text-lg mb-8 opacity-80 max-w-2xl animate-slide-in-up" style={{
              animationDelay: '0.6s'
            }}>
                Canon, HP, Epson, Brother • Jet d'encre, Laser, Réservoir • 
                Livraison province • Installation GRATUITE à Tana
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up" style={{
            animationDelay: '0.8s'
          }}>
              <Button onClick={handleCall} className="btn-hero bg-success hover:bg-success/90 text-lg px-8 py-6 shadow-glow animate-pulse-glow" size="lg">
                <Phone className="h-5 w-5 mr-3" />
                Appeler 033 71 063 34
              </Button>
              
              <Button onClick={handleCatalogue} variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm hover-lift" size="lg">
                <Eye className="h-5 w-5 mr-3" />
                Voir le Catalogue
              </Button>
              
              <Button onClick={handleDevis} variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm hover-lift" size="lg">
                <FileText className="h-5 w-5 mr-3" />
                Demander un Devis
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm opacity-80 animate-fade-in-scale" style={{
            animationDelay: '1s'
          }}>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>033 71 063 34</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a href="https://m.me/TsenaImprimante" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">
                  Facebook Messenger
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 px-[21px] mx-[148px]">
              <h3 className="text-white text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
                <Zap className="h-4 w-4 text-accent-light" />
                Nos Imprimantes Populaires
              </h3>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {featuredProducts.map(product => <CarouselItem key={product.id}>
                      <div className="flex flex-col items-center text-center text-white p-2 space-y-3">
                        <div className="relative group">
                          <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded-xl mb-3 shadow-xl hover-lift transition-all duration-300 group-hover:scale-105" onError={e => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop";
                      }} />
                          <div className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs px-1.5 py-0.5 rounded-full font-bold animate-bounce-in">
                            TOP
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <h4 className="font-bold text-base leading-tight">{product.name}</h4>
                          <p className="text-accent-light font-bold text-xl">
                            {new Intl.NumberFormat('fr-FR').format(product.priceMin)} Ariary
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-1">
                          {product.features.slice(0, 3).map((feature, idx) => <span key={idx} className="text-xs bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                              {feature}
                            </span>)}
                        </div>
                        
                        <div className="flex gap-2 pt-1">
                          <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 text-xs px-3 py-1" onClick={() => {
                        document.getElementById("catalogue")?.scrollIntoView({
                          behavior: "smooth"
                        });
                      }}>
                            Voir détails
                          </Button>
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-white text-xs px-3 py-1" onClick={() => {
                        document.getElementById("devis")?.scrollIntoView({
                          behavior: "smooth"
                        });
                      }}>
                            Devis
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-1 bg-white/20 border-white/30 text-white hover:bg-white/30 h-8 w-8" />
                <CarouselNext className="right-1 bg-white/20 border-white/30 text-white hover:bg-white/30 h-8 w-8" />
              </Carousel>
              
              {/* Indicateurs de popularité */}
              <div className="mt-3 text-center">
                <p className="text-white/80 text-xs">
                  ⭐ Les choix préférés de nos clients malgaches
                </p>
                <div className="flex justify-center gap-1 mt-1">
                  {featuredProducts.map((_, index) => <div key={index} className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{
                  animationDelay: `${index * 0.2}s`
                }}></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Enhanced Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/5 rounded-full animate-float" style={{
      animationDelay: '4s'
    }}></div>
      <div className="absolute top-32 right-32 w-8 h-8 bg-success/20 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute bottom-32 left-32 w-14 h-14 bg-primary/10 rounded-full animate-float" style={{
      animationDelay: '3s'
    }}></div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {featuredProducts.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-accent w-8' : 'bg-white/30'}`} />)}
      </div>
    </section>;
};
export default HeroSection;