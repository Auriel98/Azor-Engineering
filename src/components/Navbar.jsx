import { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "hero", label: "Accueil" },
    { to: "services", label: "Prestations" },
    { to: "about", label: "A propos" },
    { to: "contact", label: "Contact" },
  ];

  const handleNavigation = (section) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      scroller.scrollTo(section, { smooth: true, duration: 600, offset: -70 });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, { smooth: true, duration: 600, offset: -70 });
      }, 300);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigation("hero")}
        >
          <img
            src="/Logo_AZOR.png"
            alt="Azor Engineering"
            className="h-14 md:h-16 lg:h-20 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <button
                onClick={() => handleNavigation(l.to)}
                className={`relative font-semibold cursor-pointer text-sm tracking-widest uppercase transition-colors duration-200 group ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {l.label}
                {/* Underline hover effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNavigation("contact")}
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-xl font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-blue-200 hover:shadow-md"
        >
          Nous contacter
        </button>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-xl transition-colors duration-200 ${
            scrolled ? "text-gray-800" : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg px-6 pb-6 pt-3 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.to}
              onClick={() => handleNavigation(l.to)}
              className="w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 rounded-lg font-semibold uppercase text-sm tracking-widest transition-all duration-200"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNavigation("contact")}
            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold uppercase text-sm tracking-wider transition-all duration-200"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </nav>
  );
}