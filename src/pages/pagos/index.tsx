import PageLayout from "@/components/templates/PageLayout";
import PaymentTable from "@/components/organisms/PaymentTable";
import PaymentForm from "@/components/molecules/PaymentForm";

export default function PagosPage() {
  return (
    <PageLayout title="CourierSync - Gestión de Pagos">
      <PaymentTable />
      <PaymentForm />
    </PageLayout>
  );
}
