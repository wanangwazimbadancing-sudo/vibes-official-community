import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'Classic watch',
    price: '$ 129.00',
    description: 'A timeless design made for everyday wear.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Wireless headphones',
    price: '$ 89.00',
    description: 'Rich sound and all-day listening comfort.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Everyday sneakers',
    price: '$ 74.00',
    description: 'Lightweight sneakers for wherever the day takes you.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Instant camera',
    price: '$ 99.00',
    description: 'Capture your favorite moments as they happen.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop',
  },
]

const Products = () => {
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
    <section aria-label="Products" id="Products" >
      <div className="mx-4 mt-10 flex items-center justify-between">
        <h2 className="font-semibold">Product</h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll to previous products"
            onClick={() => scrollCarousel(-1)}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#f4f8fb] text-gray-400"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Scroll to next products"
            onClick={() => scrollCarousel(1)}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#f4f8fb] text-gray-400"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="latest-container mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {products.map((product) => (
          <article
            key={product.name}
            className="flex w-72 min-w-0 shrink-0 snap-start flex-col bg-white border border-gray-100 "
          >
            <img
              className="h-48 w-full object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4 text-sm">
              <p className="text-slate-600">{product.price}</p>
              <h3 className="my-1.5 text-base font-medium text-slate-800">{product.name}</h3>
              <p className="text-slate-500">{product.description}</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button type="button" className="bg-slate-100 py-2 text-slate-600">
                  Add to cart
                </button>
                <button type="button" className="bg-slate-800 py-2 text-white">
                  Buy now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
