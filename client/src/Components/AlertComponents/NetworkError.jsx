import { WifiOff } from 'lucide-react'
const NetworkError = () => {

const handleRetry = () => {
  window.location.reload();
}

  return (



        <div className="fixed bottom-4 left-5 flex items-center justify-between max-w-80 w-full bg-red-600/30 backdrop-blur-[20px] text-red-600 px-3 h-10 rounded-md ">
            <div className="flex items-center">
               <WifiOff className='w-7 h-7' />
                <p className="text-sm ml-2">Oops! Your are offline.</p>
            </div>   

             <button onClick={handleRetry}  className=' px-4 py-1 bg-white text-black text-sm rounded'>Retry</button>
        </div>



  )
}

export default NetworkError