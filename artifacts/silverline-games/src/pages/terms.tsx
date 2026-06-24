import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "1. Who We Are",
    body: "Silverline Games Limited is a mobile games developer and publisher registered in England and Wales. Our website provides information about our company, upcoming games, support routes, and player policies.",
  },
  {
    title: "2. Using Our Website",
    body: "You may use this website to learn about Silverline Games Limited, view the games we are preparing, read policy information, and contact support. Please do not misuse the website, attempt to disrupt it, or use it for unlawful activity.",
  },
  {
    title: "3. Upcoming Games",
    body: "Our games are being prepared for iPhone release and may be distributed through the Apple App Store. They may use Apple services such as Game Center, StoreKit, and push notifications where available. Once live, App Store downloads, purchases, refunds, and subscriptions will be managed by Apple under Apple's own terms.",
  },
  {
    title: "4. Player Support",
    body: "Players can contact us at support@silverlinegames.co.uk for help with our games. Please include the game name, device information, and a clear description of the issue so we can respond effectively.",
  },
  {
    title: "5. Game Ideas and Submissions",
    body: "Please do not send unsolicited game ideas, pitches, concepts, scripts, designs, or other creative submissions through our website or support email. Our contact routes are for player support and general enquiries.",
  },
  {
    title: "6. Intellectual Property",
    body: "The Silverline Games name, website content, game icons, artwork, text, branding, and related materials belong to Silverline Games Limited or its licensors unless stated otherwise. You may not copy, redistribute, or commercially exploit them without permission.",
  },
  {
    title: "7. Privacy",
    body: "Our Privacy Policy explains how we handle information connected with our website, games, support requests, ads, analytics, purchases, and Apple services. Please read it before using our games or contacting support.",
  },
  {
    title: "8. Changes",
    body: "We may update these terms from time to time. The latest version will be posted on this website with the updated date shown below.",
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-[hsl(228,20%,97%)] text-gray-900">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="mb-8 inline-flex text-sm font-semibold text-purple-700 hover:text-purple-800"
          >
            Back to home
          </Link>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
              Terms
            </p>
            <h1 className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">
              Website and Game Terms
            </h1>
            <p className="mb-8 text-sm text-gray-500">Last updated: June 2026</p>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-xl font-semibold text-gray-950">{section.title}</h2>
                  <p className="leading-relaxed text-gray-600">{section.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-gray-50 p-5">
              <h2 className="mb-2 text-lg font-semibold text-gray-950">Contact</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                For support or general enquiries, email{" "}
                <a className="font-semibold text-purple-700" href="mailto:support@silverlinegames.co.uk">
                  support@silverlinegames.co.uk
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
