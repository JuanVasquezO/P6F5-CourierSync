// src/components/organisms/DashboardGrid.tsx
import Card from "../atoms/Card";

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <Card title="Ingresos Totales">$120,000</Card>
      <Card title="Pagos Pendientes">$25,000</Card>
      <Card title="Facturas por Vencer">8 facturas</Card>
      <Card title="Proyecciones Mensuales">$145,000 estimados</Card>
    </div>
  );
}
