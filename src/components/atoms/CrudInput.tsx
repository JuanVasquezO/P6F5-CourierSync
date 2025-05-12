export default function CrudInput({ type, placeholder, value, onChange, required }: {
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full mb-4 p-2 rounded border border-gray-300"
    />
  );
}
