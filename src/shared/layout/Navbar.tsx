import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SITE_NAME } from "../../utils/constants";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-slate-200/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" id="logo-link">
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary-400 to-primary-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-primary-400/20 group-hover:shadow-primary-400/30 transition-shadow duration-300">
              P
            </div>
            <div>
              <span
                className={`block text-xl font-display font-bold tracking-tight transition-colors ${scrolled ? "text-neutral-900" : "text-white"}`}
              >
                {SITE_NAME}
              </span>
              <span
                className={`hidden text-xs font-medium transition-colors sm:block ${scrolled ? "text-neutral-500" : "text-white/65"}`}
              >
                Medical Transportation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-${link.label.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary-600 bg-primary-50"
                    : scrolled
                      ? "text-neutral-600 hover:text-primary-700 hover:bg-primary-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className={`ml-3 hidden items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors lg:flex ${
                scrolled
                  ? "text-neutral-600 hover:text-primary-700 hover:bg-primary-50"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} />
              {COMPANY_INFO.email}
            </a>
            <a href={`tel:${COMPANY_INFO.phone}`} className="ml-2">
              <Button size="sm">
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Now
              </Button>
            </a>
            <Link to="/contact" className="ml-1 hidden lg:block">
              <Button variant="outline" size="sm">
                Get Assistance
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? "hover:bg-primary-50" : "hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${scrolled ? "bg-neutral-900" : "bg-white"} ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${scrolled ? "bg-neutral-900" : "bg-white"} ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${scrolled ? "bg-neutral-900" : "bg-white"} ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-neutral-200 px-4 py-4 space-y-1 shadow-xl shadow-slate-200/50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary-600 bg-primary-50"
                  : "text-neutral-600 hover:text-primary-700 hover:bg-primary-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <div className="mb-3 grid gap-2 rounded-xl bg-primary-50 p-4 text-sm text-neutral-700">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 font-semibold hover:text-primary-700"
              >
                <Phone className="h-4 w-4 text-primary-600" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 font-semibold hover:text-primary-700"
              >
                <Mail className="h-4 w-4 text-primary-600" />
                {COMPANY_INFO.email}
              </a>
            </div>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button fullWidth size="md">
                Get Assistance
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
