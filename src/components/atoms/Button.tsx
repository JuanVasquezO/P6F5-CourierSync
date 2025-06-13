type ButtonProps = {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({ text, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
}