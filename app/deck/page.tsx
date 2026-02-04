"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Home, MessageCircle } from "lucide-react";
import Link from "next/link";

/* ================================================================
   SLIDE DATA
   ================================================================ */

const SLIDES = [
  // 0 — TITLE
  {
    id: "title",
    render: () => (
      <div className="flex flex-col justify-between h-full px-6 sm:px-12 py-10 sm:py-16 relative">
        <div className="grid-overlay" />

        {/* Corner brackets */}
        <div className="bracket-tl top-6 left-6 sm:top-10 sm:left-10" />
        <div className="bracket-tr top-6 right-6 sm:top-10 sm:right-10" />
        <div className="bracket-bl bottom-6 left-6 sm:bottom-10 sm:left-10" />
        <div className="bracket-br bottom-6 right-6 sm:bottom-10 sm:right-10" />

        <div className="relative z-10 flex flex-col justify-center flex-1">
          <div className="line-full mb-8">
            <span className="text-label text-signal ml-4">
              Partnership Deck
            </span>
          </div>

          <h1 className="text-display mb-6">
            <span className="inline-flex items-center">
              CO
              <span className="inline-block w-8 sm:w-16 h-[2px] bg-signal mx-1 sm:mx-2 translate-y-[-2px]" />
              DE
            </span>
            <br />
            <span className="inline-flex items-center">
              BR
              <span className="inline-block w-8 sm:w-16 h-[2px] bg-signal mx-1 sm:mx-2 translate-y-[-2px]" />
              EW
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground font-mono max-w-md leading-relaxed">
            Building Latin America&apos;s most engaged tech community, one
            coffee at a time.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-label">Crafter Station</span>
          <span className="text-label">2025</span>
        </div>
      </div>
    ),
  },

  // 1 — WHAT IS CODE BREW
  {
    id: "what",
    render: () => (
      <div className="flex flex-col justify-center h-full px-6 sm:px-12 py-10 sm:py-16 relative">
        <div className="line-marker mb-6 sm:mb-8">
          <span className="text-label">What Is Code Brew</span>
        </div>

        <h2 className="text-headline text-foreground mb-6 max-w-lg text-base sm:text-lg md:text-xl">
          Monthly meetups where software engineers, designers, and tech
          professionals gather to connect and build relationships.
        </h2>

        <p className="text-sm text-muted-foreground font-mono max-w-md mb-10 leading-relaxed">
          3 hours of networking, career conversations, and project
          discussions in a curated, invite-only setting.
        </p>

        <div className="flex items-center gap-3 mb-8">
          <span className="diamond" />
          <div className="line-signal w-32 sm:w-48" />
          <span className="diamond" />
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
          {[
            { n: "06", l: "Events" },
            { n: "03", l: "Countries" },
            { n: "03", l: "Hours Each" },
          ].map((s) => (
            <div key={s.l}>
              <span className="text-stat text-2xl sm:text-4xl">{s.n}</span>
              <p className="text-label mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 2 — OUR COMMUNITY
  {
    id: "community",
    render: () => (
      <div className="flex flex-col justify-center h-full px-6 sm:px-12 py-10 sm:py-16 relative">
        <div className="grid-overlay" />

        <div className="relative z-10">
          <div className="line-marker mb-6 sm:mb-8">
            <span className="text-label">Our Community</span>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {[
              { value: "300", label: "Members", detail: "Across WhatsApp communities in Peru, Colombia, and Latin America" },
              { value: "200K", label: "Monthly Interactions", detail: "Across LinkedIn and Instagram content" },
              { value: "10", label: "Posts / Week", detail: "Consistent content before, during, and after every event" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 sm:gap-6">
                <span className="text-stat text-2xl sm:text-3xl md:text-5xl min-w-[70px] sm:min-w-[100px] md:min-w-[140px] text-right">
                  {item.value}
                </span>
                <div className="pt-1 sm:pt-2">
                  <p className="text-sm font-medium text-foreground uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed max-w-xs">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 3 — WHO ATTENDS
  {
    id: "audience",
    render: () => (
      <div className="flex flex-col justify-center h-full px-6 sm:px-12 py-10 sm:py-16">
        <div className="line-marker mb-6 sm:mb-8">
          <span className="text-label">Who Attends</span>
        </div>

        <h2 className="text-headline text-foreground mb-8 max-w-md text-base sm:text-lg md:text-xl">
          High-value tech professionals, handpicked for every event.
        </h2>

        <div className="space-y-5 max-w-lg">
          {[
            { label: "Profile", value: "Software engineers, product designers, founders" },
            { label: "Age Range", value: "25 — 30 years old" },
            { label: "Income", value: "3 — 5x local median (tech salaries)" },
            { label: "Mindset", value: "Early adopters, quality-conscious, community-driven" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="text-catalog mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-foreground uppercase tracking-wide">
                    {item.label}
                  </span>
                  <div className="line-connect" />
                </div>
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 4 — EVENT METRICS
  {
    id: "metrics",
    render: () => (
      <div className="flex flex-col justify-center h-full px-6 sm:px-12 py-10 sm:py-16 relative">
        <div className="grid-overlay" />

        <div className="relative z-10">
          <div className="line-marker mb-6 sm:mb-8">
            <span className="text-label">Event Metrics</span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-12 max-w-lg">
            {[
              { value: "20–25", label: "Attendees per event", sub: "Curated from hundreds of applicants" },
              { value: "~10%", label: "Acceptance rate", sub: "90% of RSVPs turned away" },
              { value: "30%", label: "Return rate", sub: "Nearly 1/3 come back next event" },
              { value: "$13", label: "Avg. spend per head", sub: "Direct revenue for venue partners" },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-stat text-2xl sm:text-4xl">
                  {item.value}
                </span>
                <p className="text-xs font-medium text-foreground uppercase tracking-wide mt-1 mb-0.5">
                  {item.label}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-mono leading-relaxed">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 5 — WHAT PARTNERS GET
  {
    id: "value",
    render: () => (
      <div className="flex flex-col justify-center h-full px-6 sm:px-12 py-10 sm:py-16">
        <div className="line-marker mb-6 sm:mb-8">
          <span className="text-label">What Partners Get</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl">
          {[
            {
              title: "Brand Visibility",
              items: [
                "Logo on all event materials",
                "Social media mentions & tags",
                "Dedicated story/post per event",
                "Photo content with your brand",
              ],
            },
            {
              title: "Physical Presence",
              items: [
                "Co-branded stickers for attendees",
                "Product placement opportunities",
                "Signage at venue",
              ],
            },
            {
              title: "Association",
              items: [
                '"Powered by [You]" positioning',
                "Community testimonials",
                "Long-term recall with tech pros",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="flex items-center gap-2 mb-3">
                <span className="diamond" />
                <span className="text-xs font-medium text-foreground uppercase tracking-wider">
                  {col.title}
                </span>
              </div>
              <div className="space-y-2">
                {col.items.map((item) => (
                  <p
                    key={item}
                    className="text-[11px] sm:text-xs text-muted-foreground font-mono leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 6 — PARTNERSHIP TIERS
  {
    id: "tiers",
    render: () => (
      <div className="flex flex-col justify-center h-full px-6 sm:px-12 py-10 sm:py-16">
        <div className="line-marker mb-6 sm:mb-8">
          <span className="text-label">Partnership Tiers</span>
        </div>

        <div className="space-y-6 max-w-lg">
          {[
            {
              num: "01",
              title: "Venue Partner",
              desc: "Host our monthly event. Featured in all content. Guaranteed foot traffic and spend.",
            },
            {
              num: "02",
              title: "Sponsor",
              desc: "Logo placement across materials. Social media package. Product integration opportunities.",
            },
            {
              num: "03",
              title: "Exclusive Partner",
              desc: "\"Code Brew x [Your Brand]\" co-branding. First-right-of-refusal. Deep community integration.",
            },
          ].map((tier) => (
            <div
              key={tier.num}
              className="border border-border p-4 sm:p-5 hover:border-signal transition-colors duration-200 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-catalog text-lg sm:text-xl mt-0.5">
                  {tier.num}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground uppercase tracking-wide mb-1.5">
                    {tier.title}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 7 — REVENUE IMPACT
  {
    id: "revenue",
    render: () => (
      <div className="flex flex-col justify-center h-full px-6 sm:px-12 py-10 sm:py-16 relative">
        <div className="grid-overlay" />

        <div className="relative z-10">
          <div className="line-marker mb-6 sm:mb-8">
            <span className="text-label">Revenue Impact</span>
          </div>

          <h2 className="text-headline text-foreground mb-8 max-w-md text-base sm:text-lg md:text-xl">
            Tangible returns for venue partners.
          </h2>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-lg mb-10">
            <div>
              <span className="text-label text-signal block mb-2">
                Per Event
              </span>
              <span className="text-stat text-2xl sm:text-3xl md:text-5xl">$286</span>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-mono mt-1">
                22 attendees &times; $13 USD
              </p>
            </div>
            <div>
              <span className="text-label text-signal block mb-2">
                Annual (12 Events)
              </span>
              <span className="text-stat text-2xl sm:text-3xl md:text-5xl">$3.4K+</span>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-mono mt-1">
                Direct revenue + repeat visits
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="diamond" />
            <div className="line-signal w-32 sm:w-48" />
            <span className="diamond" />
          </div>

          <p className="text-xs text-muted-foreground font-mono mt-4 max-w-sm leading-relaxed">
            Plus organic content creation, social proof, and community members
            who return independently.
          </p>
        </div>
      </div>
    ),
  },

  // 8 — CONTACT
  {
    id: "contact",
    render: () => (
      <div className="flex flex-col justify-between h-full px-6 sm:px-12 py-10 sm:py-16 relative">
        <div className="grid-overlay" />

        {/* Corner brackets */}
        <div className="bracket-tl top-6 left-6 sm:top-10 sm:left-10" />
        <div className="bracket-tr top-6 right-6 sm:top-10 sm:right-10" />
        <div className="bracket-bl bottom-6 left-6 sm:bottom-10 sm:left-10" />
        <div className="bracket-br bottom-6 right-6 sm:bottom-10 sm:right-10" />

        <div className="relative z-10 flex flex-col justify-center flex-1">
          <div className="line-marker mb-6 sm:mb-8">
            <span className="text-label">Let&apos;s Talk</span>
          </div>

          <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4 max-w-lg">
            Connect with tech talent across Latin America.
          </h2>

          <p className="text-sm text-muted-foreground font-mono max-w-md mb-8 leading-relaxed">
            We&apos;re looking for partners who share our values: quality,
            community, and building something meaningful.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="https://wa.me/51912851377?text=Hi!%20I'm%20interested%20in%20partnering%20with%20Code%20Brew."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-signal"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp Us
            </a>
            <a
              href="https://crafters.chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Join Community
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href="https://crafterstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Crafter Station
              <ArrowRight className="size-3" />
            </a>
          </div>

          <div className="calibration">
            {[8, 12, 6, 16, 4, 10, 14, 8, 6, 12, 4, 16, 10, 8].map(
              (h, i) => (
                <div
                  key={i}
                  className={`calibration-tick ${i % 3 === 0 ? "active" : ""}`}
                  style={{ height: `${h}px` }}
                />
              ),
            )}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-label">@crafterstation</span>
          <span className="text-label">codebrew.tech/deck</span>
        </div>
      </div>
    ),
  },
];

/* ================================================================
   DECK COMPONENT
   ================================================================ */

export default function DeckPage() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const total = SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const next = Math.max(0, Math.min(total - 1, index));
      if (next === current) return;
      setIsTransitioning(true);
      setCurrent(next);
      setTimeout(() => setIsTransitioning(false), 400);
    },
    [current, total, isTransitioning],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, goTo, total]);

  // Touch support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <div
      className="h-dvh bg-background text-foreground overflow-hidden relative select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Film grain */}
      <div className="grain-overlay" />

      {/* Ghost text */}
      <div className="ghost-text top-[20%] -right-[10%]">DECK</div>

      {/* Main container */}
      <div className="container-bordered h-full flex flex-col relative">
        {/* Slide area */}
        <div className="flex-1 relative overflow-hidden">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className="absolute inset-0 transition-all duration-400 ease-out"
              style={{
                opacity: i === current ? 1 : 0,
                transform: `translateX(${(i - current) * 20}px)`,
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              {slide.render()}
            </div>
          ))}
        </div>

        {/* Bottom bar — navigation + progress */}
        <div className="flex-shrink-0 border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-3 sm:px-8 py-2 sm:py-3">
            {/* Left — back + slide counter */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="/"
                className="p-1.5 sm:p-2 text-muted-foreground hover:text-signal transition-colors"
                title="Back to home"
              >
                <Home className="size-3.5 sm:size-4" />
              </Link>
              <div className="w-px h-4 bg-border" />
              <div className="status-dot" />
              <span className="text-catalog text-xs sm:text-sm">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-label">/</span>
              <span className="text-label">
                {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Center — progress dots */}
            <div className="hidden sm:flex items-center gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-signal"
                      : i < current
                        ? "w-2 bg-signal/30"
                        : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            {/* Right — WhatsApp + arrows */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              <a
                href="https://wa.me/51912851377?text=Hi!%20I'm%20interested%20in%20partnering%20with%20Code%20Brew."
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 text-muted-foreground hover:text-signal transition-colors"
                title="Contact via WhatsApp"
              >
                <MessageCircle className="size-3.5 sm:size-4" />
              </a>
              <div className="w-px h-4 bg-border" />
              <button
                onClick={prev}
                disabled={current === 0}
                className="p-1.5 sm:p-2 text-muted-foreground hover:text-signal disabled:opacity-20 disabled:hover:text-muted-foreground transition-colors"
              >
                <ArrowLeft className="size-3.5 sm:size-4" />
              </button>
              <button
                onClick={next}
                disabled={current === total - 1}
                className="p-1.5 sm:p-2 text-muted-foreground hover:text-signal disabled:opacity-20 disabled:hover:text-muted-foreground transition-colors"
              >
                <ArrowRight className="size-3.5 sm:size-4" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-px bg-border">
            <div
              className="h-full bg-signal transition-all duration-400 ease-out"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
