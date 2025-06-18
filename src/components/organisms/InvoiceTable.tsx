// src/components/organisms/InvoiceTable.tsx
import React from 'react'
import Button from '@/components/atoms/Button'

export type Invoice = {
  id: number;
  clientName: string;
  shipmentReferenceId: string;
  emissionDate: string;
  amount: number;
  paymentStatus?: 'PAGADO' | 'PENDIENTE';
}

export type InvoiceTableProps = {
  invoices: Invoice[]
  onEdit: (inv: Invoice) => void
  onDelete: (id: number) => void
}

export default function InvoiceTable({
  invoices,
  onEdit,
  onDelete,
}: InvoiceTableProps) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-white">
        <thead>
          <tr className="bg-blue-500">
            {['ID', 'Cliente', 'Envío', 'Fecha', 'Monto', 'Estado', 'Acciones'].map((h) => (
              <th key={h} className="py-2 px-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {invoices.length === 0 && (
            <tr>
              <td colSpan={7} className="py-4 text-center text-gray-300">
                No hay facturas.
              </td>
            </tr>
          )}
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-b border-white/20">
              <td className="py-2 px-4 text-center">{inv.id}</td>
              <td className="py-2 px-4 text-center">{inv.clientName}</td>
              <td className="py-2 px-4 text-center">{inv.shipmentReferenceId}</td>
              <td className="py-2 px-4 text-center">{inv.emissionDate}</td>
              <td className="py-2 px-4 text-center">{inv.amount}</td>
              <td className="py-2 px-4 text-center">{inv.paymentStatus || 'PENDIENTE'}</td>
              <td className="py-2 px-4">
                <div className="flex space-x-2">
                  <Button
                    onClick={() => onEdit(inv)}
                    className="bg-blue-400 hover:bg-blue-500 cursor-pointer"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => onDelete(inv.id)}
                    className="bg-red-500 hover:bg-red-600 cursor-pointer"
                  >
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
