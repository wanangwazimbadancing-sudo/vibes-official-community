import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {PanelLeft, User} from "lucide-react"
import {navigationItems} from "../../assets/NavDummyData"


const SideBar = ({ expanded = true, onExpandedChange }) => {
  const [internalExpanded, setInternalExpanded] = useState(expanded)
  const isExpanded = onExpandedChange ? expanded : internalExpanded
  const location = useLocation()

  const toggleSidebar = () => {
    const nextExpanded = !isExpanded
    if (onExpandedChange) {
      onExpandedChange(nextExpanded)
    } else {
      setInternalExpanded(nextExpanded)
    }
  }

  return (
    <aside
      className={`sticky top-0 z-20 flex h-screen shrink-0 flex-col  bg-zinc-950 px-3 pt-5 text-zinc-100 border-r border-zinc-900 transition-[width] duration-300 ${
        isExpanded ? "w-[260px]" : "w-[70px]"
      }`}
      aria-label="Primary navigation"
    >
      <div className={`flex h-12 items-center ${isExpanded ? "justify-between px-2" : "justify-center"}`}>
        {isExpanded && (
          <Link to="/auth" className="logo text-[20px] font-semibold text-white" aria-label="OnTrib home">
            OnTrib
          </Link>
        )}
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          aria-expanded={isExpanded}
          className="grid size-9 place-items-center rounded-lg text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <PanelLeft size={19} strokeWidth={1.8} className=" absolute text-[#575757]" />
        </button>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-2" aria-label="App navigation">
        {navigationItems.map(({ label, icon: Icon, to }) => {
          const active = location.pathname === to

          return (
            <Link
              key={label}
              to={to}
              title={!isExpanded ? label : undefined}
              aria-current={active ? "page" : undefined}
              className={`flex h-10 items-center rounded-sm transition-colors ${
                isExpanded ? "gap-3 px-3" : "justify-center"
              } ${
                active
                  ? "bg-zinc-900  text-[#8f8f8f]"
                  : "text-[#575757] hover:bg-zinc-900"
              }`}
            >
              <Icon size={18} strokeWidth={1.8}  aria-hidden="true" />
              {isExpanded && <span className="text-[15px]">{label}</span>}
            </Link>
          )
        })}
      </nav>
      <Link
        to="/auth/profile"
        title={!isExpanded ? "Profile" : undefined}
        aria-current={location.pathname === "/auth/profile" ? "page" : undefined}
        className={`flex h-10 items-center rounded-sm transition-colors ${
          isExpanded ? "gap-3 px-3" : "justify-center"
        } ${
          location.pathname === "/auth/profile"
            ? "bg-zinc-900 text-gray-400"
            : "text-[#575757] hover:bg-zinc-900"
        }`}
      >
        <User size={21} strokeWidth={1.8} aria-hidden="true" />
        {isExpanded && <span className="text-[15px]">Profile</span>}
      </Link>
    </aside>
  )
}

export default SideBar