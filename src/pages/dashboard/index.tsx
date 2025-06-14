// src/pages/dashboard/index.tsx
import PageLayout from '@/components/templates/PageLayout'
import Navbar from '@/components/molecules/DashboardNavbar'
import DashboardGrid from '@/components/organisms/DashboardGrid'

export default function DashboardPage() {
  return (
    <>
      <PageLayout title="CourierSync – Dashboard Financiero" backLink="/">
        {/* aquí va tu navbar lateral o de pestañas */}
        <Navbar />

        <div className="p-6">
          {/* el contenido principal del dashboard */}
          <DashboardGrid />
        </div>
      </PageLayout>
    </>
  )
}
