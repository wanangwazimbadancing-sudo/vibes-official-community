import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AlignRight, ChevronRight, LogIn, X } from "lucide-react"


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
      <div className="fixed top-60 -left-50 z-[111] hidden w-full max-w-[500px] max-h-[100px] rotate-90 md:flex">
        <Link to="/" className="logo flex text-lg text-black -rotate-90" aria-label="OnTrib home">OnTrib</Link>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <a href="#About" onClick={() => setActiveSection("About")} className={activeSection === "About" ? "font-bold text-black" : "text-gray-800"}>About</a>
          <ChevronRight size={14} className="text-gray-400" />
          <a href="#Testimonial" onClick={() => setActiveSection("Testimonial")} className={activeSection === "Testimonial" ? "font-bold text-black" : "text-gray-800"}>Testimonial</a>
          <ChevronRight size={14} className="text-gray-400" />
          <a href="#FAQ" onClick={() => setActiveSection("FAQ")} className={activeSection === "FAQ" ? "font-bold text-black" : "text-gray-800"}>FAQ</a>
          <ChevronRight size={14} className="text-gray-400" />
          <a href="#Contact" onClick={() => setActiveSection("Contact")} className={activeSection === "Contact" ? "font-bold text-black" : "text-gray-800"}>Contact</a>
        </div>
      </div>

      <span className="fixed bg-white w-[150px] top-3 right-4 z-[111] hidden gap-2 md:flex rounded-md">
        <Link to="/login" className="flex min-h-8 min-w-15 items-center justify-center rounded-md border border-gray-400/30 px-2 py-2 text-sm text-gray-500 transition active:scale-95">
          login
        </Link>
        <Link to="/join" className="flex min-h-8 min-w-15 items-center justify-center rounded-md bg-black px-1 text-center text-sm text-white">signUp</Link>
      </span>

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
