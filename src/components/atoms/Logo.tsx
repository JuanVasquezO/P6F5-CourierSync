
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="block mx-auto mb-4 w-16">
      <Image
        src="/assets/logo.png" // Ruta a la imagen en la carpeta "public"
        alt="CourierSync Logo"
        width={64} // Especifica el ancho de la imagen
        height={64} // Especifica la altura de la imagen
      />
    </div>
  );
}
