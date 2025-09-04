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
        <h2>Introduction</h2>
        <p>Le choix entre une imprimante EcoTank et une imprimante à cartouches traditionnelles est crucial pour optimiser vos coûts d'impression. Dans ce guide complet, nous analysons les avantages et inconvénients de chaque technologie.</p>
        
        <h2>Imprimantes EcoTank : La révolution des réservoirs d'encre</h2>
        <p>Les imprimantes EcoTank d'Epson utilisent des réservoirs d'encre rechargeables intégrés au lieu de cartouches. Cette technologie permet:</p>
        <ul>
          <li><strong>Économies drastiques :</strong> Jusqu'à 70% d'économies sur les coûts d'impression</li>
          <li><strong>Autonomie exceptionnelle :</strong> Jusqu'à 4500 pages en noir et 7500 pages en couleur</li>
          <li><strong>Facilité d'utilisation :</strong> Recharge simple avec des flacons d'encre</li>
        </ul>

        <h2>Cartouches traditionnelles : Fiabilité éprouvée</h2>
        <p>Les imprimantes à cartouches restent une solution fiable avec leurs propres avantages:</p>
        <ul>
          <li><strong>Investissement initial moindre :</strong> Prix d'achat plus abordable</li>
          <li><strong>Qualité constante :</strong> Impression de haute qualité garantie</li>
          <li><strong>Disponibilité :</strong> Cartouches facilement trouvables</li>
        </ul>

        <h2>Comparatif des coûts sur 3 ans</h2>
        <p>Pour un usage de 200 pages par mois :</p>
        <ul>
          <li><strong>EcoTank :</strong> 1 200 000 MGA (imprimante + encre)</li>
          <li><strong>Cartouches :</strong> 1 800 000 MGA (imprimante + cartouches)</li>
          <li><strong>Économie EcoTank :</strong> 600 000 MGA sur 3 ans</li>
        </ul>

        <h2>Notre recommandation</h2>
        <p>Choisissez <strong>EcoTank</strong> si :</p>
        <ul>
          <li>Vous imprimez plus de 100 pages par mois</li>
          <li>Vous cherchez des économies à long terme</li>
          <li>Vous voulez réduire les déchets plastiques</li>
        </ul>

        <p>Optez pour les <strong>cartouches</strong> si :</p>
        <ul>
          <li>Vous imprimez moins de 50 pages par mois</li>
          <li>Votre budget initial est limité</li>
          <li>Vous privilégiez la simplicité d'entretien</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Les imprimantes EcoTank représentent l'avenir de l'impression domestique et professionnelle à Madagascar. Malgré un investissement initial plus important, elles offrent des économies substantielles et une expérience utilisateur améliorée.</p>
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
        <h2>Les innovations 2025 débarquent à Madagascar</h2>
        <p>Cette année marque un tournant dans le monde de l'impression avec l'arrivée des nouvelles gammes Canon MAXIFY et HP Smart Tank, spécialement conçues pour les besoins modernes.</p>

        <h2>Canon MAXIFY 2025 : Performance professionnelle</h2>
        <p>La nouvelle gamme MAXIFY de Canon apporte des améliorations significatives :</p>
        <ul>
          <li><strong>Wi-Fi 6 :</strong> Connexion ultra-rapide et stable</li>
          <li><strong>Impression recto-verso automatique :</strong> Économies de papier garanties</li>
          <li><strong>Écran tactile 4.3" :</strong> Interface intuitive et moderne</li>
          <li><strong>Vitesse d'impression :</strong> Jusqu'à 24 pages par minute</li>
        </ul>

        <h2>HP Smart Tank : Intelligence artificielle intégrée</h2>
        <p>HP révolutionne l'expérience utilisateur avec ses Smart Tank :</p>
        <ul>
          <li><strong>Smart Tasks :</strong> Automatisation des tâches répétitives</li>
          <li><strong>Détection automatique :</strong> Reconnaissance du type de document</li>
          <li><strong>Application HP Smart :</strong> Contrôle total depuis votre smartphone</li>
          <li><strong>Sécurité renforcée :</strong> Protection contre les cyberattaques</li>
        </ul>

        <h2>Disponibilité à Madagascar</h2>
        <p>Tsena Imprimante est fier d'annoncer l'arrivée de ces nouveaux modèles :</p>
        <ul>
          <li>Canon MAXIFY GX7020 : Disponible dès février 2025</li>
          <li>HP Smart Tank 7602 : Pré-commandes ouvertes</li>
          <li>Livraison gratuite à Antananarivo</li>
          <li>Formation gratuite incluse</li>
        </ul>

        <h2>Prix et offres de lancement</h2>
        <p>Profitez de nos offres spéciales de lancement :</p>
        <ul>
          <li>Canon MAXIFY GX7020 : 1 850 000 MGA (au lieu de 2 100 000 MGA)</li>
          <li>HP Smart Tank 7602 : 1 650 000 MGA (au lieu de 1 900 000 MGA)</li>
          <li>Pack encre offert pour tout achat avant fin mars</li>
        </ul>
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