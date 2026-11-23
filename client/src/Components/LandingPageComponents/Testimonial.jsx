import { testimonials,columns } from '../../assets/TestimonialDummyData'
import {Quote} from "lucide-react"
const Testimonial = () => {


    const renderCard = ({id,name,description,company}, index) => (
        <div key={`${id}-${index}`} className="bg-[#f6faf2] border border-gray-100 rounded-xl p-6 mb-4 ">
            <div className="mb-5">
                <Quote size={24} className='text-[#99a78b]' />
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                {description}
            </p>
            <div className="flex items-center gap-3">
                <div>
                    <p className="text-sm text-gray-400">{name}</p>
                    <p className="text-sm text-gray-500">{company}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className='w-full flex justify-center'>


            <div id="Testimonial" className="bg-[#fafff5]/40 md:w-[70vw] lg:w-[70vw] border-b border-t border-gray-100 flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-medium text-black mb-4">
                        Loved by creators and growing brands
                    </h1>
                </div>

                <div className="relative w-full max-w-6xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#fffff6] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#fffff6] to-transparent z-10 pointer-events-none"></div>

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
