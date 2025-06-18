import React, { useEffect, useState, useContext } from 'react';
import PageLayout from '@/components/templates/PageLayout';
import Button from '@/components/atoms/Button';
import PaymentTable, { Payment } from '@/components/organisms/PaymentTable';
import PaymentForm from '@/components/molecules/PaymentForm';
import { AuthContext } from '@/context/AuthContext';

// Tipo auxiliar para mapear los datos del backend
type ManualPaymentDTO = {
  id: string;
  manualInvoiceId: number;
  amount: number;
  paymentDate: string;
  // ⚠️ Ignoramos `newStatus` si viene del backend
};

export default function PagosPage() {
  const { token } = useContext(AuthContext);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Payment | undefined>(undefined);

  const fetchPayments = async () => {
    try {
      const res = await fetch('/api/manual-payments?pageable.page=0&pageable.size=50&assembler.forceFirstAndLastRels=true', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error HTTP ${res.status}: ${text}`);
      }

      if (res.status === 204) {
        setPayments([]);
        return;
      }

      const data = await res.json().catch(() => {
        throw new Error('La respuesta no es un JSON válido');
      });

      const pagosConEstadoFijo: Payment[] = (data._embedded?.manualPaymentDTOList as ManualPaymentDTO[]).map((p) => ({
        ...p,
        newStatus: 'PAID', // ✅ forzamos estado como PAID
      }));

      setPayments(pagosConEstadoFijo);
    } catch (err) {
      console.error('Error al cargar pagos', err);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleNew = () => {
    setEditing(undefined);
    setShowForm(true);
  };

  const handleEdit = (p: Payment) => {
    setEditing(p);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    console.log('Eliminar no implementado para ID:', id);
    alert('Eliminar no implementado');
  };

  const handleSubmit = async (data: Omit<Payment, 'id'> & { id?: string }) => {
    try {
      console.log('Datos a enviar:', {
        manualInvoiceId: Number(data.manualInvoiceId),
        amount: Number(data.amount),
        paymentDate: data.paymentDate,
        newStatus: 'PAID',
      });

      await fetch('/api/manual-payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          manualInvoiceId: Number(data.manualInvoiceId),
          amount: Number(data.amount),
          paymentDate: data.paymentDate,
          newStatus: 'PAID', // ✅ forzamos PAID
        }),
      });

      setShowForm(false);
      setEditing(undefined);
      fetchPayments();
    } catch (err) {
      console.error('Error al registrar pago', err);
    }
  };

  return (
    <PageLayout title="CourierSync - Gestión de Pagos" backLink="/dashboard">
      <div className="flex justify-end mb-4">
        <Button onClick={handleNew} className="cursor-pointer">
          + Nuevo Pago
        </Button>
      </div>

      <PaymentTable payments={payments} onEdit={handleEdit} onDelete={handleDelete} />

      {showForm && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-white mb-3">
            {editing ? 'Editar Pago' : 'Registrar Pago'}
          </h3>
          <PaymentForm initialData={editing} onSubmit={handleSubmit} />
        </div>
      )}
    </PageLayout>
  );
}
