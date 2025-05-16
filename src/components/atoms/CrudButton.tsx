export default function CrudButton({ text, className, onClick, type = 'button' }: {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded px-4 py-2 font-semibold cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}