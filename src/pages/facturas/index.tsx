import PageLayout from "@/components/templates/PageLayout";
import InvoiceTable from "@/components/organisms/InvoiceTable";
import InvoiceForm from "@/components/molecules/InvoiceForm";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Facturas | CourierSync</title>
      </Head>
      <main>
      <PageLayout title="CourierSync - Gestión de Facturas">
        <InvoiceTable />
        <InvoiceForm />
      </PageLayout>
      </main>
    </>
    
  );
}
