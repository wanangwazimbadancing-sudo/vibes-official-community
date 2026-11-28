import { createElement } from "react"
import { ShoppingBag, Radio, Workflow, UserCircle,ScissorsLineDashedIcon } from "lucide-react"

export const HomeIcon = () =>
  createElement(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    },
    createElement("path", {
      d: "M18.333 10.17v1.267c0 3.251 0 4.876-.977 5.886-.976 1.01-2.547 1.01-5.69 1.01H8.333c-3.143 0-4.714 0-5.69-1.01-.977-1.01-.977-2.635-.977-5.886V10.17c0-1.907 0-2.86.433-3.651.432-.79 1.223-1.281 2.804-2.262l1.666-1.035C8.241 2.185 9.076 1.667 10 1.667s1.76.518 3.43 1.555l1.667 1.035c1.58.98 2.371 1.471 2.804 2.262M12.5 15h-5",
      stroke: "#575757",
      strokeOpacity: ".8",
      strokeWidth: "1.5",
      strokeLinecap: "round",
    }),
  )

export const navigationItems = [
  { label: "Home", icon: HomeIcon, to: "/auth" },
  { label: "videoclip", icon: ScissorsLineDashedIcon, to: "/auth/clipping" },
  { label: "Stream", icon: Radio, to: "/auth/stream" },
  { label: "Store", icon: ShoppingBag, to: "/auth/store" },
  { label: "Automation", icon: Workflow, to: "/auth/automation" },
]



export const mobileNavigationItems = [
  { label: "Home", icon: HomeIcon, to: "/auth" },
  { label: "Store", icon: ShoppingBag, to: "/auth/store" },
  { label: "videoclip", icon: ScissorsLineDashedIcon, to: "/auth/clipping" },
  { label: "Stream", icon: Radio, to: "/auth/stream" },
  { label: "Profile", icon: UserCircle, to: "/auth/profile" },
]


