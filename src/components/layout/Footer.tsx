import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">P</span>
              </div>
              <span className="font-heading font-semibold text-lg">Pixelprophett Labs</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Web · Automation · Data · Videos · Design
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Ideas → Systems → Screens"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Work", path: "/work" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919381904726"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  +91 93819 04726
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919381904726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pixelprophett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@pixelprophett.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pixelprophett Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/pixelprophett"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/919381904726"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="mailto:hello@pixelprophett.com"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
