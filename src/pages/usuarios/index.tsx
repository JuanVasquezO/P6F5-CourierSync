
// src/components/organisms/LoginCard.tsx
import LoginCard from "@/components/organisms/LoginCard";
import Head from 'next/head';

export default function index() {
  return (
    <>
    <Head>
        <title>Login | CourierSync</title>
      </Head>
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gradient">
      <LoginCard />
    </div></main>
    </>
  );
  
}
