export default function HistoryModal({
  show,
  donations,
  historyFilter,
  onClose,
  onFilterChange
}) {
  if (!show) return null;

  const filteredDonations = historyFilter === 'all'
    ? donations
    : donations.filter(d => d.status === historyFilter);

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-white border-opacity-5 rounded-3xl p-6 md:p-8 w-full max-w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">DONATION HISTORY</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="mb-6 flex gap-2">
          {['all', 'pending', 'success'].map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                historyFilter === filter
                  ? 'bg-yellow-400 bg-opacity-20 text-yellow-400 border border-yellow-400'
                  : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter === 'all' ? 'All' : filter === 'pending' ? 'Pending' : 'Success'}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredDonations.length > 0 ? (
            filteredDonations.map((d, i) => (
              <div key={i} className="p-4 rounded-xl border-l-4 border-yellow-400 bg-yellow-400 bg-opacity-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm font-bold text-white">{d.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{d.date}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 bg-opacity-20 text-green-400">
                    {d.status}
                  </span>
                </div>
                {d.message && (
                  <div className="text-xs text-gray-400 italic mb-2">"{d.message}"</div>
                )}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-800">
                  <div className="text-xs text-gray-500">ID: {d.id}</div>
                  <div className="text-yellow-400 font-bold">Rp {d.amount.toLocaleString('id-ID')}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <i className="fas fa-inbox text-4xl text-gray-700 mb-4"></i>
              <p className="text-gray-500">no donations yet 😅</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}