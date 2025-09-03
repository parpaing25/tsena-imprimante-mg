import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X, Facebook } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import tsenaLogo from "@/assets/tsena-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Catalogue", href: "#catalogue" },
    { name: "Conseils", href: "/conseils" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleCall = () => {
    window.location.href = "tel:+261337106334";
  };

  const handleMessenger = () => {
    window.open("https://m.me/TsenaImprimante", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/TsenaImprimante", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-0">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg overflow-hidden bg-white flex-shrink-0">
              <img src={tsenaLogo} alt="Tsena Imprimante" className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
            </div>
            <div className="hidden xs:block sm:block min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-primary truncate">Tsena Imprimante</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Madagascar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button 
              onClick={handleCall}
              className="btn-call hidden xs:flex text-xs sm:text-sm px-2 sm:px-3"
              size="sm"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">033 71 063 34</span>
              <span className="sm:hidden">Appeler</span>
            </Button>
            
            <Button 
              onClick={handleMessenger}
              variant="outline"
              size="sm"
              className="hidden sm:flex"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Messenger
            </Button>

            <Button 
              onClick={handleFacebook}
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-[#1877f2] text-white border-[#1877f2] hover:bg-[#166fe5]"
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t space-y-3">
                    <Button onClick={handleCall} className="btn-call w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler 033 71 063 34
                    </Button>
                    <Button onClick={handleMessenger} variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Facebook Messenger
                    </Button>
                    <Button onClick={handleFacebook} variant="outline" className="w-full bg-[#1877f2] text-white border-[#1877f2] hover:bg-[#166fe5]">
                      <Facebook className="h-4 w-4 mr-2" />
                      Page Facebook
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;