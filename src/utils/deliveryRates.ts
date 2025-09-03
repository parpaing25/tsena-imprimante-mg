// Tarifs de livraison par région à Madagascar (en MGA)
export interface DeliveryRate {
  region: string;
  standardRate: number; // Pour imprimantes standards (<10kg)
  heavyRate: number; // Pour imprimantes lourdes (>10kg)
  expressRate: number; // Livraison express (24-48h)
  estimatedDays: string;
}

export const deliveryRates: DeliveryRate[] = [
  {
    region: "Antananarivo",
    standardRate: 0, // Gratuit pour Tana
    heavyRate: 0,
    expressRate: 25000,
    estimatedDays: "Installation gratuite le jour même"
  },
  {
    region: "Antsirabe",
    standardRate: 35000,
    heavyRate: 50000,
    expressRate: 75000,
    estimatedDays: "2-3 jours"
  },
  {
    region: "Fianarantsoa",
    standardRate: 65000,
    heavyRate: 90000,
    expressRate: 120000,
    estimatedDays: "3-5 jours"
  },
  {
    region: "Toamasina",
    standardRate: 70000,
    heavyRate: 95000,
    expressRate: 130000,
    estimatedDays: "3-5 jours"
  },
  {
    region: "Mahajanga",
    standardRate: 80000,
    heavyRate: 110000,
    expressRate: 150000,
    estimatedDays: "4-6 jours"
  },
  {
    region: "Toliara",
    standardRate: 95000,
    heavyRate: 130000,
    expressRate: 180000,
    estimatedDays: "5-7 jours"
  },
  {
    region: "Antsiranana",
    standardRate: 85000,
    heavyRate: 115000,
    expressRate: 160000,
    estimatedDays: "4-6 jours"
  },
  {
    region: "Morondava",
    standardRate: 90000,
    heavyRate: 125000,
    expressRate: 170000,
    estimatedDays: "5-7 jours"
  },
  {
    region: "Sambava",
    standardRate: 100000,
    heavyRate: 135000,
    expressRate: 185000,
    estimatedDays: "6-8 jours"
  },
  {
    region: "Autre région",
    standardRate: 75000,
    heavyRate: 100000,
    expressRate: 140000,
    estimatedDays: "4-7 jours (selon localisation)"
  }
];

export const getDeliveryRate = (region: string): DeliveryRate => {
  const rate = deliveryRates.find(r => r.region === region);
  return rate || deliveryRates[deliveryRates.length - 1]; // Default to "Autre région"
};

export const calculateDeliveryPrice = (
  region: string, 
  productWeight: number, 
  isExpress: boolean = false
): number => {
  const rate = getDeliveryRate(region);
  
  if (isExpress) {
    return rate.expressRate;
  }
  
  return productWeight > 10 ? rate.heavyRate : rate.standardRate;
};

export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR').format(amount);
};