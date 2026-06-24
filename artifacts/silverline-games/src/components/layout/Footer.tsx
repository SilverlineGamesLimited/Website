import { Link } from "wouter";

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(228,50%,5%)] border-t border-white/8 pt-12 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="inline-flex items-center mb-5">
              <span className="text-white font-semibold tracking-[0.18em] uppercase text-sm">
                Silverline
              </span>
              <span className="ml-2 text-cyan-200/80 font-semibold tracking-[0.18em] uppercase text-sm">
                Games
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              A UK mobile games publisher preparing friendly iPhone games for players
              worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Registered Name</span>
                <span className="text-white/70 text-sm">Silverline Games Limited</span>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Company Number</span>
                <span className="text-white/70 text-sm">17282798</span>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Registered Office</span>
                <span className="text-white/70 text-sm leading-relaxed">
                  4 Underwood Rise<br />
                  Tunbridge Wells<br />
                  Kent, TN2 5RY
                </span>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Registration</span>
                <span className="text-white/70 text-sm">Registered in England and Wales</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5">Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-services"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("games")}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-games"
                >
                  Games
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("support")}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-support"
                >
                  Support
                </button>
              </li>
              <li>
                <a
                  href="mailto:support@silverlinegames.co.uk?subject=General%20Enquiry"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-general"
                >
                  General Enquiries
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@silverlinegames.co.uk?subject=Player%20Support"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  Player Support
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Silverline Games Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/35">
            <span>support@silverlinegames.co.uk</span>
            <span>Privacy, terms, support, and company details are kept visible for players.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
