// src/pages/usuarios/index.tsx
import Head from 'next/head'
import LoginCard from '@/components/organisms/LoginCard'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>CourierSync - Iniciar Sesión</title>
      </Head>
      <main
        className={`
          min-h-screen flex items-center justify-center
          bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]
          px-4
        `}
      >
        <div className="w-full max-w-md">
          <LoginCard />
        </div>
      </main>
    </>
  )
}

