"use client";

import { useEffect, useRef } from "react";

interface CalEmbedProps {
  calLink?: string;
  className?: string;
}

export function CalEmbed({ 
  calLink = "team/codebrew/meet", 
  className = "" 
}: CalEmbedProps) {
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    
    script.onload = () => {
      // Initialize Cal after script loads
      if (typeof window !== "undefined" && "Cal" in window) {
        const Cal = (window as Window & { Cal: (action: string, config: { origin: string }) => void }).Cal;
        Cal("init", {origin: "https://app.cal.com"});
      }
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[src="https://app.cal.com/embed/embed.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <div className={className}>
      <div
        ref={calRef}
        data-cal-link={calLink}
        data-cal-config='{"layout":"month_view","theme":"dark"}'
        style={{ 
          width: "100%", 
          height: "100%", 
          minHeight: "600px",
          overflow: "scroll"
        }}
      />
    </div>
  );
}
