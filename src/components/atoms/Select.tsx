// src/components/atoms/Select.tsx
export default function Select({ id, label, options, multiple = false }: { id: string, label: string, options: string[], multiple?: boolean }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        id={id}
        name={id}
        multiple={multiple}
        className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="text-sm">{option}</option>
        ))}
      </select>
    </div>
  );
}
