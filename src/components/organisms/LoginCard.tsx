// src/components/organisms/LoginCard.tsx
import Logo from '../atoms/Logo';
import LoginForm from '../molecules/LoginForm';
import Link from 'next/link';

export default function LoginCard() {
  return (
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md text-gray-800">
      <Logo />
      <h2 className="text-center text-xl font-bold text-blue-500 mb-6">CourierSync - Iniciar Sesión</h2>
      <LoginForm />
       <p className="text-center mt-4 text-sm">
      ¿No tienes cuenta?{' '}
      <Link href="/register" className="text-blue-500 font-semibold">
        Regístrate
      </Link>
    </p>
    </div>
  );
}
