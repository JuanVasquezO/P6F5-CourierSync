// src/components/atoms/Badge.tsx
import React from 'react';

export type BadgeVariant = 'info' | 'warning' | 'error';

const variantStyles: Record<BadgeVariant, string> = {
  info: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-black',
  error: 'bg-red-500 text-white',
};

export type BadgeProps = {
  variant: BadgeVariant;
  children: React.ReactNode;
};

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
