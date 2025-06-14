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
  const variant: BadgeVariant =
    alert.tipo.toLowerCase().includes('pendiente')
      ? 'warning'
      : alert.tipo.toLowerCase().includes('recordatorio')
      ? 'info'
      : 'error';

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-2">
        <Badge variant={variant}>{alert.tipo}</Badge>
        <span className="text-sm text-gray-400">{alert.fecha}</span>
      </div>
      <p className="text-sm text-gray-200">{alert.descripcion}</p>
    </Card>
  );
}
