import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { storeData } from '../../assets/StoreDummyData'

const liveTrades = [
  { id: 1, host: 'Alex Morgan', viewers: 248 },
  { id: 2, host: 'Jamie Lee', viewers: 132 },
  { id: 3, host: 'Taylor Kim', viewers: 876 },
  { id: 4, host: 'Jordan Blake', viewers: 94 },
  { id: 5, host: 'Morgan Reed', viewers: 521 },
  { id: 6, host: 'Casey Rivera', viewers: 307 },
  { id: 7, host: 'Riley Chen', viewers: 116 },
  { id: 8, host: 'Avery Brooks', viewers: 403 },
]

const LiveTrade = () => {
  const carouselRef = useRef(null)

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current
    const firstCard = carousel?.firstElementChild

    if (!carousel || !firstCard) return

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0
    carousel.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }

  return (
<>
<div id='LiveTrade' className="flex items-center justify-between mt-10 ml-4 mr-4 mx-auto">
    <p className='font-semibold'>Live Trade</p>

    <span className='flex gap-2'>
      <button
        type="button"
        aria-label="Scroll to previous items"
        onClick={() => scrollCarousel(-1)}
        className='w-10 h-10 bg-zinc-800 text-zinc-300 rounded-full grid place-items-center hover:bg-zinc-700'
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        aria-label="Scroll to next items"
        onClick={() => scrollCarousel(1)}
        className='w-10 h-10 bg-zinc-800 text-zinc-300 rounded-full grid place-items-center hover:bg-zinc-700'
      >
        <ChevronRight />
      </button>
    </span>
</div>

 <div
   ref={carouselRef}
   className="live-trade-container flex flex-nowrap items-center mt-10 ml-4 mr-4 mx-auto gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
 >
    {liveTrades.map(({ id, host, viewers }, index) => (
      <article
        key={id}
        className="relative flex h-80 w-56 shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[10px] bg-zinc-900 p-4 text-white"
      >
        <img
          src={storeData[index % storeData.length].img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
        <span className="relative z-10 w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold tracking-wide">
          LIVE
        </span>
        <div className="relative z-10 mt-auto rounded-lg bg-black/70 p-3">
          <p className="font-semibold">{host}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-white/90">
            <Eye size={16} aria-hidden="true" />
            <span>{viewers.toLocaleString()} watching</span>
          </p>
        </div>
      </article>
    ))}
 </div>

</>
  )
}

export default LiveTrade
