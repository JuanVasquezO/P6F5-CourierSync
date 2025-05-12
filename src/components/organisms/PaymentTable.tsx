import Button from "@/components/atoms/CrudButton";

export default function InvoiceTable() {
  return (
    <div className="p-8 text-white w-[95%] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#0984e3]">Listado de Facturas</h2>
      <Button text="+ Nueva Factura" className="bg-green-600 text-white my-4" />
      <table className="w-full text-white border-collapse">
        <thead>
          <tr className="bg-[#0984e3]">
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Cliente</th>
            <th className="p-4 text-left">Fecha</th>
            <th className="p-4 text-left">Monto</th>
            <th className="p-4 text-left">Estado</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-transparent border-b border-white/10">
            <td className="p-4">001</td>
            <td className="p-4">Juan Pérez</td>
            <td className="p-4">2025-05-05</td>
            <td className="p-4">$120.000</td>
            <td className="p-4">Pendiente</td>
            <td className="p-4">
              <Button text="Editar" className="bg-blue-400 text-white mr-2" />
              <Button text="Eliminar" className="bg-red-600 text-white" />
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}