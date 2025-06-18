export type Invoice = {
  id: number;
  clientName: string;
  shipmentReferenceId: string;
  emissionDate: string;
  amount: number;
  paymentStatus?: 'PAGADO' | 'PENDIENTE';
}