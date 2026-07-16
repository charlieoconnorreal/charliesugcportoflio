import { useScrollAnimation } from '../hooks/useScrollAnimation'
import cheaterbusterLogo from '../assets/brands/cheaterbuster.png'
import erlyLogo from '../assets/brands/erly.png'
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
import ironwayLogo from '../assets/brands/ironway.png'
import fuulLogo from '../assets/brands/fuul.png'
import sunPowderLogo from '../assets/brands/sun-powder.png'
import histripsLogo from '../assets/brands/histrips.png'
import climaticLogo from '../assets/brands/climatic.png'
import honeyGummiesLogo from '../assets/brands/honey-gummies.png'
import rituelLogo from '../assets/brands/rituel.png'
import brainrotLogo from '../assets/brands/brainrot.png'
import speechifyLogo from '../assets/brands/speechify.png'
import runnrLogo from '../assets/brands/runnr.png'
import fomoLogo from '../assets/brands/fomo.png'
import softrLogo from '../assets/brands/softr.png'
import babylovegrowthLogo from '../assets/brands/babylovegrowth.png'
import tallerLogo from '../assets/brands/taller.png'
import euphoriaLogo from '../assets/brands/euphoria.png'
import newlyLogo from '../assets/brands/newly.png'
import keenFragrancesLogo from '../assets/brands/keen-fragrances.png'
import qovesLogo from '../assets/brands/qoves.png'

// Featured brands stay on the static top row only — never in the marquee.
const featuredBrands = [
  { name: 'QOVES', logo: qovesLogo },
  { name: 'Speechify', logo: speechifyLogo },
  { name: 'Magic Mind', logo: magicMindLogo },
  { name: 'Strong Coffee Company', logo: strongCoffeeCompanyLogo },
]

const featuredNames = new Set(featuredBrands.map((b) => b.name))

const brands = [
  { name: 'Cheaterbuster', logo: cheaterbusterLogo },
  { name: 'Erly', logo: erlyLogo },
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
  { name: 'Hears', logo: hearsLogo },
  { name: 'Haven', logo: havenLogo },
  { name: 'Ambrosia Collective', logo: ambrosiaCollectiveLogo },
  { name: 'Ironway', logo: ironwayLogo },
  { name: 'Fuul', logo: fuulLogo },
  { name: 'Sun Powder', logo: sunPowderLogo },
  { name: 'Histrips', logo: histripsLogo },
  { name: 'Climatic', logo: climaticLogo },
  { name: 'Honey Gummies', logo: honeyGummiesLogo },
  { name: 'Rituél', logo: rituelLogo },
  { name: 'Brainrot', logo: brainrotLogo },
  { name: 'Runnr', logo: runnrLogo },
  { name: 'Fomo', logo: fomoLogo },
  { name: 'Softr', logo: softrLogo },
  { name: 'BabyLoveGrowth', logo: babylovegrowthLogo },
  { name: 'Taller', logo: tallerLogo },
  { name: 'Euphoria', logo: euphoriaLogo },
  { name: 'Newly.app', logo: newlyLogo },
  { name: 'Keen Fragrances', logo: keenFragrancesLogo },
].filter((brand) => !featuredNames.has(brand.name))

// Disjoint halves so a brand only ever appears on one scrolling row.
const midpoint = Math.ceil(brands.length / 2)
const brandsRowTop = brands.slice(0, midpoint)
const brandsRowBottom = brands.slice(midpoint)

function BrandCard({ name, logo }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[#1a1a1a] px-10 py-6 sm:px-12 sm:py-8">
      <img
        src={logo}
        alt={name}
        className="h-20 w-auto max-w-[200px] object-contain sm:h-24 sm:max-w-[260px]"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}

function FeaturedRow({ items }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-4 px-3 sm:gap-6 sm:px-5">
      {items.map((brand) => (
        <BrandCard key={brand.name} {...brand} />
      ))}
    </div>
  )
}

function MarqueeGroup({ items, hidden = false }) {
  return (
    <div className="flex shrink-0 gap-6 pr-6" aria-hidden={hidden ? 'true' : undefined}>
      {items.map((brand) => (
        <BrandCard key={hidden ? `${brand.name}-loop` : brand.name} {...brand} />
      ))}
    </div>
  )
}

function MarqueeRow({ direction = 'left', items, staggered = false }) {
  return (
    <div className={`overflow-hidden ${staggered ? 'marquee-row-stagger' : ''}`}>
      <div
        className={`marquee-track flex w-max ${
          direction === 'right' ? 'marquee-track-reverse' : ''
        }`}
      >
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} hidden />
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
      className={`bg-[#111111] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : ''}`}
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

      <div className="mt-12 flex flex-col gap-6">
        <FeaturedRow items={featuredBrands} />
        <div className="brands-marquee flex flex-col gap-6">
          <MarqueeRow direction="left" items={brandsRowTop} />
          <MarqueeRow direction="right" items={brandsRowBottom} staggered />
        </div>
      </div>
    </section>
  )
}
