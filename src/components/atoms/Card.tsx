// src/components/atoms/Card.tsx
export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/10 rounded-lg p-6 shadow text-white">
      <h2 className="text-xl font-semibold text-blue-300 mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
