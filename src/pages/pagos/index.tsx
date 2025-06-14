// src/pages/pagos/index.tsx
import React, { useState } from 'react'
import PageLayout from '@/components/templates/PageLayout'
import Button from '@/components/atoms/Button'
import PaymentTable, { Payment } from '@/components/organisms/PaymentTable'
import PaymentForm from '@/components/molecules/PaymentForm'

export default function PagosPage() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<Payment | undefined>(undefined)

  const handleNew = () => {
    setEditing(undefined)
    setShowForm(true)
  }

  const handleEdit = (p: Payment) => {
    setEditing(p)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
  const ok = window.confirm('¿Estás seguro de que deseas eliminar este pago?')
  if (!ok) return
  setPayments((prev) => prev.filter((p) => p.id !== id))
  if (editing?.id === id) {
    setShowForm(false)
    setEditing(undefined)
    }
  }

  const handleSubmit = (data: Omit<Payment, 'id'> & { id?: string }) => {
    if (data.id) {
      setPayments((prev) =>
        prev.map((p) => (p.id === data.id ? { ...(p as Payment), ...data } : p))
      )
    } else {
      const newPayment: Payment = {
        ...data,
        id: `P${Date.now()}`,
      }
      setPayments((prev) => [...prev, newPayment])
    }
    setShowForm(false)
    setEditing(undefined)
  }

  return (
    <>
      <PageLayout title="CourierSync - Gestión de Pagos" backLink="/dashboard">
        {/*botón +Nuevo */}
        <div className="flex justify-end mb-4">
          <Button onClick={handleNew} className='cursor-pointer'>+ Nuevo Pago</Button>
        </div>

        {/*lista de pagos */}
        <PaymentTable
          payments={payments}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* formulario (solo si showForm)*/}
        {showForm && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-white mb-3">
              {editing ? 'Editar Pago' : 'Registrar Pago'}
            </h3>
            <PaymentForm initialData={editing} onSubmit={handleSubmit} />
          </div>
        )}
      </PageLayout>
    </>
  )
}
