import Herosection from "../Components/Herosection"
import Latest from "../Components/Latest"
import NavBar from "../Components/NavBar"
import Stores from "../Components/Stores"

const AuthenticatedUser = () => {
  return (
<>
<NavBar />
<Herosection />
<Latest />
<Stores />
</>
  )
}

export default AuthenticatedUser
