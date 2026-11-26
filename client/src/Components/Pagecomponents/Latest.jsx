import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Latest = () => {
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
<div id='Latest' className="flex items-center justify-between mt-10 ml-4 mr-4 mx-auto">
    <p className='font-semibold'>Latest</p>

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
   className="latest-container flex flex-nowrap items-center mt-10 ml-4 mr-4 mx-auto gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
 >
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
                <div className="w-56 h-80 shrink-0 snap-start bg-gray-200 rounded-[10px]"/>
            </div>

</>
  )
}

export default Latest
