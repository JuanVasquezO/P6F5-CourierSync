// src/components/molecules/InvoiceForm.tsx
import React, { useState, useEffect } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { Invoice } from '@/components/organisms/InvoiceTable';

type Props = {
  initialData?: Invoice;
  onSubmit: (data: Partial<Invoice>) => void;
};

export default function InvoiceForm({ initialData, onSubmit }: Props) {
  const [clientName, setClientName] = useState('');
  const [shipmentReferenceId, setShipmentReferenceId] = useState('');
  const [emissionDate, setEmissionDate] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (initialData) {
      setClientName(initialData.clientName || '');
      setShipmentReferenceId(initialData.shipmentReferenceId || '');
      setEmissionDate(initialData.emissionDate || '');
      setAmount(String(initialData.amount || ''));
    } else {
      setClientName('');
      setShipmentReferenceId('');
      setEmissionDate('');
      setAmount('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      clientName,
      shipmentReferenceId,
      emissionDate,
      amount: parseFloat(amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mx-auto">
      <Input id="clientName" label="Cliente" type="text" value={clientName} onChange={e => setClientName(e.target.value)} />
      <Input id="shipmentId" label="ID del envío" type="text" value={shipmentReferenceId} onChange={e => setShipmentReferenceId(e.target.value)} />
      <Input id="date" label="Fecha de Emisión" type="date" value={emissionDate} onChange={e => setEmissionDate(e.target.value)} />
      <Input id="amount" label="Monto" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <Button type="submit" className="w-full cursor-pointer">
        {initialData ? 'Actualizar Factura' : 'Registrar Factura'}
      </Button>
    </form>
  );
}
