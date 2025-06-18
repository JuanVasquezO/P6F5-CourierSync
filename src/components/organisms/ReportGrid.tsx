// src/components/organisms/ReportGrid.tsx
import React from 'react';
import Card from '@/components/atoms/Card';
import Table, { Column } from '@/components/atoms/Table';

type Metric = {
  label: string;
  value: string;
};

type TopClient = {
  cliente: string;
  total: string;
};

type Props = {
  metrics: Metric[];
  topClients: TopClient[];
  loading: boolean;
};

export default function ReportGrid({ metrics, topClients, loading }: Props) {
  if (loading) {
    return <p className="text-center text-gray-300">Cargando reportes…</p>;
  }

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

      {/* 2. Top 3 Clientes por facturación */}
      <div>
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Top 3 Clientes</h3>
        <Table columns={columnsTop} data={topClients} className="bg-gray-800" />
      </div>
    </div>
  );
}
