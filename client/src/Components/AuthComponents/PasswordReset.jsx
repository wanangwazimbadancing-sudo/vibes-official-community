import {Link} from "react-router-dom"
import Logo from "../NavBars/Logo"


const PasswordReset = () => {
  return (
<div className="w-[100vw] h-[100dvh] grid place-items-center">
<Logo />
        <div className="text-zinc-300 max-w-96 mx-4 md:p-6 p-4 text-left text-sm">
            <h2 className="text-2xl font-semibold mb-6 text-center text-zinc-100">Password Reset</h2>
            <label htmlFor="email">Email</label>
            <input id="email" className="w-full border mt-1 border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus:border-indigo-500 outline-none rounded py-2.5 px-4" type="email" placeholder="Enter your email" />
            <button type="button" className="w-full my-3 bg-indigo-600 active:scale-95 transition py-2.5 rounded text-white hover:bg-indigo-500"><Link to="/verify">Send Email</Link></button>
            <p className="text-center mt-4">Don’t have an account? <Link to="/join" className="text-indigo-300 hover:text-indigo-200">Signup Now</Link></p>
        </div>

</div>
  )
}

export default PasswordReset
