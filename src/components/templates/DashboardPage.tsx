// src/app/dashboard/page.tsx
import Header from "@/components/atoms/DashboardHeader";
import Navbar from "@/components/molecules/DashboardNavbar";
import DashboardGrid from "@/components/organisms/DashboardGrid";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient">
      <Header title="Dashboard" backLink="/" />
      <Navbar />
      <main className="p-6">
        <DashboardGrid />
      </main>
    </div>
  );
}
