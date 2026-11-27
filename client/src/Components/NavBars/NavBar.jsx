import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AlignRight, ChevronRight,  X } from "lucide-react"
import Logo from "./Logo";


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["About", "Testimonial", "FAQ", "Contact", "LiveTrade", "Store"];

    const updateActiveSection = () => {
      const offset = window.innerHeight * 0.25;
      let currentSection = "";
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const distance = Math.abs(section.getBoundingClientRect().top - offset);
        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    let frameId;
    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] flex h-16 items-center justify-between border-b border-zinc-800/80 bg-zinc-950/95 px-4 text-zinc-100 backdrop-blur-md md:hidden">
        <Logo />
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-zinc-100 transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {open ? <X size={24} /> : <AlignRight size={24} />}
        </button>
      </header>

      {/* desktop navigation */}
      <header className="fixed inset-x-0 top-0 z-[111] hidden h-16 items-center border-b border-zinc-800/80 bg-zinc-950/95 text-zinc-100 backdrop-blur-md md:flex">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 lg:px-10">
          <Link to="/" className="logo flex shrink-0 text-lg text-white" aria-label="OnTrib home">
            OnTrib
          </Link>

          <nav aria-label="Desktop navigation" className="mx-auto flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/80 p-1">
            <a href="#About" onClick={() => setActiveSection("About")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "About" ? "bg-zinc-700 font-semibold text-white shadow-sm" : "text-zinc-300 hover:text-white"}`}>About</a>

            <a href="#Testimonial" onClick={() => setActiveSection("Testimonial")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "Testimonial" ? "bg-zinc-700 font-semibold text-white shadow-sm" : "text-zinc-300 hover:text-white"}`}>Testimonial</a>

            <a href="#FAQ" onClick={() => setActiveSection("FAQ")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "FAQ" ? "bg-zinc-700 font-semibold text-white shadow-sm" : "text-zinc-300 hover:text-white"}`}>FAQ</a>

            <a href="#Contact" onClick={() => setActiveSection("Contact")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "Contact" ? "bg-zinc-700 font-semibold text-white shadow-sm" : "text-zinc-300 hover:text-white"}`}>Contact</a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link to="/login" className="flex h-9 min-w-16 items-center justify-center rounded-md border border-zinc-700 px-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 active:scale-95">
              Log in
            </Link>
            <Link to="/join" className="flex h-9 min-w-20 items-center justify-center rounded-md bg-indigo-600 px-3 text-sm font-medium text-white transition hover:bg-indigo-500 active:scale-95">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-16 z-[90] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,360px)] flex-col overflow-y-auto overscroll-contain bg-zinc-950 px-5 py-6 text-zinc-100 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-1">
            <a href="#About" onClick={() => { setActiveSection("About"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base text-zinc-200 hover:bg-zinc-800 ${activeSection === "About" ? "font-bold text-white" : ""}`}>
              About <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#Testimonial" onClick={() => { setActiveSection("Testimonial"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base text-zinc-200 hover:bg-zinc-800 ${activeSection === "Testimonial" ? "font-bold text-white" : ""}`}>
              Testimonial <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#FAQ" onClick={() => { setActiveSection("FAQ"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base text-zinc-200 hover:bg-zinc-800 ${activeSection === "FAQ" ? "font-bold text-white" : ""}`}>
              FAQ <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#Contact" onClick={() => { setActiveSection("Contact"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base text-zinc-200 hover:bg-zinc-800 ${activeSection === "Contact" ? "font-bold text-white" : ""}`}>
              Contact <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-800 pt-6">
            <Link to="/login" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-lg border border-zinc-700 px-4 text-base font-medium text-zinc-200 transition-colors hover:bg-zinc-800">
              Log in
            </Link>
            <Link to="/join" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-lg bg-indigo-600 px-4 text-center text-base font-medium text-white transition-colors hover:bg-indigo-500">
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
