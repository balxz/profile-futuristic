export default function TechStack() {
  const techs = [
    { icon: "fab fa-html5", name: "HTML", color: "red-500" },
    { icon: "fab fa-css3-alt", name: "CSS", color: "blue-500" },
    { icon: "fab fa-js", name: "JAVASCRIPT", color: "yellow-400" },
    { icon: "fab fa-golang", name: "Golang", color: "blue-400" }
  ]

  return (
    <section className="mb-12 md:mb-16">
            <div className="flex flex-col items-center gap-1 mb-2">
        <div className="flex gap-8">
          <div className="w-8 h-px bg-white"></div>
          <div className="w-8 h-px bg-fuchsia-300"></div>
        </div>
        <span className="section-label">
          Tech Stack / Knowledge
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {techs.map((tech, index) => (
          <div key={index} className="hover-box rounded-2xl p-5 md:p-6 text-center group">
            <i className={`${tech.icon} text-2xl md:text-3xl text-gray-700 group-hover:text-${tech.color}`}></i>
            <p className="text-[8px] md:text-[9px] mt-3 font-bold text-gray-600 tracking-[0.2em] uppercase">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}