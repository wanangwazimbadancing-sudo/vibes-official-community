import Herosection from "../Components/Pagecomponents/Herosection"
import Latest from "../Components/Pagecomponents/Latest"
import NavBar from "../Components/Pagecomponents/NavBar"
import Stores from "../Components/Pagecomponents/Stores"

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
