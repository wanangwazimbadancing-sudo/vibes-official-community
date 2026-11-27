import { WifiOff } from 'lucide-react'
const NetworkError = () => {

const handleRetry = () => {
  window.location.reload();
}

  return (



        <div className="fixed bottom-4 left-5 flex items-center justify-between max-w-80 w-full bg-black/60 backdrop-blur-[10px] text-gray-200 px-3 h-10 rounded-md z-111111 ">
            <div className="flex items-center">
               <WifiOff className='w-5 h-5' />
                <p className="text-sm ml-2">Oops! Your are offline.</p>
            </div>   

             <button onClick={handleRetry}  className='px-4 py-1 bg-zinc-200 text-zinc-950 text-sm rounded'>refresh</button>
        </div>



  )
}

export default NetworkError