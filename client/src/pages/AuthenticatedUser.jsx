import { useEffect, useState } from "react"
import SideBar from "../Components/NavBars/SideBar"
import MobileNav from "../Components/NavBars/MobileNav"
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
    <div className="flex min-h-screen w-full">
      <div className="hidden md:block">
        <SideBar
          expanded={sidebarExpanded}
          onExpandedChange={setSidebarExpanded}
        />
      </div>
      <main className="relative z-10 min-w-0 flex-1 pb-[82px] md:pb-0">
        <Herosection />
        <Latest />
        <Stores />
      </main>
      <MobileNav />
    </div>
  )
}

export default AuthenticatedUser
