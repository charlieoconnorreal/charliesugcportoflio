import { useScrollAnimation } from '../hooks/useScrollAnimation'
import iphonePhoto from '../assets/equipment/iphone-17-pro-max.png'
import djiMicPhoto from '../assets/equipment/dji-mic-mini-2.png'
import tripodPhoto from '../assets/equipment/tripod.png'
import studioLightPhoto from '../assets/equipment/studio-light.png'
import creatorCopilotPhoto from '../assets/equipment/creator-copilot.png'

const equipment = [
  {
    name: 'iPhone 17 Pro Max',
    description: 'Shot in 4K for the best camera quality on every deliverable.',
    image: iphonePhoto,
  },
  {
    name: 'DJI Mic Mini 2',
    description: 'Flawless audio quality so every line lands clean.',
    image: djiMicPhoto,
  },
  {
    name: 'Tripod',
    description: 'Stable framing for locked-off shots that stay sharp.',
    image: tripodPhoto,
  },
  {
    name: 'Studio light',
    description: 'Better lighting when a scene needs that polished look.',
    image: studioLightPhoto,
  },
  {
    name: 'Professional editor',
    description: 'Post-production handled by a pro editor sourced through',
    image: creatorCopilotPhoto,
    href: 'https://creatorcopilot.us',
    linkLabel: 'Creator Copilot',
  },
]

export default function Equipment() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="equipment"
      ref={ref}
      className={`bg-[#0a0a0a] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : ''}`}
    >
      <div className="mx-auto w-full max-w-none px-3 sm:px-5 lg:px-8 xl:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Equipment
          </h2>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            The tools behind the content: camera, audio, lighting, and edit.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          {equipment.map((item) => (
            <li key={item.name} className="min-w-0">
              <div className="overflow-hidden rounded-2xl bg-[#111111]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
                  {item.description}
                  {item.href ? (
                    <>
                      {' '}
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3B82F6] underline-offset-2 transition-colors hover:text-[#60A5FA] hover:underline"
                      >
                        {item.linkLabel}
                      </a>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
