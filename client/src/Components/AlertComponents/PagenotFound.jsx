import { Link } from 'react-router-dom'

const PagenotFound = () => {
  return (
        <div className="h-[100dvh] flex flex-col items-center justify-center text-sm max-md:px-4">
            <h1 className="text-8xl md:text-9xl font-sm text-slate-300">404</h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</p>
          <div className="flex items-center gap-4 mt-6">
                <Link to="/" className="bg-gray-100 hover:bg-gray-300  px-7 py-2.5  rounded-md active:scale-95 transition-all">
                    Return Home
                </Link>

            </div>
        </div>
  )
}

export default PagenotFound