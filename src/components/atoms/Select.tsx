// src/components/atoms/Select.tsx
interface SelectProps {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  className?: string;
  labelClassName?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  multiple?: boolean;
}

export default function Select({ id, label, options, value, onChange, multiple = false, labelClassName = 'text-white' }: SelectProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className={`block text-sm font-medium ${labelClassName}`}>{label}</label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        multiple={multiple}
        className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none 
        focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white placeholder-gray-400 shadow-sm transition-colors duration-150"
      >
        <option value="" disabled>Selecciona una opción</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
