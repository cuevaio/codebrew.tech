import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CalEmbed } from "@/components/cal-embed";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Schedule a Call — Code Brew",
  description:
    "Book a call with the Crafter Station team to discuss partnership opportunities with Code Brew.",
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Film grain */}
      <div className="grain-overlay" />

      {/* Ghost text */}
      <div className="ghost-text top-[15%] -right-[8%] select-none">CALL</div>

      <div className="container-bordered">
        {/* ════════════════════════════════════════
            HEADER
           ════════════════════════════════════════ */}
        <header className="section-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-5 sm:px-8 py-3.5">
            {/* Left — back + brand */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-muted-foreground hover:text-signal transition-colors"
                title="Back to home"
              >
                <ArrowLeft className="size-4" />
              </Link>
              <div className="w-px h-3 bg-border" />
              <div className="status-dot" />
              <span className="text-spaced text-foreground">Code Brew</span>
            </div>

            {/* Right — label */}
            <span className="text-label">Schedule</span>
          </div>
        </header>

        {/* ════════════════════════════════════════
            INTRO
           ════════════════════════════════════════ */}
        <section className="section-border relative overflow-hidden">
          <div className="grid-overlay" />

          {/* Corner brackets */}
          <div className="bracket-tl top-5 left-5 sm:top-8 sm:left-8" />
          <div className="bracket-tr top-5 right-5 sm:top-8 sm:right-8" />

          <div className="relative z-10 px-5 sm:px-8 py-10 sm:py-16">
            <div className="animate-in delay-1 line-full mb-6 sm:mb-8">
              <span className="text-label text-signal ml-4">
                Partnership Call
              </span>
            </div>

            <div className="animate-in delay-2 mb-4">
              <h1
                className="text-display"
                style={{
                  fontSize: "clamp(1.75rem, 8vw, 4.5rem)",
                }}
              >
                Let&apos;s Build
                <br />
                Together
              </h1>
            </div>

            <div className="animate-in delay-3 flex items-center gap-3 mb-6">
              <span className="diamond" />
              <div className="line-signal w-32 sm:w-48" />
              <span className="diamond" />
            </div>

            <div className="animate-in delay-4 max-w-lg">
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed font-mono">
                Interested in partnering with Code Brew? Schedule a call with
                the Crafter Station team to discuss sponsorship, venue
                partnerships, or community collaborations across Latin America
                and Spain.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHAT TO EXPECT
           ════════════════════════════════════════ */}
        <section className="section-border">
          <div className="px-5 sm:px-8 py-8 sm:py-10">
            <div className="line-marker mb-6">
              <span className="text-label">What to Expect</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Introduction",
                  desc: "Learn about Code Brew, our community, and our impact across cities",
                },
                {
                  num: "02",
                  title: "Your Goals",
                  desc: "Share what you are looking for and how we can align with your brand",
                },
                {
                  num: "03",
                  title: "Next Steps",
                  desc: "Define the partnership model and plan the first collaboration",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
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
        </section>

        {/* ════════════════════════════════════════
            CALENDAR EMBED
           ════════════════════════════════════════ */}
        <section className="section-border relative">
          <div className="px-5 sm:px-8 py-8 sm:py-10">
            <div className="flex items-center justify-between mb-6">
              <div className="line-marker">
                <span className="text-label">Pick a Time</span>
              </div>
              <span className="text-label">30 Min Call</span>
            </div>

            <div className="border border-border bg-card overflow-hidden">
              <CalEmbed
                calLink="codebrew/partnership"
                className="min-h-[600px] sm:min-h-[700px]"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ALTERNATIVE CONTACT
           ════════════════════════════════════════ */}
        <section className="section-border relative overflow-hidden">
          <div className="grid-overlay" style={{ opacity: 0.5 }} />

          <div className="relative z-10 px-5 sm:px-8 py-10 sm:py-14 text-center">
            <span className="text-catalog block mb-3">Prefer Another Way?</span>

            <p className="text-xs text-muted-foreground font-mono leading-relaxed max-w-sm mx-auto mb-6">
              If the calendar doesn&apos;t work for you, feel free to reach out
              directly via WhatsApp or through our community channels.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="https://wa.me/51912851377?text=Hi!%20I'm%20interested%20in%20partnering%20with%20Code%20Brew."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-signal"
              >
                WhatsApp Us
              </a>
              <a
                href="https://crafters.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Join Community
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
