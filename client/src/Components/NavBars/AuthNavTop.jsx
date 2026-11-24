import {Search, UserCircle} from 'lucide-react'
import { Link } from 'react-router-dom'
const AuthNavTop = () => {
  return (
                  <div className="sticky z-11111 w-full h-[50px] top-0 right-0 bg-white p-4 items-center flex justify-end border-b border-gray-100">

                
                
                {/*------------------ logo ----------------- */}
                <Link to='/auth' className='logo md:hidden fixed  top-2 left-2' >Ontribe</Link>
                
                
                {/* -------------------- right items ----------------- */}

                  <span className="flex w-[30vw] max-w-[600px]   h-10 gap-4 text-gray-400 items-center justify-center">
            
                     <div className=" hidden lg:flex bg-[#ebebf1]/70 items-center text-sm  h-8  px-2  rounded-sm">
            
                     <input className="p-2  w-[250px] h-full outline-none text-gray-500 bg-transparent" type="text" placeholder="Search" />
            
                     <Search size={14}/>
            
                     </div>



                     <UserCircle size={20} strokeWidth={1} stroke='#c2c2c2' fill='#fdfafa' className="fixed top-2 right-2 w-7 h-7" />


                  </span>

      
    </div>
  )
}

export default AuthNavTop
