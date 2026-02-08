"use client";

import { useEffect, useRef, useState } from "react";

interface CalEmbedProps {
  calLink?: string;
  className?: string;
}

export function CalEmbed({
  calLink = "codebrew/partnership",
  className = "",
}: CalEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => setIsLoaded(true);
    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="status-dot" />
          <span className="text-label">Loading Calendar...</span>
        </div>
      )}

      <iframe
        ref={iframeRef}
        title="Schedule a call with the Crafter Station team"
        src={`https://cal.com/${calLink}?embed=true&layout=month_view&theme=dark`}
        className={`w-full h-full border-0 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        allow="payment"
        loading="lazy"
      />
    </div>
  );
}
