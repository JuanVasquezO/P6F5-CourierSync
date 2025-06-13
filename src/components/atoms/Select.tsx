// src/components/atoms/Select.tsx
interface SelectProps {
  id: string;
  label: string;
  options: { label: string; value: string }[]; // Mejora: clave/valor
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  multiple?: boolean;
}

export default function Select({ id, label, options, value, onChange, multiple = false }: SelectProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        multiple={multiple}
        className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>Selecciona una opción</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
