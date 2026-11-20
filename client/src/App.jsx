import {  Route, Routes } from "react-router-dom"

import SignUp from "./Components/AuthComponents/SignUp"
import Login from "./Components/AuthComponents/Login"
import Verification from "./Components/AuthComponents/Verification"
import PasswordReset from "./Components/AuthComponents/PasswordReset"
import PagenotFound from "./Components/ErrorHandlers/PagenotFound"

//------------------- Landing page -------------------//


import LandingPage from "./pages/LandingPage"
import AuthenticatedUser from "./pages/AuthenticatedUser"
import Footer from "./Components/Footer"

const App = () => {
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



<Footer />
    </div>




  )
}

export default App
