import {  Route, Routes } from "react-router-dom"

import SignUp from "./Components/AuthComponents/SignUp"
import Login from "./Components/AuthComponents/Login"
import Verification from "./Components/AuthComponents/Verification"
import PasswordReset from "./Components/AuthComponents/PasswordReset"
import PagenotFound from "./Components/ErrorHandlers/PagenotFound"

//------------------- Landing page -------------------//


import LandingPage from "./pages/LandingPage"

const App = () => {
  return (

    <div className="App">

      <Routes>

{/*---------------------- landing page--------------------- */}



      <Route path="/" element={<LandingPage /> }/>

        {/*------------ Auth Routes ----------------*/}

      <Route path="/join" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<PasswordReset />} />
      <Route path="/verify" element={<Verification />} />

   {/*------------------ error handlers ----------------- */}
      <Route path='*'  element={<PagenotFound/>}/>
    </Routes>


    </div>




  )
}

export default App
