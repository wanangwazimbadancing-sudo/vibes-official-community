import { Rocket } from "lucide-react"
import { Link } from "react-router-dom"

const CallToAction = () => {

return (
  <div className="max-w-5xl mx-2 md:mx-auto p-px rounded-2xl bg-[#edf6f1] my-12 md:my-16">
            <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-gradient-to-r from-[#edf6f1] to-[#f9fffc]">  
                <div className="flex items-center justify-center bg-white px-3 py-1.5  gap-1 rounded-full text-xs">
                    <Rocket className="w-3 h-3 text-purple-600" />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">Unleash Your Potential</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-medium mt-2 leading-[1.2]">
                    Explosive social media growth &<br />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Marketing leads</span> 
                     
                </h2>
                <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">Achieve your goals fast, safe automated tools</p>
                <button type="button" className="bg-[#000000] text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300"> 
                    <Link to="/join" className="flex items-center gap-2">
                        Join Now
                    </Link>
                </button>
            </div>
        </div>
    )
  
}

export default CallToAction
