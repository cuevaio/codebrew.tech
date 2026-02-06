import { ArrowRight, ArrowUpRight, Coffee } from "lucide-react";
import { Footer } from "@/components/footer";
import { Globe } from "@/components/globe";
import { GithubBadge } from "@/components/github-badge";

const EVENTS = [
  { id: "01", title: "Lima #1", city: "Lima", country: "Peru", date: "Aug 2024" },
  { id: "02", title: "Lima #2", city: "Lima", country: "Peru", date: "Sep 2024" },
  { id: "03", title: "Lima #3", city: "Lima", country: "Peru", date: "Oct 2024" },
  { id: "04", title: "Bogota #1", city: "Bogota", country: "Colombia", date: "Nov 2024" },
  { id: "05", title: "Bogota #2", city: "Bogota", country: "Colombia", date: "Dec 2024" },
  { id: "06", title: "Madrid #1", city: "Madrid", country: "Spain", date: "Jan 2025" },
];

const CITIES = [
  { name: "Lima", country: "Peru", status: "active" },
  { name: "Bogota", country: "Colombia", status: "active" },
  { name: "Madrid", country: "Spain", status: "active" },
  { name: "Sao Paulo", country: "Brazil", status: "soon" },
  { name: "Buenos Aires", country: "Argentina", status: "soon" },
];

const STATS = [
  { value: "06", label: "Events" },
  { value: "05", label: "Countries" },
  { value: "100+", label: "Attendees" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Film grain */}
      <div className="grain-overlay" />

      {/* Ghost text — background bleed */}
      <div className="ghost-text top-[15%] -left-[5%] select-none">
        BREW
      </div>
      <div className="ghost-text bottom-[20%] -right-[8%] select-none">
        CODE
      </div>

      <div className="container-bordered">
        {/* ════════════════════════════════════════
            HEADER
           ════════════════════════════════════════ */}
        <header className="section-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-5 sm:px-8 py-3.5">
            {/* Left — brand */}
            <div className="flex items-center gap-3">
              <div className="status-dot" />
              <span className="text-spaced text-foreground">
                Code Brew
              </span>
            </div>

            {/* Right — meta + nav */}
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="text-label hidden sm:block">
                Est. 2024
              </span>
              <div className="w-px h-3 bg-border hidden sm:block" />
              <a
                href="#events"
                className="text-label hover:text-signal transition-colors hidden sm:block"
              >
                Events
              </a>
              <GithubBadge />
              <a
                href="https://crafters.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-signal text-[10px] py-1.5 px-3"
              >
                Join
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════
            HERO
           ════════════════════════════════════════ */}
        <section className="section-border relative overflow-hidden">
          <div className="grid-overlay" />

          {/* Corner brackets */}
          <div className="bracket-tl top-5 left-5 sm:top-8 sm:left-8" />
          <div className="bracket-tr top-5 right-5 sm:top-8 sm:right-8" />
          <div className="bracket-bl bottom-5 left-5 sm:bottom-8 sm:left-8" />
          <div className="bracket-br bottom-5 right-5 sm:bottom-8 sm:right-8" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
            {/* Left — Text */}
            <div className="px-5 sm:px-8 py-16 sm:py-24">
              {/* Top line with label */}
              <div className="animate-in delay-1 line-full mb-8 sm:mb-12">
                <span className="text-label text-signal ml-4">
                  Monthly Meetups
                </span>
              </div>

              {/* Display headline with em-dash breaks */}
              <div className="animate-in delay-2 mb-6 sm:mb-8">
                <h1 className="text-display">
                  <span className="inline-flex items-center">
                    CO
                    <Coffee className="w-6 h-6 sm:w-10 sm:h-10 text-signal mx-1 sm:mx-2" />
                    DE
                  </span>
                  <br />
                  <span className="inline-flex items-center">
                    BR
                    <Coffee className="w-6 h-6 sm:w-10 sm:h-10 text-signal mx-1 sm:mx-2" />
                    EW
                  </span>
                </h1>
              </div>

              {/* Decorative line separator */}
              <div className="animate-in delay-3 flex items-center gap-3 mb-6 sm:mb-8">
                <span className="diamond" />
                <div className="line-signal w-32 sm:w-48" />
                <span className="diamond" />
              </div>

              {/* Description */}
              <div className="animate-in delay-4 max-w-md mb-8 sm:mb-10">
                <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed font-mono">
                  Monthly meetups where software engineers, designers,
                  founders, and tech professionals gather across Latin America
                  and Spain to connect, share knowledge, and build relationships.
                </p>
              </div>

              {/* CTA */}
              <div className="animate-in delay-5 flex items-center gap-3">
                <a
                  href="https://crafters.chat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-signal"
                >
                  Join the Community
                  <ArrowRight className="size-3.5" />
                </a>
                <a href="#events" className="btn-outline">
                  View Events
                </a>
              </div>
            </div>

            {/* Right — Globe */}
            <div className="relative hidden md:flex items-center justify-center pr-5 sm:pr-8">
              <div className="relative w-[320px] lg:w-[400px]">
                {/* Globe label */}
                <div className="absolute -top-4 left-0 flex items-center gap-2 z-10">
                  <span className="diamond" />
                  <span className="text-label text-signal">Global Reach</span>
                </div>

                {/* Globe */}
                <Globe className="max-w-[400px]" />

                {/* Radial fade at edges */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_40%,var(--background)_75%)]" />

                {/* Catalog number */}
                <div className="absolute -bottom-2 right-0 text-right z-10">
                  <span className="text-label block mb-1">Series</span>
                  <span className="text-2xl font-semibold text-signal font-sans tracking-tight">
                    01
                  </span>
                </div>
              </div>
            </div>

            {/* Catalog number — mobile only */}
            <div className="absolute bottom-5 right-5 text-right md:hidden">
              <span className="text-label block mb-1">Series</span>
              <span className="text-2xl font-semibold text-signal font-sans tracking-tight">
                01
              </span>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            STATS
           ════════════════════════════════════════ */}
        <section className="section-border">
          <div className="grid grid-cols-3">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-5 sm:px-8 py-6 sm:py-10 ${
                  i < STATS.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <span className="text-label block mb-2">{stat.label}</span>
                <span className="text-stat">{stat.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            ABOUT
           ════════════════════════════════════════ */}
        <section className="section-border">
          <div className="grid md:grid-cols-2">
            {/* Left — description */}
            <div className="px-5 sm:px-8 py-8 sm:py-12 md:border-r border-border">
              {/* Section marker */}
              <div className="line-marker mb-6">
                <span className="text-label">About</span>
              </div>

              <h2 className="text-headline text-foreground mb-4">
                Building Latin America&apos;s Most Engaged Tech Community
              </h2>

              <p className="text-[13px] text-muted-foreground leading-relaxed font-mono mb-6">
                Code Brew is a monthly meetup series organized by Crafter Station
                that brings together software engineers, designers, founders, and
                tech professionals. From Lima to Madrid, Bogota to Buenos Aires
                &mdash; we&apos;re creating spaces where the tech community can
                thrive over coffee and conversation.
              </p>

              {/* Decorative calibration marks */}
              <div className="calibration">
                {[8, 12, 6, 16, 4, 10, 14, 8, 6, 12, 4, 16, 10, 8].map((h, i) => (
                  <div
                    key={i}
                    className={`calibration-tick ${i % 3 === 0 ? "active" : ""}`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Right — key values */}
            <div className="px-5 sm:px-8 py-8 sm:py-12">
              <div className="line-marker mb-6">
                <span className="text-label">Mission</span>
              </div>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Connect", desc: "Bridge the gap between tech professionals across Latin America and beyond" },
                  { num: "02", title: "Share", desc: "Create spaces for knowledge exchange, mentorship, and collaborative learning" },
                  { num: "03", title: "Build", desc: "Foster lasting relationships that turn into projects, companies, and friendships" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="text-catalog mt-0.5">{item.num}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground uppercase tracking-wide mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            EVENTS
           ════════════════════════════════════════ */}
        <section id="events" className="section-border relative">
          <div className="grid-overlay" />

          <div className="relative z-10 px-5 sm:px-8 py-8 sm:py-12">
            {/* Section header */}
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <div className="line-marker">
                <span className="text-label">Events</span>
              </div>
              <span className="text-label">
                {EVENTS.length} Total
              </span>
            </div>

            {/* Event grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {EVENTS.map((event) => (
                <div key={event.id} className="event-card group">
                  {/* Catalog number */}
                  <div className="flex items-center justify-between">
                    <span className="text-catalog">{event.id}</span>
                    <span className="text-label">{event.date}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Event info */}
                  <div>
                    <p className="text-sm font-medium text-foreground uppercase tracking-wide mb-0.5">
                      {event.title}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">
                        {event.city}
                      </span>
                      <div className="line-connect" />
                      <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">
                        {event.country}
                      </span>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="event-card-line" />

                  {/* Corner detail on hover */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-signal/0 group-hover:border-signal/40 transition-all duration-200" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CITIES
           ════════════════════════════════════════ */}
        <section className="section-border">
          <div className="grid md:grid-cols-2">
            {/* Left — city list */}
            <div className="px-5 sm:px-8 py-8 sm:py-12 md:border-r border-border">
              <div className="line-marker mb-6">
                <span className="text-label">Cities</span>
              </div>

              <div>
                {CITIES.map((city) => (
                  <div key={city.name} className="city-row">
                    <span className="diamond" />
                    <span className="city-name">{city.name}</span>
                    <div className="line-connect" />
                    <span className="city-country">{city.country}</span>
                    {city.status === "soon" && (
                      <span className="text-[9px] font-mono uppercase text-signal tracking-widest ml-1">
                        Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — expansion note */}
            <div className="px-5 sm:px-8 py-8 sm:py-12 relative overflow-hidden">
              <div className="grid-overlay" style={{ opacity: 0.5 }} />

              <div className="relative z-10">
                <div className="line-marker mb-6">
                  <span className="text-label">Expansion</span>
                </div>

                <div className="mb-6">
                  <span className="text-stat">05</span>
                  <p className="text-label mt-2">
                    Countries &amp; Growing
                  </p>
                </div>

                {/* Region indicators */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="diamond" />
                    <div className="line-signal flex-1" />
                    <span className="text-label">LATAM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="diamond" />
                    <div className="line-signal flex-1" style={{ opacity: 0.5 }} />
                    <span className="text-label">Europe</span>
                  </div>
                </div>

                {/* Calibration */}
                <div className="mt-8 calibration">
                  {[6, 10, 4, 14, 8, 6, 12, 4, 8, 16, 6, 10].map((h, i) => (
                    <div
                      key={i}
                      className={`calibration-tick ${i % 4 === 0 ? "active" : ""}`}
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PARTNERS
           ════════════════════════════════════════ */}
        <section className="section-border relative overflow-hidden">
          <div className="grid-overlay" style={{ opacity: 0.5 }} />

          <div className="relative z-10 px-5 sm:px-8 py-14 sm:py-20 text-center">
            <div className="flex justify-center mb-6">
              <div className="line-marker">
                <span className="text-label">Partners</span>
              </div>
            </div>

            <h2 className="text-headline text-foreground mb-4">
              Become a Partner
            </h2>

            <div className="flex justify-center mb-6">
              <div className="line-signal-center w-48" />
            </div>

            <div className="max-w-md mx-auto mb-8">
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                We&apos;re looking for organizations that share our mission of
                empowering tech communities across Latin America and beyond.
                Sponsor events, provide venues, or collaborate with us to
                shape the future of tech in the region.
              </p>
            </div>

            <a
              href="/deck"
              className="btn-signal"
            >
              View Partnership Deck
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA — NEXT CHAPTER
           ════════════════════════════════════════ */}
        <section className="section-border relative overflow-hidden">
          <div className="grid-overlay" />

          {/* Corner brackets */}
          <div className="bracket-tl top-5 left-5 sm:top-8 sm:left-8" />
          <div className="bracket-br bottom-5 right-5 sm:bottom-8 sm:right-8" />

          <div className="relative z-10 px-5 sm:px-8 py-14 sm:py-20 text-center">
            <span className="text-catalog block mb-3">Next Chapter</span>

            <h2 className="text-headline text-foreground mb-4">
              Loading...
            </h2>

            <div className="flex justify-center mb-6">
              <div className="line-signal-center w-48" />
            </div>

            <div className="max-w-sm mx-auto mb-8">
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                Stay connected. Follow us to be the first to know
                about upcoming events in your city.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <a
                href="https://crafters.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Follow on GitHub
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FOOTER
           ════════════════════════════════════════ */}
        <Footer />
      </div>
    </main>
  );
}
