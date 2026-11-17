import { Route, Routes } from "react-router-dom"
import FAQ from "./Components/FAQ"
import Footer from "./Components/Footer"
import Herosection from "./Components/Herosection"
import Latest from "./Components/Latest"
import NavBar from "./Components/NavBar"
import SignUp from "./Components/AuthComponents/SignUp"
import Stores from "./Components/Stores"

const App = () => {
  return (
    <Routes>
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
      <Route path="/join" element={<SignUp />} />
    </Routes>
  )
}

export default App
