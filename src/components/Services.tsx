import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../content/siteContent";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const blocks = section.querySelectorAll(".service-block");

    blocks.forEach((block, i) => {
      const fromX = i % 2 === 0 ? -80 : 80;
      gsap.set(block, { opacity: 0, x: fromX });
      gsap.to(block, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="services" ref={sectionRef} className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl tracking-tight sm:text-6xl">
          What I do
        </h2>
        <div className="mt-16 space-y-20">
          {siteContent.offers.map((offer, i) => (
            <article
              key={offer.title}
              className="service-block border-t border-line-0 pt-8"
            >
              <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                <span className="font-sans text-sm text-text-1">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl">{offer.title}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-1">
                    {offer.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
