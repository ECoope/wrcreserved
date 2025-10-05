import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, Linkedin } from "lucide-react";
import wrcLogo from "@/assets/wrc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground border-t-2 border-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={wrcLogo} alt="WRC Logo" className="h-10 w-10" />
              <span className="font-serif text-lg font-bold">Reserve Circle</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              An exclusive community for networking, professional development, and celebrating wine responsibly.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4 text-secondary">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/team" className="text-sm hover:text-secondary transition-colors">
                Team
              </Link>
              <Link to="/events" className="text-sm hover:text-secondary transition-colors">
                Events
              </Link>
              <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4 text-secondary">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+17054277891" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                705-427-7891
              </a>
              <a href="mailto:wreservecircle@outlook.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                wreservecircle@outlook.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4 text-secondary">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/official.wrc/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@wreservecircle" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/wrc-the-reserve-circle/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/30 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Reserve Circle. All rights reserved.</p>
          <p className="mt-2">Please enjoy responsibly. Must be 19+ to attend events serving alcohol.</p>
          <p className="mt-3 font-semibold text-secondary">Write Andrew McLeod</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
