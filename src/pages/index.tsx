import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/usuarios');
  }, [router]);

  return null; // opcionalmente muestra un loader aquí
}
