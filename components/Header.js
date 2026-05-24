export default function Header() {
  return (
    <header className="fixed-header px-6 py-4 md:py-5 flex justify-center">
      <div className="w-full max-w-2xl flex items-center justify-between">
        <h1 className="text-xl md:text-xl font-bold italic tracking-tighter font-outfit">
          <span className="text-white">balx</span>
          <span className="text-yellow-400">zzy</span>
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-[8px] md:text-[9px] tracking-[0.3em] text-gray-400 font-black font-matcha">
            Personal Website
          </span>
        </div>
      </div>
    </header>
  )
}