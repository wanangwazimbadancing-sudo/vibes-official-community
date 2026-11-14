import { useState } from "react"

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 px-4 py-4  backdrop-blur-md sm:px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="#" className="logo text-lg " aria-label="Vibes home">Vibes</a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#Apps" className="text-gray-800">Apps</a>
          <a href="#Latest" className="text-gray-800">Latest</a>
          <a href="#Latest" className="text-gray-800">Latest</a>
          <a href="#News" className="text-gray-800 ">News</a>
          <a href="#Contact" className="text-gray-800 ">contact</a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded p-2 text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
        >
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="21" height="1.5" rx=".75" fill="currentColor" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="currentColor" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full text-black flex-col gap-1 bg-white/95 backdrop-blur-xl px-5 py-3 text-sm border-b-[1px] border-gray-100 md:hidden`}
      >
        
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">Apps</a>
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">Latest</a>
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">News</a>
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">contact</a>
      </div>
    </nav>
  )
}

export default NavBar
