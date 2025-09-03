import jsPDF from 'jspdf';
import { Product } from '@/data/products';
import { deliveryRates, getDeliveryRate, calculateDeliveryPrice, formatPrice, DeliveryType } from './deliveryRates';

export interface InvoiceData {
  quoteNumber: string;
  date: string;
  validUntil: string;
  customer: {
    name: string;
    company?: string;
    phone: string;
    email?: string;
    region: string;
  };
  products: {
    product: Product;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  deliveryType: DeliveryType;
  deliveryPrice: number;
  subtotal: number;
  total: number;
  notes?: string;
}

export class PDFGenerator {
  private static addHeader(pdf: jsPDF) {
    // Logo et en-tête entreprise
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 82, 130); // Couleur primaire
    pdf.text('TSENA IMPRIMANTE', 20, 30);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text('Votre partenaire imprimante eto Madagasikara', 20, 38);
    pdf.text('☎ 033 71 063 34 | Facebook: TsenaImprimante', 20, 45);
    
    // Ligne de séparation
    pdf.setDrawColor(44, 82, 130);
    pdf.setLineWidth(0.5);
    pdf.line(20, 50, 190, 50);
  }

  private static addInvoiceInfo(pdf: jsPDF, invoiceData: InvoiceData) {
    const rightAlign = 190;
    
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(220, 38, 127); // Couleur accent
    pdf.text('FACTURE PROFORMA', rightAlign, 30, { align: 'right' });
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    pdf.text(`N° ${invoiceData.quoteNumber}`, rightAlign, 40, { align: 'right' });
    pdf.text(`Date: ${invoiceData.date}`, rightAlign, 47, { align: 'right' });
    pdf.text(`Valable jusqu'au: ${invoiceData.validUntil}`, rightAlign, 54, { align: 'right' });
  }

  private static addCustomerInfo(pdf: jsPDF, customer: InvoiceData['customer']) {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 82, 130);
    pdf.text('FACTURÉ À:', 20, 70);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    
    let y = 80;
    pdf.text(customer.name, 20, y);
    y += 7;
    
    if (customer.company) {
      pdf.text(customer.company, 20, y);
      y += 7;
    }
    
    pdf.text(`☎ ${customer.phone}`, 20, y);
    y += 7;
    
    if (customer.email) {
      pdf.text(`✉ ${customer.email}`, 20, y);
      y += 7;
    }
    
    pdf.text(`📍 ${customer.region}`, 20, y);
  }

  private static addProductsTable(pdf: jsPDF, products: InvoiceData['products']): number {
    const startY = 120;
    let currentY = startY;
    
    // En-tête du tableau
    pdf.setFillColor(44, 82, 130);
    pdf.rect(20, currentY, 170, 8, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DESCRIPTION', 25, currentY + 5);
    pdf.text('QTÉ', 130, currentY + 5);
    pdf.text('PRIX UNIT.', 145, currentY + 5);
    pdf.text('TOTAL', 175, currentY + 5, { align: 'right' });
    
    currentY += 10;
    
    // Lignes des produits
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');
    
    products.forEach((item) => {
      // Nom du produit
      pdf.setFont('helvetica', 'bold');
      pdf.text(item.product.name, 25, currentY + 4);
      currentY += 6;
      
      // Description
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      const description = `${item.product.brand} • ${item.product.type} • ${item.product.features.slice(0, 2).join(', ')}`;
      pdf.text(description, 25, currentY + 2);
      currentY += 4;
      
      // Quantité, prix unitaire, total
      pdf.setFontSize(9);
      pdf.text(item.quantity.toString(), 130, currentY - 4);
      pdf.text(`${formatPrice(item.unitPrice)} MGA`, 145, currentY - 4);
      pdf.text(`${formatPrice(item.total)} MGA`, 185, currentY - 4, { align: 'right' });
      
      // Ligne de séparation
      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.1);
      pdf.line(20, currentY, 190, currentY);
      currentY += 8;
    });
    
    return currentY;
  }

  private static addDeliveryInfo(pdf: jsPDF, invoiceData: InvoiceData, y: number): number {
    const deliveryRate = getDeliveryRate(invoiceData.customer.region);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 82, 130);
    pdf.text('LIVRAISON:', 25, y);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${invoiceData.customer.region} - ${deliveryRate.estimatedDays}`, 25, y + 7);
    pdf.text(`Type: ${invoiceData.deliveryType === 'express' ? 'Express' : 'Standard'}`, 25, y + 14);
    
    pdf.text(`${formatPrice(invoiceData.deliveryPrice)} MGA`, 185, y + 7, { align: 'right' });
    
    return y + 20;
  }

  private static addTotals(pdf: jsPDF, invoiceData: InvoiceData, y: number) {
    const rightAlign = 185;
    
    // Sous-total
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Sous-total:', 140, y);
    pdf.text(`${formatPrice(invoiceData.subtotal)} MGA`, rightAlign, y, { align: 'right' });
    
    // Livraison
    pdf.text('Livraison:', 140, y + 8);
    pdf.text(`${formatPrice(invoiceData.deliveryPrice)} MGA`, rightAlign, y + 8, { align: 'right' });
    
    // Ligne de séparation
    pdf.setDrawColor(44, 82, 130);
    pdf.setLineWidth(0.5);
    pdf.line(140, y + 12, 185, y + 12);
    
    // Total
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(220, 38, 127);
    pdf.text('TOTAL:', 140, y + 20);
    pdf.text(`${formatPrice(invoiceData.total)} MGA`, rightAlign, y + 20, { align: 'right' });
  }

  private static addFooter(pdf: jsPDF, invoiceData: InvoiceData) {
    const pageHeight = pdf.internal.pageSize.height;
    const footerY = pageHeight - 40;
    
    // Notes
    if (invoiceData.notes) {
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(100, 100, 100);
      pdf.text('NOTES:', 20, footerY - 20);
      
      const splitNotes = pdf.splitTextToSize(invoiceData.notes, 170);
      pdf.text(splitNotes, 20, footerY - 15);
    }
    
    // Conditions
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 100);
    pdf.text('• Cette facture proforma est valable 30 jours', 20, footerY);
    pdf.text('• Installation gratuite à Antananarivo', 20, footerY + 5);
    pdf.text('• Garantie constructeur applicable', 20, footerY + 10);
    pdf.text('• Paiement: Espèces, Mobile Money, Virement bancaire', 20, footerY + 15);
    
    // Misaotra
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 82, 130);
    pdf.text('Misaotra tompoko!', 150, footerY + 10);
  }

  static generateInvoice(invoiceData: InvoiceData): jsPDF {
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Header
    this.addHeader(pdf);
    
    // Invoice info
    this.addInvoiceInfo(pdf, invoiceData);
    
    // Customer info
    this.addCustomerInfo(pdf, invoiceData.customer);
    
    // Products table
    let currentY = this.addProductsTable(pdf, invoiceData.products);
    currentY += 10;
    
    // Delivery info
    currentY = this.addDeliveryInfo(pdf, invoiceData, currentY);
    currentY += 10;
    
    // Totals
    this.addTotals(pdf, invoiceData, currentY);
    
    // Footer
    this.addFooter(pdf, invoiceData);
    
    return pdf;
  }

  static generateQuoteNumber(): string {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    
    return `PRO-${year}${month}${day}-${random}`;
  }
}