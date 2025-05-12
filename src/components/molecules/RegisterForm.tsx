// src/components/molecules/RegisterForm.tsx
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Select from '../atoms/Select';

export default function RegisterForm() {
  const roles = ["Analista Financiero", "Administrador", "Auditor"];
  

  return (
    <form>
      <Input id="name" label="Nombre Completo" type="text" />
      <Input id="email" label="Correo Electrónico" type="email" />
      <Input id="password" label="Contraseña" type="password" />
      <Select id="role" label="Rol" options={roles} />
      
      <Button text="Registrarse" />
    </form>
  );
}
