import hero from "../assets/Herosection.png";
import { Link } from "react-router-dom"
import { WorkflowIcon} from "lucide-react"
import { useEffect, useState } from "react"
import { heroSlides } from "../assets/HeroSectionDummyData";

const hexToRgba = (hex, alpha) => {
    const value = hex.replace("#", "")
    const red = Number.parseInt(value.slice(0, 2), 16)
    const green = Number.parseInt(value.slice(2, 4), 16)
    const blue = Number.parseInt(value.slice(4, 6), 16)

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

const Herosection = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % heroSlides.length)
        }, 5000)

        return () => window.clearInterval(timer)
    }, [])

    return (
        <main id="Apps" className="px-3 pb-5 pt-[76px] text-black sm:px-5 sm:pt-20">
            <section
                aria-label="main Hero"
                className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-3 lg:h-[min(74vh,720px)] lg:min-h-[450px] lg:grid-cols-[1.56fr_1fr]"
            >
                <article
                    className="relative flex max-h-[440px] items-center overflow-hidden rounded-xl sm:min-h-[560px] lg:min-h-0"
                    aria-roledescription="carousel"
                    aria-label="Vibes Empire features"
                >
                    {heroSlides.map(({background, title, description}, index) => (
                        <div
                            key={title}
                            className={`absolute inset-0 transition-opacity duration-700 ${activeSlide === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
                            style={{ backgroundColor: background }}
                            aria-hidden={activeSlide !== index}
                        >
                            <img
                                src={hero}
                                alt=""
                                className="absolute bottom-0 right-0 hidden h-full w-[72%] object-contain object-right-bottom lg:block"
                            />

                            <div
                                className="absolute inset-0 z-[5]"
                                aria-hidden="true"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${background} 0%, ${background} 22%, ${hexToRgba(background, 0.96)} 38%, ${hexToRgba(background, 0.72)} 52%, ${hexToRgba(background, 0.18)} 72%, ${hexToRgba(background, 0)} 100%)`,
                                }}
                            />

                            <div
                                className="relative z-10 flex h-full w-full max-w-[470px] flex-col justify-center px-6 py-10 sm:px-10 lg:px-[8%]"
                            >
                                <h1 className="mt-4 text-2xl font-semibold leading-tight sm:text-4xl">
                                    {title}
                                </h1>
                                <p className="mt-2 max-w-sm text-base font-semibold leading-7 text-gray-800/95 sm:text-2xl">
                                    {description}
                                </p>
                                <Link
                                    to="/join"
                                    className="mt-7 inline-flex min-h-11 min-w-30 items-center justify-center bg-white px-2 text-base font-medium text-black shadow-sm"
                                >
                                    Join Now
                                </Link>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Choose hero slide">
                        {heroSlides.map((slide, index) => (
                            <button
                                key={slide.title}
                                type="button"
                                role="tab"
                                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                                aria-selected={activeSlide === index}
                                onClick={() => setActiveSlide(index)}
                                className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                                    activeSlide === index
                                        ? "scale-110 bg-gray-500"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </article>

                <div className="grid max-h-[400px] grid-cols-2 grid-rows-[1.15fr_0.82fr] gap-3 lg:min-h-0">
                    <article className="group relative col-span-2 min-h-[230px] overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-[#f4f8fb]" />
                        <h2 className="relative z-10 p-4 text-base font-semibold leading-snug sm:p-5 sm:text-lg">
                            Automation Tools
                        </h2>
                    </article>

                    <article className="group relative flex min-h-[190px] items-end justify-center overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-[#f4f8fb]" />
                        <div className="relative z-10 px-3 pb-5 pt-10 text-center">
                            <p className="text-xl font-bold tracking-tight text-[#1ed760] sm:text-2xl">Content Creator's Tools</p>
                            <h2 className="mt-2 text-sm font-semibold sm:text-base">Branding tools & Monitisation</h2>
                        </div>
                    </article>

                    <article className="group relative flex min-h-[190px] items-end overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-[#f4f8fb]" />
                        <div className="relative z-10 px-3 pb-5 pt-10 text-center">
                            <WorkflowIcon className="text-xl font-bold tracking-tight text-[#db4404] sm:text-2xl"/>
                            <p className="text-xl font-bold tracking-tight text-[#db4404] sm:text-2xl">Business Tools</p>
                            <h2 className="mt-2 text-sm font-semibold sm:text-base">Orchestration</h2>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Herosection;
