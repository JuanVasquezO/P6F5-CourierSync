import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Select from '../atoms/Select';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const roles = [
    { value: 'USER', label: 'Analista Financiero' },
    { value: 'ADMIN', label: 'Administrador' },
    { value: 'AUDITOR', label: 'Auditor' },
  ];

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    setError('');
    setSuccess('');

    // DEBUG: Ver exactamente qué valores tenemos
    console.log('🔍 DEBUGGING - Estados al momento del submit:');
    console.log('firstName:', `"${firstName}"`, 'length:', firstName.length);
    console.log('lastName:', `"${lastName}"`, 'length:', lastName.length);
    console.log('email:', `"${email}"`, 'length:', email.length);
    console.log('password:', `"${password}"`, 'length:', password.length);
    console.log('role:', `"${role}"`, 'length:', role.length);

    // Validación básica
    if (!firstName.trim()) {
      console.log('❌ Falló validación firstName');
      setError('El nombre es requerido');
      return;
    }
    if (!email.trim()) {
      console.log('❌ Falló validación email');
      setError('El email es requerido');
      return;
    }
    if (!password.trim()) {
      console.log('❌ Falló validación password');
      setError('La contraseña es requerida');
      return;
    }
    if (!role) {
      console.log('❌ Falló validación role');
      setError('El rol es requerido');
      return;
    }

    console.log('✅ Todas las validaciones pasaron');

    const payload = {
      name: firstName.trim(),
      lastName: lastName.trim() || 'NoLastName',
      email: email.trim(),
      password: password.trim(),
      role,
    };

    try {
      const res = await fetch('https://couriersync-billing-payments-api.onrender.com/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Error al registrar');
      }

      // Verificar si la respuesta es JSON o texto plano
      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        await res.json();
      } else {
        // Si es texto plano
        await res.text();
      }

      setSuccess('Usuario registrado correctamente');
      
      // Limpiar el formulario después del éxito
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setRole('');
      
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocurrió un error desconocido');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        id="firstName"
        label="Nombre"
        type="text"
        value={firstName}
        onChange={(e) => {
          console.log('🟢 firstName onChange:', e.target.value);
          setFirstName(e.target.value);
        }}
      />
      <Input
        id="lastName"
        label="Apellido"
        type="text"
        value={lastName}
        onChange={(e) => {
          console.log('🟢 lastName onChange:', e.target.value);
          setLastName(e.target.value);
        }}
      />
      <Input
        id="email"
        label="Correo Electrónico"
        type="email"
        value={email}
        onChange={(e) => {
          console.log('🟢 email onChange:', e.target.value);
          setEmail(e.target.value);
        }}
      />
      <Input
        id="password"
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => {
          console.log('🟢 password onChange:', e.target.value);
          setPassword(e.target.value);
        }}
      />
      <Select
        id="role"
        label="Rol"
        options={roles}
        value={role}
        onChange={(e) => {
          console.log('🟢 role onChange:', e.target.value);
          setRole(e.target.value);
        }}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      <Button type="submit">Registrarse</Button>
    </form>
  );
}