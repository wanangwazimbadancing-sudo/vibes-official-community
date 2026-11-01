const Herosection = () => {
    return (
        <main className=" px-3 pb-5 pt-[76px] text-black sm:px-5 sm:pt-20">
            <section aria-label="Featured games" className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-3 lg:h-[min(74vh,720px)] lg:min-h-[450px] lg:grid-cols-[1.56fr_1fr]">
               
                <article className="relative flex max-h-[440px] items-center overflow-hidden rounded-xl sm:min-h-[560px] lg:min-h-0">

                    <div className="absolute inset-0 bg-[#f4f8fb]" />
                    <div className="relative z-10 w-full max-w-[470px] px-6 py-10 sm:px-10 lg:px-[8%]">
                        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                            Welcome to Vibes: the ultimate community for Content creation.
                        </h1>
                        <p className="mt-2 max-w-sm text-base font-medium leading-7 text-white/70">
                            This is warfare without limits. Available now.
                        </p>
                        <a
                            href="#latest"
                            className="mt-7 inline-flex min-h-11 min-w-30 items-center justify-center  bg-black text-white px-2 text-base font-medium"
                        >
                            Play Now
                        </a>
                    </div>
                </article>

                <div className="grid max-h-[400px]  grid-cols-2 grid-rows-[1.15fr_0.82fr] gap-3 lg:min-h-0">
                    <article className="group relative col-span-2 min-h-[230px] overflow-hidden rounded-xl">

                        <div className="absolute inset-0 bg-[#f4f8fb]" />
                        <h2 className="relative max-w-[290px] px-6 py-8 text-2xl font-semibold leading-snug sm:px-8 sm:text-[28px]">
                            Play hundreds of great games
                        </h2>
                    </article>

                    <article className="group relative flex min-h-[190px] items-end justify-center overflow-hidden rounded-xl">

                        <div className="absolute inset-0 bg-[#f4f8fb]" />
                        <div className="relative z-10 px-3 pb-5 pt-10 text-center">
                            <p className="text-xl font-bold tracking-tight text-[#1ed760] sm:text-2xl">Spotify</p>
                            <h2 className="mt-2 text-sm font-semibold sm:text-base">Music and Podcasts</h2>
                        </div>
                    </article>

                    <article className="group relative flex min-h-[190px] items-end overflow-hidden rounded-xl">

                        <div className="absolute inset-0 bg-[#f4f8fb]" />
                        <h2 className="relative z-10 p-4 text-base font-semibold leading-snug sm:p-5 sm:text-lg">
                            Microsoft Flight Simulator
                        </h2>
                    </article>
                </div>
            </section>

        </main>
    )
}

export default Herosection
