import { Link } from "react-router-dom"
import Logo from "../NavBars/Logo"

const Login = () => {

  return (
<div className="flex flex-col items-center justify-center min-h-screen">
  <Logo />
    <legend className="text-2xl font-bold mb-6">Login</legend>
            <form className=" text-gray-500 max-w-[340px] mx-4 p-6 text-left text-sm ">

              <fieldset>
               <label className="font-medium" htmlFor="username">UserName*:</label>
            <input id="username" className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Enter Name" required />
            <label className="font-medium" htmlFor="email">Password*:</label>
            <input id="password" className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="password" placeholder="Enter password" required />
            <div className="flex items-center justify-between">

            <div className="w-full flex justify-between items-center "> 
            <Link to="/resetpassword" className="text-[#919191] hover:text-[#234]">forgot password?</Link>
            <button type="submit" className="my-3 bg-black py-2 px-5 rounded text-white font-medium">login</button>
            </div>
            </div>
              </fieldset>




        </form>
</div>
  )
}

export default Login
