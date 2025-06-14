// src/components/templates/PageLayout.tsx
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import BackButton from '../atoms/BackButton'

interface PageLayoutProps {
  title: string
  backLink?: string
  children: React.ReactNode
}

export default function PageLayout({
  title,
  backLink = '/dashboard',
  children,
}: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
        <header className="bg-[#0984e3] p-4 text-center relative">
          {/* ← Volver */}
          <div className="absolute top-4 left-4">
            <BackButton to={backLink} />
          </div>

        {/* Título */}
        <h1 className="text-3xl font-bold">{title}</h1>

        {/* Cerrar sesión */}
        <div className="absolute top-4 right-4">
          <Link href="/usuarios">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition">
              Cerrar sesión
            </button>
          </Link>
        </div>
      </header>

      <main className="p-8">
        {children}
      </main>
    </div>
  </>
  )
}
