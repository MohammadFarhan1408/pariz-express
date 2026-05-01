import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE_NAME, COMPANY_INFO } from '../../utils/constants';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-neutral-950 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-secondary-500 to-secondary-600 flex items-center justify-center font-bold text-white text-lg">
                P
              </div>
              <span className="text-xl font-display font-bold text-white">{SITE_NAME}</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Premium logistics and last-mile delivery solutions for businesses across the nation.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-lg bg-dark-elevated border border-dark-border flex items-center justify-center text-neutral-400 hover:text-secondary-400 hover:border-secondary-500/50 transition-all duration-200"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-secondary-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['Last Mile Delivery', 'E-commerce Fulfillment', 'Retail Distribution', 'White Glove Delivery', 'Tracking & Technology'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-neutral-400 hover:text-secondary-400 text-sm transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="mt-0.5"><Mail className='w-5 h-5' /></span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-secondary-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="mt-0.5"><Phone className='w-5 h-5' /></span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-secondary-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="mt-0.5"><MapPin className='w-5 h-5' /></span>
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
