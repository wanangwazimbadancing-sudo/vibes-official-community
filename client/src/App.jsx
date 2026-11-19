import {  Route, Routes } from "react-router-dom"
import FAQ from "./Components/FAQ"
import Footer from "./Components/Footer"
import Herosection from "./Components/Herosection"
import Latest from "./Components/Latest"
import NavBar from "./Components/NavBar"
import SignUp from "./Components/AuthComponents/SignUp"
import Stores from "./Components/Stores"
import Login from "./Components/AuthComponents/Login"
import Verification from "./Components/AuthComponents/Verification"
import PasswordReset from "./Components/AuthComponents/PasswordReset"
import PagenotFound from "./Components/ErrorHandlers/PagenotFound"

const App = () => {
  return (

    <div className="App">

      <Routes>

{/*---------------------- landing page--------------------- */}



      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Herosection />
            <Latest />
            <Stores />
            <FAQ />
            <Footer />
          </>
        }
      />

        {/*------------ Auth Routes ----------------*/}

      <Route path="/join" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<PasswordReset />} />
      <Route path="/verify" element={<Verification />} />

        {/*------------------ error handlers ----------------- */}
      <Route path='/page1'  element={<PagenotFound/>}/>
    </Routes>


    </div>




  )
}

export default App
