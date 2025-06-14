// src/pages/alertas/index.tsx
import React from 'react';
import Head from 'next/head';
import PageLayout from '@/components/templates/PageLayout';
import AlertGrid from '@/components/organisms/AlertGrid';

const mockAlerts = [
  { tipo: 'Pago Pendiente', descripcion: 'Factura #F100 vence en 2 días', fecha: '2025-06-06' },
  { tipo: 'Recordatorio Enviado', descripcion: 'Se envió recordatorio a Juan Pérez', fecha: '2025-05-30' },
  { tipo: 'Alerta de Vencimiento', descripcion: 'Factura #F101 vencida hace 1 día', fecha: '2025-06-03' },
];

export default function AlertasPage() {
  return (
    <>
      <Head>
        <title>CourierSync – Alertas</title>
      </Head>
      <PageLayout title="Alertas" backLink="/dashboard">
        <h2 className="text-xl font-semibold text-white mb-4">Alertas de Facturación</h2>
        <AlertGrid alerts={mockAlerts} />
      </PageLayout>
    </>
  );
}
