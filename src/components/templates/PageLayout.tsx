export default function PageLayout({ title, children }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <header className="bg-[#0984e3] p-4 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>
      <main className="p-8">{children}</main>
    </div>
  );
}