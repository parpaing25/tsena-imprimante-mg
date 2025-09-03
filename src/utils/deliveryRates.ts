// Tarifs de livraison par région à Madagascar (en MGA TTC)
export interface DeliveryRate {
  region: string;
  distanceFromTana: number; // Distance en km depuis Antananarivo
  taxiBrousseRate: number; // Prix fixe taxi-brousse
  estimatedDays: string;
}

export type DeliveryType = 'tana_local' | 'airplane' | 'taxi_brousse' | 'service_rapide';

export interface DeliveryOption {
  type: DeliveryType;
  name: string;
  description: string;
}

export const deliveryOptions: DeliveryOption[] = [
  {
    type: 'tana_local',
    name: 'Livraison locale Tana',
    description: 'Dans un rayon de 5km du centre-ville'
  },
  {
    type: 'airplane',
    name: 'Par avion (Madagascar Airlines)',
    description: 'Fret intérieur - Rapide et sécurisé'
  },
  {
    type: 'taxi_brousse',
    name: 'Par taxi-brousse',
    description: 'Prix équivalent à un passager'
  },
  {
    type: 'service_rapide',
    name: 'Service rapide (route)',
    description: 'Facturation par kg et par distance'
  }
];

export const deliveryRates: DeliveryRate[] = [
  {
    region: "Antananarivo",
    distanceFromTana: 0,
    taxiBrousseRate: 0, // N/A pour Tana
    estimatedDays: "Installation gratuite le jour même"
  },
  {
    region: "Antsirabe",
    distanceFromTana: 170,
    taxiBrousseRate: 42000,
    estimatedDays: "2-3 jours"
  },
  {
    region: "Fianarantsoa",
    distanceFromTana: 410,
    taxiBrousseRate: 42000,
    estimatedDays: "3-5 jours"
  },
  {
    region: "Toamasina",
    distanceFromTana: 370,
    taxiBrousseRate: 75000,
    estimatedDays: "3-5 jours"
  },
  {
    region: "Mahajanga",
    distanceFromTana: 555,
    taxiBrousseRate: 65000,
    estimatedDays: "4-6 jours"
  },
  {
    region: "Toliara",
    distanceFromTana: 940,
    taxiBrousseRate: 100000,
    estimatedDays: "5-7 jours"
  },
  {
    region: "Antsiranana",
    distanceFromTana: 1100,
    taxiBrousseRate: 180000,
    estimatedDays: "4-6 jours"
  },
  {
    region: "Morondava",
    distanceFromTana: 700,
    taxiBrousseRate: 70000,
    estimatedDays: "5-7 jours"
  },
  {
    region: "Sambava",
    distanceFromTana: 850,
    taxiBrousseRate: 160000,
    estimatedDays: "6-8 jours"
  },
  {
    region: "Autre région",
    distanceFromTana: 500,
    taxiBrousseRate: 80000,
    estimatedDays: "4-7 jours (selon localisation)"
  }
];

export const getDeliveryRate = (region: string): DeliveryRate => {
  const rate = deliveryRates.find(r => r.region === region);
  return rate || deliveryRates[deliveryRates.length - 1]; // Default to "Autre région"
};

// Calcul pour livraison locale Tana (5000-12000 Ar selon distance)
export const calculateTanaLocalPrice = (distanceKm: number): number => {
  if (distanceKm <= 5) {
    // Tarif progressif: 5000 Ar + 1400 Ar par km supplémentaire
    return Math.min(5000 + (distanceKm * 1400), 12000);
  }
  return 12000; // Maximum pour 5km
};

// Calcul pour livraison par avion
export const calculateAirplanePrice = (weightKg: number): number => {
  const minPrice = 40000; // Minimum 40,000 Ar HT
  const pricePerKg = 5500; // 5,500 Ar/kg
  return Math.max(minPrice, pricePerKg * weightKg);
};

// Calcul pour service rapide (route)
export const calculateServiceRapidePrice = (weightKg: number, distanceKm: number): number => {
  const minPrice = 15000; // Minimum 15,000 Ar
  const pricePerKgPer100Km = 1200; // 1,200 Ar/kg/100km
  const distanceBlocks = Math.ceil(distanceKm / 100);
  const calculatedPrice = distanceBlocks * pricePerKgPer100Km * weightKg;
  return Math.max(minPrice, calculatedPrice);
};

// Fonction principale de calcul de prix
export const calculateDeliveryPrice = (
  region: string, 
  productWeight: number, 
  deliveryType: DeliveryType,
  distanceKm: number = 3 // Distance par défaut pour Tana
): number => {
  const rate = getDeliveryRate(region);
  
  switch (deliveryType) {
    case 'tana_local':
      return calculateTanaLocalPrice(distanceKm);
    
    case 'airplane':
      return calculateAirplanePrice(productWeight);
    
    case 'taxi_brousse':
      return rate.taxiBrousseRate;
    
    case 'service_rapide':
      return calculateServiceRapidePrice(productWeight, rate.distanceFromTana);
    
    default:
      return rate.taxiBrousseRate;
  }
};

export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR').format(amount);
};