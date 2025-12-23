import { useState } from 'react';
import Header from './components/Header';
import ResourceList from './components/ResourceList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <section className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <h2 className="text-lg font-bold mb-4">Erişilebilir Kaynaklarda Ara</h2>
          <input 
            type="text" 
            placeholder="Ders, konu veya engel türü yazın..." 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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