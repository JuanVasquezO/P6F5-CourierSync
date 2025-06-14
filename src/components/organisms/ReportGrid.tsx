import React from 'react';
import Card from '@/components/atoms/Card';
import Table, { Column } from '@/components/atoms/Table';

type Metric = { label: string; value: string };
type Factura = { id: string; cliente: string; fecha: string; monto: string; estado: string };
type TopClient = { cliente: string; total: string };

type Props = {
  metrics: Metric[];
  upcoming: Factura[];
  loading: boolean;
};

export default function ReportGrid({ metrics, upcoming, loading }: Props) {
  if (loading) {
    return <p className="text-center text-gray-300">Cargando reportes…</p>;
  }

  const otherMetrics: Metric[] = [
    { label: 'Tiempo Promedio de Pago', value: '12 días' },
    { label: 'Clientes Activos', value: '15' },
    { label: 'Facturas Emitidas', value: '45' },
    { label: 'Monto Promedio / Factura', value: '$2.700' },
  ];

  const topClients: TopClient[] = [
    { cliente: 'Empresa X', total: '$50.000' },
    { cliente: 'Comercial Y', total: '$40.000' },
    { cliente: 'Distribuciones Z', total: '$35.000' },
  ];

  const columnsUpcoming: Column<Factura>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Cliente', accessor: 'cliente' },
    { header: 'Fecha', accessor: 'fecha' },
    { header: 'Monto', accessor: 'monto' },
    { header: 'Estado', accessor: 'estado' },
  ];

  const columnsTop: Column<TopClient>[] = [
    { header: 'Cliente', accessor: 'cliente' },
    { header: 'Total Facturado', accessor: 'total' },
  ];

  return (
    <div className="space-y-10">
      {/* 1. Métricas resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <Card key={m.label}>
            <p className="text-sm font-medium text-gray-400">{m.label}</p>
            <p className="mt-2 text-2xl font-bold">{m.value}</p>
          </Card>
        ))}
      </div>

      {/* 2. Indicadores adicionales */}
      <div>
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Indicadores Adicionales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherMetrics.map((m) => (
            <Card key={m.label}>
              <p className="text-sm font-medium text-gray-400">{m.label}</p>
              <p className="mt-2 text-2xl font-bold">{m.value}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. Top 3 Clientes por facturación */}
      <div>
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Top 3 Clientes</h3>
        <Table columns={columnsTop} data={topClients} className="bg-gray-800" />
      </div>

      {/* 4. Facturas por Vencer */}
      <div>
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Facturas por Vencer</h3>
        <Table columns={columnsUpcoming} data={upcoming} className="bg-gray-800" />
      </div>
    </div>
  );
}
