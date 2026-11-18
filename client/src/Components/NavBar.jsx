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
        <Link to="/" className="logo text-lg " aria-label="Vibes home">Vibes</Link>




<div className=" md:flex hidden items-center space-x-4 text-sm text-gray-500  py-3 px-4 border border-gray-200 rounded-md">
            <button type="button">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.333 10.17v1.267c0 3.251 0 4.876-.977 5.886-.976 1.01-2.547 1.01-5.69 1.01H8.333c-3.143 0-4.714 0-5.69-1.01-.977-1.01-.977-2.635-.977-5.886V10.17c0-1.907 0-2.86.433-3.651.432-.79 1.223-1.281 2.804-2.262l1.666-1.035C8.241 2.185 9.076 1.667 10 1.667s1.76.518 3.43 1.555l1.667 1.035c1.58.98 2.371 1.471 2.804 2.262M12.5 15h-5" stroke="#6B7280" strokeOpacity=".8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>
            <svg width="12" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.527 1 1.13 18.429" stroke="#6B7280" strokeOpacity=".8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href="#Apps" className="text-gray-800">Apps</a>

         <svg width="12" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.527 1 1.13 18.429" stroke="#6B7280" strokeOpacity=".8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
             <a href="#Trends" className="text-gray-800">Trends</a>

     <svg width="12" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.527 1 1.13 18.429" stroke="#6B7280" strokeOpacity=".8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
             <a href="#Store" className="text-gray-800 ">Stores</a>
            <svg width="12" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.527 1 1.13 18.429" stroke="#6B7280" strokeOpacity=".8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href="#Contact" className="text-gray-800 ">contact</a>
        </div>



<span className="md:hidden">
          <button onClick={()=> setIsDarkMode(!isDarkMode )}  type="button"  className="rounded  p-2 text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden" >  {isDarkMode ? <Sun size={24} /> : <Moon size={24}/>}   </button>
          <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="rounded p-2 text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"> {open ? <X size={24} /> : <AlignRight size={24}/>}  </button>
     
</span>

 <Link  to="/join"  className="md:flex hidden min-h-8 min-w-20 items-center justify-center bg-black px-1  text-sm text-white "> sign Up </Link>

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
