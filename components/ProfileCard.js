import Image from "next/image"

export default function ProfileCard() {
  return (
    <article className="premium-card overflow-hidden mb-10 md:mb-12">
      <div className="banner-wrapper">
      
        <Image 
          src="/banner.jpeg" 
          alt="Banner" 
          fill
          className="banner-img"
          priority
        />
        <div className="banner-mask"></div>
      </div>

      <div className="profile-content relative">
        <div className="avatar-container inline-block">
          <div className="relative">
            <Image 
              src="/ava.jpeg" 
              alt="balxzzy" 
              width={135}
              height={135}
              className="avatar-frame"
              priority
            />
            <div className="status-pill"></div>
          </div>
        </div>

        <div className="mt-5 md:mt-8">
          <div className="flex items-center gap-2 md:gap-3">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter font-outfit">
              balxzzy
            </h2>
            <svg className="w-5 h-5 md:w-7 md:h-7 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="mt-3 md:mt-4 flex items-center gap-2 md:gap-3">
            <div className="h-px w-4 md:w-6 bg-yellow-400"></div>
            <span className="text-yellow-400 font-semibold text-xs md:text-sm font-outfit tracking-widest uppercase">
              Digital Experience Architect
            </span>
          </div>

          <div className="mt-5 md:mt-8 max-w-lg">
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light italic tracking-wide">
              focusing on minimalist aesthetics and <b className="text-white">high-level</b> functionality, creating digital solutions that not only look beautiful but also perform flawlessly on every device.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
