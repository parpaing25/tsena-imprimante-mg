import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X, Printer } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Conseils", href: "/conseils" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const handleCall = () => {
    window.location.href = "tel:+261337106334";
  };

  const handleMessenger = () => {
    window.open("https://m.me/TsenaImprimante", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Printer className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Tsena Imprimante</h1>
              <p className="text-xs text-muted-foreground">Madagascar</p>
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
          <div className="flex items-center space-x-3">
            <Button 
              onClick={handleCall}
              className="btn-call hidden sm:flex"
              size="sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              033 71 063 34
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