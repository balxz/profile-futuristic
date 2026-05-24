export default function About() {
  return (
    <section className="mb-12 md:mb-16">
      <div className="flex flex-col items-center gap-1 mb-2">
        <div className="flex gap-8">
          <div className="w-8 h-px bg-fuchsia-300"></div>
          <div className="w-8 h-px bg-white"></div>
        </div>
        <span className="section-label">
          Tentang Saya
        </span>
      </div>

      <div className="max-w-2xl mx-auto rounded-3xl border border-gray-900 backdrop-blur-md p-6 md:p-8">
        <h1 className="text-xl md:text-3xl font-oregano mb-2 font-bold underline">
          Siapa sih orang di balik kode ini?
        </h1>

        <p className="text-[13px] md:text-base text-gray-400 leading-5 mb-2 font-roboto">
          Coding bukan{" "}
          <span className="font-matcha text-red-400">
            kerjaan
          </span>
          , tapi{" "}
          <span className="font-matcha text-fuchsia-300">
            playground
          </span>
          .
        </p>

        <p className="font-roboto text-[10px] md:text-xs text-gray-500 leading-4 mb-6">
          Saya <span className="underline text-white/60">muhammad iqbal syahputra</span> berasal dari{" "}
          <span className="text-green-400 underline">
            Sumatra Utara
          </span>
          , tepatnya daerah{" "}
          <span className="text-yellow-400 underline">
            Kisaran, Bandar Pasir Mandoge
          </span>
          . Umur saya 19 tahun dan lahir pada{" "}
          <span className="text-fuchsia-300 underline">
            31/03/2007
          </span>
          . Saya cuma seseorang yang awalnya penasaran dengan dunia kode,
          lalu tanpa sadar menghabiskan banyak waktu untuk mempelajari dan
          membuat berbagai hal random.
        </p>

        <div className="border border-gray-900 rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-super-joy text-sm underline">
              Perjalanan Saya Dengan Kode
            </h3>
          </div>

          <div className="space-y-4">

            <div>
              <div className="flex items-center gap-2">
                <span className="font-matcha text-cyan-400">
                  2023
                </span>
                <div className="h-px flex-1 bg-gray-900"></div>
              </div>

              <p className="font-roboto text-[10px] text-gray-500 leading-4 mt-2">
                Awalnya berkenalan dengan dunia kode lewat{" "}
                <span className="text-yellow-300 underline font-matcha">
                  bot WhatsApp
                </span>
                . Dari sini mulai belajar cara kerja command,
                plugin, API, dan logika sederhana.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-matcha text-fuchsia-300">
                  {new Date().getFullYear()} — <span className="font-matcha">Sekarang</span>
                </span>
                <div className="h-px flex-1 bg-gray-900"></div>
              </div>

              <p className="font-roboto text-[10px] text-gray-500 leading-4 mt-2">
                Dari bot WhatsApp, rasa penasaran berkembang ke{" "}
                <span className="text-white underline font-matcha">
                  website dan web app
                </span>
                . Sekarang lebih sering mencoba membangun project,
                mengeksplorasi UI, backend, dan berbagai ide random
                yang muncul tiba-tiba.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}