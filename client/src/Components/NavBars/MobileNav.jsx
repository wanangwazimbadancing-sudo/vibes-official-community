import { Link, useLocation } from "react-router-dom"
import {mobileNavigationItems} from "../../assets/NavDummyData"

const MobileNav = () => {
  const location = useLocation()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[70] grid h-[82px] grid-cols-5 items-start border-t border-zinc-800/90 bg-zinc-950 px-1 pt-3 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(0,0,0,0.35)] md:hidden"
      aria-label="Mobile navigation"
    >
      {mobileNavigationItems.map(({ label, icon: Icon, to }) => {
        const active = location.pathname === to

        return (
          <Link
            key={label}
            to={to}
            aria-current={active ? "page" : undefined}
            className={`flex min-w-0 flex-col items-center gap-1.5 text-[12px] leading-none transition-colors ${
              active ? "font-semibold text-white" : "text-zinc-400"
            }`}
          >
            <span
              className={`grid size-10 place-items-center rounded-xl ${
                active ? "bg-zinc-800" : ""
              }`}
            >
              <Icon
                size={25}
                strokeWidth={active ? 2.3 : 1.4}
                aria-hidden="true"
              />
            </span>
            <span className="truncate">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileNav
