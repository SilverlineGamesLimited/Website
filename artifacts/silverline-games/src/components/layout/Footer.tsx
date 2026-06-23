import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[hsl(228,50%,5%)] border-t border-white/8 pt-12 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl p-3 inline-block mb-5">
              <img src="/logo.png" alt="Silverline Games" className="h-7 w-auto" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              A mobile games publisher bringing quality experiences to players worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
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
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-5">Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@silverlinegames.co.uk"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  support@silverlinegames.co.uk
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
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Silverline Games Limited. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">UK Registered Company</p>
        </div>
      </div>
    </footer>
  );
}
