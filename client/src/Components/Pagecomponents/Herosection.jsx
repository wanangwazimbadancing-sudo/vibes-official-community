import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { heroSlides } from "../../assets/HeroSectionDummyData";

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
            <section
                aria-label="main Hero"
                className="mx-auto mt-5 grid w-[calc(100%-32px)] max-w-[1100px] grid-cols-1 gap-3 lg:h-[min(54vh,520px)] lg:min-h-[350px]"
            >
                <article
                    className="relative flex h-[300px] items-center overflow-hidden  sm:h-[420px] lg:h-full lg:min-h-0 rounded-xl "
                    aria-roledescription="carousel"
                    aria-label="OnTrib features"
                >
                    {heroSlides.map(({background, title, description}, index) => (
                        <div
                            key={title}
                            className={`absolute inset-0 transition-opacity duration-700  ${activeSlide === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
                            style={{ backgroundColor: background }}
                            aria-hidden={activeSlide !== index}
                        >

                            <div
                                className="absolute inset-0 z-[5] "
                                aria-hidden="true"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${background} 0%, ${background} 22%, ${hexToRgba(background, 0.96)} 38%, ${hexToRgba(background, 0.72)} 52%, ${hexToRgba(background, 0.18)} 72%, ${hexToRgba(background, 0)} 100%)`,
                                }}
                            />

                            <div
                                className="relative z-10 flex h-full w-full max-w-[670px] flex-col justify-center px-6 py-10 sm:px-10 lg:px-[8%]"
                            >
                                <h1 className="mt-4 text-2xl font-semibold leading-tight sm:text-4xl">
                                    {title}
                                </h1>
                                <p className="mt-2 max-w-sm text-base font-semibold leading-7 text-zinc-200/85 sm:text-2xl">
                                    {description}
                                </p>
                                <Link
                                    to="/join"
                                    className="mt-7 inline-flex min-h-11 max-w-30 items-center justify-center  bg-black px-3 text-base font-medium text-white shadow-md backdrop-blur-[12px]"
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
                                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                    activeSlide === index
                                        ? "scale-120 bg-white"
                                        : "bg-zinc-500 hover:bg-zinc-300"
                                }`}
                            />
                        ))}
                    </div>
                </article>


            </section>
    );
};

export default Herosection;
