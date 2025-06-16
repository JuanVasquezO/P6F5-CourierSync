// src/pages/alertas/index.tsx
import React from 'react';
import PageLayout from '@/components/templates/PageLayout';
import AlertGrid from '@/components/organisms/AlertGrid';

const mockAlerts = [
  { tipo: 'Factura vencida', descripcion: 'Factura #F101 vencida hace 1 día \n Cliente: Empresa XYZ \n Monto: $850.000 \n Último recordatorio enviado: 25 mayo 2025 ', 
    fecha: '2025-05-30' },
  { tipo: 'Pendiente por vencer', descripcion: 'Factura #F103 vence en 2 días \n Cliente: Empresa Freu \n Monto: $850.000 \n Recordatorio programado para mañana ', 
    fecha: '2025-06-04' },
  { tipo: 'Recordatorio Enviado', descripcion: 'Factura #F100 proxima a vencer \n Cliente: Juan Perez \n Monto: $300.000 \n Enviado: 03 junio 2025', 
    fecha: '2025-06-03' },  
  { tipo: 'Cliente sin correo', descripcion: 'Factura #F050 \n Cliente: Carlos Gómez \nNo se puede enviar recordatorio de vencimiento', fecha: '2025-06-06' },
  { tipo: 'Pago confirmado', descripcion: 'Factura #F039 \nCliente: Distribuidora Alfa \nMonto: $2.100.000 \nFecha de pago: 06 jun 2025', 
    fecha: '2025-06-06' },  
];

export default function AlertasPage() {
  return (
    <>
      <PageLayout title="CourierSync – Alertas" backLink="/dashboard">
        <h2 className="text-xl font-semibold text-white mb-4">Alertas de Facturación</h2>
        <AlertGrid alerts={mockAlerts} />
      </PageLayout>
    </>
  );
}
