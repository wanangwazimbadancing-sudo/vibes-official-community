import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {PanelLeft} from "lucide-react"
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
      className={`sticky top-0 z-20 flex h-screen shrink-0 flex-col border-r border-zinc-100/80 bg-white px-3 py-5 text-zinc-900 transition-[width] duration-300 ${
        isExpanded ? "w-[260px]" : "w-[60px]"
      }`}
      aria-label="Primary navigation"
    >
      <div className={`flex h-12 items-center ${isExpanded ? "justify-between px-2" : "justify-center"}`}>
        {isExpanded && (
          <Link to="/" className="logo text-[20px] font-semibold text-zinc-950" aria-label="OnTrib home">
            OnTrib
          </Link>
        )}
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          aria-expanded={isExpanded}
          className="grid size-9 place-items-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          <PanelLeft size={21} strokeWidth={1.8} />
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
              className={`flex h-12 items-center rounded-xl transition-colors ${
                isExpanded ? "gap-3 px-3" : "justify-center"
              } ${
                active
                  ? "bg-zinc-100 font-semibold text-zinc-950"
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"
              }`}
            >
              <Icon size={21} strokeWidth={active ? 2 : 1.5} aria-hidden="true" />
              {isExpanded && <span className="text-[15px]">{label}</span>}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default SideBar