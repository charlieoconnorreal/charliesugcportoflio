import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import leeSportsPoster from '../assets/posters/lee-sports.jpg'

const THUMBNAIL_QUALITIES = [
  'oardefault',
  'maxresdefault',
  'sddefault',
  'hqdefault',
]

function youtubeThumbnail(youtubeId, quality) {
  return `https://i.ytimg.com/vi/${youtubeId}/${quality}.jpg`
}

function PlayIcon() {
  return (
    <svg
      className="h-10 w-10 text-white/90"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function VideoThumbnail({ youtubeId, brand, poster }) {
  const [qualityIndex, setQualityIndex] = useState(0)
  const src = poster ?? youtubeThumbnail(youtubeId, THUMBNAIL_QUALITIES[qualityIndex])

  return (
    <img
      src={src}
      alt={`${brand} UGC video thumbnail`}
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      onError={() => {
        if (poster) return

        setQualityIndex((current) =>
          current < THUMBNAIL_QUALITIES.length - 1 ? current + 1 : current,
        )
      }}
    />
  )
}

function PlaceholderCard() {
  return (
    <div className="flex aspect-[9/16] w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/50 via-zinc-900 to-[#111111] p-6 text-center transition-all duration-300 hover:border-[#3B82F6]/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
        This could be you
      </p>
      <a
        href="#contact"
        className="rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2563EB] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
      >
        Work With Me
      </a>
    </div>
  )
}

function VideoCard({ brand, type, youtubeId, poster, isPlaying, onPlay }) {
  return (
    <div
      className={`group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border bg-[#111111] transition-all duration-300 ${
        isPlaying
          ? 'border-[#3B82F6]/60 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
          : 'border-zinc-800 hover:border-[#3B82F6]/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
      }`}
    >
      {isPlaying ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={`${brand} — ${type}`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <button
            type="button"
            onClick={() => onPlay(null)}
            className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-zinc-300 backdrop-blur-sm transition-colors hover:bg-black/90 hover:text-white"
            aria-label="Close video"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </>
      ) : (
        <button
          type="button"
          className="absolute inset-0 w-full cursor-pointer"
          onClick={() => onPlay(youtubeId)}
        >
          <VideoThumbnail youtubeId={youtubeId} brand={brand} poster={poster} />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3B82F6]/30">
              <PlayIcon />
            </div>
          </div>
        </button>
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10">
        <p className="text-sm font-semibold text-white">{brand}</p>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
          {type}
        </p>
      </div>
    </div>
  )
}

function CategorySection({ label, videos, activeVideoId, onPlay }) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#3B82F6]">
        {label}
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) =>
          video.placeholder ? (
            <PlaceholderCard key={`${label}-placeholder-${index}`} />
          ) : (
            <VideoCard
              key={`${label}-${video.brand}-${index}`}
              {...video}
              isPlaying={activeVideoId === video.youtubeId}
              onPlay={onPlay}
            />
          ),
        )}
      </div>
    </div>
  )
}

const categories = [
  {
    label: 'Tech',
    videos: [
      { brand: 'Cheaterbuster', type: 'Skit', youtubeId: 'SJM7rMzOLKY' },
      { brand: 'Erly', type: 'Product demo', youtubeId: '42KjrnETXDc' },
      { brand: 'BibleWatch', type: 'Testimonial', youtubeId: 'I2G-8ZeSYIg' },
    ],
  },
  {
    label: 'Health & Fitness',
    videos: [
      {
        brand: 'Lee-sports (DEMO)',
        type: 'Testimonial',
        youtubeId: '4M67J6EkisE',
        poster: leeSportsPoster,
      },
      { brand: 'MenuFit', type: 'Testimonial', youtubeId: '1HLg5W1CPFA' },
      { placeholder: true },
    ],
  },
  {
    label: "Men's Lifestyle",
    videos: [
      { brand: 'Calvin Klein (DEMO)', type: 'Testimonial', youtubeId: 'ylbC3GnBvbs' },
      { placeholder: true },
      { placeholder: true },
    ],
  },
]

export default function Portfolio() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeVideoId, setActiveVideoId] = useState(null)

  return (
    <section
      id="work"
      ref={ref}
      className={`bg-[#111111] py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="mx-auto w-full max-w-none px-3 sm:px-5 lg:px-8 xl:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Content That Converts
          </h2>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            A mix of work across my core niches.
          </p>
        </div>

        {categories.map((category) => (
          <CategorySection
            key={category.label}
            {...category}
            activeVideoId={activeVideoId}
            onPlay={setActiveVideoId}
          />
        ))}
      </div>
    </section>
  )
}
