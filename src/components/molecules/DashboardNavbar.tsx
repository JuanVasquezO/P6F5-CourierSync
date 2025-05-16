// src/components/molecules/Navbar.tsx
import Link from "next/link";
export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-around p-4">
      {["Facturas", "Pagos", "Reportes", "Alertas"].map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="font-semibold hover:underline"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}