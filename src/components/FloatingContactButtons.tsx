import { useState, useRef, useEffect } from "react";
import { MessageCircle, Phone, X, Headphones } from "lucide-react";

const PHONE_NUMBER = "918799997899";

const FloatingContactButtons = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-label="Quick contact"
      className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-2.5 sm:bottom-7 sm:right-7"
    >
      {/* Expanded Menu */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-200 origin-bottom-right ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <a
          href={`https://wa.me/${PHONE_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group inline-flex h-10 items-center gap-2.5 rounded-full border border-border/80 bg-background/95 pl-3.5 pr-4 text-xs font-medium tracking-wide text-foreground shadow-md backdrop-blur-md transition duration-200 hover:-translate-x-0.5 hover:border-[#25D366]/60 hover:bg-background"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1fa855]/15 text-[#1fa855]">
            <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
          </span>
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:+${PHONE_NUMBER}`}
          aria-label="Call us"
          className="group inline-flex h-10 items-center gap-2.5 rounded-full border border-border/80 bg-background/95 pl-3.5 pr-4 text-xs font-medium tracking-wide text-foreground shadow-md backdrop-blur-md transition duration-200 hover:-translate-x-0.5 hover:border-primary/50 hover:bg-background"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
          </span>
          <span>Call Now</span>
        </a>
      </div>

      {/* Compact Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-border/70 bg-background/95 px-4 text-xs font-medium tracking-wider uppercase text-foreground shadow-lg shadow-black/15 backdrop-blur-md transition duration-200 hover:border-primary/50 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {open ? (
          <>
            <X
              aria-hidden="true"
              className="h-3.5 w-3.5 text-muted-foreground"
            />
            <span>Close</span>
          </>
        ) : (
          <>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <Headphones
              aria-hidden="true"
              className="h-3.5 w-3.5 text-primary"
            />
            <span>Contact</span>
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingContactButtons;
