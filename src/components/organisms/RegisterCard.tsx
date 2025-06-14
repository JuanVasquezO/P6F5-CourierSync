// src/components/organisms/RegisterCard.tsx
import RegisterForm from '../molecules/RegisterForm';
import Logo from '../atoms/Logo';
import Link from 'next/link';

export default function RegisterCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md text-gray-800">
      <Logo />
      <h2 className="text-center text-xl font-semibold text-blue-500 mb-3">
        CourierSync - Registro
      </h2>
      <RegisterForm />
      <p className="text-center mt-3 text-sm">
        ¿Ya tienes cuenta?{' '}
        <Link href="/usuarios" className="text-blue-500">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
