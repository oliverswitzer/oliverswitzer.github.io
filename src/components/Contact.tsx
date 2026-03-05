import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../content/siteContent";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set(section, { opacity: 0, y: 40 });
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
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

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="px-4 py-32">
      <div className="mx-auto max-w-5xl rounded-2xl bg-accent/10 px-8 py-20 text-center sm:px-16">
        <h2 className="font-display text-4xl tracking-tight sm:text-6xl">
          {siteContent.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-1">
          {siteContent.cta.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            ref={btnRef}
            href={siteContent.cta.primaryHref}
            className="inline-block rounded-full bg-accent px-8 py-4 text-base font-semibold text-bg-0 transition hover:bg-accent-2"
          >
            {siteContent.cta.primaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
