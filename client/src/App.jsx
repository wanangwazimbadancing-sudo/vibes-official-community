import {  Route, Routes } from "react-router-dom"

import SignUp from "./Components/AuthComponents/SignUp"
import Login from "./Components/AuthComponents/Login"
import Verification from "./Components/AuthComponents/Verification"
import PasswordReset from "./Components/AuthComponents/PasswordReset"
import PagenotFound from "./Components/AlertComponents/PagenotFound"

//------------------- Landing page -------------------//


import LandingPage from "./pages/LandingPage"
import AuthenticatedUser from "./pages/AuthenticatedUser"
import Footer from "./Components/Pagecomponents/Footer"
import { useEffect, useState } from "react"
import NetworkError from "./Components/AlertComponents/NetworkError"

const App = () => {

//------------- internet connection

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

    <div className="App">

      <Routes>

{/*----------------------  pages --------------------- */}



      <Route path="/" element={<LandingPage /> }/>
      <Route path="/auth" element={<AuthenticatedUser /> }/>

        {/*------------ Auth Routes ----------------*/}

      <Route path="/join" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<PasswordReset />} />
      <Route path="/verify" element={<Verification />} />

   {/*------------------ error handlers ----------------- */}
      <Route path='*'  element={<PagenotFound/>}/>
    </Routes>

{/*----------- offline alert ----------- */}

{!isOnline && (<NetworkError />)}


<Footer />
    </div>




  )
}

export default App
