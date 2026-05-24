"use client"
import Link from "next/link"
export default function ConnectSection() {
  const connections = [
    {
      icon: "fab fa-telegram",
      color: "blue-400",
      title: "TELEGRAM",
      subtitle: "direct chat",
      link: "https://t.me/balxzzy"
    },
    {
      icon: "fab fa-whatsapp",
      color: "emerald-500",
      title: "PERSONAL",
      subtitle: "whatsapp me",
      link: "https://wa.me/6282148032171?text=hY"
    }
  ]

  return (
    <section className="mb-12 md:mb-16">
      <span className="section-label text-center md:text-left">Connect With Me</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {connections.map((item, index) => (
          <Link 
            key={index} 
            href={item.link} 
            className="hover-box rounded-2xl p-4 md:p-5 flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-${item.color}`}>
                <i className={`${item.icon} text-lg md:text-xl`}></i>
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-yellow-400">
                  {item.title}
                </div>
                <div className="text-xs text-gray-600 tracking-tighter italic font-matcha">
                  {item.subtitle}
                </div>
              </div>
            </div>
            <i className="fas fa-arrow-right text-[10px] text-gray-800 group-hover:text-white group-hover:translate-x-1"></i>
          </Link>
        ))}
      </div>
    </section>
  )
}
