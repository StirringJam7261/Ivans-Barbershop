import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <img src={logo} alt="Ivan's Barbershop" className="h-12 w-auto mb-4" />
            <p className="font-roboto text-secondary-foreground/80">
              Fresh cuts. Sharp fades. Real community vibes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-2xl text-secondary-foreground mb-4 tracking-wide">
              QUICK LINKS
            </h3>
            <div className="space-y-2">
              <Link
                to="/services"
                className="block font-roboto text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block font-roboto text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="block font-roboto text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block font-roboto text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bebas text-2xl text-secondary-foreground mb-4 tracking-wide">
              CONNECT WITH US
            </h3>
            <div className="space-y-2 mb-4">
              <a
                href="https://maps.google.com/?q=916+W+Division+St+Suite+B,+Arlington,+TX+76012"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-roboto text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                916 W Division St Suite B<br />
                Arlington, TX 76012
              </a>
              <a 
                href="tel:+18179872555" 
                className="block font-roboto text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                (817) 987-2555
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/ivans_barbershop_tx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="font-roboto text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Ivan's Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
