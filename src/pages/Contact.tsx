import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Facebook, 
  Send,
  User,
  HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+261337106334";
  };

  const handleMessenger = () => {
    window.open("https://www.facebook.com/TsenaImprimante", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/TsenaImprimante", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:tsenaimprimante@gmail.com";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir au moins votre nom et votre message",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Préparation du message
      const emailMessage = `Nouveau message depuis le site web TSENA

👤 De: ${formData.name}
${formData.email ? `📧 Email: ${formData.email}` : ''}
${formData.phone ? `📱 Téléphone: ${formData.phone}` : ''}

${formData.subject ? `📝 Sujet: ${formData.subject}` : ''}

💬 Message:
${formData.message}

---
Envoyé depuis tsenaimprimante.com`;

      // Ouvrir l'email et messenger
      const emailSubject = formData.subject || "Nouveau message depuis le site web";
      const emailBody = encodeURIComponent(emailMessage);
      window.open(`mailto:tsenaimprimante@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`, '_self');

      // Ouvrir aussi Messenger avec le message
      setTimeout(() => {
        const messengerMessage = encodeURIComponent(emailMessage);
        window.open(`https://www.facebook.com/messages/t/61557419549913?text=${messengerMessage}`, '_blank');
      }, 1000);

      toast({
        title: "Message envoyé !",
        description: "Votre message a été transféré par email et sur notre page Facebook. Nous vous répondrons rapidement.",
      });

      // Reset formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Utilisez nos autres canaux de contact.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <MessageCircle className="h-16 w-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-primary mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre équipe d'experts est là pour vous conseiller et répondre 
              à toutes vos questions sur nos imprimantes et services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire de Contact */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Envoyez-nous un message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Votre nom et prénom"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Votre numéro"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Adresse email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Objet de votre message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Décrivez votre besoin, posez vos questions..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-hero"
                      size="lg"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      <Send className="h-4 w-4 ml-2" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Votre message sera envoyé par email et sur notre page Facebook 
                      pour une réponse encore plus rapide.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informations de Contact */}
            <div className="space-y-6">
              {/* Contact Direct */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button onClick={handleCall} className="w-full btn-call">
                      <Phone className="h-4 w-4 mr-2" />
                      033 71 063 34
                    </Button>
                    <Button onClick={handleEmail} variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      tsenaimprimante@gmail.com
                    </Button>
                    <Button onClick={handleMessenger} variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Facebook Messenger
                    </Button>
                    <Button 
                      onClick={handleFacebook} 
                      className="w-full bg-[#1877f2] text-white hover:bg-[#166fe5]"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Page Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Horaires */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Nos Horaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Lundi - Vendredi</span>
                      <span className="text-sm text-muted-foreground">8h - 18h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Samedi</span>
                      <span className="text-sm text-muted-foreground">8h - 16h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Dimanche</span>
                      <span className="text-sm text-muted-foreground">Urgences uniquement</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong>Réponse garantie</strong> sous 24h maximum ! 
                      Pour les urgences, n'hésitez pas à appeler directement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Localisation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Zone de Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Toute l'île de Madagascar</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div><strong>Livraison gratuite :</strong></div>
                      <div className="text-muted-foreground ml-4">• Antananarivo et environs</div>
                      
                      <div className="mt-2"><strong>Installation gratuite :</strong></div>
                      <div className="text-muted-foreground ml-4">• Antananarivo uniquement</div>
                      
                      <div className="mt-2"><strong>Autres régions :</strong></div>
                      <div className="text-muted-foreground ml-4">
                        • Livraison par transporteur
                        <br />• Support téléphonique gratuit
                        <br />• Installation à distance possible
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Rapide */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Questions Fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium text-primary">Délais de livraison ?</div>
                      <div className="text-muted-foreground">24-48h à Tana, 3-7 jours ailleurs</div>
                    </div>
                    <div>
                      <div className="font-medium text-primary">Modes de paiement ?</div>
                      <div className="text-muted-foreground">Espèces, virement, Mobile Money</div>
                    </div>
                    <div>
                      <div className="font-medium text-primary">Garantie ?</div>
                      <div className="text-muted-foreground">1 an constructeur + support gratuit</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Voir toutes les FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;