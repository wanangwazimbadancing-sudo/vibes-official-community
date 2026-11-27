import { Link } from "react-router-dom"
import Logo from "../NavBars/Logo"

const SignUp = () => {

  return (
<div className="flex flex-col items-center justify-center min-h-screen">
<Logo />
    <legend className="text-2xl font-bold mb-6">Join Now</legend>
            <form className="text-zinc-300 max-w-[340px] mx-4 p-6 text-left text-sm">

              <fieldset>
               <label className="font-medium" htmlFor="username">Name*:</label>
            <input id="username" className="w-full border mt-1.5 mb-4 border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 outline-none rounded py-2.5 px-3 focus:border-indigo-500" type="text" placeholder="Enter Name" required />
            <label className="font-medium" htmlFor="email">Email*:</label>
            <input id="email" className="w-full border mt-1.5 mb-4 border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 outline-none rounded py-2.5 px-3 focus:border-indigo-500" type="email" placeholder="Enter email" required />

            <label className="font-medium" htmlFor="email">Password*:</label>
            <input id="password" className="w-full border mt-1.5 mb-4 border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 outline-none rounded py-2.5 px-3 focus:border-indigo-500" type="password" placeholder="Enter password" required />
            <div className="flex items-center justify-between">

            <div className="w-full flex justify-between items-center "> 
            <Link to="/login" className="text-indigo-300 hover:text-indigo-200">have an account ? Login</Link>
            <button type="submit" className="my-3 bg-indigo-600 py-2 px-5 rounded text-white font-medium hover:bg-indigo-500">Register</button>
            </div>
            </div>
              </fieldset>




        </form>


        
</div>
  )
}

export default SignUp
