export default function StatsSection({ stats }) {
  return (
    <section className="mb-12 md:mb-16">
      <div className="text-center item-center grid grid-cols-2 gap-2">
        <div className="bg-white bg-opacity-5 border border-white border-opacity-5 rounded-2xl p-5 text-center hover:bg-opacity-10 transition-all">
          <div className="text-2xl font-bold text-yellow-400">{stats.totalDonors}</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">DONATUR</div>
        </div>
        <div className="bg-white bg-opacity-5 border border-white border-opacity-5 rounded-2xl p-5 text-center hover:bg-opacity-10 transition-all">
          <div className="text-2xl font-bold text-yellow-400">Rp {stats.totalAmount}</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">COLLECTED</div>
        </div>
      </div>
    </section>
  );
}