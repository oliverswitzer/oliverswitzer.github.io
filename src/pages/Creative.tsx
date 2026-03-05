import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Creative() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 0, y: 30 });
      gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-0 px-4 text-text-0">
      <div ref={contentRef} className="text-center">
        <h1 className="font-display text-5xl tracking-tight sm:text-7xl">
          Coming Soon
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text-1">
          Creative technology &amp; fabrication projects are on the way.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block rounded-full border border-line-0 px-8 py-4 text-base font-semibold text-text-0 transition hover:border-accent hover:text-accent"
        >
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}
