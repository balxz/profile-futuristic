"use client"

import {
  useEffect,
  useState
} from "react"

export default function Projects() {
  let [repos,
    setRepos] = useState([])
  useEffect(() => {
    let urls = [
      "https://github.com/balxz/ShiPay",
      "https://github.com/balxz/Shiina-WaBot",
      "https://github.com/balxz/sh-api-simple"
    ]

    Promise.all(
      urls.map(url => {
        let path = new URL(url).pathname.replace("/", "")
        return fetch(`https://api.github.com/repos/${path}`).then(res => res.json())
      })
    ).then(data => {
      setRepos(data.filter(repo => repo && repo.id))
    })
  }, [])

  return (
    <section className="mb-12 md:mb-16">
      <div className="flex flex-col items-center gap-1 mb-2">
        <div className="flex gap-8">
          <div className="w-8 h-px bg-fuchsia-300"></div>
          <div className="w-8 h-px bg-white"></div>
        </div>
        <span className="section-label">
          Proyek Saya
        </span>
      </div>

      <div className="max-w-2xl mx-auto rounded-3xl border border-gray-900 backdrop-blur-md p-6 md:p-8">
        <h1 className="text-xl md:text-3xl font-oregano mb-2 underline font-bold">
          Hal yang sudah saya buat
        </h1>

        <p className="text-[13px] md:text-base text-gray-400 leading-5 mb-2 font-roboto">
          Proyek sampingan — dibuat karena{" "}
          <span className="font-matcha underline text-fuchsia-300">
            senang
          </span>
          , bukan karena{" "}
          <span className="font-matcha underline text-red-400">
            kewajiban
          </span>
          .
        </p>

        <p className="font-roboto text-[10px] md:text-xs text-gray-500 leading-4 mb-8">
          Sebagian besar dimulai dari rasa penasaran, eksperimen,
          dan ide random yang tiba-tiba muncul.
        </p>

        <div className="space-y-4">
          {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="flex items-center justify-between border border-gray-900 rounded-2xl p-4 hover:bg-white/[0.02] transition-all"
              >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fa-solid fa-code text-fuchsia-300"></i>

                  <h3 className="font-roboto text-sm">
                    {repo.name}
                  </h3>
                </div>

                <p className="font-roboto text-[10px] text-gray-500 leading-4">
                  {repo.description || "Tidak ada deskripsi"}
                </p>

                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1 text-[9px] text-gray-600">
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    <span>{repo.stargazers_count}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[9px] text-gray-600">
                    <i className="fa-solid fa-code text-blue-600"></i>
                    <span>{repo.language || "idk."}</span>
                  </div>
                </div>
              </div>

              <div className="ml-4 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-sm text-gray-900"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}