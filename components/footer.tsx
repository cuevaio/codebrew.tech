import { ArrowUpRight } from "lucide-react";
import { CrafterStationLogo } from "@/components/logos/crafter-station";

const FOOTER_LINKS = {
  events: {
    title: "Events",
    links: [
      { label: "Lima #1", href: "#events" },
      { label: "Lima #2", href: "#events" },
      { label: "Lima #3", href: "#events" },
      { label: "Bogota #1", href: "#events" },
      { label: "Bogota #2", href: "#events" },
      { label: "Madrid #1", href: "#events" },
    ],
  },
  cities: {
    title: "Cities",
    links: [
      { label: "Lima, Peru", href: "#events" },
      { label: "Bogota, Colombia", href: "#events" },
      { label: "Madrid, Spain", href: "#events" },
      { label: "Sao Paulo, Brazil", href: "#events", soon: true },
      { label: "Buenos Aires, Argentina", href: "#events", soon: true },
    ],
  },
  community: {
    title: "Community",
    links: [
      { label: "Join Chat", href: "https://crafters.chat/", external: true },
      { label: "GitHub", href: "https://github.com/crafter-station", external: true },
      { label: "X / Twitter", href: "https://x.com/crafterstation", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/company/crafter-station", external: true },
    ],
  },
  partners: {
    title: "Partners",
    links: [
      { label: "Schedule a Call", href: "/schedule" },
      { label: "Partnership Deck", href: "/deck" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "Crafter Station", href: "https://crafterstation.com", external: true },
      { label: "Kebo", href: "https://kebo.app", external: true },
      { label: "Moraleja Design", href: "https://moraleja.co", external: true },
    ],
  },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top Divider */}
      <div className="h-px w-full bg-border" />

      {/* Main content — enough bottom padding so the wordmark never covers text */}
      <div className="px-5 sm:px-8 pt-10 sm:pt-14 pb-28 sm:pb-40 md:pb-52 relative z-10">
        {/* Top grid: links left, tagline right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16">
          {/* Link columns — 2 cols on mobile, 4 on sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-5 sm:gap-x-6 gap-y-8">
            {Object.values(FOOTER_LINKS).map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="diamond" />
                  <h3 className="text-[11px] sm:text-xs font-medium text-foreground uppercase tracking-wider">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-1 text-[11px] sm:text-xs font-mono text-muted-foreground hover:text-signal transition-colors leading-relaxed"
                    >
                      <span className="truncate">{link.label}</span>
                      {"external" in link && link.external && (
                        <ArrowUpRight className="size-2.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                      {"soon" in link && link.soon && (
                        <span className="text-[7px] sm:text-[8px] text-signal tracking-widest flex-shrink-0">
                          SOON
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right — Tagline + Meta */}
          <div className="flex flex-col items-start lg:items-end gap-5 lg:max-w-[240px]">
            <p className="text-sm text-foreground text-left lg:text-right leading-relaxed">
              Building Latin America&apos;s most engaged tech community, one
              coffee at a time.
            </p>

            {/* Organized by */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-label">Organized by</span>
              <a
                href="https://crafterstation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-label hover:text-signal transition-colors"
              >
                <CrafterStationLogo className="size-4" />
                Crafter Station
              </a>
            </div>

            {/* Decorative calibration */}
            <div className="calibration hidden sm:flex">
              {[4, 8, 6, 12, 4, 10, 6, 14, 4, 8, 10, 6].map((h, i) => (
                <div
                  key={i}
                  className={`calibration-tick ${i % 4 === 0 ? "active" : ""}`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px w-full bg-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="status-dot" />
            <span className="text-spaced text-foreground text-[10px]">
              Code Brew
            </span>
          </div>

          {/* Copyright */}
          <span className="text-label">
            &copy; {new Date().getFullYear()} Crafter Station. All rights
            reserved.
          </span>
        </div>
      </div>

      {/* Giant Wordmark — pushed behind content with z-0, responsive sizing */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] sm:translate-y-[45%] pointer-events-none select-none z-0 w-full flex justify-center"
      >
        <span
          className="block font-mono text-[80px] sm:text-[180px] md:text-[280px] lg:text-[360px] font-semibold leading-none tracking-tighter whitespace-nowrap uppercase"
          style={{
            WebkitTextStroke: "1px var(--border)",
            color: "transparent",
          }}
        >
          CODEBREW
        </span>
      </div>
    </footer>
  );
}
