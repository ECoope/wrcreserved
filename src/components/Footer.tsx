import { Link } from "react-router-dom";
import { Wine, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wine className="h-6 w-6" />
              <span className="font-serif text-lg font-bold">Western Wine Club</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Western University's community for learning, tasting, and celebrating wine—responsibly.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm hover:text-amber transition-colors">
                About Us
              </Link>
              <Link to="/membership" className="text-sm hover:text-amber transition-colors">
                Membership
              </Link>
              <Link to="/events" className="text-sm hover:text-amber transition-colors">
                Events
              </Link>
              <Link to="/contact" className="text-sm hover:text-amber transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:info@westernwineclub.ca" className="flex items-center gap-2 hover:text-amber transition-colors">
                <Mail className="h-4 w-4" />
                info@westernwineclub.ca
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Western University<br />London, Ontario</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Western University Wine Club. All rights reserved.</p>
          <p className="mt-2">Please drink responsibly. Must be 19+ to attend events serving alcohol.</p>
          <p className="mt-2">Write Andrew McLeod.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
