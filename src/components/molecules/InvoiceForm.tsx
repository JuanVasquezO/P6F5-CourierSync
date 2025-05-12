import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/CrudInput";
import Select from "@/components/atoms/CrudSelect";
import Button from "@/components/atoms/CrudButton";


export default function PaymentForm() {
  return (
<form className="bg-gradient p-8 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.9)] w-[90%] mx-auto">
      <Label text="Cliente" />
      <Input type="text" required />

      <Label text="ID del envío" />
      <Input type="text" required />
      
      
      <Label text="Fecha de Emisíon" />
      <Input type="date" required />
      
      
      <Label text="Monto" />
      <Input type="number" required />

      

    <Label text="Estado" />
      <Select options={["PENDIENTE", "PAGADO"]} />

      <Button type="submit" text="Registrar Pago" className="bg-blue-600 w-full mt-2" />
    </form>
  );
}