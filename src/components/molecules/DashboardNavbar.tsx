// src/components/molecules/Navbar.tsx
export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-around p-4">
      {["Facturas", "Pagos", "Reportes", "Alertas"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="font-semibold hover:underline">
          {item}
        </a>
      ))}
    </nav>
  );
}
