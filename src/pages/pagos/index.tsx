import PageLayout from "@/components/templates/PageLayout";
import PaymentTable from "@/components/organisms/PaymentTable";
import PaymentForm from "@/components/molecules/PaymentForm";
import Head from "next/head";

export default function PagosPage() {
  return (
    <>
      <Head>
        <title>Pagos | CourierSync</title>
      </Head>
      <main>
      <PageLayout title="CourierSync - Gestión de Pagos">
        <PaymentTable />
        <PaymentForm />
        </PageLayout>
      </main>
    </>
    
  );
}
