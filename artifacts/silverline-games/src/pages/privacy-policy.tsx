import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

const appNames = [
  "Gem Kingdom",
  "Arcade Tap Game",
  "Seasonal Catch Game",
  "Garden Strategy Game",
  "Any other Silverline Games title that links to this policy",
];

const thirdPartyServices = [
  {
    service: "Google AdMob",
    purpose: "Advertising, measurement, analytics and fraud prevention",
    policy: "policies.google.com/privacy",
    href: "https://policies.google.com/privacy",
  },
  {
    service: "Google User Messaging Platform",
    purpose: "Advertising consent choices",
    policy: "policies.google.com/privacy",
    href: "https://policies.google.com/privacy",
  },
  {
    service: "Google Play Games Services",
    purpose: "Player sign-in, leaderboards and achievements",
    policy: "policies.google.com/privacy",
    href: "https://policies.google.com/privacy",
  },
  {
    service: "Google Play Billing and Google Play",
    purpose: "Android in-app purchases",
    policy: "policies.google.com/privacy",
    href: "https://policies.google.com/privacy",
  },
  {
    service: "Apple Game Center",
    purpose: "Player identity, leaderboards and achievements",
    policy: "apple.com/legal/privacy",
    href: "https://www.apple.com/legal/privacy/",
  },
  {
    service: "Apple StoreKit and the App Store",
    purpose: "iOS in-app purchases",
    policy: "apple.com/legal/privacy",
    href: "https://www.apple.com/legal/privacy/",
  },
  {
    service: "Apple and Google platform services",
    purpose: "Device notifications, local storage and backups",
    policy: "Apple or Google privacy policy",
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
              LAST UPDATED: SEPTEMBER 2026
            </p>

            <div className="space-y-10 text-white/70 leading-relaxed">
              <section>
                <h2 className="text-white text-xl font-semibold mb-4">1. Who We Are</h2>
                <p className="mb-4">
                  Silverline Games Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                  develops and publishes mobile games for iOS and Android. This privacy policy
                  applies to the following game projects:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-5">
                  {appNames.map((app) => (
                    <li key={app}>{app}</li>
                  ))}
                </ul>
                <p className="mb-5">
                  The features and third-party services used may differ between games and
                  platforms.
                </p>
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
                <h2 className="text-white text-xl font-semibold mb-4">2. How to Delete Your Data</h2>
                <div className="bg-purple-500/10 border border-purple-300/20 rounded-xl p-6 mb-5">
                  <p className="text-white/90 font-semibold mb-2">Request deletion from Silverline Games</p>
                  <p className="mb-3">
                    Our games do not currently require a Silverline Games account, and we do
                    not maintain our own server-side personal gameplay profiles.
                  </p>
                  <ol className="space-y-2 pl-5 list-decimal">
                    <li>Email <a href="mailto:support@silverlinegames.co.uk" className="text-purple-300 hover:text-purple-200 transition-colors">support@silverlinegames.co.uk</a>.</li>
                    <li>Use the subject line <span className="text-white/90">Data Deletion Request</span>.</li>
                    <li>Tell us which Silverline Games title and platform you use.</li>
                    <li>Describe the information you want us to delete.</li>
                  </ol>
                </div>
                <p className="mb-4">
                  Do not send passwords, payment-card details or unnecessary identity
                  documents. We may request limited additional information if reasonably
                  necessary to find or verify the relevant information.
                </p>
                <p className="mb-4">
                  We will delete eligible information we control unless it must be retained
                  for legal, security, fraud-prevention or dispute-resolution purposes. We
                  will normally respond within one month where applicable law requires this.
                </p>
                <h3 className="text-white/90 font-semibold mb-2">Delete locally stored game data</h3>
                <p className="mb-3">You can delete locally stored game information by:</p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Using any reset or delete-progress feature available in the game</li>
                  <li>Clearing the app&apos;s storage through your Android device settings</li>
                  <li>Deleting the app from your iOS or Android device</li>
                </ul>
                <p className="mb-4">
                  Information may be restored if your device restores the app from an Apple
                  or Google backup. You can manage or delete backups through your Apple or
                  Google account settings. Deleting game data may permanently remove progress,
                  virtual currency, settings and other content that cannot later be recovered.
                </p>
                <h3 className="text-white/90 font-semibold mb-2">Delete third-party account data</h3>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li><span className="text-white/90">Google Play Games:</span> Manage or delete your Play Games profile and individual game data through Google Play Games or your Google Account settings.</li>
                  <li><span className="text-white/90">Apple Game Center:</span> Manage Game Center information through your Apple Account and Apple&apos;s privacy services.</li>
                  <li><span className="text-white/90">Store purchases:</span> Google and Apple control their respective Google Play and App Store transaction records.</li>
                </ul>
                <p>
                  Apple and Google may retain transaction records for accounting,
                  fraud-prevention and legal purposes. We cannot delete information held
                  solely by Apple or Google.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">3. What Data We Collect</h2>

                <h3 className="text-white/90 font-semibold mb-2">3.1 Data stored locally on your device</h3>
                <p className="mb-3">
                  Game progress and preferences may be stored locally using storage provided
                  by Apple or Android. This may include:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Game progress and scores</li>
                  <li>Coin balances, virtual items and power-ups</li>
                  <li>Daily rewards and streak information</li>
                  <li>Settings, preferences and tutorial completion</li>
                  <li>Notification preferences</li>
                  <li>Locally recorded purchase-entitlement information</li>
                </ul>
                <p className="mb-5">
                  We do not currently transmit this local gameplay information to our own
                  servers. It may be included in an Apple or Google device backup when backups
                  are enabled.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">3.2 Advertising data — Google AdMob</h3>
                <p className="mb-3">
                  Some of our games display advertisements provided by Google AdMob. Depending
                  on your platform, location, device settings and consent choices, Google and
                  its advertising partners may process:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Your IP address and approximate location derived from it</li>
                  <li>Advertising identifiers, device identifiers and app-set identifiers</li>
                  <li>Advertisement impressions, views and interactions</li>
                  <li>App usage and product-interaction data</li>
                  <li>Device, operating-system and app-version information</li>
                  <li>Crash reports, diagnostics and performance information</li>
                  <li>Advertising consent and privacy-choice information</li>
                </ul>
                <p className="mb-3">This information may be used to:</p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Display and measure third-party advertisements</li>
                  <li>Provide personalised advertising where permitted</li>
                  <li>Provide contextual or non-personalised advertising</li>
                  <li>Measure advertising and promotional performance</li>
                  <li>Perform analytics and improve service performance</li>
                  <li>Detect fraud, abuse and invalid advertising activity</li>
                </ul>
                <p className="mb-5">
                  Depending on the service configuration and your consent choices,
                  advertising information may be associated with a device or account
                  identifier and may be used for tracking. Declining personalised advertising
                  does not prevent limited processing needed to deliver contextual ads,
                  measure performance, limit frequency and prevent fraud.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">3.3 Apple Game Center</h3>
                <p className="mb-5">
                  Some iOS games may use Apple Game Center for optional player sign-in,
                  leaderboards and achievements. If you use Game Center, Apple may process
                  your Game Center player identifier, gamer identity, scores, achievements
                  and related account or device information. We do not receive or store your
                  Apple Account password.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">3.4 Google Play Games Services</h3>
                <p className="mb-3">
                  Some Android games may use Google Play Games Services for optional player
                  sign-in, leaderboards and achievements. If you use these features, Google
                  may process:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Your Play Games player identifier and gamer identity</li>
                  <li>Scores and achievements</li>
                  <li>Device identifiers</li>
                  <li>IP address and approximate location</li>
                  <li>Account name or email address where made available through your Google account settings</li>
                </ul>
                <p className="mb-5">
                  We use information made available through Google Play Games only to provide
                  game features, submit scores, unlock achievements and troubleshoot those
                  features. We do not receive or store your Google Account password. Where
                  sign-in is optional, you can continue using the main game without signing in,
                  although related social features may be unavailable.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">3.5 In-app purchases</h3>
                <p className="mb-3">
                  Some games offer optional purchases through Apple StoreKit or Google Play
                  Billing. Apple or Google processes your payment method and financial
                  information. We do not receive your complete payment-card or bank-account
                  details. The app may receive:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>The product purchased</li>
                  <li>Transaction or purchase status</li>
                  <li>A transaction identifier or purchase token</li>
                  <li>Entitlement information needed to deliver or restore a purchase</li>
                </ul>
                <p className="mb-5">
                  Limited purchase-token or entitlement information may be stored locally on
                  your device to provide purchased content and prevent duplicate delivery.
                </p>

                <h3 className="text-white/90 font-semibold mb-2">3.6 Crash, diagnostic and performance information</h3>
                <p>
                  Google AdMob and other platform services may process crash reports,
                  diagnostic information, performance measurements, device characteristics
                  and related app-interaction information for analytics, troubleshooting,
                  fraud prevention, reliability and performance measurement. We do not
                  intentionally use this information to identify you by name.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">4. Advertising and Tracking Choices</h2>
                <h3 className="text-white/90 font-semibold mb-2">4.1 iOS App Tracking Transparency</h3>
                <p className="mb-4">
                  On supported versions of iOS, a game will request permission before
                  accessing the device&apos;s advertising identifier or performing activity
                  Apple defines as tracking. If you decline, contextual or non-personalised
                  ads may still be displayed. You can change your choice in iPhone or iPad
                  Settings &rarr; Privacy &amp; Security &rarr; Tracking.
                </p>
                <h3 className="text-white/90 font-semibold mb-2">4.2 Android advertising consent</h3>
                <p>
                  On Android, some games use Google&apos;s User Messaging Platform to collect
                  and record advertising consent choices where required. Depending on your
                  location, you may be offered personalised ads, non-personalised ads or
                  controls for advertising partners. Where an in-app privacy-options control
                  is available, you can use it to review your choices. You can also manage or
                  reset your Android advertising identifier through your device settings.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">5. Notifications</h2>
                <p className="mb-3">Our games may request permission to send notifications for:</p>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Daily rewards or challenges</li>
                  <li>Daily play streaks</li>
                  <li>Informing you that a game feature is available</li>
                  <li>Encouraging you to return after a period of inactivity</li>
                </ul>
                <p>
                  Notifications are optional and can be disabled through your iOS or Android
                  notification settings. Notifications used by our current games are generally
                  scheduled through the device. We do not currently operate a separate
                  marketing-notification server or sell notification information to mailing-list
                  providers.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">6. Third-Party Services</h2>
                <p className="mb-5">
                  Depending on the game and platform, our games may use the following services,
                  each governed by its provider&apos;s own privacy terms:
                </p>
                <div className="overflow-x-auto rounded-xl border border-white/10 mb-5">
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
                            <a href={item.href} className="text-purple-300 hover:text-purple-200 transition-colors">
                              {item.policy}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mb-3">
                  Google provides additional information about advertising technologies at{" "}
                  <a href="https://policies.google.com/technologies/ads" className="text-purple-300 hover:text-purple-200 transition-colors">
                    policies.google.com/technologies/ads
                  </a>.
                </p>
                <p>
                  These providers may process information independently under their own
                  privacy policies. Silverline Games does not sell personal information.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
                <p>
                  Our games are designed for a general audience aged 13 and over and are not
                  directed to children under 13. We do not knowingly collect personal
                  information directly from children under 13. If you believe a child under 13
                  has provided personal information through one of our games, contact us at{" "}
                  <a href="mailto:support@silverlinegames.co.uk" className="text-purple-300 hover:text-purple-200 transition-colors">
                    support@silverlinegames.co.uk
                  </a>{" "}
                  and we will investigate and take appropriate deletion steps.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">8. Your Rights Under UK GDPR</h2>
                <p className="mb-4">
                  Silverline Games Limited is based in the United Kingdom and complies with
                  applicable UK data-protection law. Depending on the circumstances, you may
                  have the right to:
                </p>
                <ul className="space-y-2 pl-5 list-disc mb-5">
                  {rights.map((right) => (
                    <li key={right}>{right}</li>
                  ))}
                </ul>
                <p className="mb-4">
                  Because most gameplay information is stored locally and we do not currently
                  operate personal gameplay-profile servers, we may hold little or no information
                  capable of identifying an individual player. Information controlled by Apple
                  or Google must normally be accessed or deleted through the relevant provider.
                </p>
                <p className="mb-4">
                  To exercise your rights, email{" "}
                  <a href="mailto:support@silverlinegames.co.uk" className="text-purple-300 hover:text-purple-200 transition-colors">
                    support@silverlinegames.co.uk
                  </a>.
                </p>
                <p>
                  You may also complain to the UK Information Commissioner&apos;s Office at{" "}
                  <a href="https://ico.org.uk" className="text-purple-300 hover:text-purple-200 transition-colors">
                    ico.org.uk
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">9. Data Security</h2>
                <p>
                  We take reasonable technical and organisational steps to protect information
                  under our control. Local game information is protected by your device and
                  operating system. Information transmitted by integrated Apple or Google
                  services is generally protected in transit using encrypted connections. No
                  electronic storage or transmission method is completely secure, and we cannot
                  guarantee absolute security for information processed by third-party platforms.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">10. Data Retention</h2>
                <p className="mb-4">
                  Local game information remains on your device until it is reset, cleared or
                  deleted. It may remain in device backups until those backups expire or are
                  deleted.
                </p>
                <p className="mb-4">
                  Advertising, account, purchase and diagnostic information processed by Apple,
                  Google or their partners is retained according to their respective policies and
                  legal obligations. We do not currently retain personal gameplay profiles on our
                  own servers.
                </p>
                <p>
                  Support correspondence is retained only as long as reasonably necessary to
                  respond, protect our games, resolve disputes and comply with applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">11. International Data Transfers</h2>
                <p>
                  Apple, Google and their service providers may process information outside the
                  United Kingdom or your country of residence. These providers describe their
                  international-transfer safeguards in their respective privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">12. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy when our games, service providers or legal
                  obligations change. We will change the &quot;Last updated&quot; date above when
                  we do. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-white text-xl font-semibold mb-4">13. Contact Us</h2>
                <p className="mb-5">
                  If you have questions about this privacy policy or how information is handled,
                  please contact us:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-sm">
                  <p><span className="text-white/50">Silverline Games Limited</span></p>
                  <p><span className="text-white/50">Address:</span> <span className="text-white/90 ml-1">4 Underwood Rise, Tunbridge Wells, Kent, TN2 5RY, United Kingdom</span></p>
                  <p><span className="text-white/50">Company Number:</span> <span className="text-white/90 ml-1">17282798</span></p>
                  <p>
                    <span className="text-white/50">Email:</span>{" "}
                    <a href="mailto:support@silverlinegames.co.uk" className="text-purple-300 hover:text-purple-200 transition-colors ml-1">
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
