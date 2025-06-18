import React, { useEffect, useState, useContext } from 'react';
import PageLayout from '@/components/templates/PageLayout';
import Button from '@/components/atoms/Button';
import InvoiceTable, { Invoice } from '@/components/organisms/InvoiceTable';
import InvoiceForm from '@/components/molecules/InvoiceForm';
import { AuthContext } from '@/context/AuthContext';

export default function FacturasPage() {
  const { token } = useContext(AuthContext);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Invoice | undefined>(undefined);

  const fetchInvoices = async () => {
    try {
      const res = await fetch('/api/manual-invoices?pageable.page=0&pageable.size=50&assembler.forceFirstAndLastRels=true', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      setInvoices(data._embedded?.manualInvoiceDTOList || []);
    } catch (error) {
      console.error('Error al cargar facturas', error);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handleNew = () => {
    setEditing(undefined);
    setShowForm(true);
  };

  const handleEdit = (inv: Invoice) => {
    setEditing(inv);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    console.log(`Eliminar factura con ID: ${id} (no implementado todavía)`);
    alert('Eliminar no implementado (se requiere endpoint DELETE)');
  };

  const handleSubmit = async (data: Partial<Invoice> & { id?: number }) => {
    try {
      const res = await fetch('/api/manual-invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          clientName: data.clientName,
          shipmentReferenceId: data.shipmentReferenceId,
          emissionDate: data.emissionDate,
          amount: Number(data.amount),
        })
      });

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(`Error HTTP: ${res.status}\n${errorData}`);
      }

      setShowForm(false);
      setEditing(undefined);
      fetchInvoices(); // Recargar lista
    } catch (error) {
      console.error('Error al enviar factura', error);
    }
  };

  return (
    <PageLayout title="CourierSync - Gestión de Facturas" backLink="/dashboard">
      <div className="flex justify-end mb-4">
        <Button onClick={handleNew} className="cursor-pointer">+ Nueva Factura</Button>
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
  );
}
