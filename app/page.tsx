"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Stats", href: "#stats" },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.332 2.798H4.13c-1.361 0-2.332-1.797-1.332-2.798L4 14.5" />
      </svg>
    ),
    name: "SkillStack Matching",
    description:
      "Our SkillStack algorithm maps your technical depth, domain expertise, and execution history against 47 founder attributes — surfacing co-founders whose gaps you fill and who fill yours.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    name: "VisionAlign Score",
    description:
      "Beyond skills — co-founder fit breaks down over values and ambition mismatches. VisionAlign scores risk tolerance, work style, equity expectations, and 5-year vision before you ever meet.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    name: "Warm Introductions",
    description:
      "Cold outreach to a stranger doesn't build trust. Every CoFounderConnect introduction comes with shared context — why we matched you, what you have in common, and a structured first-call framework.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    name: "Verified Builder Profiles",
    description:
      "Anyone can write a bio. CoFounderConnect profiles pull verified GitHub contributions, past startup outcomes, and references from previous collaborators — so you know who you're really talking to.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    name: "Structured Co-Founder Dialogues",
    description:
      "We provide 12 critical conversation frameworks covering equity splits, technical ownership, fundraising strategy, and exit preferences — topics that destroy partnerships when left unspoken.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    name: "Momentum Tracking",
    description:
      "Most co-founder searches stall. CoFounderConnect's Momentum Score tracks your engagement cadence, flags promising matches going cold, and nudges both parties to keep the conversation moving.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Build Your Builder Profile",
    description:
      "Connect GitHub, describe your domain expertise, and answer 20 calibrated questions about work style, risk appetite, equity philosophy, and what you're building. Takes 15 minutes. Lasts a career.",
  },
  {
    number: "02",
    title: "Get Your First SkillStack Analysis",
    description:
      "Our AI maps your profile against every active founder in our network, scores complementarity across technical and non-technical dimensions, and surfaces your top 5 matches with detailed reasoning.",
  },
  {
    number: "03",
    title: "Receive Warm, Contextualized Introductions",
    description:
      "No cold inbox. We send both parties a match brief — what CoFounderConnect saw, what you share, and why we think it's worth 30 minutes. Both parties opt in before contact details are exchanged.",
  },
  {
    number: "04",
    title: "Run the Co-Founder Dialogue Protocol",
    description:
      "Use our structured conversation framework to cover the 12 make-or-break topics in 3 calls. Most partnerships fail on things that were never discussed. We make sure you discuss them.",
  },
];

const STATS = [
  { value: "14,200+", label: "Verified Builders", sublabel: "Active on platform" },
  { value: "3.1x", label: "Higher Success Rate", sublabel: "vs. cold outreach" },
  { value: "18 days", label: "Median Time to Match", sublabel: "First intro to partnership" },
  { value: "840+", label: "Funded Teams", sublabel: "From CoFounderConnect matches" },
];

const TESTIMONIALS = [
  {
    quote:
      "I spent 8 months on other platforms getting nowhere. CoFounderConnect's VisionAlign score surfaced a mismatch I hadn't even articulated to myself. My match was the founder I'd been describing but couldn't find.",
    name: "Priya Rajan",
    role: "CEO, Lumos Health",
    raised: "Raised $2.1M Seed",
    initials: "PR",
  },
  {
    quote:
      "The Structured Dialogue protocol saved us from a potential equity disaster. We had very different assumptions about dilution and founder salary. Talking through it before we started meant we started on solid ground.",
    name: "Marcus Webb",
    role: "CTO, Stackline",
    raised: "YC W24",
    initials: "MW",
  },
  {
    quote:
      "I'm a designer, not an engineer. Every other platform buried me in engineer profiles I couldn't evaluate. SkillStack matched me with a technical co-founder whose skills actually complemented mine. We shipped v1 in 6 weeks.",
    name: "Anya Chen",
    role: "Co-Founder, Forma",
    raised: "500 Startups Batch 34",
    initials: "AC",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center glow-blue-sm">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <span className="font-semibold text-white text-sm tracking-tight">CoFounderConnect</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors px-4 py-2"
            >
              Sign In
            </a>
            <a
              href="#cta"
              className="text-sm font-medium bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg transition-all duration-200 glow-blue-sm"
            >
              Get Early Access
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background-secondary border-b border-white/5 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="text-sm font-medium bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent uppercase tracking-widest">
              AI-Powered Co-Founder Matching
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-balance leading-[1.1]">
            The right co-founder
            <br />
            <span className="gradient-text-blue">changes everything.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            CoFounderConnect matches serious builders on skill complementarity, value alignment, and working style — not just who posted in the same Slack group. Most funded teams start here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 glow-blue text-sm"
            >
              Find Your Co-Founder
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 text-sm bg-white/5"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              No cold introductions
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Verified GitHub &amp; background
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Free for founders
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary/30 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Platform Features</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Built for how partnerships
              <br />
              <span className="gradient-text">actually form.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Every feature exists because a co-founder relationship failed without it. We built from failure modes backward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-background-card rounded-2xl p-6 border-subtle hover:border-blue-subtle transition-all duration-300 hover:glow-blue-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/15 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              From profile to partnership
              <br />
              <span className="gradient-text">in four steps.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Median time from first profile to first intro: 4 days. Median time from first intro to active partnership: 18 days.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />
            <div className="flex flex-col gap-8">
              {STEPS.map((step, i) => (
                <div key={i} className="relative flex gap-6 md:gap-10 items-start group">
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 rounded-2xl bg-background-card border border-accent/20 flex items-center justify-center group-hover:border-accent/40 group-hover:glow-blue-sm transition-all duration-300">
                      <span className="text-accent font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-3 pb-4">
                    <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background-secondary/40 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Traction</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Numbers from the{" "}
              <span className="gradient-text-blue">network.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-background-card rounded-2xl border-subtle hover:border-blue-subtle transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-accent mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* TESTIMONIALS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-background-card rounded-2xl p-6 border-subtle hover:border-blue-subtle transition-all duration-300 flex flex-col gap-5"
              >
                <div className="text-4xl text-accent/30 font-serif leading-none">&ldquo;</div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-xs flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role} · {t.raised}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-medium text-accent uppercase tracking-widest">Limited Early Access</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Your co-founder is
            <br />
            <span className="gradient-text-blue">already on the platform.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            14,200 verified builders are waiting. Build your profile in 15 minutes and receive your first SkillStack match within 4 days. Free for founders, always.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-background-card border border-white/10 focus:border-accent/50 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 glow-blue text-sm whitespace-nowrap"
            >
              Request Early Access
            </button>
          </form>

          <p className="text-slate-600 text-xs">
            No spam. No cold intros. Unsubscribe anytime. Free for founders.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">CoFounderConnect</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Blog</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Contact</a>
            </div>

            <p className="text-slate-600 text-sm">© 2024 CoFounderConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
