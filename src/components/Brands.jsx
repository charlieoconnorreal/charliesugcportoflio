import { useScrollAnimation } from '../hooks/useScrollAnimation'
import cheaterbusterLogo from '../assets/brands/cheaterbuster.png'
import erlyLogo from '../assets/brands/erly.png'
import susAiLogo from '../assets/brands/sus-ai.png'
import bestBeardStuffLogo from '../assets/brands/best-beard-stuff.png'
import menufitLogo from '../assets/brands/menufit.png'
import biblewatchLogo from '../assets/brands/biblewatch.png'
import bookwatchLogo from '../assets/brands/bookwatch.png'
import airlearnLogo from '../assets/brands/airlearn.png'
import parakeetAiLogo from '../assets/brands/parakeet-ai.png'
import merakiMedicinalLogo from '../assets/brands/meraki-medicinal.png'
import dotLogo from '../assets/brands/dot.png'

const brands = [
  { name: 'Cheaterbuster', logo: cheaterbusterLogo },
  { name: 'Erly', logo: erlyLogo },
  { name: 'Sus.ai', logo: susAiLogo },
  { name: 'Best Beard Stuff', logo: bestBeardStuffLogo },
  { name: 'MenuFit', logo: menufitLogo },
  { name: 'BibleWatch', logo: biblewatchLogo },
  { name: 'BookWatch', logo: bookwatchLogo },
  { name: 'AirLearn', logo: airlearnLogo },
  { name: 'Parakeet.AI', logo: parakeetAiLogo },
  { name: 'Meraki Medicinal', logo: merakiMedicinalLogo },
  { name: 'Dot', logo: dotLogo },
]

function interleaveBrands(list) {
  const midpoint = Math.ceil(list.length / 2)
  const firstHalf = list.slice(0, midpoint)
  const secondHalf = list.slice(midpoint)
  const interleaved = []

  for (let i = 0; i < Math.max(firstHalf.length, secondHalf.length); i += 1) {
    if (secondHalf[i]) interleaved.push(secondHalf[i])
    if (firstHalf[i]) interleaved.push(firstHalf[i])
  }

  return interleaved
}

const brandsRowTop = brands
const brandsRowBottom = interleaveBrands(brands)

function BrandCard({ name, logo }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[#1a1a1a] px-10 py-6 sm:px-12 sm:py-8">
      <img
        src={logo}
        alt={name}
        className="h-20 w-auto max-w-[200px] object-contain sm:h-24 sm:max-w-[260px]"
        loading="lazy"
      />
    </div>
  )
}

function MarqueeRow({ direction = 'left', items, staggered = false }) {
  return (
    <div className={`overflow-hidden ${staggered ? 'marquee-row-stagger' : ''}`}>
      <div
        className={`marquee-track flex w-max gap-6 ${
          direction === 'right' ? 'marquee-track-reverse' : ''
        } ${staggered ? 'marquee-track-offset' : ''}`}
      >
        <div className="flex shrink-0 gap-6">
          {items.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
        <div className="flex shrink-0 gap-6" aria-hidden="true">
          {items.map((brand) => (
            <BrandCard key={`${brand.name}-dup`} {...brand} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Brands() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="brands"
      ref={ref}
      className={`bg-[#0a0a0a] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="mx-auto w-full max-w-none px-3 sm:px-5 lg:px-8 xl:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Brands I&apos;ve Created For
          </h2>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            Trusted by startups and growing brands.
          </p>
        </div>
      </div>

      <div className="brands-marquee mt-12 flex flex-col gap-6">
        <MarqueeRow direction="left" items={brandsRowTop} />
        <MarqueeRow direction="right" items={brandsRowBottom} staggered />
      </div>
    </section>
  )
}
