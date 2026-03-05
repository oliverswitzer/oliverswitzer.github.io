import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { siteContent } from "../content/siteContent";

export default function Landing() {
  const photoRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const ctaBlockRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    if (photoRef.current) {
      gsap.set(photoRef.current, { opacity: 0 });
      tl.to(photoRef.current, { opacity: 1, duration: 1, ease: "power2.out" });
    }
    if (overlayTextRef.current) {
      gsap.set(overlayTextRef.current, { opacity: 0, y: 20 });
      tl.to(overlayTextRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
    }
    if (ctaBlockRef.current) {
      gsap.set(ctaBlockRef.current, { opacity: 0, y: 30 });
      tl.to(ctaBlockRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3");
    }
    if (resumeRef.current) {
      gsap.set(resumeRef.current, { opacity: 0, y: 20 });
      tl.to(resumeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg-0 text-text-0">
      {/* Hero photo with text overlay */}
      <section className="mx-auto max-w-5xl px-4 pt-12 sm:pt-20">
        <div ref={photoRef} className="relative overflow-hidden rounded-2xl">
          <img
            src="/assets/oliver-headshot.jpg"
            alt={siteContent.brand.name}
            className="block w-full object-cover object-[center_25%] sm:max-h-[70vh]"
          />
          {/* Text overlay — top left */}
          <div
            ref={overlayTextRef}
            className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-[60%] sm:max-w-[50%]"
          >
            <h1 className="font-display text-3xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              Hi, I'm Oliver.
            </h1>
            <p className="mt-2 font-display text-xl leading-snug text-white/80 sm:text-2xl lg:text-3xl drop-shadow-md">
              I help ideas escape whiteboards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Blocks */}
      <section ref={ctaBlockRef} className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            to="/ai"
            className="group rounded-2xl border border-line-0 bg-bg-1 p-10 text-center transition hover:border-accent"
          >
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl group-hover:text-accent transition">
              AI Automations
            </h2>
            <p className="mt-4 text-text-1 leading-relaxed">
              Practical AI automations for small businesses. Eliminate manual workflow bottlenecks and save real hours.
            </p>
            <span className="mt-6 inline-block font-mono text-sm uppercase tracking-widest text-accent">
              Explore &rarr;
            </span>
          </Link>

          <Link
            to="/creative"
            className="group rounded-2xl border border-line-0 bg-bg-1 p-10 text-center transition hover:border-accent"
          >
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl group-hover:text-accent transition">
              Creative Technology &amp; Fabrication
            </h2>
            <p className="mt-4 text-text-1 leading-relaxed">
              Interactive installations, physical computing, and creative engineering for memorable experiences.
            </p>
            <span className="mt-6 inline-block font-mono text-sm uppercase tracking-widest text-accent">
              Explore &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* Resume download */}
      <section ref={resumeRef} className="mx-auto max-w-5xl px-4 pb-24 text-center">
        <a
          href="/assets/oliver-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full border border-line-0 px-8 py-4 text-base font-semibold text-text-0 transition hover:border-accent hover:text-accent"
        >
          Download resume
        </a>
      </section>
    </div>
  );
}
