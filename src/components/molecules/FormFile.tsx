import CrudInput from '@/components/atoms/CrudInput';

// FormField.tsx
type FormFieldProps = {
  label: string;
  id?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  error?: string; // Para mostrar errores si existen
};

export default function FormField({
  label,
  error,
  ...props
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <CrudInput {...props} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Mostrar error si existe */}
    </div>
  );
}
