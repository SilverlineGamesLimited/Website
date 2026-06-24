import { Link } from "wouter";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(228,45%,8%)]/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" data-testid="link-logo">
          <div className="inline-flex items-center">
            <span className="text-white font-semibold tracking-[0.18em] uppercase text-sm">
              Silverline
            </span>
            <span className="ml-2 text-cyan-200/80 font-semibold tracking-[0.18em] uppercase text-sm">
              Games
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-services"
          >
            What We Do
          </button>
          <button
            onClick={() => scrollToSection("games")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-games"
          >
            Games
          </button>
          <button
            onClick={() => scrollToSection("support")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-support-nav"
          >
            Support
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-contact-nav"
          >
            Contact
          </button>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-privacy"
          >
            Privacy Policy
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => scrollToSection("support")}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            data-testid="link-mobile-support"
          >
            Support
          </button>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            data-testid="link-mobile-privacy"
          >
            Privacy
          </Link>
        </div>
      </div>
    </header>
  );
}
