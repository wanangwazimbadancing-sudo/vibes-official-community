import { useEffect, useState } from "react"
import SideBar from "../Components/NavBars/SideBar"
import Herosection from "../Components/Pagecomponents/Herosection"
import Latest from "../Components/Pagecomponents/Latest"
import Stores from "../Components/Pagecomponents/Stores"

const AuthenticatedUser = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  useEffect(() => {
    const collapseOnSmallScreen = () => {
      if (window.innerWidth < 768) setSidebarExpanded(false)
    }

    collapseOnSmallScreen()
    window.addEventListener("resize", collapseOnSmallScreen)
    return () => window.removeEventListener("resize", collapseOnSmallScreen)
  }, [])

  return (
    <div className="flex min-h-screen w-full bg-zinc-50">
      <SideBar
        expanded={sidebarExpanded}
        onExpandedChange={setSidebarExpanded}
      />
      <main className="relative z-10 min-w-0 flex-1">
        <Herosection />
        <Latest />
        <Stores />
      </main>
    </div>
  )
}

export default AuthenticatedUser
