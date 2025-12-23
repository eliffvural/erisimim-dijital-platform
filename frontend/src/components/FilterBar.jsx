
export default function FilterBar({ onSearch }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <h2 className="text-lg font-bold mb-4 text-gray-700">İhtiyacınıza Uygun Kaynağı Bulun</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <label htmlFor="search" className="sr-only">Eğitim materyali ara</label>
          <input
            id="search"
            type="text"
            placeholder="Örn: İşaret dili, sesli kitap, lise matematik..."
            className="w-full px-4 py-3 border-2 border-gray-100 rounded-lg focus:border-indigo-500 outline-none transition-colors"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-500 italic">
        * Erişilebilirlik için ekran okuyucu desteği aktiftir.
      </p>
    </div>
  );
}