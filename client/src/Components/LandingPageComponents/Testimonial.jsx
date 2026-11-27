import { testimonials,columns } from '../../assets/TestimonialDummyData'
import {Quote} from "lucide-react"
const Testimonial = () => {


    const renderCard = ({id,name,description,company}, index) => (
        <div key={`${id}-${index}`} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-4 ">
            <div className="mb-5">
                <Quote size={24} className='text-zinc-500' />
            </div>
            <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
                {description}
            </p>
            <div className="flex items-center gap-3">
                <div>
                    <p className="text-sm text-zinc-200">{name}</p>
                    <p className="text-sm text-zinc-500">{company}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className='w-full flex justify-center'>


            <div id="Testimonial" className="bg-zinc-950/40 md:w-[70vw] lg:w-[70vw] border-b border-t border-zinc-800 flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-4">
                        Loved by creators and growing brands
                    </h1>
                </div>

                <div className="relative w-full max-w-6xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#09090b] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#09090b] to-transparent z-10 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden">
                        {columns.map((col, colIndex) => (
                            <div key={colIndex} className={col.className}>
                                {[...testimonials.slice(col.start, col.end), ...testimonials.slice(col.start, col.end)].map((testimonial, index) =>
                                    renderCard(testimonial, index)
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
