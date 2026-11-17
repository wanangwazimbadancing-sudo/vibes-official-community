import { ArrowLeft} from "lucide-react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {

const nav = useNavigate()

  return (
<div className="flex flex-col items-center justify-center min-h-screen">
<div  className="absolute flex top-4 left-4 text-gray-800 cursor-pointer" onClick={()=>{nav(-1)}}>
    <ArrowLeft size={24} />
    <span>back</span>
</div>
    <legend className="text-2xl font-bold mb-6">Join Now</legend>
            <form className="bg-white text-gray-500 max-w-[340px] mx-4 p-6 text-left text-sm ">

              <fieldset>
               <label className="font-medium" htmlFor="username">Name:</label>
            <input id="username" className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Enter Name" required />
            <label className="font-medium" htmlFor="email">Email:</label>
            <input id="email" className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="email" placeholder="Enter email" required />
            <div className="flex items-center justify-between">
            <button type="submit" className="my-3 bg-black py-2 px-5 rounded text-white font-medium">Register</button>

            </div>
              </fieldset>




        </form>
</div>
  )
}

export default SignUp
