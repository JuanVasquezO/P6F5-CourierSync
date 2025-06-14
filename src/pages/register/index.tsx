// src/app/pages/register/index.tsx
import Head from 'next/head'
import RegisterCard from '@/components/organisms/RegisterCard'

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>CourierSync - Registro</title>
      </Head>
      <main
        className={`
          min-h-screen flex items-center justify-center
          bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]
          px-4
        `}
      >
        <div className="w-full max-w-md">
          <RegisterCard />
        </div>
      </main>
    </>
  )
}
