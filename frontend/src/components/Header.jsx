export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-200">E</div>
          <span className="text-2xl font-black tracking-tighter text-slate-800 uppercase">Erişimim</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-semibold text-slate-600">
            <li className="hover:text-indigo-600 transition-colors"><a href="#">Keşfet</a></li>
            <li className="hover:text-indigo-600 transition-colors"><a href="#">Materyal Ekle</a></li>
            <li className="hover:text-indigo-600 transition-colors"><a href="#">Hakkımızda</a></li>
          </ul>
        </nav>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-800 transition shadow-xl shadow-slate-200">Giriş Yap</button>
      </div>
    </header>
  );
}