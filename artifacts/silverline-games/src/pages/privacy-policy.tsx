import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

const appNames = [
  "Casual Puzzle Game",
  "Arcade Tap Game",
  "Seasonal Catch Game",
  "Garden Strategy Game",
];

const thirdPartyServices = [
  {
    service: "Google AdMob",
    purpose: "Advertising",
    policy: "policies.google.com/privacy",
    href: "https://policies.google.com/privacy",
  },
  {
    service: "Apple Game Center",
    purpose: "Leaderboards & achievements",
    policy: "apple.com/legal/privacy",
    href: "https://www.apple.com/legal/privacy/",
  },
  {
    service: "Apple StoreKit",
    purpose: "In-app purchases",
    policy: "apple.com/legal/privacy",
    href: "https://www.apple.com/legal/privacy/",
  },
  {
    service: "Apple Push Notifications",
    purpose: "Game notifications",
    policy: "apple.com/legal/privacy",
    href: "https://www.apple.com/legal/privacy/",
  },
];

const rights = [
  "Access — request a copy of any personal data we hold about you",
  "Erasure — request that we delete your personal data",
  "Rectification — request that we correct inaccurate personal data",
  "Restriction — request that we limit how we use your personal data",
  "Portability — request your personal data in a portable format",
  "Object — object to our use of your personal data",
  "Withdraw consent — where processing is based on consent, withdraw it at any time",
];

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
              <section>
                <h2 className="text-white text-xl font-semibold mb-4">1. Who We Are</h2>
                <p className="mb-4">
                  Silverline Games Limited ("we", "us", or "our") develops and prepares
                  mobile games for iPhone. This privacy policy applies to the following
                  upcoming game projects:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-5">
                  {appNames.map((app) => (
                    <li key={app}>{app}</li>
                  ))}
                </ul>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-sm">
                  <p><span className="text-white/50">Registered company number:</span> <span className="text-white/90 ml-1">17282798</span></p>
                  <p><span className="text-white/50">Registered office:</span> <span className="text-white/90 ml-1">4 Underwood Rise, Tunbridge Wells, Kent, TN2 5RY, United Kingdom</span></p>
                  <p>
                    <span className="text-white/50">Email:</span>{" "}
                    <a
                      href="mailto:support@silverlinegames.co.uk"
                      className="text-purple-300 hover:text-purple-200 transition-colors ml-1"
                      data-testid="link-privacy-email"
                    >
                      support@silverlinegames.co.uk
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">2. What Data We Collect</h2>

                <h3 className="text-white/90 font-semibold mb-2">2.1 Data stored locally on your device</h3>
                <p className="mb-5">
                  All game progress, settings, coin balances, power-ups, daily streaks,
                  and preferences are stored locally on your device using Apple's standard
                  storage. This data never leaves your device and we cannot access it.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">2.2 Advertising data (Google AdMob)</h3>
                <p className="mb-3">
                  Our games display advertisements provided by Google AdMob. Depending on
                  your tracking preference, AdMob may collect:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-5">
                  <li>Device advertising identifier (IDFA)</li>
                  <li>Coarse location (country or region level, for ad targeting)</li>
                  <li>Ad interaction data (impressions, clicks)</li>
                  <li>App usage and performance data</li>
                </ul>
                <p className="mb-5">
                  If you deny tracking permission when prompted, only non-personalised ads
                  will be shown and your advertising identifier will not be used.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">2.3 Game Center (Apple)</h3>
                <p className="mb-5">
                  If you use Apple Game Center, your Game Center player ID is used to submit
                  scores to leaderboards and track achievements. This data is managed entirely
                  by Apple and subject to Apple's Privacy Policy.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">2.4 In-App Purchases</h3>
                <p className="mb-5">
                  Purchases are processed entirely by Apple through the App Store. We do not
                  collect or store your payment information. Apple's handling of purchase data
                  is governed by Apple's Privacy Policy.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">2.5 Crash and diagnostic data</h3>
                <p>
                  Basic crash reports and performance diagnostics may be collected by the
                  Google AdMob SDK to maintain ad service quality. This data is not linked
                  to you personally.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">3. App Tracking Transparency</h2>
                <p className="mb-4">
                  On iOS 14 and above, we ask for your permission before accessing your
                  device's advertising identifier, in compliance with Apple's App Tracking
                  Transparency framework.
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>If you allow tracking: Google AdMob will show personalised advertisements based on your interests.</li>
                  <li>If you deny tracking: Google AdMob will show non-personalised advertisements only. Your experience of the game is not affected in any way.</li>
                </ul>
                <p>
                  You can change your tracking preference at any time in your iPhone Settings
                  &rarr; Privacy &amp; Security &rarr; Tracking.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">4. Notifications</h2>
                <p className="mb-3">
                  Our games may request permission to send you push notifications. We use
                  notifications for:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Reminding you about daily rewards and challenges</li>
                  <li>Maintaining your daily play streak</li>
                  <li>Encouraging you to return after periods of inactivity</li>
                </ul>
                <p className="mb-4">
                  Notifications are entirely optional. You can enable or disable them at any
                  time in your iPhone Settings &rarr; Notifications &rarr; [App Name].
                </p>
                <p>
                  We do not use notifications to send marketing messages or share your data
                  with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">5. In-App Purchases</h2>
                <p className="mb-3">
                  Our games offer optional in-app purchases including coin bundles and
                  one-time starter packs. All transactions are:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Processed securely by Apple through the App Store</li>
                  <li>Subject to Apple's Terms of Sale</li>
                  <li>Non-refundable except where required by law</li>
                </ul>
                <p className="mb-4">
                  We do not have access to your payment card details or billing information
                  at any point.
                </p>
                <p>
                  To request a refund, please contact Apple directly via{" "}
                  <a
                    href="https://reportaproblem.apple.com"
                    className="text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    reportaproblem.apple.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">6. Third-Party Services</h2>
                <p className="mb-5">
                  Our games use the following third-party services, each governed by their
                  own privacy policies:
                </p>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-sm">
                    <thead className="bg-white/5 text-white/80">
                      <tr>
                        <th className="text-left p-4 font-semibold">Service</th>
                        <th className="text-left p-4 font-semibold">Purpose</th>
                        <th className="text-left p-4 font-semibold">Privacy Policy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {thirdPartyServices.map((item) => (
                        <tr key={item.service}>
                          <td className="p-4 text-white/80">{item.service}</td>
                          <td className="p-4">{item.purpose}</td>
                          <td className="p-4">
                            <a
                              href={item.href}
                              className="text-purple-300 hover:text-purple-200 transition-colors"
                            >
                              {item.policy}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">7. Children's Privacy</h2>
                <p>
                  Our games are designed for a general audience aged 13 and over. We do not
                  knowingly collect personal data from children under 13. If you believe a
                  child under 13 has provided personal data through one of our games, please
                  contact us at{" "}
                  <a
                    href="mailto:support@silverlinegames.co.uk"
                    className="text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    support@silverlinegames.co.uk
                  </a>{" "}
                  and we will take steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">8. Your Rights Under UK GDPR</h2>
                <p className="mb-4">
                  As a UK-based company, we comply with the UK General Data Protection
                  Regulation (UK GDPR). You have the right to:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-5">
                  {rights.map((right) => (
                    <li key={right}>{right}</li>
                  ))}
                </ul>
                <p className="mb-4">
                  As the majority of data in our games is stored locally on your device and
                  not on our servers, exercising most of these rights can be achieved by
                  deleting the app from your device.
                </p>
                <p className="mb-4">
                  For any data held by third-party services (Google, Apple), please contact
                  those providers directly using the links in Section 6.
                </p>
                <p>
                  To exercise any of the above rights, contact us at:{" "}
                  <a
                    href="mailto:support@silverlinegames.co.uk"
                    className="text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    support@silverlinegames.co.uk
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">9. Data Security</h2>
                <p className="mb-4">
                  We take reasonable steps to protect your data. Game data is stored locally
                  on your device and protected by your device's own security. We do not
                  operate servers that store your personal gameplay data.
                </p>
                <p>
                  For advertising data, Google AdMob implements its own security measures.
                  Please refer to Google's privacy policy for details.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">10. Data Retention</h2>
                <p>
                  Local game data is retained on your device until you delete the app.
                  Advertising and diagnostic data collected by Google AdMob is subject to
                  Google's own retention policies. We do not retain personal data on our
                  own servers.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">11. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will update the
                  "Last updated" date at the top of this page when we do. We encourage you
                  to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">12. Contact Us</h2>
                <p className="mb-5">
                  If you have any questions about this privacy policy or how we handle your
                  data, please contact us:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-sm">
                  <p><span className="text-white/50">Silverline Games Limited</span></p>
                  <p><span className="text-white/50">Address:</span> <span className="text-white/90 ml-1">4 Underwood Rise, Tunbridge Wells, Kent, TN2 5RY, United Kingdom</span></p>
                  <p><span className="text-white/50">Company Number:</span> <span className="text-white/90 ml-1">17282798</span></p>
                  <p>
                    <span className="text-white/50">Email:</span>{" "}
                    <a
                      href="mailto:support@silverlinegames.co.uk"
                      className="text-purple-300 hover:text-purple-200 transition-colors ml-1"
                    >
                      support@silverlinegames.co.uk
                    </a>
                  </p>
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
