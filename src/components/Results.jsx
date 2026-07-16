import { useScrollAnimation } from '../hooks/useScrollAnimation'
import viewsProof from '../assets/results/views.png'
import viralViewsProof from '../assets/results/viral-views.png'
import postsProof from '../assets/results/posts.png'
import linkClicksSignupsProof from '../assets/results/link-clicks-signups.png'
import dmTop5 from '../assets/testimonials/dm-top-5.png'
import dmTopVideo from '../assets/testimonials/dm-top-video.png'
import dm200k from '../assets/testimonials/dm-200k.png'

const metrics = [
  { value: '515k', label: 'Views · 23 videos' },
  { value: '277k', label: 'Top viral video' },
  { value: '885', label: 'Link in bio clicks' },
  { value: '182', label: 'Sign-ups' },
]

const proofImages = [
  {
    src: viewsProof,
    alt: 'Analytics showing 514,673 views',
  },
  {
    src: viralViewsProof,
    alt: 'Top viral video with 277.4K views',
  },
  {
    src: postsProof,
    alt: 'Profile showing 23 posts',
  },
  {
    src: linkClicksSignupsProof,
    alt: '885 link in bio clicks and 182 sign-ups',
  },
]

const messages = [
  {
    src: dmTop5,
    alt: 'Message shoutout: all 5 top performing videos of the week from Charlie OConnor',
  },
  {
    src: dmTopVideo,
    alt: 'Message: top performing video of the week goes to Charlie OConnor with a $25 bonus',
  },
  {
    src: dm200k,
    alt: 'Message shoutout: Charlie OConnor hit a 200K banger with the same format',
  },
]

export default function Results() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="results"
      ref={ref}
      className={`bg-[#0a0a0a] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : ''}`}
    >
      <div className="mx-auto w-full max-w-none px-3 sm:px-5 lg:px-8 xl:px-10">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-5 lg:items-stretch">
          {/* Left — Results & Proof */}
          <article className="flex min-h-0 flex-col rounded-2xl bg-[#111111] p-5 sm:p-6 lg:p-7">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Results &amp; Proof
            </h2>
            <p className="mt-3 text-lg font-semibold tracking-tight text-white">
              Euphoria Finance
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
              Built and ran the creator account from zero. Short-form content paired
              with a referral funnel that turned views into signups.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-white/10 py-5">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <p className="text-2xl font-bold tracking-tight text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{metric.label}</p>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {proofImages.map((image) => (
                <div
                  key={image.alt}
                  className="flex items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 sm:p-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-20 w-full object-contain sm:max-h-24 lg:max-h-28"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </article>

          {/* Right — What they say about me */}
          <article
            id="testimonials"
            className="flex min-h-0 flex-col rounded-2xl bg-[#111111] p-5 sm:p-6 lg:p-7"
          >
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              What They Say About Me
            </h2>
            <p className="mt-2 text-sm text-zinc-400 sm:text-base">
              Straight from the DMs
            </p>

            <div className="mt-6 flex flex-1 flex-col gap-4">
              {messages.map((message) => (
                <div
                  key={message.alt}
                  className="overflow-hidden rounded-xl bg-[#f5f1ea]"
                >
                  <img
                    src={message.src}
                    alt={message.alt}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
