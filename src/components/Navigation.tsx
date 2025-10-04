import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wine, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/membership", label: "Membership" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Wine className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Western Wine Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors relative group ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button asChild className="gradient-primary shadow-glow">
              <Link to="/membership">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium py-2 ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="gradient-primary w-full">
                <Link to="/membership" onClick={() => setIsMobileMenuOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
