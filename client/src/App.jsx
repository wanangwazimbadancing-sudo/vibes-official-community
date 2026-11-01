import Blog from "./Components/Blog"
import FAQ from "./Components/FAQ"
import Footer from "./Components/Footer"
import Herosection from "./Components/Herosection"
import Latest from "./Components/Latest"
import NavBar from "./Components/NavBar"
import News from "./Components/News"
import Products from "./Components/Products"
import Treasure from "./Components/Treasure"

const App = () => {
  return (
    <>
    <NavBar />
    <Herosection />
    <Latest />
    <News />
    <Products />
    <Blog />
    <FAQ />
   <Treasure />
    <Footer />
    </>
  )
}

export default App
