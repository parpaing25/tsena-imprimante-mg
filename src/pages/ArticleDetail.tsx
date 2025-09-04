import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar,
  User,
  Clock,
  Share2,
  BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Articles data avec contenu complet
  const articles = {
    "1": {
      id: 1,
      title: "EcoTank vs Cartouches : Le Guide Complet 2025",
      excerpt: "Découvrez quelle technologie choisir selon vos besoins et économisez jusqu'à 70% sur vos coûts d'impression.",
      date: "15 Janvier 2025",
      author: "Équipe Tsena",
      category: "Guide d'achat",
      readTime: "5 min",
      content: `
        <h2>🌟 Introduction</h2>
        <p>Le choix entre une imprimante EcoTank et une imprimante à cartouches traditionnelles est <strong>crucial</strong> pour optimiser vos coûts d'impression à Madagascar ! 💰 Dans ce guide complet, nous analysons les avantages et inconvénients de chaque technologie pour vous aider à faire le meilleur choix.</p>
        
        <h2>🚀 Imprimantes EcoTank : La révolution des réservoirs d'encre</h2>
        <p>Les imprimantes EcoTank d'Epson ont révolutionné le monde de l'impression avec leurs réservoirs d'encre rechargeables ! ✨ Cette technologie innovante permet :</p>
        <ul>
          <li>💡 <strong>Économies drastiques :</strong> Jusqu'à 70% d'économies sur vos coûts d'impression</li>
          <li>⚡ <strong>Autonomie exceptionnelle :</strong> Jusqu'à 4500 pages en noir et 7500 pages en couleur</li>
          <li>🎯 <strong>Facilité d'utilisation :</strong> Recharge simple avec des flacons d'encre colorés</li>
          <li>🌱 <strong>Écologique :</strong> Réduction significative des déchets plastiques</li>
        </ul>

        <h2>🏆 Cartouches traditionnelles : Fiabilité éprouvée</h2>
        <p>Les imprimantes à cartouches restent une solution <strong>fiable et accessible</strong> avec leurs propres avantages :</p>
        <ul>
          <li>💵 <strong>Investissement initial moindre :</strong> Prix d'achat plus abordable</li>
          <li>🎨 <strong>Qualité constante :</strong> Impression de haute qualité garantie</li>
          <li>🛒 <strong>Disponibilité :</strong> Cartouches facilement trouvables partout à Madagascar</li>
          <li>🔧 <strong>Simplicité :</strong> Installation et remplacement ultra-simple</li>
        </ul>

        <h2>📊 Comparatif des coûts sur 3 ans</h2>
        <p>Voici une analyse détaillée pour un usage de <strong>200 pages par mois</strong> :</p>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <ul>
            <li>🟢 <strong>EcoTank :</strong> 1 200 000 MGA (imprimante + encre sur 3 ans)</li>
            <li>🔵 <strong>Cartouches :</strong> 1 800 000 MGA (imprimante + cartouches sur 3 ans)</li>
            <li>💰 <strong>Économie EcoTank :</strong> <span style="color: #22c55e; font-size: 1.2em;">600 000 MGA sur 3 ans !</span></li>
          </ul>
        </div>

        <h2>💡 Notre recommandation d'experts</h2>
        <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <p><strong>🎯 Choisissez EcoTank si :</strong></p>
          <ul>
            <li>📈 Vous imprimez plus de 100 pages par mois</li>
            <li>💰 Vous cherchez des économies à long terme</li>
            <li>🌱 Vous voulez réduire votre impact environnemental</li>
            <li>🏢 Vous avez un usage professionnel ou familial intensif</li>
          </ul>
        </div>

        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <p><strong>🎯 Optez pour les cartouches si :</strong></p>
          <ul>
            <li>📄 Vous imprimez moins de 50 pages par mois</li>
            <li>💳 Votre budget initial est limité</li>
            <li>🎨 Vous privilégiez l'impression photo occasionnelle</li>
            <li>🏠 Usage domestique léger et ponctuel</li>
          </ul>
        </div>

        <h2>🎉 Conclusion</h2>
        <p>Les imprimantes EcoTank représentent <strong>l'avenir de l'impression</strong> domestique et professionnelle à Madagascar ! 🇲🇬 Malgré un investissement initial plus important, elles offrent des économies substantielles et une expérience utilisateur améliorée.</p>
        
        <div style="background: #22c55e; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <p><strong>🛒 Prêt à faire des économies ? Contactez Tsena Imprimante dès maintenant !</strong></p>
          <p>📞 <strong>033 71 063 34</strong> | 💬 Conseils gratuits et livraison rapide !</p>
        </div>
      `
    },
    "2": {
      id: 2,
      title: "Nouveautés 2025 : Canon MAXIFY et HP Smart Tank",
      excerpt: "Les dernières innovations arrivent à Madagascar ! Découvrez les nouveaux modèles Canon et HP avec Wi-Fi 6 et impression recto-verso automatique.",
      date: "10 Janvier 2025",
      author: "Équipe Tsena",
      category: "Nouveautés",
      readTime: "4 min",
      content: `
        <h2>🚀 Les innovations 2025 débarquent à Madagascar !</h2>
        <p>Cette année marque un <strong>tournant majeur</strong> dans le monde de l'impression ! 🎯 L'arrivée des nouvelles gammes Canon MAXIFY et HP Smart Tank à Madagascar apporte des technologies de pointe spécialement conçues pour répondre aux besoins modernes des entreprises et particuliers malgaches.</p>

        <h2>🏆 Canon MAXIFY 2025 : Performance professionnelle</h2>
        <p>Canon frappe fort avec sa nouvelle gamme MAXIFY qui repousse les limites de l'impression professionnelle ! ⚡</p>
        <ul>
          <li>📶 <strong>Wi-Fi 6 :</strong> Connexion ultra-rapide et stable - fini les coupures !</li>
          <li>🌿 <strong>Impression recto-verso automatique :</strong> Économies de papier garanties (jusqu'à 50% !)</li>
          <li>📱 <strong>Écran tactile 4.3" :</strong> Interface intuitive et moderne comme votre smartphone</li>
          <li>⚡ <strong>Vitesse d'impression :</strong> Jusqu'à 24 pages par minute - Productivité maximale !</li>
          <li>🔒 <strong>Sécurité avancée :</strong> Protection des documents sensibles</li>
        </ul>

        <h2>🤖 HP Smart Tank : Intelligence artificielle intégrée</h2>
        <p>HP révolutionne complètement l'expérience utilisateur avec ses Smart Tank nouvelle génération ! 🌟</p>
        <ul>
          <li>🎯 <strong>Smart Tasks :</strong> Automatisation intelligente des tâches répétitives</li>
          <li>🔍 <strong>Détection automatique :</strong> Reconnaissance du type de document (photo, texte, graphique)</li>
          <li>📱 <strong>Application HP Smart :</strong> Contrôle total depuis votre smartphone - imprimez depuis n'importe où !</li>
          <li>🛡️ <strong>Sécurité renforcée :</strong> Protection avancée contre les cyberattaques</li>
          <li>🌱 <strong>Mode éco intelligent :</strong> Optimisation automatique de la consommation d'encre</li>
        </ul>

        <h2>🇲🇬 Disponibilité à Madagascar</h2>
        <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <p><strong>🎉 Tsena Imprimante est fier d'annoncer l'arrivée exclusive de ces nouveaux modèles :</strong></p>
          <ul>
            <li>🖨️ Canon MAXIFY GX7020 : <strong>Disponible dès février 2025</strong></li>
            <li>📦 HP Smart Tank 7602 : <strong>Pré-commandes ouvertes maintenant !</strong></li>
            <li>🚚 <strong>Livraison gratuite</strong> à Antananarivo et environs</li>
            <li>🎓 <strong>Formation gratuite</strong> incluse pour maîtriser toutes les fonctionnalités</li>
            <li>🔧 <strong>Support technique</strong> 1 an gratuit</li>
          </ul>
        </div>

        <h2>💰 Prix et offres de lancement exceptionnelles</h2>
        <p>Profitez de nos <strong>offres spéciales de lancement</strong> - Quantités limitées ! 🔥</p>
        <div style="background: #f59e0b; color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <ul>
            <li>🖨️ <strong>Canon MAXIFY GX7020 :</strong> <span style="font-size: 1.2em;">1 850 000 MGA</span> <span style="text-decoration: line-through; opacity: 0.8;">(au lieu de 2 100 000 MGA)</span></li>
            <li>🖨️ <strong>HP Smart Tank 7602 :</strong> <span style="font-size: 1.2em;">1 650 000 MGA</span> <span style="text-decoration: line-through; opacity: 0.8;">(au lieu de 1 900 000 MGA)</span></li>
            <li>🎁 <strong>Pack encre complet OFFERT</strong> pour tout achat avant fin mars 2025 !</li>
            <li>💳 <strong>Paiement en 3 fois sans frais</strong> disponible</li>
          </ul>
        </div>

        <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <p><strong>⏰ OFFRE LIMITÉE - Ne manquez pas cette opportunité !</strong></p>
          <p>📞 <strong>Appelez maintenant : 033 71 063 34</strong></p>
          <p>💬 <strong>Ou visitez notre showroom pour une démonstration gratuite !</strong></p>
        </div>
      `
    }
    // Ajouter plus d'articles selon les besoins
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Article non trouvé</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Guide d'achat": "bg-primary/10 text-primary",
      "Nouveautés": "bg-success/10 text-success", 
      "Maintenance": "bg-accent/10 text-accent",
      "Technologie": "bg-purple-100 text-purple-700",
      "Comparatif": "bg-warning/10 text-warning",
      "Dépannage": "bg-red-100 text-red-700"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier !");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Navigation */}
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Button>
          </div>

          {/* Article Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                <Button variant="ghost" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>
              <CardTitle className="text-3xl text-primary mb-4">
                {article.title}
              </CardTitle>
              <p className="text-lg text-muted-foreground mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime} de lecture
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Article Content */}
          <Card>
            <CardContent className="pt-6">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="mt-8 bg-gradient-elegant text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-semibold mb-2">
                  Besoin de conseils personnalisés ?
                </h3>
                <p className="mb-6 opacity-90">
                  Nos experts sont là pour vous aider à choisir la meilleure imprimante selon vos besoins.
                </p>
                <Button 
                  onClick={() => window.location.href = "tel:+261337106334"}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <User className="h-4 w-4 mr-2" />
                  Contactez nos experts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;