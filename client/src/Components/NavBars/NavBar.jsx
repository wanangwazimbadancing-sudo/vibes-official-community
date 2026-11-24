import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AlignRight, ChevronRight,  X } from "lucide-react"


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["About", "Testimonial", "FAQ", "Contact", "Latest", "Store"];

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
      <header className="fixed inset-x-0 top-0 z-[100] flex h-16 items-center justify-between border-b border-zinc-200/80 bg-white/95 px-4 backdrop-blur-md md:hidden">
        <Link to="/" className="logo text-xl text-black" aria-label="OnTrib home">
          OnTrib
        </Link>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-black transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {open ? <X size={24} /> : <AlignRight size={24} />}
        </button>
      </header>

      {/* desktop navigation */}
      <header className="fixed inset-x-0 top-0 z-[111] hidden h-16 items-center border-b border-zinc-200/80 bg-white/95 backdrop-blur-md md:flex">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 lg:px-10">
          <Link to="/" className="logo flex shrink-0 text-lg text-black" aria-label="OnTrib home">
            OnTrib
          </Link>

          <nav aria-label="Desktop navigation" className="flex items-center gap-1 rounded-full border border-zinc-200/80 bg-zinc-50/80 p-1 mx-auto">
            <a href="#About" onClick={() => setActiveSection("About")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "About" ? "bg-white font-semibold text-black shadow-sm" : "text-zinc-600 hover:text-black"}`}>About</a>

            <a href="#Testimonial" onClick={() => setActiveSection("Testimonial")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "Testimonial" ? "bg-white font-semibold text-black shadow-sm" : "text-zinc-600 hover:text-black"}`}>Testimonial</a>

            <a href="#FAQ" onClick={() => setActiveSection("FAQ")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "FAQ" ? "bg-white font-semibold text-black shadow-sm" : "text-zinc-600 hover:text-black"}`}>FAQ</a>

            <a href="#Contact" onClick={() => setActiveSection("Contact")} className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === "Contact" ? "bg-white font-semibold text-black shadow-sm" : "text-zinc-600 hover:text-black"}`}>Contact</a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link to="/login" className="flex h-9 min-w-16 items-center justify-center rounded-md border border-zinc-300 px-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 active:scale-95">
              Log in
            </Link>
            <Link to="/join" className="flex h-9 min-w-20 items-center justify-center rounded-md bg-black px-3 text-sm font-medium text-white transition hover:bg-zinc-800 active:scale-95">
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
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,360px)] flex-col overflow-y-auto overscroll-contain bg-white px-5 py-6 text-black shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-1">
            <a href="#About" onClick={() => { setActiveSection("About"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50 ${activeSection === "About" ? "font-bold" : ""}`}>
              About <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#Testimonial" onClick={() => { setActiveSection("Testimonial"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50 ${activeSection === "Testimonial" ? "font-bold" : ""}`}>
              Testimonial <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#FAQ" onClick={() => { setActiveSection("FAQ"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50 ${activeSection === "FAQ" ? "font-bold" : ""}`}>
              FAQ <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#Contact" onClick={() => { setActiveSection("Contact"); setOpen(false); }} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-zinc-50 ${activeSection === "Contact" ? "font-bold" : ""}`}>
              Contact <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-6">
            <Link to="/login" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-lg border border-zinc-300 px-4 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-50">
              Log in
            </Link>
            <Link to="/join" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-lg bg-zinc-950 px-4 text-center text-base font-medium text-white transition-colors hover:bg-zinc-800">
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
