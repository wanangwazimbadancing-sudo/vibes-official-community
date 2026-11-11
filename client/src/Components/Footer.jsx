import { links } from "../assets/FooterDummydata"

const Footer = () => {

    return (
        <>


            <footer className=" pt-15 px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-gray-200">
                        <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Vibes24_7. All Rights Reserved.</p>
                                                    <div className="flex gap-4">
                                <a href="www.vibes24_7.com" className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.44.5 3.777 4.994.37.49.405-.463L14.385.5h1.428l-5.296 6.054-.269.306.246.325 6.479 8.565h-4.296l-4.195-5.484-.37-.486-.403.46-4.822 5.51h-1.43l5.716-6.533.27-.308-.25-.325L1.012.5zM2.822 1.867l9.972 13.036.15.197h2.78l-.607-.801-9.86-13.037-.15-.199h-2.9z" fill="#000" stroke="#90a1b9" /></svg>
                                </a>
                                <a href="#" className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.937 10.486a19.8 19.8 0 0 1 0-8.276 1.65 1.65 0 0 1 1.166-1.158c4.47-.736 9.03-.736 13.5 0A1.67 1.67 0 0 1 16.77 2.21a19.8 19.8 0 0 1 0 8.276 1.65 1.65 0 0 1-1.167 1.159c-4.47.735-9.03.735-13.5 0a1.67 1.67 0 0 1-1.166-1.159" stroke="#90a1b9" strokeLinecap="round" strokeLinejoin="round" /><path d="m7.187 9.466 4.166-2.483L7.187 4.5z" stroke="#90a1b9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                                <a href="#" className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 .5H4.667C2.365.5.5 2.353.5 4.638v8.276c0 2.285 1.865 4.138 4.167 4.138H13c2.301 0 4.167-1.853 4.167-4.138V4.638C17.167 2.353 15.3.5 13 .5" stroke="#90a1b9" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.167 8.325a3.3 3.3 0 0 1-.339 2.01 3.32 3.32 0 0 1-1.46 1.432 3.35 3.35 0 0 1-3.856-.616 3.29 3.29 0 0 1-.62-3.83c.315-.62.82-1.128 1.442-1.449a3.35 3.35 0 0 1 3.893.598c.505.502.835 1.152.94 1.855" stroke="#90a1b9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                            </div>
                    </div>
            </footer>
        </>
    )
}

export default Footer
