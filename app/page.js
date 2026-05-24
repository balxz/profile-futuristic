import Header from "@/components/Header"
import ProfileCard from "@/components/ProfileCard"
import Gretting from "@/components/Gretting"
import About from "@/components/About"
import Projects from "@/components/Project"
import TechStack from "@/components/TechStack"
import ConnectSection from "@/components/ConnectSection"
import SpotifySection from "@/components/SpotifySection"
//import SpotifyWidget from "@/components/SpotifyWidget"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4 md:px-6">
        <div className="w-full max-w-2xl reveal">
          <ProfileCard />
          <Gretting />
          <About />
          <Projects />
          <TechStack />
          <ConnectSection />
          <SpotifySection />
          <Footer />
        </div>
      </main>
    </>
  )
}
