export default function Gretting() {
  return (
    <section className="mb-12 md:mb-16">
      <div className="flex flex-col items-center gap-1 mb-2">
        <div className="flex gap-8">
          <div className="w-8 h-px bg-white"></div>
          <div className="w-8 h-px bg-fuchsia-300"></div>
        </div>
        <span className="section-label">
          Hello Visitors 👏
        </span>
      </div>

      <div className="max-w-2xl mx-auto rounded-3xl border border-gray-900 backdrop-blur-md p-6 md:p-8">
        <h1 className="text-xl md:text-3xl font-oregano mb-2 font-bold underline">
          Selamat datang di dunia saya
        </h1>

        <p className="text-sm md:text-base text-gray-400 leading-7 mb-2">
          Saya <span className="font-super-joy text-white">Iqbal Syahputra</span>,
          seorang <span className="text-fuchsia-300 font-matcha">Coder</span> dan{" "}
          <span className="text-fuchsia-300 font-matcha">Gamer</span>.
        </p>

        <p className="font-roboto section-label text-[10px] md:text-xs text-gray-500 leading-3">
          Hobbyist <span className="font-matcha text-yellow-400">coder</span> dari Indonesia. Bikin hal random, bukan kerjaan,
          tapi hanya kegabutan yang mengisi waktu luang.
        </p>
      </div>
    </section>
  )
}