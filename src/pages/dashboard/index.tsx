import React, { useEffect, useState, useContext } from 'react';
import PageLayout from '@/components/templates/PageLayout';
import Navbar from '@/components/molecules/DashboardNavbar';
import Card from '@/components/atoms/Card';
import { AuthContext } from '@/context/AuthContext';

type ManualPaymentDTO = {
  id: string;
  manualInvoiceId: number;
  amount: number;
  paymentDate: string;
};

export default function DashboardPage() {
  const { token } = useContext(AuthContext);
  const [payments, setPayments] = useState<ManualPaymentDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPayments = async () => {
    try {
      const res = await fetch('/api/manual-payments?pageable.page=0&pageable.size=50', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Error al obtener pagos');

      const data = await res.json();
      const pagos = data._embedded?.manualPaymentDTOList || [];

      setPayments(pagos);
    } catch (err) {
      console.error('Error al obtener pagos:', err);
      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  if (loading) {
    return (
      <PageLayout title="CourierSync – Dashboard Financiero" backLink="/">
        <Navbar />
        <div className="p-6 text-center text-gray-300">Cargando métricas…</div>
      </PageLayout>
    );
  }

  // Cálculos
  const totalIncome = payments.reduce((sum, p) => sum + p.amount, 0);
  const numPayments = payments.length;

  // Último pago basado en el orden del array (último creado)
  const lastPayment = payments[payments.length - 1];

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const currentMonthPayments = payments.filter((p) => {
    const date = new Date(p.paymentDate);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  });

  const currentMonthIncome = currentMonthPayments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <PageLayout title="CourierSync – Dashboard Financiero" backLink="/">
      <Navbar />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Card title="Ingresos Totales">${totalIncome.toLocaleString()}</Card>
        <Card title="Número de Pagos">{numPayments}</Card>
        <Card title="Último Pago">
          {lastPayment ? `$${lastPayment.amount.toLocaleString()}` : 'N/A'}
        </Card>
        <Card title="Ingresos del Mes Actual">${currentMonthIncome.toLocaleString()}</Card>
      </div>
    </PageLayout>
  );
}
