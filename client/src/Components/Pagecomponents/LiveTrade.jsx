import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'

const liveTrades = [
  { id: 1, host: 'Alex Morgan', viewers: 248, color: 'from-violet-500 to-indigo-900' },
  { id: 2, host: 'Jamie Lee', viewers: 132, color: 'from-rose-500 to-orange-900' },
  { id: 3, host: 'Taylor Kim', viewers: 876, color: 'from-cyan-500 to-blue-900' },
  { id: 4, host: 'Jordan Blake', viewers: 94, color: 'from-emerald-500 to-teal-900' },
  { id: 5, host: 'Morgan Reed', viewers: 521, color: 'from-amber-500 to-red-900' },
  { id: 6, host: 'Casey Rivera', viewers: 307, color: 'from-fuchsia-500 to-purple-900' },
  { id: 7, host: 'Riley Chen', viewers: 116, color: 'from-sky-500 to-slate-900' },
  { id: 8, host: 'Avery Brooks', viewers: 403, color: 'from-lime-500 to-green-900' },
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
        className='w-10 h-10 bg-[#f4f8fb] text-gray-400 rounded-full grid place-items-center'
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        aria-label="Scroll to next items"
        onClick={() => scrollCarousel(1)}
        className='w-10 h-10 bg-[#f4f8fb] text-gray-400 rounded-full grid place-items-center'
      >
        <ChevronRight />
      </button>
    </span>
</div>

 <div
   ref={carouselRef}
   className="live-trade-container flex flex-nowrap items-center mt-10 ml-4 mr-4 mx-auto gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
 >
    {liveTrades.map(({ id, host, viewers, color }) => (
      <article
        key={id}
        className={`relative flex h-80 w-56 shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[10px] bg-gradient-to-br ${color} p-4 text-white`}
      >
        <span className="w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold tracking-wide">
          LIVE
        </span>
        <div className="mt-auto rounded-lg bg-black/45 p-3">
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
