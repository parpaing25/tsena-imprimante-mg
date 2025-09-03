export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  type: 'inkjet' | 'laser' | 'tank';
  category: 'multifunction' | 'printer';
  priceMin: number;
  priceMax?: number;
  currency: string;
  features: string[];
  isMultifunction: boolean;
  hasWifi: boolean;
  hasADF: boolean;
  hasDuplex: boolean;
  colorPrint: boolean;
  formats: string[];
  monthlyVolume: string;
  description: string;
  imageUrl: string;
  inStock: boolean;
  isPopular?: boolean;
  kitIncluded?: boolean;
}

export const products: Product[] = [
  {
    id: "canon-g2470",
    name: "Canon PIXMA G2470",
    brand: "Canon",
    model: "G2470",
    type: "tank",
    category: "multifunction",
    priceMin: 860000,
    currency: "MGA",
    features: ["Réservoir d'encre", "Scanner", "Copieur", "Économique"],
    isMultifunction: true,
    hasWifi: false,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "300-400 pages",
    description: "Imprimante multifonction avec système de réservoir d'encre pour un coût d'impression très économique. Idéale pour les petits bureaux et les particuliers.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true,
    isPopular: true
  },
  {
    id: "canon-g3410",
    name: "Canon PIXMA G3410",
    brand: "Canon",
    model: "G3410",
    type: "tank",
    category: "multifunction",
    priceMin: 850000,
    currency: "MGA",
    features: ["Wi-Fi", "Réservoir d'encre", "Scanner", "Impression mobile"],
    isMultifunction: true,
    hasWifi: true,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "400-500 pages",
    description: "Version Wi-Fi de la série G avec réservoir d'encre, permettant l'impression sans fil depuis smartphones et ordinateurs. Parfaite pour les familles modernes.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true,
    isPopular: true
  },
  {
    id: "canon-mf3010",
    name: "Canon i-SENSYS MF3010",
    brand: "Canon",
    model: "MF3010",
    type: "laser",
    category: "multifunction",
    priceMin: 1530000,
    currency: "MGA",
    features: ["Laser Noir & Blanc", "Scanner", "Copieur", "Rapide"],
    isMultifunction: true,
    hasWifi: false,
    hasADF: false,
    hasDuplex: false,
    colorPrint: false,
    formats: ["A4", "Letter", "Legal"],
    monthlyVolume: "2000 pages",
    description: "Imprimante laser monochrome multifonction robuste, idéale pour les bureaux avec gros volumes d'impression en noir et blanc.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true
  },
  {
    id: "canon-mg2545s",
    name: "Canon PIXMA MG2545S",
    brand: "Canon",
    model: "MG2545S",
    type: "inkjet",
    category: "multifunction",
    priceMin: 340000,
    priceMax: 410000,
    currency: "MGA",
    features: ["Scanner", "Copieur", "Compact", "Abordable"],
    isMultifunction: true,
    hasWifi: false,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "100-200 pages",
    description: "Imprimante multifonction d'entrée de gamme, parfaite pour un usage domestique occasionnel. Compacte et facile à utiliser.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true,
    kitIncluded: false
  },
  {
    id: "canon-tr4640",
    name: "Canon PIXMA TR4640",
    brand: "Canon",
    model: "TR4640",
    type: "inkjet",
    category: "multifunction",
    priceMin: 500000,
    priceMax: 590000,
    currency: "MGA",
    features: ["Wi-Fi", "Fax", "ADF", "Scanner", "Bureau complet"],
    isMultifunction: true,
    hasWifi: true,
    hasADF: true,
    hasDuplex: true,
    colorPrint: true,
    formats: ["A4", "Letter", "Legal"],
    monthlyVolume: "500-800 pages",
    description: "Solution bureau complète avec fax, ADF et Wi-Fi. Idéale pour les petites entreprises et bureaux à domicile.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true,
    kitIncluded: false
  },
  {
    id: "canon-ts3440",
    name: "Canon PIXMA TS3440",
    brand: "Canon",
    model: "TS3440",
    type: "inkjet",
    category: "multifunction",
    priceMin: 420000,
    priceMax: 490000,
    currency: "MGA",
    features: ["Wi-Fi", "Scanner", "Copieur", "Design moderne"],
    isMultifunction: true,
    hasWifi: true,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "200-300 pages",
    description: "Imprimante Wi-Fi au design élégant, parfaite pour l'impression de photos et documents. Interface intuitive et configuration facile.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true,
    kitIncluded: false
  },
  {
    id: "canon-ts3640",
    name: "Canon PIXMA TS3640",
    brand: "Canon",
    model: "TS3640",
    type: "inkjet",
    category: "multifunction",
    priceMin: 490000,
    currency: "MGA",
    features: ["Wi-Fi", "Scanner", "Copieur", "Kit inclus"],
    isMultifunction: true,
    hasWifi: true,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "200-300 pages",
    description: "Version améliorée de la TS3440 avec kit d'accessoires inclus. Excellent rapport qualité-prix pour l'usage familial.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true,
    kitIncluded: true
  },
  // Additional popular models for Madagascar market
  {
    id: "hp-deskjet-2320",
    name: "HP DeskJet 2320",
    brand: "HP",
    model: "2320",
    type: "inkjet",
    category: "multifunction",
    priceMin: 380000,
    currency: "MGA",
    features: ["Scanner", "Copieur", "Compact", "Économique"],
    isMultifunction: true,
    hasWifi: false,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "100-200 pages",
    description: "Imprimante HP d'entrée de gamme, fiable et abordable pour usage domestique occasionnel.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true
  },
  {
    id: "epson-l3210",
    name: "Epson EcoTank L3210",
    brand: "Epson",
    model: "L3210",
    type: "tank",
    category: "multifunction",
    priceMin: 750000,
    currency: "MGA",
    features: ["EcoTank", "Scanner", "Copieur", "Très économique"],
    isMultifunction: true,
    hasWifi: false,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "300-400 pages",
    description: "Système EcoTank d'Epson pour un coût d'impression ultra-bas. Concurrent direct des Canon série G.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true,
    isPopular: true
  },
  {
    id: "brother-dcp-t220",
    name: "Brother DCP-T220",
    brand: "Brother",
    model: "T220",
    type: "tank",
    category: "multifunction",
    priceMin: 690000,
    currency: "MGA",
    features: ["Réservoir d'encre", "Scanner", "Copieur", "Robuste"],
    isMultifunction: true,
    hasWifi: false,
    hasADF: false,
    hasDuplex: false,
    colorPrint: true,
    formats: ["A4", "Letter"],
    monthlyVolume: "250-350 pages",
    description: "Imprimante Brother avec système de réservoir, réputée pour sa fiabilité et sa durabilité.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=400&fit=crop",
    inStock: true
  }
];

export const formatPrice = (price: number, currency: string = "MGA") => {
  return new Intl.NumberFormat('fr-FR').format(price) + " " + currency;
};

export const getPopularProducts = () => products.filter(p => p.isPopular);
export const getProductsByType = (type: Product['type']) => products.filter(p => p.type === type);
export const getProductsByBrand = (brand: string) => products.filter(p => p.brand === brand);