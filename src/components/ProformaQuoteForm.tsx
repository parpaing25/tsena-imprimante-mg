import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Product } from '@/data/products';
import { DeliveryType, deliveryOptions, calculateDeliveryPrice, formatPrice } from '@/utils/deliveryRates';
import { PDFGenerator, InvoiceData } from '@/utils/pdfGenerator';
import { toast } from 'sonner';

interface ProformaQuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const ProformaQuoteForm: React.FC<ProformaQuoteFormProps> = ({
  isOpen,
  onClose,
  selectedProduct
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerData, setCustomerData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    region: ''
  });
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('taxi_brousse');
  const [distanceKm, setDistanceKm] = useState(3);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (selectedProduct && isOpen) {
      const existingItem = cart.find(item => item.product.id === selectedProduct.id);
      if (existingItem) {
        setCart(cart.map(item =>
          item.product.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { product: selectedProduct, quantity: 1 }]);
      }
    }
  }, [selectedProduct, isOpen]);

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.product.id !== productId));
    } else {
      setCart(cart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.product.priceMin * item.quantity), 0);
  };

  const calculateTotalWeight = () => {
    return cart.reduce((total, item) => total + (item.product.weight * item.quantity), 0);
  };

  const calculateDeliveryTotal = () => {
    if (cart.length === 0) return 0;
    const totalWeight = calculateTotalWeight();
    return calculateDeliveryPrice(customerData.region, totalWeight, deliveryType, distanceKm);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryTotal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast.error('Veuillez ajouter au moins un produit');
      return;
    }

    if (!customerData.name || !customerData.phone || !customerData.region) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const quoteNumber = PDFGenerator.generateQuoteNumber();
    const currentDate = new Date().toLocaleDateString('fr-FR');
    const validUntilDate = new Date();
    validUntilDate.setMonth(validUntilDate.getMonth() + 1);

    const invoiceData: InvoiceData = {
      quoteNumber,
      date: currentDate,
      validUntil: validUntilDate.toLocaleDateString('fr-FR'),
      customer: customerData,
      products: cart.map(item => ({
        product: item.product,
        quantity: item.quantity,
        unitPrice: item.product.priceMin,
        total: item.product.priceMin * item.quantity
      })),
      deliveryType,
      deliveryPrice: calculateDeliveryTotal(),
      subtotal: calculateSubtotal(),
      total: calculateTotal(),
      notes
    };

    try {
      const pdf = PDFGenerator.generateInvoice(invoiceData);
      pdf.save(`Facture_Proforma_${quoteNumber}.pdf`);
      toast.success('Facture proforma générée avec succès!');
      
      setCart([]);
      setCustomerData({ name: '', company: '', phone: '', email: '', region: '' });
      setDeliveryType('taxi_brousse');
      setNotes('');
      onClose();
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      toast.error('Erreur lors de la génération de la facture');
    }
  };

  const regions = [
    'Antananarivo', 'Antsirabe', 'Fianarantsoa', 'Toamasina', 'Mahajanga',
    'Toliara', 'Antsiranana', 'Morondava', 'Sambava', 'Autre région'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Facture Proforma - Devis</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                value={customerData.name}
                onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="region">Région *</Label>
              <Select value={customerData.region} onValueChange={(value) => setCustomerData({ ...customerData, region: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner la région" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Options de livraison</h3>
            <Select value={deliveryType} onValueChange={(value: DeliveryType) => setDeliveryType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {deliveryOptions.map((option) => (
                  <SelectItem key={option.type} value={option.type}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-muted p-4 rounded-lg space-y-2">
            <div className="flex justify-between font-bold text-lg">
              <span>TOTAL:</span>
              <span>{formatPrice(calculateTotal())} MGA TTC</span>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit">
              Générer la facture proforma
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProformaQuoteForm;