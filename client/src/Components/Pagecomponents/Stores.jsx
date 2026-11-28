import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Heart, MoreHorizontal } from 'lucide-react'
import { storeData } from '../../assets/StoreDummyData'

const Stores = () => {
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
<div id='Store' className="flex items-center justify-between my-10 ml-4 mr-4 mx-auto">
    <p className='font-semibold'>Stores</p>

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
                {storeData.map((store) => (
                  <div
                    key={store.id}
                    className="relative h-80 w-56 shrink-0 snap-start overflow-hidden rounded-[10px] bg-zinc-800 hover:border hover:border-[#acca00]"
                  >
                    <img
                      src={store.img}
                      alt={store.name}
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8 text-white"
                    >
                      <Heart size={20} strokeWidth={1.8} />
                      <MoreHorizontal size={22} strokeWidth={2} />
                    </div>
                  </div>
                ))}

            </div>

</>
  )
}

export default Stores
