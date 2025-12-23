import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ResourceList({ searchTerm }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/resources', {
          params: { search: searchTerm }
        });
        setResources(res.data);
      } catch (err) {
        console.error("Veri çekilemedi:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchTerm]);

  if (loading) return <p className="text-center p-10">Yükleniyor...</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {resources.map(res => (
        <div key={res.id} className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-indigo-800 mb-2">{res.title}</h3>
          <p className="text-gray-600 mb-4">{res.description}</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{res.engel_turu}</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{res.ders_konusu}</span>
          </div>
          <a href={res.url} target="_blank" className="inline-block mt-4 text-indigo-600 underline">Kaynağa Git</a>
        </div>
      ))}
      {resources.length === 0 && <p className="col-span-full text-center text-gray-500">Aradığınız kriterlere uygun kaynak bulunamadı.</p>}
    </div>
  );
}