import {  Route, Routes } from "react-router-dom"

import SignUp from "./Components/AuthComponents/SignUp"
import Login from "./Components/AuthComponents/Login"
import Verification from "./Components/AuthComponents/Verification"
import PasswordReset from "./Components/AuthComponents/PasswordReset"
import PagenotFound from "./Components/AlertComponents/PagenotFound"

//------------------- Landing page -------------------//


import LandingPage from "./pages/LandingPage"
import AuthenticatedUser from "./pages/AuthenticatedUser/AuthenticatedUser"
import { useEffect, useState } from "react"
import NetworkError from "./Components/AlertComponents/NetworkError"
import VideoClipping from "./pages/AuthenticatedUser/VideoClipping"
import MultiStreaming from "./pages/AuthenticatedUser/MultiStreaming"
import MyStore from "./pages/AuthenticatedUser/MyStore"
import Automations from "./pages/AuthenticatedUser/Automations"
import Profile from "./pages/AuthenticatedUser/Profile"
import DashboardHome from "./pages/AuthenticatedUser/DashboardHome"

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
      <Route path="/auth" element={<AuthenticatedUser />}>
        <Route index element={<DashboardHome />} />
        <Route path="clipping" element={<VideoClipping />} />
        <Route path="stream" element={<MultiStreaming />} />
        <Route path="store" element={<MyStore />} />
        <Route path="automation" element={<Automations />} />
        <Route path="profile" element={<Profile />} />
      </Route>

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


    </div>




  )
}

export default App
