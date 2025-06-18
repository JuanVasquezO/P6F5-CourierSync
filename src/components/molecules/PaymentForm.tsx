import React, { useState, useEffect } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { Payment } from '@/components/organisms/PaymentTable';

export type PaymentFormData = {
  manualInvoiceId: number;
  amount: number;
  paymentDate: string;
};

type Props = {
  initialData?: Payment & { id?: string };
  onSubmit: (data: PaymentFormData & { id?: string }) => void;
};

export default function PaymentForm({ initialData, onSubmit }: Props) {
  const [manualInvoiceId, setManualInvoiceId] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  useEffect(() => {
    if (initialData) {
      setManualInvoiceId(String(initialData.manualInvoiceId || ''));
      setAmount(String(initialData.amount || ''));
      setPaymentDate(initialData.paymentDate || '');
    } else {
      setManualInvoiceId('');
      setAmount('');
      setPaymentDate('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualInvoiceId || !amount || !paymentDate) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    onSubmit({
      id: initialData?.id,
      manualInvoiceId: Number(manualInvoiceId),
      amount: Number(amount),
      paymentDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mx-auto">
      <Input
        id="manualInvoiceId"
        label="ID de Factura"
        type="number"
        value={manualInvoiceId}
        onChange={(e) => setManualInvoiceId(e.target.value)}
      />
      <Input
        id="amount"
        label="Monto"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        id="paymentDate"
        label="Fecha de Pago"
        type="date"
        value={paymentDate}
        onChange={(e) => setPaymentDate(e.target.value)}
      />
      <Button type="submit" className="w-full cursor-pointer">
        {initialData ? 'Actualizar Pago' : 'Registrar Pago'}
      </Button>
    </form>
  );
}
