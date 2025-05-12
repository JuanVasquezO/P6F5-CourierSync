import React from 'react';
import InvoiceTable from '@/components/organisms/InvoiceTable';
import InvoiceForm from '@/components/molecules/InvoiceForm';

const InvoicePage = () => {
  return (
    <div className="p-4">
      <h2>Listado de Facturas</h2>
      <InvoiceTable />
      <h2>Crear/Editar Factura</h2>
      <InvoiceForm />
    </div>
  );
};

export default InvoicePage;
