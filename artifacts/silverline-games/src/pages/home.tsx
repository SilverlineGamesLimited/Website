import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Gamepad2,
  Globe,
  Handshake,
  Languages,
  LifeBuoy,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Smartphone,
  Star,
  Store,
  Trophy,
  Users,
} from "lucide-react";

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
    desc: "We care about the games we build and the experiences they will deliver to players.",
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
    title: "Reliable Support",
    desc: "We provide clear support routes for players and maintain our games responsibly over time.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
];

const serviceHighlights = [
  {
    icon: Store,
    title: "Mobile Publishing",
    desc: "We are preparing friendly iPhone games for release, with a focus on accessible, player-friendly experiences.",
  },
  {
    icon: Gamepad2,
    title: "Games in Development",
    desc: "Our upcoming titles are casual mobile games designed for quick sessions, progression, and replayability.",
  },
  {
    icon: BarChart3,
    title: "Launch Ready",
    desc: "We are putting the right support, privacy information, and App Store foundations in place before release.",
  },
  {
    icon: LifeBuoy,
    title: "Player Support",
    desc: "Players can contact us for help with our games, including gameplay, purchases, ads, and technical issues.",
  },
  {
    icon: Languages,
    title: "Global Players",
    desc: "We aim to make games that can be enjoyed by players across different markets and devices.",
  },
  {
    icon: Smartphone,
    title: "iPhone Focus",
    desc: "Our upcoming games are built for iPhone, using Apple services such as Game Center and StoreKit where appropriate.",
  },
];

const games = [
  {
    title: "Casual Puzzle Game",
    label: "Project One",
    tag: "Collect and progress",
    accent: "from-emerald-400 via-cyan-300 to-blue-500",
    surface: "from-emerald-50 via-cyan-50 to-blue-50",
    highlight: "text-emerald-700",
    desc: "A colourful casual game built around collecting, progression, and satisfying short sessions.",
    spotlight: "A friendly collecting game being prepared for quick iPhone sessions and steady progression.",
    details: ["Collection-focused play", "Bright reward moments", "Short sessions with replayable goals"],
  },
  {
    title: "Arcade Tap Game",
    label: "Project Two",
    tag: "Fast reaction fun",
    accent: "from-orange-300 via-amber-300 to-pink-400",
    surface: "from-orange-50 via-amber-50 to-pink-50",
    highlight: "text-orange-700",
    desc: "A quick-reaction arcade game with simple tap challenges and upbeat score-chasing energy.",
    spotlight: "Fast, simple tap challenges made for score chasing and bursts of arcade energy.",
    details: ["Quick tap challenges", "Score-chasing gameplay", "Easy to pick up between busy moments"],
  },
  {
    title: "Seasonal Catch Game",
    label: "Project Three",
    tag: "Calm arcade play",
    accent: "from-lime-300 via-green-300 to-emerald-500",
    surface: "from-lime-50 via-green-50 to-emerald-50",
    highlight: "text-green-700",
    desc: "A relaxed arcade-style game with simple catching mechanics and friendly seasonal energy.",
    spotlight: "A calm, seasonal arcade game with friendly visuals and easy-to-read action.",
    details: ["Simple catch mechanics", "Seasonal feel", "High-score motivation"],
  },
  {
    title: "Garden Strategy Game",
    label: "Project Four",
    tag: "Light strategy",
    accent: "from-fuchsia-300 via-purple-300 to-indigo-500",
    surface: "from-fuchsia-50 via-purple-50 to-indigo-50",
    highlight: "text-purple-700",
    desc: "A light strategy game about managing playful challenges in quick, readable rounds.",
    spotlight: "Light strategy and quick protection-style rounds with playful pressure.",
    details: ["Light strategy gameplay", "Clear goals and quick rounds", "Playful pressure"],
  },
];

type Game = (typeof games)[number];

function PhoneMockup({ game, className = "" }: { game: Game; className?: string }) {
  return (
    <div className={`relative rounded-[2.4rem] border border-white/15 bg-gray-950 p-2 shadow-2xl shadow-black/40 ${className}`}>
      <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/18" />
      <div className={`relative overflow-hidden rounded-[1.9rem] bg-gradient-to-br ${game.surface} p-5 pt-9`}>
        <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${game.accent} opacity-45 blur-2xl`} />
        <div className={`absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-gradient-to-br ${game.accent} opacity-25 blur-2xl`} />
        <div className="relative flex min-h-[310px] flex-col justify-between">
          <div>
            <div className={`flex h-24 w-24 items-center justify-center rounded-[1.55rem] bg-gradient-to-br ${game.accent} text-2xl font-black text-white shadow-xl shadow-black/20`}>
              {game.label.replace("Project ", "")}
            </div>
            <p className={`mt-6 text-xs font-bold uppercase tracking-[0.16em] ${game.highlight}`}>
              {game.tag}
            </p>
            <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-950">{game.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{game.spotlight}</p>
          </div>
          <div className="mt-8 rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur-sm">
            <div className="mb-3 h-2 w-24 rounded-full bg-gray-950/12" />
            <div className="h-2 w-full rounded-full bg-gray-950/10" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-gray-950/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

const featuredGame = games[0];

const heroStats = [
  { label: "4", detail: "Games in progress" },
  { label: "iPhone", detail: "Built for phone play" },
  { label: "UK", detail: "Registered publisher" },
];

const quickPlay = [
  {
    icon: Clock3,
    title: "Made for spare minutes",
    desc: "Our games are built for short sessions that still feel rewarding.",
  },
  {
    icon: Trophy,
    title: "Progress you can feel",
    desc: "Collect, improve, unlock, and come back when you want another run.",
  },
  {
    icon: ShieldCheck,
    title: "Friendly by design",
    desc: "Clear support, straightforward privacy information, and games that stay easy to understand.",
  },
];

const supportSteps = [
  "Tell us which game you are playing.",
  "Include your iPhone model and iOS version if you can.",
  "Describe what happened and any purchase, advert, or gameplay issue clearly.",
];

const faqs = [
  {
    question: "How do I contact player support?",
    answer:
      "Email support@silverlinegames.co.uk with the game name, your device, and a short description of the issue.",
  },
  {
    question: "Can I send game ideas or pitches?",
    answer:
      "Please use the contact route for support and general enquiries only. We are not asking players to submit game ideas through the website.",
  },
  {
    question: "Where can I find the games?",
    answer:
      "Our first iPhone games are preparing for release. App Store links will be added as soon as the public listings are ready.",
  },
  {
    question: "Who handles purchases and refunds?",
    answer:
      "In-app purchases and refunds are handled through Apple and the App Store. We can still help point you in the right direction if you get stuck.",
  },
];

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Registered UK Company",
    desc: "Silverline Games Limited is registered in England and Wales with published company details.",
  },
  {
    icon: LockKeyhole,
    title: "Clear Privacy Information",
    desc: "Players can read how our games use Apple services, ads, analytics, purchases, and support data.",
  },
  {
    icon: FileText,
    title: "Terms and Support Routes",
    desc: "Simple terms, clear support, and no confusing idea submission forms.",
  },
];

export default function Home() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const currentFeaturedGame = games[featuredIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFeaturedIndex((index) => (index + 1) % games.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousGame = () => {
    setFeaturedIndex((index) => (index - 1 + games.length) % games.length);
  };

  const showNextGame = () => {
    setFeaturedIndex((index) => (index + 1) % games.length);
  };

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
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24 lg:pt-24">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mx-auto mb-12 flex w-full max-w-[360px] items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-2 shadow-2xl shadow-black/40 backdrop-blur-md lg:mx-0"
            >
              <div className="w-full rounded-2xl border border-white/10 bg-[hsl(228,45%,8%)]/35 p-1.5">
                <img
                  src="/logo.png"
                  alt="Silverline Games"
                  className="w-full h-auto rounded-xl object-contain"
                  data-testid="img-hero-logo"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                Independent Mobile Game Publisher
              </p>
              <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl lg:mx-0">
                Building bright, friendly iPhone games for players everywhere.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
                Silverline Games is preparing its first mobile titles for release:
                quick-play games with clear support, cheerful design, and honest updates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("games");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-white text-[hsl(228,45%,12%)] font-semibold px-7 py-2.5 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/30 text-sm sm:w-auto"
                data-testid="button-developer-services"
              >
                See What We’re Building
              </button>
              <a
                href="mailto:support@silverlinegames.co.uk?subject=Support%20Enquiry"
                className="w-full bg-white/10 border border-white/20 text-white font-semibold px-7 py-2.5 rounded-full hover:bg-white/15 transition-all duration-200 shadow-lg shadow-black/20 text-sm sm:w-auto"
                data-testid="button-contact-support"
              >
                Contact Support
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
              aria-label="Silverline Games highlights"
            >
              {heroStats.map((stat) => (
                <div key={stat.detail} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm">
                  <div className="text-xl font-bold text-white">{stat.label}</div>
                  <div className="mt-1 text-xs font-medium text-white/55">{stat.detail}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto h-[470px] w-full max-w-[500px] sm:h-[560px]"
            aria-label="Silverline Games upcoming games preview"
          >
            <div className="absolute left-8 top-8 h-48 w-48 rounded-full bg-cyan-400/25 blur-3xl" />
            <div className="absolute right-6 bottom-10 h-56 w-56 rounded-full bg-purple-500/30 blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-6 w-[72%] -translate-x-1/2 sm:left-4 sm:top-10 sm:w-[58%] sm:translate-x-0"
            >
              <PhoneMockup game={featuredGame} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 hidden w-[52%] sm:block sm:right-2"
            >
              <PhoneMockup game={games[2]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute bottom-3 right-1/2 translate-x-1/2 rounded-3xl border border-white/10 bg-white/[0.07] p-3 shadow-xl shadow-black/25 backdrop-blur-md sm:right-8 sm:top-2 sm:bottom-auto sm:translate-x-0"
            >
              <div className="grid grid-cols-2 gap-2">
                {games.map((game) => (
                  <div
                    key={game.title}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${game.accent} text-sm font-black text-white shadow-md shadow-black/20`}
                    aria-label={game.label}
                  >
                    {game.label.replace("Project ", "")}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* FEATURED GAME */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[330px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeaturedGame.title}
                initial={{ opacity: 0, x: 36, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -36, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <PhoneMockup game={currentFeaturedGame} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-center lg:text-left"
          >
            <p className="text-purple-600 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              Coming Soon
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeaturedGame.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`${currentFeaturedGame.highlight} mb-3 text-sm font-bold uppercase tracking-[0.16em]`}>
                  {currentFeaturedGame.tag}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-950 mb-5">
                  {currentFeaturedGame.title}
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                  {currentFeaturedGame.spotlight}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#games"
                className="inline-flex items-center rounded-full bg-[hsl(228,45%,8%)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-300/60 transition-transform hover:-translate-y-0.5"
              >
                Explore upcoming games
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600">
                Coming soon to iPhone
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousGame}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                  aria-label="Show previous featured game"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextGame}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                  aria-label="Show next featured game"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center gap-2" aria-label="Featured game selector">
                {games.map((game, index) => (
                  <button
                    key={game.title}
                    type="button"
                    onClick={() => setFeaturedIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === featuredIndex ? "w-8 bg-gray-950" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Show ${game.label}`}
                    aria-current={index === featuredIndex ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </motion.div>
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
              building high-quality gaming experiences for players around the world.
              We are preparing approachable iPhone games with clear information,
              responsible support routes, and player-friendly design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="py-20 bg-[hsl(228,45%,8%)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] top-10 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute right-[8%] bottom-0 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-cyan-300/70 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We focus on creating, preparing, and supporting mobile games that are
              easy to pick up and enjoyable to return to when they launch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceHighlights.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                data-testid={`card-service-${i}`}
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK PLAY */}
      <section className="py-20 bg-gradient-to-b from-white to-[hsl(228,20%,97%)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-purple-600 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              Quick Play
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Games Made for Quick Play
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Pick up, play, smile, and come back later. That is the rhythm we build for.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickPlay.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                data-testid={`card-quick-play-${i}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-gray-950 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
              We believe in creating mobile games that are simple to access, easy to understand,
              and supported responsibly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {approachCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
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

      {/* GAMES */}
      <section id="games" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-purple-600 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              Coming Soon
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Games We’re Building
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              A first look at the iPhone games currently being prepared by Silverline Games Limited.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {games.map((game, i) => (
              <motion.article
                key={game.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br ${game.surface} p-5 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-purple-100`}
                data-testid={`card-game-${i}`}
              >
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${game.accent} opacity-[0.18] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.35]`} />
                <div className="relative">
                  <div className="relative mb-5 overflow-hidden rounded-[1.8rem] bg-gray-950/5 p-2">
                    <div className={`flex w-full aspect-square items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${game.accent} text-5xl font-black text-white shadow-lg shadow-gray-200 transition-transform duration-300 group-hover:scale-[1.04]`}>
                      {game.label.replace("Project ", "")}
                    </div>
                    <div className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gray-700 shadow-sm">
                      iPhone
                    </div>
                  </div>
                  <p className={`${game.highlight} text-xs font-semibold uppercase tracking-[0.14em] mb-2`}>
                    {game.tag}
                  </p>
                  <h3 className="text-gray-950 font-semibold text-lg mb-2">{game.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{game.desc}</p>
                </div>
                <div className="mt-4 inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                  <Smartphone className="mr-1.5 h-3.5 w-3.5" />
                  Coming soon to iPhone
                </div>
                <details className="group mt-4 rounded-xl bg-gray-50 p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-gray-900">
                    Game details
                    <ChevronDown className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {game.details.map((detail) => (
                      <li key={detail} className="text-sm leading-relaxed text-gray-500">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:support@silverlinegames.co.uk?subject=Upcoming%20Game%20Support"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700"
                  >
                    Support for upcoming games
                  </a>
                </details>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="py-20 bg-[hsl(228,20%,97%)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-purple-600 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                Player Support
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need Help?
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                We keep support simple. No pitch forms, no idea submissions, just a
                normal contact route for players and future players who need help.
              </p>
              <a
                href="mailto:support@silverlinegames.co.uk?subject=Player%20Support"
                className="inline-flex items-center rounded-full bg-[hsl(228,45%,8%)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-300/60 transition-transform hover:-translate-y-0.5"
                data-testid="link-support-email"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Player Support
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <h3 className="text-gray-950 font-semibold text-lg mb-5">
                What to include in your message
              </h3>
              <ol className="space-y-4">
                {supportSteps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-purple-600 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-gray-500 text-lg">
              A few useful notes before you get in touch.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-950">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-[hsl(228,45%,8%)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px]" />
          <div className="absolute right-[10%] bottom-0 h-80 w-80 rounded-full bg-purple-600/[0.12] blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-300/70 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              Trust & Player Care
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clear, Responsible, Player-Friendly
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              A professional game site should make support, privacy, terms, and
              company information easy to find. No mystery, no maze.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm"
                data-testid={`card-trust-${i}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10">
                  <item.icon className="h-6 w-6 text-cyan-200" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm md:flex-row md:text-left">
            <div>
              <p className="text-sm font-semibold text-white">Useful player links</p>
              <p className="mt-1 text-sm text-white/50">
                Privacy policy, terms, support, and company details are all available from the footer too.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/privacy-policy"
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Terms
              </Link>
              <a
                href="mailto:support@silverlinegames.co.uk?subject=Player%20Support"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[hsl(228,45%,12%)] hover:bg-white/90"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[hsl(228,45%,8%)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-cyan-500/10 blur-[90px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              If you need help with one of our games or have a general question,
              please contact us and we will do our best to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <a
                href="mailto:support@silverlinegames.co.uk?subject=General%20Enquiry"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition-colors"
                data-testid="link-general-enquiry"
              >
                <Smartphone className="w-6 h-6 text-cyan-300 mb-4" />
                <h3 className="text-white font-semibold mb-2">General Enquiries</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  For general questions about Silverline Games Limited or our mobile
                  games, email us directly.
                </p>
                <span className="text-cyan-200 text-sm font-medium">support@silverlinegames.co.uk</span>
              </a>
              <a
                href="mailto:support@silverlinegames.co.uk?subject=Player%20Support"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition-colors"
                data-testid="link-player-support"
              >
                <LifeBuoy className="w-6 h-6 text-purple-300 mb-4" />
                <h3 className="text-white font-semibold mb-2">Player Support</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  Need help with a Silverline Games title? Email us with the game name,
                  device, and a clear description of the issue.
                </p>
                <span className="text-purple-200 text-sm font-medium">support@silverlinegames.co.uk</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
