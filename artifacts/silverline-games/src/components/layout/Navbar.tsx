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
          <div className="bg-white rounded-lg px-2 py-1 inline-flex items-center">
            <img
              src="/logo.png"
              alt="Silverline Games"
              className="h-6 w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-privacy"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
