import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent, type ExperienceTab } from "../content/siteContent";

gsap.registerPlugin(ScrollTrigger);

const tabs = ["Experience", "Education", "Publications"] as const;
const COLLAPSED_COUNT = 3;

export default function Background() {
  const [activeTab, setActiveTab] = useState<ExperienceTab>("Experience");
  const [showAll, setShowAll] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => siteContent.tabs[activeTab], [activeTab]);
  const isExp = activeTab === "Experience";
  const visible = isExp && !showAll ? items.slice(0, COLLAPSED_COUNT) : items;
  const hasMore = isExp && items.length > COLLAPSED_COUNT;

  useEffect(() => {
    setShowAll(false);
  }, [activeTab]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".timeline-card");
    cards.forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 40 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [visible]);

  const switchTab = (tab: ExperienceTab) => {
    if (tab === activeTab) return;

    const el = listRef.current;
    if (el) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setActiveTab(tab);
          gsap.to(el, { opacity: 1, duration: 0.3 });
        }
      });
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <section id="background" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
          12+ years &middot; 10+ companies &middot; Fortune 500 to small business
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-6xl">
          Background
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => switchTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-accent text-bg-0"
                  : "border border-line-0 text-text-1 hover:text-text-0 hover:border-accent/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div ref={listRef} className="mt-10 space-y-4">
          {visible.map((item) => (
            <article
              key={`${item.title}-${item.org}`}
              className="timeline-card border-l-2 border-line-0 py-4 pl-6 transition hover:border-accent"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="font-sans text-xs uppercase tracking-wider text-text-1">
                  {item.dates}
                </p>
              </div>
              <p className="mt-1 text-sm font-semibold text-accent">
                {item.org} &middot; {item.location}
              </p>
              <p className="mt-2 leading-relaxed text-text-1">{item.summary}</p>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setShowAll((c) => !c)}
              className="rounded-full border border-line-0 px-6 py-2 text-sm font-semibold text-text-0 transition hover:border-accent hover:text-accent"
            >
              {showAll ? "See less" : "See more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
