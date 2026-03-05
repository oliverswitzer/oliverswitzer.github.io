import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { siteContent } from "../content/siteContent";

function slugFromNav(label: string) {
  return label.toLowerCase();
}

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastScrollY.current;
      const pastHero = y > window.innerHeight * 0.5;

      setVisible(pastHero && goingUp);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: visible ? 0 : -80,
      opacity: visible ? 1 : 0,
      duration: 0.4,
      ease: "power2.out"
    });
  }, [visible]);

  return (
    <header
      ref={navRef}
      className="fixed left-0 right-0 top-4 z-50 flex justify-center"
      style={{ transform: "translateY(-80px)", opacity: 0 }}
    >
      <nav className="flex items-center gap-1 rounded-full border border-line-0 bg-bg-1/90 px-2 py-2 text-sm font-medium backdrop-blur-md">
        {siteContent.nav.map((item) => (
          <a
            key={item}
            href={`#${slugFromNav(item)}`}
            className="rounded-full px-4 py-2 text-text-1 transition hover:text-accent"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
