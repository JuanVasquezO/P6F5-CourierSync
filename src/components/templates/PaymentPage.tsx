import React from 'react';
import PaymentTable from '../organisms/PaymentTable';
import PaymentForm from '../molecules/PaymentForm';

const PaymentPage = () => {
  return (
    <div className="p-4">
      <h2>Listado de Pagos</h2>
      <PaymentTable />
      <h2>Registrar Nuevo Pago</h2>
      <PaymentForm />
    </div>
  );
};

export default PaymentPage;
