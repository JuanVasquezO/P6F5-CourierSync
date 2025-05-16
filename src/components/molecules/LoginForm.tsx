// src/components/molecules/LoginForm.tsx
import { useRouter } from 'next/router';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input id="email" label="Correo Electrónico" type="email" />
      <Input id="password" label="Contraseña" type="password" />
      <Button text="Entrar"/>
    </form>
  );
}