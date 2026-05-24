export default function RecentDonations({ donations }) {
  const successDonations = donations.filter(d => d.status === 'success').slice(0, 5);

  return (
    <section className="mb-12 md:mb-16">
      <h3 className="text-sm font-black text-gray-800 uppercase tracking-[0.4em] mb-5">latest donation</h3>
      <div className="space-y-2">
        {successDonations.length > 0 ? (
          successDonations.map((d, i) => (
            <div key={i} className="bg-white bg-opacity-5 border border-white border-opacity-5 rounded-2xl p-4 flex items-center justify-between hover:bg-opacity-10 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400 bg-opacity-10 flex items-center justify-center">
                  <i className="fas fa-user text-yellow-400"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{d.name}</div>
                  <div className="text-xs text-gray-500">{d.message || 'no mesej'}</div>
                </div>
              </div>
              <div className="text-yellow-400 font-bold text-sm">
                Rp {d.amount.toLocaleString('id-ID')}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white bg-opacity-5 border border-white border-opacity-5 rounded-2xl p-4 text-center text-gray-600 text-sm">
            no donations yet 😿
          </div>
        )}
      </div>
    </section>
  );
}