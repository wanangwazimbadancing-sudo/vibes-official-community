import FAQ from "../Components/LandingPageComponents/FAQ"
import Herosection from "../Components/Pagecomponents/Herosection"
import NavBar from "../Components/NavBars/NavBar"
import Testimonial from "../Components/LandingPageComponents/Testimonial"
import CallToAction from "../Components/LandingPageComponents/CallToAction"
import About from "../Components/LandingPageComponents/About"
import Features from "../Components/LandingPageComponents/Features"
import Footer from "../Components/Pagecomponents/Footer"


const LandingPage = () => {



  return (
<>


           
            <NavBar />
            <Herosection />
            <About />
            <Testimonial />
            <FAQ />
            <Features />
            <CallToAction />
            
            <Footer />
            

</>
  )
}

export default LandingPage
