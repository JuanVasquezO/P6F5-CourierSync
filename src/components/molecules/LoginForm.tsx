// src/components/molecules/LoginForm.tsx
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function LoginForm() {
  return (
    <form>
      <Input id="email" label="Correo Electrónico" type="email" />
      <Input id="password" label="Contraseña" type="password" />
      <Button text="Entrar" />
    </form>
  );
}