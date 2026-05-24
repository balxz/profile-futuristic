import SpotifyWidget from "@/components/SpotifyWidget"

export default function SpotifySection() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="flex flex-col items-center gap-1 mb-2">
        <div className="flex gap-8">
          <div className="w-8 h-px bg-fuchsia-300"></div>
          <div className="w-8 h-px bg-white"></div>
        </div>
        <span className="section-label">
          Now Playing
        </span>
      </div>

      <SpotifyWidget />
    </section>
  )
}