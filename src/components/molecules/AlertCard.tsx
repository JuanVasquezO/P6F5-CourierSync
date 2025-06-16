// src/components/molecules/AlertCard.tsx
import React from 'react';
import Card from '@/components/atoms/Card';
import Badge, { BadgeVariant } from '@/components/atoms/Badge';

export type Alert = {
  tipo: string;
  descripcion: string;
  fecha: string;
};

export type AlertCardProps = {
  alert: Alert;
};

export default function AlertCard({ alert }: AlertCardProps) {
  // Decide variante de badge según el tipo de alerta
  const tipo = alert.tipo.toLowerCase();
  const variant: BadgeVariant =
    tipo.includes('Pendiente por vencer') ? 'amber' :
    tipo.includes('pendiente') ? 'warning' :
    tipo.includes('recordatorio') ? 'info' :
    tipo.includes('pago') ? 'success' :
    tipo.includes('vencida') || tipo.includes('error') ? 'error' :
    'neutral'; // fallback en caso de que no coincida con nada

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-2">
        <Badge variant={variant}>{alert.tipo}</Badge>
        <span className="text-sm text-gray-400">{alert.fecha}</span>
      </div>
      <p className="text-sm text-gray-200 whitespace-pre-line">{alert.descripcion}</p>
    </Card>
  );
}
