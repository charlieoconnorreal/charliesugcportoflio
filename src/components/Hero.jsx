import heroPhoto from '../assets/hero-photo.png'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/charliecollabs.ugc',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@charliecollabs.ugc',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-[#080808] py-28 md:py-36 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#080808] via-[#0c0816] to-[#16102a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_15%,rgba(100,70,150,0.35),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-none px-3 sm:px-5 lg:px-8 xl:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:justify-between lg:gap-12 xl:gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-[2.75rem] font-extrabold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem]">
              <span className="block">I Make High-</span>
              <span className="block text-[#c4b5fd]">Converting Ads</span>
              <span className="block">That Don&apos;t Feel Like</span>
              <span className="block">Ads.</span>
            </h1>

            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-12 sm:text-lg lg:mx-0">
              UGC creator producing optimized content that drives attention and
              converts to sales.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4 sm:mt-14 lg:justify-start">
              <a
                href="#work"
                className="rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2563EB] hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#3B82F6] hover:text-[#3B82F6]"
              >
                Work With Me
              </a>
            </div>
          </div>

          <div className="mx-auto flex w-52 flex-col items-center sm:w-60 md:w-72 lg:mx-0 lg:ml-auto">
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-full bg-[#7c5cbf]/30 blur-2xl" />
              <div className="relative mx-auto w-fit rounded-full p-1 ring-2 ring-[#9b7ed8]/50 ring-offset-4 ring-offset-[#080808]">
                <img
                  src={heroPhoto}
                  alt="Charlie O'Connor"
                  className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56 md:h-64 md:w-64"
                />
              </div>
            </div>

            <div className="mt-12 flex w-full items-center justify-center gap-4 sm:mt-14">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all hover:border-[#3B82F6] hover:text-white hover:shadow-[0_0_16px_rgba(59,130,246,0.25)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
