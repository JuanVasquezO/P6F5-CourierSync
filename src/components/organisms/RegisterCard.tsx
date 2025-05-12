// src/components/organisms/RegisterCard.tsx
import RegisterForm from '../molecules/RegisterForm';
import Logo from '../atoms/Logo';

export default function RegisterCard() {
  return (
    
    <div className="bg-white p-6 rounded-lg shadow-md w-80 text-gray-800">
      <Logo />
      <h2 className="text-center text-xl font-semibold text-blue-500 mb-4">CourierSync - Registro</h2>
      <RegisterForm />
      <p className="text-center mt-4 text-sm">
        ¿Ya tienes cuenta? <a href="#" className="text-blue-500">Inicia sesión</a>
      </p>
    </div>
  );
}
