"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Shuffle, Plus } from "lucide-react"
import { TRACKS } from "@/lib/tracks"

const formatTime = (time) => {
  if (!time) return "0:00"
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

export default function SpotifyWidget() {
  const audioRef = useRef(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const currentTrack = TRACKS[currentTrackIndex]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => setDuration(audio.duration)
    const updateTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("timeupdate", updateTime)

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("timeupdate", updateTime)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length)
      setIsPlaying(true)
    }

    audio.addEventListener("ended", handleEnded)
    return () => audio.removeEventListener("ended", handleEnded)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl
      if (isPlaying) {
        audioRef.current.play().catch(() => {})
      }
    }
  }, [currentTrackIndex, currentTrack.audioUrl])

  const handlePlayToggle = () => setIsPlaying(!isPlaying)
  const handleNextTrack = () =>
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length)
  const handlePrevTrack = () =>
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length)
  const handleTrackSelect = (index) => setCurrentTrackIndex(index)

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    if (audioRef.current && audioRef.current.duration > 0) {
      audioRef.current.currentTime = percent * audioRef.current.duration
    }
  }

  return (
    <section className="bg-black flex items-center justify-center p-4">
      <audio ref={audioRef} crossOrigin="anonymous" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-80 bg-black rounded-2xl overflow-hidden shadow-2xl p-4 border border-gray-900"
        style={{ perspective: "1200px" }}
      >
        
        <div className="flex gap-3 mb-3">
          <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
            <img
              src={currentTrack.image || "https://files.catbox.moe/3f54yk.jpeg"}
              alt={currentTrack.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between min-w-0">
            {TRACKS.map((track, idx) => (
              <motion.div
                key={idx}
                onClick={() => handleTrackSelect(idx)}
                whileHover={{ x: 2 }}
                className={`cursor-pointer py-1 ${
                  idx === currentTrackIndex ? "text-white" : "text-slate-400"
                }`}
              >
                <div className="flex gap-2">
                  <span
                    className={`text-sm font-bold ${
                      idx === currentTrackIndex
                        ? "text-green-400"
                        : "text-slate-600"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate">
                      {track.title} {track.explicit && (
                    <span className="text-xs bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded flex-shrink-0">E</span>
                  )}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {track.artist}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/** track info **/}
        <p className="text-xs text-slate-500 mb-2 truncate">
          {currentTrack.title} • {currentTrack.artist}
        </p>

        {/** progress **/}
        <div className="mb-2">
          <div
            onClick={handleProgressClick}
            className="relative h-0.5 bg-slate-700 rounded-full cursor-pointer mb-1"
          >
            <div
              className="h-full bg-yellow-500 rounded-full"
              style={{
                width: duration
                  ? `${(currentTime / duration) * 100}%`
                  : "0%",
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>{formatTime(currentTime)}</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        {/** controls **/}
        <div className="flex items-center justify-between">
          <Shuffle size={18} className="text-slate-400" />

          <SkipBack
            size={18}
            onClick={handlePrevTrack}
            className="text-slate-400 cursor-pointer"
          />

          <button
            onClick={handlePlayToggle}
            className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <SkipForward
            size={18}
            onClick={handleNextTrack}
            className="text-slate-400 cursor-pointer"
          />

          <Plus size={18} className="text-slate-400" />
        </div>
        <p className="text-sm font-matcha text-muted-foreground mt-4 italic">
          <span className="inline-block bg-[#22c55e26] px-2 py-0.5 -rotate-1 skew-x-[-6deg] rounded">
            hindia fans /. — balxzzy
          </span>
        </p>
      </motion.div>
    </section>
  )
}