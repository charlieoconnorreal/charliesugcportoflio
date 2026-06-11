import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const email = 'charlieugcmedia@gmail.com'

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-[#0a0a0a] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : ''}`}
    >
      <div className="mx-auto w-full max-w-none px-3 text-center sm:px-5 lg:px-8 xl:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-zinc-400 sm:text-lg">
          Ready to create content that converts?
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-10 inline-block break-all text-xl font-semibold text-[#3B82F6] transition-colors hover:text-[#60A5FA] sm:text-2xl md:text-3xl"
        >
          {email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2563EB] hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
          >
            Send Me an Email
          </a>
          <a
            href="#work"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#3B82F6] hover:text-[#3B82F6]"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
