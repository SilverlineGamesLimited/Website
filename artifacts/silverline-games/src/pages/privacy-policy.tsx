import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

const sections = [
  ["about", "Who is responsible"],
  ["information", "Information we process"],
  ["purposes", "Why we use it"],
  ["visibility", "What other players can see"],
  ["advertising", "Advertising and your choices"],
  ["providers", "Who receives information"],
  ["website", "Website, cookies and links"],
  ["deletion", "Delete a profile or other data"],
  ["retention", "Retention and backups"],
  ["rights", "Your privacy rights"],
  ["children", "Children and families"],
  ["security", "Security and international processing"],
  ["changes", "Changes and contact"],
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-white/10 pt-8">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-5">
        {title}
      </h2>
      <div className="space-y-4 text-white/75 leading-relaxed [&_h3]:text-white [&_h3]:font-semibold [&_h3]:pt-2 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_strong]:font-semibold [&_strong]:text-white/95">
        {children}
      </div>
    </section>
  );
}

function PolicyLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-purple-300 underline underline-offset-4 decoration-purple-300/40 hover:text-white break-words"
    >
      {children}
    </a>
  );
}

function Email() {
  return (
    <PolicyLink href="mailto:support@silverlinegames.co.uk">
      support@silverlinegames.co.uk
    </PolicyLink>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[hsl(228,45%,8%)] text-white">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8"
            data-testid="link-back-home"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-purple-300 text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Your information. Your choices.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm mb-6">
            Last updated: 5 November 2026
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            This policy explains how Silverline Games Limited handles personal
            information when you visit our website, play our games or contact
            us. It covers games and services that link to this policy; the
            information processed depends on the features you use.
          </p>

          <aside
            aria-label="Privacy at a glance"
            className="rounded-2xl border border-purple-400/25 bg-purple-400/[0.07] p-6 md:p-7 mb-8"
          >
            <h2 className="text-lg font-semibold mb-4">Privacy at a glance</h2>
            <ul className="space-y-3 text-white/85 leading-relaxed list-disc pl-5">
              <li>
                <strong>
                  We store online player profiles and gameplay records on our
                  own server systems
                </strong>{" "}
                where a game provides these features. A profile can be personal
                data even without an email address or password.
              </li>
              <li>
                Some progress stays on your device. Advertising and platform
                services also process information under their own policies.
              </li>
              <li>
                You can request deletion or use an in-game profile deletion
                control where available. Deleting an app alone does not delete a
                server profile.
              </li>
              <li>
                Live profile deletion and older recovery copies are handled
                separately. Read{" "}
                <PolicyLink href="#retention">Retention and backups</PolicyLink>{" "}
                for the limits.
              </li>
            </ul>
          </aside>

          <nav aria-label="Privacy policy contents" className="mb-12">
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Find what you need
            </h2>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {sections.map(([id, title], index) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-white/75 hover:text-purple-300 underline underline-offset-4 decoration-white/20"
                  >
                    <span className="text-purple-300 mr-2">{index + 1}.</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            <Section id="about" title="1. Who is responsible">
              <p>
                Silverline Games Limited is the controller of the personal
                information we use to operate our website, our own game services
                and player support. This means we decide why and how that
                information is used.
              </p>
              <p>
                <strong>Company number:</strong> 17282798
                <br />
                <strong>Registered office:</strong> 4 Underwood Rise, Tunbridge
                Wells, Kent, TN2 5RY, United Kingdom
                <br />
                <strong>Privacy contact:</strong> <Email />
              </p>
              <p>
                Not every game uses every feature described below. A game&apos;s
                settings, platform permissions and store privacy information
                provide further context. External providers may be responsible
                for their own processing, as explained in section 6.
              </p>
            </Section>

            <Section id="information" title="2. Information we process">
              <h3>Online profiles and gameplay</h3>
              <p>
                Games with our online profile system create a server-side player
                record when you choose to play. This does not require
                email/password registration. We process:
              </p>
              <ul>
                <li>
                  A generated player identifier, public profile tag, chosen
                  display name, avatar and authentication-session records.
                </li>
                <li>
                  Scores, game counts, recent play times, leaderboard entries
                  and personal match history.
                </li>
                <li>
                  Moves, game events, results, match statistics, room
                  participation and tournament progress, where those features
                  are available.
                </li>
                <li>
                  Connection and operational information needed to run matches,
                  reconnect players, diagnose faults and protect the service.
                </li>
              </ul>
              <p>
                Information comes from your choices, your device and the game
                service as you play. Shared match records also contain
                information about other participants. Online practice modes can
                use the same server systems and profile records as multiplayer
                play.
              </p>
              <h3>Information on your device</h3>
              <p>
                Depending on the game, local storage holds progress, scores,
                virtual currency or items, tutorial completion, preferences,
                notification settings and purchase entitlements. Games with
                online profiles also keep a sign-in credential on the device,
                using protected storage where implemented. Device or cloud
                backups may include local app information.
              </p>
              <h3>Advertising, diagnostics and platform features</h3>
              <p>
                Games with ads use Google AdMob. Google and its advertising
                partners may process IP addresses and approximate location
                derived from them, advertising or other device/app identifiers,
                ad views and interactions, app interactions, device and app
                details, performance information, crash reports and consent
                choices. The data and uses depend on the SDK, platform, region
                and your settings. See section 5.
              </p>
              <p>
                Where a game supports Apple Game Center or Google Play Games,
                those services process gamer identities, platform player
                identifiers, scores and achievements. The game receives
                information needed to provide those features. We do not receive
                your Apple or Google account password.
              </p>
              <p>
                For games with purchases, Apple or Google processes the payment.
                The game may receive product, transaction or purchase-token
                information and entitlement status to deliver or restore
                content. We do not receive full payment-card or bank-account
                details from the store.
              </p>
              <h3>Support and website visits</h3>
              <p>
                If you contact us, we receive your email address, message and
                any details or attachments you choose to provide, such as a
                player tag, device model or error report. Website and network
                providers process request information such as IP address,
                browser details, requested pages and access times to deliver and
                protect the service. Section 7 explains website services.
              </p>
            </Section>

            <Section id="purposes" title="3. Why we use it">
              <p>
                For processing under UK data-protection law, we rely on the
                following purposes and legal bases:
              </p>
              <ul>
                <li>
                  <strong>Provide the game features you request:</strong> run
                  online profiles, matches, progress, leaderboards and purchased
                  content, and answer service-related requests. Our basis is
                  performance of our contract with you where this processing is
                  necessary to provide the service.
                </li>
                <li>
                  <strong>Keep services reliable and fair:</strong> investigate
                  faults, prevent abuse and fraud, secure connections, resolve
                  disputes and operate private administration tools. Our basis
                  is our legitimate interests in protecting players and running
                  a reliable service, balanced against your rights.
                </li>
                <li>
                  <strong>Respond to general enquiries:</strong> our legitimate
                  interest in answering people who contact us and managing our
                  business correspondence.
                </li>
                <li>
                  <strong>Advertising and optional device features:</strong>{" "}
                  consent where required for personalised advertising, tracking,
                  non-essential device storage or access, and optional
                  permissions. Limited ad delivery, measurement or fraud
                  prevention may involve other permitted bases described in the
                  consent interface and provider notices; refusing
                  personalisation does not mean all ad-related processing stops.
                </li>
                <li>
                  <strong>Meet legal duties:</strong> comply with applicable
                  record-keeping requirements, lawful requests and
                  data-protection obligations.
                </li>
              </ul>
              <p>
                Online features cannot operate without the player, session and
                gameplay information they need. Optional advertising
                permissions, notifications and platform social features are
                separate choices. Where offered, refusing Apple&apos;s tracking
                permission does not prevent gameplay.
              </p>
              <p>
                Game scoring, rankings and automated opponents use game rules
                and gameplay information. We do not use these features to make
                solely automated decisions that have legal or similarly
                significant effects on you.
              </p>
            </Section>

            <Section id="visibility" title="4. What other players can see">
              <p>
                Your display name, public profile tag, avatar, scores and
                results may appear in matches, leaderboards, tournament displays
                and shared match history. Choose a display name that does not
                disclose information you want to keep private.
              </p>
              <p>
                Authorised administrators can view player records and gameplay
                activity through private tools for support, troubleshooting,
                service operation and abuse prevention. These administrative
                records are not a public player directory.
              </p>
            </Section>

            <Section id="advertising" title="5. Advertising and your choices">
              <p>
                AdMob information is used to display ads, measure views and
                interactions, assess performance, provide advertising analytics
                and detect invalid traffic. With the relevant permissions and
                consent, information may also be used for personalised ads and
                tracking across other companies&apos; apps or websites.
                Advertising data may be linked to a device or other identifier.
              </p>
              <p>
                Our online profile system does not send its player identifiers
                or sign-in credentials to AdMob. AdMob can still collect its own
                identifiers and other information through its SDK.
              </p>
              <ul>
                <li>
                  <strong>Apple tracking permission:</strong> where an iOS game
                  requests it, you can allow or refuse. Change your choice in
                  device Settings → Privacy &amp; Security → Tracking. Refusal
                  can result in contextual or non-personalised ads.
                </li>
                <li>
                  <strong>Google consent choices:</strong> games using
                  Google&apos;s User Messaging Platform show applicable regional
                  messages. Where available, use the game&apos;s advertising
                  privacy-options control to revisit your choices. These choices
                  are separate from Apple&apos;s permission.
                </li>
                <li>
                  <strong>Android controls:</strong> manage advertising
                  identifiers and available ad privacy settings through your
                  device settings.
                </li>
              </ul>
              <p>
                Non-personalised ads can still involve IP addresses, device
                information, identifiers or storage for permitted delivery,
                measurement, frequency limiting and fraud prevention. The
                options available depend on your location and the
                provider&apos;s requirements.
              </p>
              <p>
                Read{" "}
                <PolicyLink href="https://policies.google.com/technologies/ads">
                  Google&apos;s advertising information
                </PolicyLink>{" "}
                and{" "}
                <PolicyLink href="https://policies.google.com/privacy">
                  Google&apos;s privacy policy
                </PolicyLink>{" "}
                for details, partners and available controls. Where regional law
                provides an opt-out from targeted advertising or related
                sharing, use the available consent controls or contact us.
              </p>
            </Section>

            <Section id="providers" title="6. Who receives information">
              <p>
                Information is available only as needed for the services and
                purposes described in this policy. Recipients include:
              </p>
              <ul>
                <li>
                  <strong>
                    Our authorised personnel and service providers:
                  </strong>{" "}
                  game-server administration, hosting, network security,
                  technical support and business email services.
                </li>
                <li>
                  <strong>Google:</strong> AdMob and advertising partners,
                  consent management, Google Play Games, Google Play purchases
                  and website font delivery, where used. See{" "}
                  <PolicyLink href="https://policies.google.com/privacy">
                    Google&apos;s privacy policy
                  </PolicyLink>
                  .
                </li>
                <li>
                  <strong>Apple:</strong> App Store purchases, Game Center and
                  relevant device, diagnostic and backup services. See{" "}
                  <PolicyLink href="https://www.apple.com/legal/privacy/">
                    Apple&apos;s privacy policy
                  </PolicyLink>
                  .
                </li>
                <li>
                  <strong>Cloudflare:</strong> website delivery, game-server
                  connectivity, network protection and abuse prevention. See{" "}
                  <PolicyLink href="https://www.cloudflare.com/privacypolicy/">
                    Cloudflare&apos;s privacy policy
                  </PolicyLink>
                  .
                </li>
                <li>
                  <strong>Other players:</strong> the game information described
                  in section 4.
                </li>
                <li>
                  <strong>Authorities or professional advisers:</strong> where
                  necessary to meet legal obligations, protect rights or handle
                  a legal claim.
                </li>
              </ul>
              <p>
                Providers acting for us process information to supply their
                services. Apple, Google and other providers also process some
                information for their own purposes under their own notices.
                Deleting a Silverline Games profile does not delete an
                independently held Apple or Google account or their required
                transaction records.
              </p>
              <p>
                We do not sell our player-profile database. Advertising
                providers&apos; use and sharing of ad-related information is
                described separately above and may fall within specific regional
                definitions of targeted advertising or data sharing.
              </p>
            </Section>

            <Section id="website" title="7. Website, cookies and links">
              <p>
                Our website is delivered through Cloudflare. Loading a page
                sends technical request information to the services that deliver
                it. The website also loads fonts from Google, which receives the
                request information needed to supply those fonts.
              </p>
              <p>
                The current website does not include a separate advertising
                tracker or analytics script added by us. Hosting and security
                services may use necessary cookies or similar technologies to
                deliver and protect the site. Browser controls can restrict
                cookies, although this can affect security checks or
                functionality.
              </p>
              <p>
                Links to app stores, Instagram and other external websites take
                you to services with their own privacy policies. Email support
                links open your email application; we receive the message only
                if you send it.
              </p>
            </Section>

            <Section id="deletion" title="8. Delete a profile or other data">
              <h3>Use the in-game control</h3>
              <p>
                If your game provides it, open{" "}
                <strong>Settings → Delete player profile</strong> and confirm.
                An internet connection is needed. Wait for confirmation; retry
                if a request is interrupted. This removes the active server
                profile, sign-in sessions, stored scores and personal match
                history, withdraws current participation and clears the saved
                profile on that device.
              </p>
              <p>
                Identifying player labels are removed from shared results; the
                other participants&apos; results may remain. A restricted
                deletion receipt is retained as explained below. Playing again
                after confirmed deletion creates a new profile with new
                progress.
              </p>
              <p>
                <strong>
                  Uninstalling an app does not request deletion of an online
                  player profile.
                </strong>{" "}
                Deleting local progress or an online profile can permanently
                remove progress and does not cancel a purchase or request a
                store refund.
              </p>
              <h3>Contact us</h3>
              <ol>
                <li>
                  Email <Email /> with the subject{" "}
                  <strong>Data Deletion Request</strong>.
                </li>
                <li>
                  Tell us the game, platform and information you want deleted.
                  Include your player name and profile tag if known.
                </li>
                <li>
                  If you cannot access the game, say so. We may ask for limited
                  information to locate the record and verify that it belongs to
                  you.
                </li>
              </ol>
              <p>
                Do not send passwords, sign-in tokens, payment-card details or
                unnecessary identity documents. We will explain any information
                we must retain and why. See section 10 for response times and
                your rights.
              </p>
              <h3>Local data and platform accounts</h3>
              <p>
                Use an available in-game reset, clear app storage in Android
                settings or delete the app to remove ordinary local app data.
                Protected sign-in credentials and cloud/device backups may
                persist separately, so use the profile deletion control for an
                online profile. Manage device backups through Apple or Google.
                Restoring an old device backup can restore local progress.
              </p>
              <p>
                Manage Game Center, Google Play Games and store-account
                information through the relevant provider. We can address
                information we control; we cannot erase records held solely by
                Apple, Google or another independent provider.
              </p>
            </Section>

            <Section id="retention" title="9. Retention and backups">
              <p>
                Retention depends on the information&apos;s purpose, whether it
                is still needed to provide your service, outstanding support or
                disputes, security needs and any applicable legal obligations.
              </p>
              <ul>
                <li>
                  <strong>Online profiles and scores:</strong> retained to
                  provide continuing progress until you delete the profile or we
                  remove it as part of service administration. We do not
                  currently apply a fixed inactivity-expiry period.
                </li>
                <li>
                  <strong>Personal match history:</strong> our online profile
                  service keeps the latest 50 rounds per player. Profile
                  deletion removes that personal history from the active
                  service. Shared results may remain with identifying labels
                  removed.
                </li>
                <li>
                  <strong>Deletion records:</strong> restricted receipts contain
                  a deletion time and hashed identifiers used to recognise
                  retries and prevent reactivation when deletion records are
                  applied. Hashes are pseudonymous information, not anonymous
                  data. These receipts currently have no automatic expiry and
                  are retained separately from playable profiles.
                </li>
                <li>
                  <strong>Local information:</strong> remains until reset or
                  removed, subject to protected device storage and any device
                  backups.
                </li>
                <li>
                  <strong>Support and operational records:</strong> retained for
                  the relevant enquiry, fault investigation, security incident,
                  dispute or legal requirement. The period depends on whether
                  the issue is resolved and whether further retention remains
                  necessary.
                </li>
                <li>
                  <strong>Independent provider records:</strong> advertising,
                  platform and purchase information is subject to the
                  provider&apos;s retention rules and legal obligations.
                </li>
              </ul>
              <h3>Older recovery copies</h3>
              <p>
                <strong>
                  In-game deletion removes records from the active service; it
                  does not immediately erase every historical backup.
                </strong>{" "}
                Older server recovery copies may still contain profile and
                gameplay information. They are held separately with restricted
                access and are not used for ordinary gameplay.
              </p>
              <p>
                These recovery copies do not currently have an automatic fixed
                expiry schedule. Removal from older copies requires separate
                handling, so we cannot promise that all backup copies disappear
                within a set number of days after an in-game deletion. Contact
                us about information retained in backups; we will explain the
                position and the action required for your request.
              </p>
            </Section>

            <Section id="rights" title="10. Your privacy rights">
              <p>
                Depending on your location, the information and our legal basis,
                you may have rights to access your personal information, correct
                it, request deletion, restrict processing, receive a portable
                copy, object to processing based on legitimate interests, and
                withdraw consent. Withdrawing consent does not affect processing
                that was lawful before withdrawal.
              </p>
              <p>
                Contact <Email /> to exercise these rights or ask how your
                information is handled. Include enough information to locate
                your records. A generated player identifier and associated
                history can be personal information even when we do not know
                your real name.
              </p>
              <p>
                Under UK data-protection law, we normally respond within one
                month. If the law permits an extension for a complex request or
                we need information to verify identity, we will explain this.
                Rights have exceptions; if we cannot fulfil a request in full,
                we will explain the reason and available complaint routes.
              </p>
              <p>
                You can complain to the{" "}
                <PolicyLink href="https://ico.org.uk/make-a-complaint/">
                  UK Information Commissioner&apos;s Office (ICO)
                </PolicyLink>{" "}
                or your local data-protection authority. You do not have to
                contact us before making a complaint.
              </p>
            </Section>

            <Section id="children" title="11. Children and families">
              <p>
                Check the age rating and information in each game&apos;s store
                listing before allowing a child to play. A content age rating
                does not mean that no personal information is processed. Online
                display names, profile identifiers, gameplay and advertising
                data can still be personal information.
              </p>
              <p>
                Children should not put their real name, contact details or
                other private information in a public display name. Parents and
                guardians can use platform privacy and parental controls. If you
                believe we hold information about a child that should not have
                been collected, contact us so we can investigate, address the
                relevant consent or age requirements and remove information
                where required.
              </p>
            </Section>

            <Section
              id="security"
              title="12. Security and international processing"
            >
              <p>
                We use protected network connections and restrict administrative
                access to our game systems. Your device and platform protections
                also help secure locally stored information. No system is
                completely secure; keep your device protected and do not share
                sign-in credentials or tokens.
              </p>
              <p>
                We are based in the United Kingdom. Services used by our website
                and games, including Apple, Google and Cloudflare, can process
                information in other countries, including the United States.
                Their linked privacy notices describe processing locations and
                international-transfer safeguards.
              </p>
              <p>
                Transfers subject to UK data-protection law require an
                appropriate legal mechanism, such as an adequacy regulation or
                contractual safeguards. You can contact us for information about
                the providers and safeguards relevant to your data, including
                how to obtain information about applicable transfer
                arrangements.
              </p>
            </Section>

            <Section id="changes" title="13. Changes and contact">
              <p>
                We update this policy when our services or information practices
                change. The date at the top shows the latest revision. Where
                required, we will provide an additional notice or seek consent
                before a relevant change takes effect.
              </p>
              <p>
                For privacy questions, access requests or deletion requests,
                email <Email /> or write to Silverline Games Limited, 4
                Underwood Rise, Tunbridge Wells, Kent, TN2 5RY, United Kingdom.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
