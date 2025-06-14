// src/components/organisms/AlertGrid.tsx
import React from 'react';
import AlertCard, { Alert } from '@/components/molecules/AlertCard';

export type AlertGridProps = {
  alerts: Alert[];
};

export default function AlertGrid({ alerts }: AlertGridProps) {
  if (alerts.length === 0) {
    return <p className="text-center text-gray-300">No hay alertas.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {alerts.map((a, idx) => (
        <AlertCard key={idx} alert={a} />
      ))}
    </div>
  );
}
