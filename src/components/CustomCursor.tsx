import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(true); // default true to avoid flash
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>();

  // Detect pointer type
  useEffect(() => {
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsMobile(hasCoarsePointer && !hasFinePointer);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track hoverable elements
    const handleOverInteractive = () => setIsHovering(true);
    const handleOutInteractive = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Observe interactive elements
    const interactiveSelectors = "a, button, [role='button'], input, textarea, select, .cursor-pointer, .hover-zoom";
    const addListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", handleOverInteractive);
        el.addEventListener("mouseleave", handleOutInteractive);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", handleOverInteractive);
        el.removeEventListener("mouseleave", handleOutInteractive);
      });
      observer.disconnect();
    };
  }, [isMobile, isVisible]);

  // Smooth ring follow with RAF
  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      ringPos.current.x += (position.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (position.y - ringPos.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full bg-primary-foreground"
          style={{
            width: isHovering ? 6 : 5,
            height: isHovering ? 6 : 5,
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        />
      </div>

      {/* Ring — glass magnifier effect */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full border border-primary-foreground/60"
          style={{
            width: isHovering ? 56 : 36,
            height: isHovering ? 56 : 36,
            transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1), height 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease",
            background: isHovering
              ? "radial-gradient(circle, hsla(0, 0%, 100%, 0.08) 0%, transparent 70%)"
              : "transparent",
            backdropFilter: isHovering ? "blur(1px)" : "none",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
