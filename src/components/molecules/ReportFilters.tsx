// src/components/molecules/ReportFilters.tsx
import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

type Props = {
  onApply: () => void
  loading: boolean
}

export default function ReportFilters({ onApply, loading }: Props) {
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <Input
        id="fecha-desde"
        label="Desde"
        type="date"
        value={desde}
        onChange={e => setDesde(e.target.value)}
        className="w-48"
      />
      <Input
        id="fecha-hasta"
        label="Hasta"
        type="date"
        value={hasta}
        onChange={e => setHasta(e.target.value)}
        className="w-48"
      />
      <Button
        onClick={onApply}
        disabled={loading}
        className={`mt-4 cursor-pointer sm:mt-0 w-full sm:w-auto ${loading ? 'opacity-50 cursor-wait' : ''}`}
      >
        {loading ? 'Cargando…' : 'Aplicar'}
      </Button>
    </div>
  )
}
