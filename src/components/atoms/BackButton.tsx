import Link from "next/link";

interface BackButtonProps {
  to?: string;
  label?: string;
}

export default function BackButton({ to = "/dashboard", label = "← Volver" }: BackButtonProps) {
  return (
    <Link href={to}>
      <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition font-semibold shadow cursor-pointer">
        {label}
      </button>
    </Link>
  );
}
