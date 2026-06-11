import aboutPhoto from '../assets/about-photo.jpeg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className={`bg-[#111111] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="mx-auto w-full max-w-none px-3 sm:px-5 lg:px-8 xl:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The Creator Behind The Content
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={aboutPhoto}
              alt="Charlie O'Connor"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
              I&apos;m Charlie O&apos;Connor, based in Switzerland. Before becoming a
              UGC creator, I served in the special forces and competed professionally
              in Muay Thai — two worlds that taught me discipline, precision, and how
              to perform under pressure. I&apos;ve also founded and marketed my own SaaS
              product, CardHive.ch, which gave me a deep understanding of what
              actually makes content convert. I&apos;ve loved creating since I was a
              child, and now I channel that into content that doesn&apos;t just look
              good — it drives results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}