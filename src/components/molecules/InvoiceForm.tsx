// src/components/molecules/InvoiceForm.tsx
import React, { useState, useEffect } from 'react'
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import Button from '@/components/atoms/Button'
import { Invoice } from '@/components/organisms/InvoiceTable'

type Props = {
  initialData?: Invoice
  onSubmit: (data: Omit<Invoice, 'id'> & { id?: string }) => void
}

export default function InvoiceForm({ initialData, onSubmit }: Props) {
  const [cliente, setCliente] = useState('')
  const [envio, setEnvio] = useState('')
  const [fecha, setFecha] = useState('')
  const [monto, setMonto] = useState('')
  const [estado, setEstado] = useState<Invoice['estado']>('PENDIENTE')

  useEffect(() => {
    if (initialData) {
      setCliente(initialData.cliente)
      setEnvio(initialData.envio)
      setFecha(initialData.fecha)
      setMonto(initialData.monto)
      setEstado(initialData.estado)
    } else {
      setCliente('')
      setEnvio('')
      setFecha('')
      setMonto('')
      setEstado('PENDIENTE')
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ id: initialData?.id, cliente, envio, fecha, monto, estado })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mx-auto">
      <Input
        id="cliente"
        label="Cliente"
        type="text"
        value={cliente}
        onChange={e => setCliente(e.target.value)}
      />
      <Input
        id="envio"
        label="ID del envío"
        type="text"
        value={envio}
        onChange={e => setEnvio(e.target.value)}
      />
      <Input
        id="fecha"
        label="Fecha de Emisión"
        type="date"
        value={fecha}
        onChange={e => setFecha(e.target.value)}
      />
      <Input
        id="monto"
        label="Monto"
        type="text"
        value={monto}
        onChange={e => setMonto(e.target.value)}
      />
      <Select
        id="estado"
        label="Estado"
        value={estado}
        onChange={e => setEstado(e.target.value as Invoice['estado'])}
        options={[
          { value: 'PENDIENTE', label: 'Pendiente' },
          { value: 'PAGADO', label: 'Pagado' },
        ]}
      />
      <Button type="submit" className="w-full cursor-pointer">
        {initialData ? 'Actualizar Factura' : 'Registrar Factura'}
      </Button>
    </form>
  )
}
