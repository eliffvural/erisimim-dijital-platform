import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ResourceList({ searchTerm }) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // API'den verileri çek
    axios.get('http://localhost:5000/api/resources', {
      params: { search: searchTerm }
    })
    .then(res => setResources(res.data))
    .catch(err => console.error("Hata:", err));
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map(item => (
       // Kart yapısı için item.map içindeki return kısmı:
<article key={item.id} className="group bg-white rounded-3xl p-2 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300">
  <div className="aspect-video bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
    <div className="absolute top-4 left-4 z-10">
      <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-700 shadow-sm border border-indigo-50">
        {item.engel_turu}
      </span>
    </div>
    {/* Buraya ileride resim gelecek, şimdilik placeholder renk */}
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-slate-200 group-hover:scale-110 transition-transform duration-500"></div>
  </div>
  
  <div className="px-4 pb-6">
    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">{item.description}</p>
    
    <div className="flex items-center justify-between border-t border-slate-50 pt-4">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.ders_konusu}</span>
      <a href={item.url} target="_blank" className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="arrow-right" />
        </svg>
      </a>
    </div>
  </div>
</article>
      ))}
    </div>
  );
}