import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";


const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/pxplabs-logo-black.png" alt="PXP Lab" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading font-medium text-sm">PXP Lab</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI Studio for Modern Businesses
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 hover:bg-card/70 transition-colors group"
            >
              <img src="/ignition-logo.jpg" alt="Ignition" className="w-4 h-4 rounded-full object-cover" />
              <span className="text-xs text-muted-foreground">
                Powered by <span className="text-foreground">Ignition in AI Era</span>
              </span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">Navigate</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Social"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {["Websites", "AI Automation", "AI Marketing", "Software", "Data & Leads"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-sm mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919381904726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ignition CTA Strip */}
        <div className="mt-16 pt-12 border-t border-border/40 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">For Builders</p>
            <p className="text-sm text-muted-foreground mb-3">Need to learn AI and connect with builders?</p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-foreground font-medium hover:underline"
            >
              Visit Ignition in AI Era <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">For Businesses</p>
            <p className="text-sm text-muted-foreground mb-3">Need AI solutions for your business?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm text-foreground font-medium hover:underline"
            >
              You're already in the right place <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PXP Lab
          </p>
          <p className="text-xs text-muted-foreground">
            AI Studio for Modern Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
