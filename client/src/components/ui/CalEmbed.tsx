"use client";

import { useEffect, useRef, useState } from "react";

type CalEmbedProps = {
  id?: string;
  height?: string;
  isFooter?: boolean;
};

export default function CalEmbed({ id = "cal-embed", height = "580px", isFooter = false }: CalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/kevin-young-intrinsicmind/30min?hide_gdpr_banner=1";
    let observer: MutationObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const loadCalendly = () => {
      if (typeof window !== "undefined" && (window as any).Calendly) {
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        
        (window as any).Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
          prefill: {},
          pageSettings: {},
        });

        // Set a safety timeout to remove the spinner if loading takes too long or onload doesn't fire
        timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 3000);

        // Monitor container to attach onload listener to the iframe
        observer = new MutationObserver(() => {
          const iframe = containerRef.current?.querySelector("iframe");
          if (iframe) {
            iframe.onload = () => {
              setIsLoading(false);
              if (timeoutId) clearTimeout(timeoutId);
            };
            observer?.disconnect();
          }
        });

        if (containerRef.current) {
          observer.observe(containerRef.current, { childList: true });
        }
      }
    };

    const scriptUrl = "https://assets.calendly.com/assets/external/widget.js";
    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.onload = loadCalendly;
      document.body.appendChild(script);
    } else {
      if ((window as any).Calendly) {
        loadCalendly();
      } else {
        script.addEventListener("load", loadCalendly);
      }
    }

    return () => {
      if (script) {
        script.removeEventListener("load", loadCalendly);
      }
      if (observer) {
        observer.disconnect();
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-[18px] bg-white overflow-hidden"
      style={{
        height,
        zIndex: isFooter ? 10 : "auto",
      }}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
        </div>
      )}
      
      {/* Calendly Mount Point */}
      <div
        ref={containerRef}
        className="w-full h-full relative z-10"
        id={id}
        style={{ height: "100%" }}
      />
    </div>
  );
}
