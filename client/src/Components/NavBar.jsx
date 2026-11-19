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


<Link to="/" className="logo flex md:hidden text-black text-lg" aria-label="Vibes home">Vibes</Link> 
 


{/*--------- navigator bar -----------------*/}


<div className="md:flex hidden items-center space-x-4 text-sm text-gray-500  ">
<Link to="/" className="logo hidden md:flex text-black text-lg" aria-label="Vibes home">Vibes</Link>  
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
