import {Link} from "react-router-dom"


const PasswordReset = () => {
  return (
<div className="w-[100vw] h-[100dvh] grid place-items-center">
<div className="w-full flex fixed top-4 left-4"> <Link to="/" className="logo text-lg " aria-label="Vibes home">Vibes</Link></div>
        <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm ">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Password Reset</h2>
            <label htmlFor="email">Email</label>
            <input id="email" className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4" type="email" placeholder="Enter your email" />
            <button type="button" className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white">Send Email</button>
            <p className="text-center mt-4">Don’t have an account? <Link to="/verify" className="text-gray-800">Signup Now</Link></p>
        </div>

</div>
  )
}

export default PasswordReset
