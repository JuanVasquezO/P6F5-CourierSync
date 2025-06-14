// src/pages/reportes/index.tsx
import React, { useState } from 'react'
import PageLayout from '@/components/templates/PageLayout'
import ReportFilters from '@/components/molecules/ReportFilters'
import ReportGrid from '@/components/organisms/ReportGrid'

type Metric = { label: string; value: string }
type Factura = { id: string; cliente: string; fecha: string; monto: string; estado: string }

export default function ReportesPage() {
  const [loading, setLoading] = useState(false)

  // estados para datos quemados
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [upcoming, setUpcoming] = useState<Factura[]>([])

  const handleApply = () => {
    setLoading(true)
    document.body.style.cursor = 'wait' // pone cursor de espera

    // simula un fetch de 1s
    setTimeout(() => {
      // datos quemados de ejemplo
      setMetrics([
        { label: 'Ingresos Totales', value: '$200,000' },
        { label: 'Pagos Pendientes', value: '$40,000' },
        { label: 'Facturas por Vencer', value: '5 facturas' },
        { label: 'Recordatorios Enviados', value: '3 correos' },
      ])

      setUpcoming([
        { id: 'F100', cliente: 'Ana Ruiz', fecha: '2025-06-01', monto: '$50,000', estado: 'Pendiente' },
        { id: 'F101', cliente: 'Carlos Méndez', fecha: '2025-06-03', monto: '$75,000', estado: 'Pendiente' },
      ])

      setLoading(false)
      document.body.style.cursor = 'default'
    }, 1000)
  }

   return (
    <PageLayout title="CourierSync – Reportes" backLink="/dashboard">
      <ReportFilters onApply={handleApply} loading={loading} />
      <ReportGrid metrics={metrics} upcoming={upcoming} loading={loading} />
    </PageLayout>
  )
}
