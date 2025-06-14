// src/components/atoms/DashboardHeader.tsx
import React from 'react';
import Link from 'next/link';
import BackButton from './BackButton'; // si lo tienes en otra ruta, ajusta

type DashboardHeaderProps = {
  title: string;
  backLink: string;
};

export default function DashboardHeader({ title, backLink }: DashboardHeaderProps) {
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between relative">
      <BackButton to={backLink} />

      <h1 className="flex-1 text-2xl font-bold text-white text-center">
        {title}
      </h1>

      <div className="absolute right-4">
        <Link href="/usuarios">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition">
            Cerrar sesión
          </button>
        </Link>
      </div>
    </header>
  );
}
