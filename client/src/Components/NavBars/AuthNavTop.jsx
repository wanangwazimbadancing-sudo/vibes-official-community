import {Plus, Search} from 'lucide-react'
import { Link } from 'react-router-dom'
const AuthNavTop = () => {
  return (
                  <div className="sticky z-11111 w-full h-[50px] top-0 right-0 bg-zinc-950/95 text-zinc-100 backdrop-blur-md p-4 items-center flex justify-between border-b border-zinc-800">

                
                
                {/*------------------ logo ----------------- */}
                <Link to='/auth' className='logo' >Ontribe</Link>
                
                
                {/* -------------------- right items ----------------- */}

                  <span className="flex w-[40vw] max-w-[600px]   h-10 gap-4 text-zinc-400 items-center justify-center">
                  



                     <div className=" hidden lg:flex bg-zinc-900 items-center text-sm  h-9  px-2  rounded-sm">
            
                     <input className="p-2  w-[300px] h-full outline-none  bg-transparent" type="text" placeholder="Search" />
            
                     <Search size={20} strokeWidth={2} />
            
                     </div>


                     <Search size={20} strokeWidth={1}  className='flex lg:hidden text-zinc-200'/>
                     <Plus size={20} strokeWidth={1.2}  className="fixed top-2 right-2 w-7 h-7 text-zinc-200" />


                  </span>

      
    </div>
  )
}

export default AuthNavTop
