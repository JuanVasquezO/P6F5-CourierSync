// src/pages/facturas/index.tsx
import React, { useState } from 'react'
import PageLayout from '@/components/templates/PageLayout'
import Button from '@/components/atoms/Button'
import InvoiceTable, { Invoice } from '@/components/organisms/InvoiceTable'
import InvoiceForm from '@/components/molecules/InvoiceForm'

export default function FacturasPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<Invoice | undefined>(undefined)

  const handleNew = () => {
    setEditing(undefined)
    setShowForm(true)
  }

  const handleEdit = (inv: Invoice) => {
    setEditing(inv)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (!window.confirm('¿Estás seguro de eliminar esta factura?')) return
    setInvoices(prev => prev.filter(i => i.id !== id))
    if (editing?.id === id) {
      setShowForm(false)
      setEditing(undefined)
    }
  }

  const handleSubmit = (data: Omit<Invoice, 'id'> & { id?: string }) => {
    if (data.id) {
      // actualizar
      setInvoices(prev =>
        prev.map(i => (i.id === data.id ? { ...(i as Invoice), ...data } : i))
      )
    } else {
      // nuevo
      const newInv: Invoice = { ...data, id: `F${Date.now()}` }
      setInvoices(prev => [...prev, newInv])
    }
    setShowForm(false)
    setEditing(undefined)
  }

  return (
    <>
      <PageLayout title="CourierSync - Gestión de Facturas" backLink="/dashboard">
        <div className="flex justify-end mb-4">
          <Button onClick={handleNew} className='cursor-pointer'>+ Nueva Factura</Button>
        </div>

        <InvoiceTable
          invoices={invoices}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {showForm && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white mb-3">
              {editing ? 'Editar Factura' : 'Registrar Factura'}
            </h3>
            <InvoiceForm initialData={editing} onSubmit={handleSubmit} />
          </div>
        )}
      </PageLayout>
    </>
  )
}
