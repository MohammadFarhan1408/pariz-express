import { Link } from "react-router-dom";
import {
  COMPANY_INFO,
  NAV_LINKS,
  SERVICES,
  SITE_NAME,
} from "../../utils/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import ParizExpressLogo from "../../assets/images/pariz-express-light.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: FaXTwitter },
    { name: "LinkedIn", icon: FaLinkedinIn },
    { name: "Facebook", icon: FaFacebook },
    { name: "Instagram", icon: FaInstagram },
  ];

  return (
    <footer id="site-footer" className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-300">
              Need medical transportation?
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Book a safe, reliable ride with Pariz Express.
            </h3>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary-400 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-primary-400/20 transition-all hover:bg-primary-500"
            >
              Get Assistance
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-primary-300 hover:text-primary-200"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={ParizExpressLogo}
                alt={SITE_NAME}
                className="w-full h-auto max-w-37.5 object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Compassionate non-emergency medical transportation for patients,
              families, and care teams who need dependable support.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary-300 hover:border-primary-300/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-primary-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-slate-300 hover:text-primary-300 text-sm transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="mt-0.5">
                  <Mail className="w-5 h-5" />
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-primary-300 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="mt-0.5">
                  <Phone className="w-5 h-5" />
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-primary-300 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="mt-0.5">
                  <MapPin className="w-5 h-5" />
                </span>
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-primary-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
