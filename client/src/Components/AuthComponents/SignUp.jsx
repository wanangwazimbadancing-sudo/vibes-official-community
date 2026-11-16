const SignUp = () => {
  return (
<div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-2xl font-bold mb-6">Join Now</h1>
            <form className="bg-white text-gray-500 max-w-[340px] mx-4 p-6 text-left text-sm ">
            <label className="font-medium" htmlFor="email">Name</label>
            <input id="email" className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="email" placeholder="Enter title" required />
            <label className="font-medium" htmlFor="email">Email</label>
            <input id="email" className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="email" placeholder="Enter email" required />
            <div className="flex items-center justify-between">
                <button type="submit" className="my-3 bg-black py-2 px-5 rounded text-white font-medium">Request</button>

            </div>
        </form>
</div>
  )
}

export default SignUp
