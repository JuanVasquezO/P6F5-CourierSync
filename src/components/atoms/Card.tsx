// src/components/atoms/Card.tsx
import React from 'react';

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/10 rounded-lg p-6 shadow ${className}`}>
      {title && <h2 className="text-xl font-semibold text-blue-300 mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
