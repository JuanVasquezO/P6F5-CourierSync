// src/components/organisms/PaymentTable.tsx
import React from 'react'
import Button from '@/components/atoms/Button'

export type Payment = {
  id: string
  cliente: string
  envio: string
  fecha: string
  monto: string
  estado: 'PENDIENTE' | 'PAGADO'
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
            {['ID', 'Cliente', 'Envío', 'Fecha', 'Monto', 'Estado', 'Acciones'].map((h) => (
              <th key={h} className="py-2 px-4">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id} className="border-b border-white/20">
              <td className="py-2 px-4 text-center">{p.id}</td>
              <td className="py-2 px-4 text-center">{p.cliente}</td>
              <td className="py-2 px-4 text-center">{p.envio}</td>
              <td className="py-2 px-4 text-center">{p.fecha}</td>
              <td className="py-2 px-4 text-center">{p.monto}</td>
              <td className="py-2 px-4 text-center">{p.estado}</td>
              <td className="py-2 px-4 text-center">
                <div className="flex space-x-2">
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
              <td colSpan={7} className="py-4 text-center text-gray-300">
                No hay pagos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
