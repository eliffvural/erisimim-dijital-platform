export default function Header() {
  return (
    <header className="bg-indigo-700 text-white shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">ERİŞİMİM</h1>
        <nav aria-label="Ana Menü">
          <ul className="flex gap-4">
            <li><a href="#" className="hover:underline">Anasayfa</a></li>
            <li><a href="#" className="hover:underline">Eğitimler</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}