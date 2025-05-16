import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white text-center w-full sm:w-auto">
        CourierSync - Dashboard Financiero
      </h1>

      <div className="absolute right-4">
        <Link href="/usuarios">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow cursor-pointer transition">
            Cerrar sesión
          </button>
        </Link>
      </div>
    </header>
  );
}
