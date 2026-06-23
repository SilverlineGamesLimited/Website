import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Star, Users, Globe, Handshake } from "lucide-react";

const sparkles = [
  { top: "12%", left: "8%", delay: "0s", size: 3 },
  { top: "25%", left: "20%", delay: "1.2s", size: 2 },
  { top: "8%", left: "55%", delay: "0.6s", size: 4 },
  { top: "18%", left: "75%", delay: "2.1s", size: 2 },
  { top: "35%", left: "90%", delay: "0.9s", size: 3 },
  { top: "60%", left: "85%", delay: "1.7s", size: 2 },
  { top: "70%", left: "12%", delay: "0.4s", size: 3 },
  { top: "80%", left: "38%", delay: "1.5s", size: 2 },
  { top: "48%", left: "5%", delay: "2.4s", size: 2 },
  { top: "90%", left: "68%", delay: "0.8s", size: 3 },
  { top: "55%", left: "50%", delay: "3.0s", size: 2 },
  { top: "15%", left: "42%", delay: "1.9s", size: 2 },
];

const approachCards = [
  {
    icon: Star,
    title: "Quality First",
    desc: "We care about the games we publish and the experiences they deliver to players.",
    color: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15",
  },
  {
    icon: Users,
    title: "Player Focus",
    desc: "Everything we do centres around creating games that players genuinely enjoy.",
    color: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "We bring games to audiences across the world, supporting multiple markets and languages.",
    color: "from-teal-500/20 to-teal-600/10",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/15",
  },
  {
    icon: Handshake,
    title: "Developer Partnership",
    desc: "We work closely with development studios, providing support at every stage of the journey.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(228,45%,8%)] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(228,55%,12%)_0%,hsl(228,45%,6%)_70%)]" />

        {/* Purple wave ribbon */}
        <div className="wave-purple absolute inset-0 pointer-events-none">
          <svg
            className="absolute w-[140%] h-[140%] left-[-20%] top-[-20%] opacity-60"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M-100 600 C100 400, 300 200, 500 350 C700 500, 750 600, 900 450 C1050 300, 1100 200, 1300 300"
              stroke="url(#purpleGrad)"
              strokeWidth="140"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                <stop offset="30%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#6d28d9" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Teal wave ribbon */}
        <div className="wave-teal absolute inset-0 pointer-events-none">
          <svg
            className="absolute w-[140%] h-[140%] left-[-10%] top-[-10%] opacity-55"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M600 -50 C750 100, 900 250, 950 400 C1000 550, 950 650, 1100 700"
              stroke="url(#tealGrad)"
              strokeWidth="120"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M700 -100 C820 50, 950 180, 1000 380 C1050 560, 980 680, 1200 750"
              stroke="url(#tealGrad2)"
              strokeWidth="80"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="tealGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="40%" stopColor="#0891b2" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#0e7490" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#164e63" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="tealGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Indigo ambient glow */}
        <div className="wave-indigo absolute inset-0 pointer-events-none">
          <div className="absolute left-[5%] top-[20%] w-72 h-72 rounded-full bg-indigo-600/20 blur-[80px]" />
          <div className="absolute right-[10%] top-[10%] w-56 h-56 rounded-full bg-cyan-500/15 blur-[60px]" />
        </div>

        {/* Sparkle dots */}
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="sparkle-dot absolute rounded-full bg-white"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: `${2.5 + i * 0.4}s`,
            }}
          />
        ))}

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-black/40 inline-block">
              <img
                src="/logo.png"
                alt="Silverline Games"
                className="h-20 w-auto object-contain"
                data-testid="img-hero-logo"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-md leading-relaxed mb-8"
          >
            A mobile games publisher bringing quality experiences to players worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <button
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-[hsl(228,45%,12%)] font-semibold px-7 py-2.5 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/30 text-sm"
              data-testid="button-learn-more"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-[hsl(250,60%,35%)] to-[hsl(270,55%,28%)]"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mobile Gaming, Done Right
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Silverline Games Limited is a mobile games publisher dedicated to
              bringing high-quality gaming experiences to players around the world.
              We partner with talented developers to help bring their games to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-[hsl(228,20%,97%)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-purple-600 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-500 text-lg">
              We believe in building lasting relationships with developers and players alike.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {approachCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-approach-${i}`}
              >
                <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-5`}>
                  <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <h3 className="text-gray-900 font-semibold text-base mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-[hsl(228,45%,8%)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-cyan-500/10 blur-[90px] rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
              For support enquiries or partnership opportunities, we'd love to hear from you.
            </p>
            <a
              href="mailto:support@silverlinegames.co.uk"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-7 py-3 rounded-full transition-all duration-200 text-sm"
              data-testid="link-contact"
            >
              support@silverlinegames.co.uk
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
