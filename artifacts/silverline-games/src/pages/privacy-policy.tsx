import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[hsl(228,45%,8%)] text-white">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors mb-10"
              data-testid="link-back-home"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/40 text-sm font-mono tracking-wider mb-10 pb-8 border-b border-white/10">
              LAST UPDATED: JUNE 2026
            </p>

            <div className="space-y-10 text-white/70 leading-relaxed">
              <p>
                Silverline Games Limited ("we", "us", or "our") respects your privacy and is committed
                to protecting your personal data. This privacy policy informs you about how we look after
                your personal data when you visit our website, use our mobile games, or otherwise interact
                with us.
              </p>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which
                  we have grouped together as follows:
                </p>
                <ul className="space-y-3 pl-5 list-disc">
                  <li><strong className="text-white/90">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong className="text-white/90">Contact Data:</strong> includes email address.</li>
                  <li><strong className="text-white/90">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, operating system and platform, and other technology on the devices you use to access our games.</li>
                  <li><strong className="text-white/90">Usage Data:</strong> includes information about how you use our website and games, in-game progress, and preferences.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">2. How We Use Your Data</h2>
                <p className="mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use
                  your personal data in the following circumstances:
                </p>
                <ul className="space-y-3 pl-5 list-disc">
                  <li>To provide and maintain our games and services.</li>
                  <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                  <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</li>
                  <li>To deliver relevant content to you and measure or understand the effectiveness of the content we serve to you.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">3. Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as reasonably necessary to fulfil the
                  purposes we collected it for, including for the purposes of satisfying any legal, regulatory,
                  tax, accounting or reporting requirements. We may retain your personal data for a longer
                  period in the event of a complaint or if we reasonably believe there is a prospect of
                  litigation in respect to our relationship with you.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">4. Your Legal Rights under UK GDPR</h2>
                <p className="mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your
                  personal data. You have the right to:
                </p>
                <ul className="space-y-3 pl-5 list-disc">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">5. Contact Details</h2>
                <p className="mb-5">
                  If you have any questions about this privacy policy or our privacy practices, please contact
                  us in the following ways:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-sm">
                  <p><span className="text-white/50">Legal entity:</span> <span className="text-white/90 ml-1">Silverline Games Limited</span></p>
                  <p><span className="text-white/50">Company Number:</span> <span className="text-white/90 ml-1">17282798</span></p>
                  <p>
                    <span className="text-white/50">Email:</span>{" "}
                    <a
                      href="mailto:support@silverlinegames.co.uk"
                      className="text-purple-400 hover:text-purple-300 transition-colors ml-1"
                      data-testid="link-privacy-email"
                    >
                      support@silverlinegames.co.uk
                    </a>
                  </p>
                  <p><span className="text-white/50">Registered office:</span> <span className="text-white/90 ml-1">4 Underwood Rise, Tunbridge Wells, Kent, TN2 5RY, United Kingdom</span></p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
