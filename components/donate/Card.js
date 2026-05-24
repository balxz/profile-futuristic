export default function DonationForm({
  amounts,
  selectedAmount,
  customAmount,
  donorName,
  donorMessage,
  mathChallenge,
  userAnswer,
  challengeVerified,
  loading,
  onSelectAmount,
  onCustomAmountChange,
  onDonorNameChange,
  onDonorMessageChange,
  onUserAnswerChange,
  onGenerateMathChallenge,
  onGenerateQRIS
}) {
  return (
    <section className="bg-zinc-900 border border-white border-opacity-5 rounded-3xl p-6 md:p-8 mb-12 shadow-2xl">
      <h3 className="text-2xl font-bold mb-6">── SELECT DONATION AMOUNT</h3>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {amounts.map(amount => (
          <button
            key={amount}
            className={`p-3 rounded-xl border transition-all ${
              selectedAmount === amount
                ? 'bg-yellow-400 bg-opacity-15 border-yellow-400 border-opacity-50 text-black font-bold'
                : 'bg-white bg-opacity-5 border-white border-opacity-5 text-white hover:bg-opacity-10'
            }`}
            onClick={() => onSelectAmount(amount)}
          >
            Rp {(amount / 1000).toFixed(0)}K
          </button>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">── se ikhlas nya </label>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => onCustomAmountChange(e.target.value)}
          placeholder="1000"
          min="1000"
          className="w-full bg-white bg-opacity-5 border border-white border-opacity-5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:border-opacity-50"
        />
        <div className="text-xs text-gray-600 mt-1">*minimum Rp 1.000</div>
      </div>

      <div className="mb-6 p-4 rounded-xl text-center bg-yellow-400 bg-opacity-5 border border-yellow-400 border-opacity-20">
        <div className="text-sm text-gray-400 mb-1">TOTAL DONATION</div>
        <div className="text-3xl font-bold text-yellow-400">
          Rp {selectedAmount.toLocaleString('id-ID')}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">name (opsional)</label>
        <input
          type="text"
          value={donorName}
          onChange={(e) => onDonorNameChange(e.target.value)}
          placeholder="someone"
          className="w-full bg-white bg-opacity-5 border border-white border-opacity-5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:border-opacity-50"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">message (opsional)</label>
        <textarea
          rows="3"
          value={donorMessage}
          onChange={(e) => onDonorMessageChange(e.target.value)}
          placeholder="akgay"
          className="w-full bg-white bg-opacity-5 border border-white border-opacity-5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:border-opacity-50"
        />
      </div>

      <div className="mb-6 p-5 rounded-xl bg-white bg-opacity-5 border border-white border-opacity-10">
        <div className="text-center mb-4">
          <div className="text-sm text-gray-400 mb-3">Security Verification</div>
        </div>
        
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="text-2xl font-bold text-white bg-gray-800 px-5 py-3 rounded-xl">
            {mathChallenge.num1}
          </div>
          <div className="text-3xl text-yellow-400 font-bold">+</div>
          <div className="text-2xl font-bold text-white bg-gray-800 px-5 py-3 rounded-xl">
            {mathChallenge.num2}
          </div>
          <div className="text-3xl text-yellow-400 font-bold">=</div>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => onUserAnswerChange(e.target.value)}
            placeholder="?"
            className="text-2xl font-bold text-center w-24 px-3 py-3 rounded-xl bg-white bg-opacity-10 border-2 border-white border-opacity-10 text-white focus:outline-none focus:border-yellow-400"
          />
        </div>
        
        {challengeVerified && (
          <div className="text-center text-green-400 text-sm flex items-center justify-center gap-2">
            <i className="fas fa-check-circle"></i>
            <span>Verification Successful</span>
          </div>
        )}
        
        <button
          type="button"
          onClick={onGenerateMathChallenge}
          className="text-xs text-gray-500 hover:text-yellow-400 mt-2 block mx-auto transition-colors"
        >
          <i className="fas fa-sync-alt mr-1 text-yellow-600"></i>
        </button>
      </div>

      <button
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-yellow-400/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onGenerateQRIS}
        disabled={loading}
      >
        {loading ? (
          <>
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Wait Server Fetching Router
          </>
        ) : (
          <>
            <i className="fas fa-qrcode mr-2"></i>
            Generate QRIS
          </>
        )}
      </button>
    </section>
  );
}