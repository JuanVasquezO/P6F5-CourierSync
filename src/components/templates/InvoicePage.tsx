// src/pages/InvoicePage.tsx
import React, { useState } from 'react';
import InvoiceTable, { Invoice } from '@/components/organisms/InvoiceTable';
import InvoiceForm from '@/components/molecules/InvoiceForm';

const InvoicePage = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | undefined>(undefined);

  const handleEdit = (invoice: Invoice) => {
    setEditingInvoice(invoice);
  };

  const handleDelete = (id: string) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
    if (editingInvoice?.id === id) setEditingInvoice(undefined); // Limpia el form si se elimina la editada
  };

  const handleSubmit = (data: Omit<Invoice, 'id'> & { id?: string }) => {
    if (data.id) {
      // Actualizar factura
      setInvoices((prev) =>
        prev.map((inv) => (inv.id === data.id ? { ...data, id: data.id } : inv))
      );
    } else {
      // Crear nueva factura
      const newInvoice: Invoice = {
        ...data,
        id: Date.now().toString(), // o usa un uuid si prefieres
      };
      setInvoices((prev) => [...prev, newInvoice]);
    }
    setEditingInvoice(undefined); // Limpiar el formulario tras guardar
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Listado de Facturas</h2>
      <InvoiceTable invoices={invoices} onEdit={handleEdit} onDelete={handleDelete} />

      <h2 className="text-xl font-bold mt-8 mb-4">
        {editingInvoice ? 'Editar Factura' : 'Crear Factura'}
      </h2>
      <InvoiceForm initialData={editingInvoice} onSubmit={handleSubmit} />
    </div>
  );
};

export default InvoicePage;
