import { useState } from 'react';
import Header from './components/Header';
import ResourceList from './components/ResourceList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pb-12">
       <section className="py-16 text-center">
  <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
    Eğitimde Engel <span className="text-indigo-600 italic">Tanımıyoruz.</span>
  </h1>
  <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 font-medium">
    Engelli bireyler için binlerce dijital eğitim materyalini bir araya getiren Türkiye'nin ilk erişilebilir kütüphanesi.
  </p>
  <div className="max-w-3xl mx-auto relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
    <input 
      type="text" 
      placeholder="Ders, konu veya materyal türü arayın..." 
      className="relative w-full p-6 bg-white border-none rounded-2xl shadow-2xl text-lg focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
</section>
        
        <ResourceList searchTerm={searchTerm} />
      </main>
      <footer className="text-center py-10 text-gray-400 text-sm border-t mt-10">
        © 2025 Erişimim - Sosyal Sorumluluk Projesi Ara Rapor Hazırlığı
      </footer>
    </div>
  );
}

export default App;