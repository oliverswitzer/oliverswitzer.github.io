import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteContent } from "../content/siteContent";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    if (subtextRef.current) {
      gsap.set(subtextRef.current, { opacity: 0, y: 30 });
      tl.to(subtextRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    }
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.3;
      section.style.transform = `translateY(${offset}px)`;
      section.style.opacity = `${1 - scrollY / (window.innerHeight * 0.8)}`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        const pull = (150 - dist) / 150;
        gsap.to(btn, { x: dx * pull * 0.3, y: dy * pull * 0.3, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
      }
    };

    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
    };

    window.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-4">
      <div ref={sectionRef} className="mx-auto max-w-4xl text-center">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {siteContent.brand.name} &middot; {siteContent.brand.location}
        </p>

        <AnimatedText
          text="Automate the busywork so you can spend more time doing what you love."
          className="font-display text-5xl leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
          delay={0.1}
        />

        <p
          ref={subtextRef}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-1 sm:text-xl"
        >
          {siteContent.brand.intro}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            ref={btnRef}
            href={`mailto:${siteContent.brand.email}?subject=AI%20Opportunity%20Audit`}
            className="inline-block rounded-full bg-accent px-8 py-4 text-base font-semibold text-bg-0 transition hover:bg-accent-2"
          >
            Book your free audit
          </a>
        </div>
      </div>
    </section>
  );
}
