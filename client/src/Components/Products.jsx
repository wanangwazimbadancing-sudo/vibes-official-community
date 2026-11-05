import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react'
import { products } from '../assets/ProductDummyData' 


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
            className="block relative w-72 min-w-0 shrink-0 snap-start "
          >
            <img
              className="h-68 w-full object-cover rounded-[10px]"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4 text-sm absolute bg-white/99 backdrop-blur-[2px] w-full  bottom-[0%]">
              <p className="text-slate-600">{product.price}</p>
              <h3 className="my-1.5 text-base font-medium text-slate-800">{product.name}</h3>
              <div className="mt-3 flex justify-between items-center a gap-2">
                <button type="button" className="bg-gray-100 w-[100px] py-2 text-gray-600">
                  Add to cart
                </button>
                <Heart size={20} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
