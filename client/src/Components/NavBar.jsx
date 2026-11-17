import { useState } from "react"
import { Link } from "react-router-dom"
import {AlignRight,Moon, Sun, X} from "lucide-react"


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () =>setIsDarkMode(!isDarkMode);

  return (
<>

    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/65 px-4 py-4  backdrop-blur-3xl sm:px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="#" className="logo text-lg " aria-label="Vibes home">Vibes</a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#Apps" className="text-gray-800">Apps</a>
          <a href="#trends" className="text-gray-800">Trends</a>
          <a href="#Stores" className="text-gray-800 ">Stores</a>
          <a href="#Contact" className="text-gray-800 ">contact</a>
        </div>




<span className="md:hidden">
          <button onClick={()=> setIsDarkMode(!isDarkMode )}  type="button"  className="rounded  p-2 text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden" >  {isDarkMode ? <Sun size={24} /> : <Moon size={24}/>}   </button>
          <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="rounded p-2 text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"> {open ? <X size={24} /> : <AlignRight size={24}/>}  </button>
     
</span>

 <Link  to="/join"  className="hidden lg:inline-flex min-h-8 min-w-20 items-center justify-center bg-black px-1  text-sm text-white "> sign Up </Link>

 </div>




      <div
        id="mobile-navigation"
        className={`${open ? "flex h-[100dvh] " : "hidden"} absolute left-0 top-full w-full text-black flex-col gap-1 bg-white backdrop-blur-2xl px-5 py-3 text-sm border-b-[1px] border-gray-100 md:hidden`}
      >
        
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">Apps</a>
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">Latest</a>
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">Stores</a>
        <a href="#" onClick={() => setOpen(false)} className="rounded px-3 py-2 ">contact</a>
      </div>
    </nav>

</>
  )
}

export default NavBar
