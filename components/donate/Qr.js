export default function QRISSection({
  qrisData,
  timer,
  checkingPayment,
  paymentCheckCount,
  onReset,
  onConfirmManual,
  formatTimer
}) {
  return (
    <section className="bg-zinc-900 border border-white border-opacity-5 rounded-3xl p-6 md:p-8 mb-12 shadow-2xl">
      <div className="text-center mb-6">
        <div className="inline-block p-3 rounded-full bg-green-500 bg-opacity-20 mb-3">
          <i className="fas fa-qrcode text-3xl text-green-400"></i>
        </div>
        <h4 className="text-lg font-bold mb-2">CHECK OTOMATIS</h4>
        <p className="text-sm text-gray-400">scan qr code dibawah menggunakan aplikasi e-wallet anda</p>
        
        {checkingPayment && (
          <div className="mt-4 flex items-center justify-center gap-2 text-blue-400 text-sm">
            <div className="animate-spin">
              <i className="fas fa-sync-alt"></i>
            </div>
            <span> (check #{paymentCheckCount})</span>
          </div>
        )}
      </div>

      <div className="bg-white p-5 rounded-2xl mb-6 text-center">
        <img src={qrisData.imageqris.url} alt="QRIS" className="max-w-[250px] mx-auto rounded-xl" />
        <div className="mt-4">
          <div className="text-2xl font-bold text-black">
            Rp {qrisData.jumlah.toLocaleString('id-ID')}
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="text-sm text-gray-400 mb-2">TIMEOUT</div>
        <div className="text-2xl font-bold text-yellow-400">{formatTimer()}</div>
        <div className="text-xs text-gray-600 mt-1">QRIS will expire</div>
      </div>

      <div className="bg-blue-500 bg-opacity-10 border border-blue-400 border-opacity-30 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
         { /* <i className="fas fa-info-circle text-blue-400 mt-1"></i> */ }
          <div className="text-sm text-blue-300">
            <p className="text-blue-400">sistem akan otomatis mengkonfirmasi donasi anda</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={onReset} className="flex-1 bg-white bg-opacity-5 text-white py-3 rounded-xl border border-white border-opacity-10 hover:bg-opacity-10 transition-all">
          Batal
        </button>
      </div>
    </section>
  );
}