import { Link } from "react-router-dom"

const CallToAction = () => {

return (
  <div className="md:w-[70vw] lg:w-[70vw] mx-2 md:mx-auto p-px rounded-2xl bg-zinc-800 my-12 md:my-16">
            <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-zinc-950">

                <h2 className="text-2xl md:text-4xl font-medium mt-2 leading-[1.2]">
                    Explosive social media growth &<br />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Marketing leads</span> 
                     
                </h2>
                <p className="text-zinc-400 mt-2 max-w-lg max-md:text-sm">Achieve your goals fast, safe automated tools</p>
                <button type="button" className="bg-indigo-600 text-white text-sm px-5 py-2.5 font-medium mt-4 hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all duration-300">
                    <Link to="/join" className="flex items-center gap-2">
                        Join Now
                    </Link>
                </button>
            </div>
        </div>
    )
  
}

export default CallToAction
