import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../.././Components/NavBars/SideBar"
import MobileNav from "../.././Components/NavBars/MobileNav"
import AuthNavTop from "../.././Components/NavBars/AuthNavTop"

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
      <div className="hidden shrink-0 md:block">
        <SideBar
          expanded={sidebarExpanded}
          onExpandedChange={setSidebarExpanded}
        />
      </div>
      <main className="relative z-10 min-w-0 flex-1 pb-[82px] md:pb-0">
        <AuthNavTop />
        <Outlet />
      </main>
      <MobileNav />
    </div>
  )
}

export default AuthenticatedUser
