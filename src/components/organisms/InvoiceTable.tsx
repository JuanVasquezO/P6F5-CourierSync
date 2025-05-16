import Button from "@/components/atoms/CrudButton";
import { useRouter } from 'next/router';

export default function InvoiceTable() {
  const router = useRouter();
  return (
    <div className="p-8 text-white w-[95%] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#0984e3]">Listado de Facturas</h2>
      <Button type="submit" text="+ Nueva Factura" className="bg-green-600 text-white my-4 cursor-pointer"/>
      <table className="w-full text-white border-collapse">
        <thead>
          <tr className="bg-[#0984e3]">
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Cliente</th>
            <th className="p-4 text-left">Envío</th>
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
            <td className="p-4">#ENV1234</td>
            <td className="p-4">2025-05-05</td>
            <td className="p-4">$120.000</td>
            <td className="p-4">Pendiente</td>
            <td className="p-4">
              <Button text="Editar" className="bg-blue-400 text-white mr-2 cursor-pointer"/>
              <Button text="Eliminar" className="bg-red-600 text-white cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
