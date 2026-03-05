import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

export default function AnimatedText({ text, className = "", as: Tag = "h1", delay = 0 }: Props) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".char");
    gsap.set(chars, { opacity: 0, y: 40 });
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.02,
      ease: "power3.out",
      delay
    });
  }, [delay]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef as any} className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span key={ci} className="char inline-block">
              {char}
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
