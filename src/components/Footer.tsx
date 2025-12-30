import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Events", href: "/events" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Pulmonology Care", href: "/#services" },
      { name: "Muscle Recovery", href: "/#services" },
      { name: "Vascular Health", href: "/#services" },
    ],
    support: [
      { name: "Virtual Health Hub", href: "/" },
      { name: "Book Appointment", href: "https://calendly.com/" },
      { name: "FAQ", href: "/about#faq" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-agape py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="flex items-center gap-2 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="18" fill="rgba(255,255,255,0.1)" />
                  <path
                    d="M20 8C15 8 11 12 11 17C11 22 15 26 20 26C25 26 29 22 29 17"
                    stroke="url(#gradient1-footer)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M29 17C29 12 25 8 20 8"
                    stroke="url(#gradient2-footer)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="17" r="3" fill="hsl(224, 76%, 48%)" />
                  <defs>
                    <linearGradient id="gradient1-footer" x1="11" y1="8" x2="29" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="hsl(224, 76%, 48%)" />
                      <stop offset="1" stopColor="hsl(4, 87%, 68%)" />
                    </linearGradient>
                    <linearGradient id="gradient2-footer" x1="29" y1="8" x2="20" y2="17" gradientUnits="userSpaceOnUse">
                      <stop stopColor="hsl(4, 87%, 68%)" />
                      <stop offset="1" stopColor="hsl(224, 76%, 48%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-background leading-tight">Agape</span>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-background/60 uppercase">Medical</span>
                </div>
              </Link>
            </div>
            <p className="text-background/70 max-w-sm leading-relaxed">
              At Agape, we are architects of well-being, passionately dedicated to crafting an extraordinary healthcare experience.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-background/50 text-sm">
            © {currentYear} Agape Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
