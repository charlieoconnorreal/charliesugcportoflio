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
import eromifyLogo from '../assets/brands/eromify.png'
import sendCoLogo from '../assets/brands/send-co.png'
import wronAiLogo from '../assets/brands/wron-ai.png'
import odysseyLogo from '../assets/brands/odyssey.png'
import spanLogo from '../assets/brands/span.png'
import lullabitesLogo from '../assets/brands/lullabites.png'
import freeTheSheepLogo from '../assets/brands/free-the-sheep.png'
import magnaLogo from '../assets/brands/magna.png'
import lassoLogo from '../assets/brands/lasso.png'
import vitalSourceNutritionLogo from '../assets/brands/vital-source-nutrition.png'
import magicMindLogo from '../assets/brands/magic-mind.png'
import strongCoffeeCompanyLogo from '../assets/brands/strong-coffee-company.png'
import hearsLogo from '../assets/brands/hears.png'
import havenLogo from '../assets/brands/haven.png'
import ambrosiaCollectiveLogo from '../assets/brands/ambrosia-collective.png'

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
  { name: 'Eromify', logo: eromifyLogo },
  { name: 'Send.co', logo: sendCoLogo },
  { name: 'Wron.AI', logo: wronAiLogo },
  { name: 'Odyssey', logo: odysseyLogo },
  { name: 'SPAN', logo: spanLogo },
  { name: 'LullaBites', logo: lullabitesLogo },
  { name: 'Free the Sheep', logo: freeTheSheepLogo },
  { name: 'Magna', logo: magnaLogo },
  { name: 'LASSO', logo: lassoLogo },
  { name: 'Vital Source Nutrition', logo: vitalSourceNutritionLogo },
  { name: 'Magic Mind', logo: magicMindLogo },
  { name: 'Strong Coffee Company', logo: strongCoffeeCompanyLogo },
  { name: 'Hears', logo: hearsLogo },
  { name: 'Haven', logo: havenLogo },
  { name: 'Ambrosia Collective', logo: ambrosiaCollectiveLogo },
]

function rotateBrands(list, offset) {
  return [...list.slice(offset), ...list.slice(0, offset)]
}

// Split brands across rows so the same brand never appears on both rows at once.
// Each row only duplicates its own subset; with 13 brands per row, the viewport
// is never wide enough to show a brand and its loop copy simultaneously.
const midpoint = Math.ceil(brands.length / 2)
const brandsRowTop = brands.slice(0, midpoint)
const brandsRowBottom = rotateBrands(brands.slice(midpoint), Math.floor(midpoint / 2))

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
  const loopItems = [...items, ...items]

  return (
    <div className={`overflow-hidden ${staggered ? 'marquee-row-stagger' : ''}`}>
      <div
        className={`marquee-track flex w-max gap-6 ${
          direction === 'right' ? 'marquee-track-reverse' : ''
        } ${staggered ? 'marquee-track-offset' : ''}`}
      >
        <div className="flex shrink-0 gap-6">
          {loopItems.map((brand, index) => (
            <BrandCard key={`${brand.name}-${index}`} {...brand} />
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
      className={`bg-[#0a0a0a] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : ''}`}
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
