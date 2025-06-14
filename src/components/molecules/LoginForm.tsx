// src/components/molecules/LoginForm.tsx
'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { AuthContext } from '@/context/AuthContext';

export default function LoginForm() {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  // Estado local para inputs y errores
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validación básica
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('https://couriersync-billing-payments-api.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError('Credenciales incorrectas');
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      if (data.token) {
        login(data.token); // Guarda token en contexto y localStorage
        router.push('/dashboard');
      } else {
        setError('No se recibió un token válido');
      }
    } catch (err) {
      console.error(err);
      setError('Error de conexión con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        id="email"
        label="Correo Electrónico"
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Input
        id="password"
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit">
        {isLoading ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  );
}