import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../content/siteContent";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".skill-item");
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl tracking-tight sm:text-6xl">
          Why clients trust me
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line-0 bg-line-0 sm:grid-cols-2">
          {siteContent.skills.map((skill) => (
            <div
              key={skill.label}
              className="skill-item bg-bg-1 p-8"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {skill.label}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-text-0">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
