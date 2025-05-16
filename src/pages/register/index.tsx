// src/app/register/page.tsx
import RegisterCard from '../../components/organisms/RegisterCard';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Registro | CourierSync</title>
      </Head>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gradient">
          <RegisterCard />
        </div>
      </main>
    </>
    
  );
}
