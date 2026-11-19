import { WifiOff } from 'lucide-react'
const NetworkError = () => {

const handleRetry = () => {
  window.location.reload();
}

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <WifiOff className='w-16 h-16 text-gray-300 mb-4' />
      <div>Network Error</div>
      <button onClick={handleRetry}  className='mt-4 px-4 py-1 bg-black text-white text-sm rounded'>Retry</button>
    </div>
  )
}

export default NetworkError