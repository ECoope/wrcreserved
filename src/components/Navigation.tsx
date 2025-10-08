import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import wrcLogo from "@/assets/wrc-logo.png";

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
    { to: "/events", label: "Events" },
    { to: "/team", label: "Team" },
    { to: "/sponsors", label: "Sponsors" },
    { to: "/partnerships", label: "Partnerships" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary border-b-2 border-secondary ${
        isScrolled
          ? "shadow-elegant"
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={wrcLogo} alt="WRC Logo" className="h-12 w-12 transition-transform group-hover:scale-110" />
            <span className="font-serif text-lg font-bold text-primary-foreground">
              The Reserve Circle
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHome = link.to === "/";
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors relative group ${
                    location.pathname === link.to
                      ? "text-primary-foreground font-semibold"
                      : "text-primary-foreground hover:text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-foreground transition-all group-hover:w-full" />
                </Link>
              );
            })}
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold font-semibold">
              <Link to="/team">Apply to Join</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
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
              {navLinks.map((link) => {
                const isHome = link.to === "/";
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-medium py-2 ${
                      location.pathname === link.to
                        ? "text-primary-foreground font-semibold"
                        : "text-primary-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full font-semibold">
                <Link to="/team" onClick={() => setIsMobileMenuOpen(false)}>
                  Apply to Join
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
