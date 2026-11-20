import { useState } from "react"
import { Link } from "react-router-dom"
import {AlignRight,ChevronRight,LogIn,Moon,  Sun, X} from "lucide-react"


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () =>setIsDarkMode(!isDarkMode);

  return (
<>

    <nav className="fixed  bg-white/90 backdrop-blur-[12px]  top-0 z-50 w-full border-b border-gray-200  px-4 py-4   sm:px-6 md:px-16 lg:px-24 xl:px-32">
      
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">


<Link to="/" className="logo flex md:hidden text-black text-lg" aria-label="OnTrib home">OnTrib</Link> 
 


{/*--------- navigator bar -----------------*/}


<div className="md:flex hidden items-center space-x-4 text-sm text-gray-500  ">
<Link to="/" className="logo hidden md:flex text-black text-lg" aria-label="OnTrib home">OnTrib</Link>  
           <ChevronRight size={14} className="text-gray-400" />
            <a href="#Apps" className="text-gray-800">Apps</a>

            <ChevronRight size={14} className="text-gray-400" />
             <a href="#Trends" className="text-gray-800">Trends</a>

              <ChevronRight size={14} className="text-gray-400" />
             <a href="#Store" className="text-gray-800 ">Stores</a>
             <ChevronRight size={14} className="text-gray-400" />
            <a href="#Contact" className="text-gray-800 ">contact</a>
            
  </div>






{/*--------------------- auth buttons ------------- */}

<span className="flex gap-2">
 <Link to="login"  className="md:flex hidden text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-400/30">
                <LogIn size={14} />
                 login
            </Link>
 <Link  to="/join"  className="md:flex hidden min-h-8 min-w-20 items-center justify-center bg-black px-1  text-sm text-white rounded-md"> sign Up </Link>

</span>


{/*--------------------- theme icons --------------- */}

<span className="md:hidden">
          <button onClick={()=> setIsDarkMode(!isDarkMode )}  type="button"  className="rounded  p-2 text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden" >  {isDarkMode ? <Sun size={24} /> : <Moon size={24}/>}   </button>
          <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="rounded p-2 text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"> {open ? <X size={24} /> : <AlignRight size={24}/>}  </button>
     
</span>
 </div>


 {/*------------------- drop down menu--------------- */}

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`absolute inset-x-0 top-full h-[calc(100dvh-73px)] bg-black/20 transition-colors duration-300 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none bg-transparent"}`}
      >
        <div
          className={`flex h-full w-full flex-col overflow-y-auto overscroll-contain bg-white px-5 py-6 text-sm text-black shadow-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <a href="#Apps" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50">
              Apps <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#Latest" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50">
              Latest <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#Store" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50">
              Stores <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50">
              Contact <ChevronRight size={18} aria-hidden="true" />
            </a>
          </nav>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-6">
            <Link to="/login" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-lg border border-zinc-300 px-4 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-50">
              Log in
            </Link>
            <Link to="/join" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-lg bg-zinc-950 px-4 text-center text-base font-medium text-white transition-colors hover:bg-zinc-800">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>



</>
  )
}

export default NavBar
