import React, { useState, useEffect, useContext } from 'react'
import PageLayout from '@/components/templates/PageLayout'
import ReportGrid from '@/components/organisms/ReportGrid'
import { AuthContext } from '@/context/AuthContext'

export type Invoice = {
  id: number;
  clientName: string;
  shipmentReferenceId: string;
  emissionDate: string;
  amount: number;
  paymentStatus?: 'PAGADO' | 'PENDING';
};

type Metric = { label: string; value: string };
type TopClient = { cliente: string; total: string };

export default function ReportesPage() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [topClients, setTopClients] = useState<TopClient[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      document.body.style.cursor = 'wait';

      try {
        const res = await fetch('/api/manual-invoices?pageable.page=0&pageable.size=100', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Error al obtener facturas');

        const data = await res.json();
        const invoices: Invoice[] = data._embedded?.manualInvoiceDTOList || [];

        // Cálculos
        const total = invoices.reduce((sum, f) => sum + f.amount, 0);
        const pendientes = invoices.filter((f) => f.paymentStatus === 'PENDING').length;
        const clientesUnicos = new Set(invoices.map((f) => f.clientName)).size;
        const promedio = invoices.length > 0 ? total / invoices.length : 0;

        const agrupadoPorCliente = invoices.reduce((acc: Record<string, number>, f) => {
          acc[f.clientName] = (acc[f.clientName] || 0) + f.amount;
          return acc;
        }, {});

        const top = Object.entries(agrupadoPorCliente)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 3)
          .map(([cliente, total]) => ({
            cliente,
            total: `$${total.toLocaleString()}`,
          }));

        setMetrics([
          { label: 'Ingresos esperados', value: `$${total.toLocaleString()}` },
          { label: 'Pagos Pendientes', value: `${pendientes}` },
          { label: 'Clientes Activos', value: `${clientesUnicos}` },
          { label: 'Monto Promedio / Factura', value: `$${promedio.toFixed(2)}` },
        ]);

        setTopClients(top);

      } catch (error) {
        console.error('Error al cargar métricas', error);
      } finally {
        setLoading(false);
        document.body.style.cursor = 'default';
      }
    };

    fetchInvoices();
  }, [token]);

  return (
    <PageLayout title="CourierSync – Reportes" backLink="/dashboard">
      <ReportGrid metrics={metrics} topClients={topClients} loading={loading} />
    </PageLayout>
  );
}
