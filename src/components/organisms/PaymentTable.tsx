import React from 'react'
import Button from '@/components/atoms/Button'

export type Payment = {
  id: string
  manualInvoiceId: number
  amount: number
  paymentDate: string
  // Eliminamos newStatus porque ya no lo usamos
}

export type PaymentTableProps = {
  payments: Payment[]
  onEdit: (p: Payment) => void
  onDelete: (id: string) => void
}

export default function PaymentTable({
  payments,
  onEdit,
  onDelete,
}: PaymentTableProps) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-white">
        <thead>
          <tr className="bg-blue-500">
            {['ID', 'Factura Manual', 'Monto', 'Fecha', 'Estado', 'Acciones'].map((h) => (
              <th key={h} className="py-2 px-4">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id} className="border-b border-white/20">
              <td className="py-2 px-4 text-center">{p.id}</td>
              <td className="py-2 px-4 text-center">{p.manualInvoiceId}</td>
              <td className="py-2 px-4 text-center">${p.amount.toFixed(2)}</td>
              <td className="py-2 px-4 text-center">{p.paymentDate}</td>
              <td className="py-2 px-4 text-center text-green-400 font-semibold">Pagado</td>
              <td className="py-2 px-4 text-center">
                <div className="flex space-x-2 justify-center">
                  <Button
                    onClick={() => onEdit(p)}
                    className="bg-blue-400 hover:bg-blue-500 cursor-pointer"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => onDelete(p.id)}
                    className="bg-red-500 hover:bg-red-600 cursor-pointer"
                  >
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
          {payments.length === 0 && (
            <tr>
              <td colSpan={6} className="py-4 text-center text-gray-300">
                No hay pagos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
