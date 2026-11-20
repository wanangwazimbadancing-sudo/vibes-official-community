
import { useEffect, useState } from "react"
import CallToAction from "../Components/CallToAction"
import FAQ from "../Components/FAQ"
import Herosection from "../Components/Herosection"
import NavBar from "../Components/NavBar"


const LandingPage = () => {

  const[isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnline, setShowOnline] = useState(navigator.onLine);
 const handleOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  }

  useEffect(() => {
    if (!isOnline) {
      setShowOnline(false);
      return;
    }

    setShowOnline(true);
    const timeoutId = window.setTimeout(() => setShowOnline(false), 5000);

    return () => window.clearTimeout(timeoutId);
  }, [isOnline]);

  useEffect(() => {
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  return (
<>


           
            <NavBar />
            <Herosection />
            <FAQ />
            <CallToAction />
            
        {isOnline ? (showOnline && <p className="online-status fixed bg-[#10f300] text-white grid place-items-center w-full h-6 bottom-0">Online</p>) : (<p className="fixed bg-black text-white grid place-items-center w-full h-6 bottom-0">Offline</p>)}


</>
  )
}

export default LandingPage
