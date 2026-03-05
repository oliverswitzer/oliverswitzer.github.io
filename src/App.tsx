import { useEffect, useMemo, useState } from "react";
import { siteContent, type ExperienceTab } from "./content/siteContent";

const tabs = ["Experience", "Education", "Publications"] as const;
const EXPERIENCE_COLLAPSED_COUNT = 3;

function slugFromNav(label: string) {
  return label.toLowerCase();
}

export default function App() {
  const [activeTab, setActiveTab] = useState<ExperienceTab>("Experience");
  const [showAllExperience, setShowAllExperience] = useState(false);
  const tabItems = useMemo(() => siteContent.tabs[activeTab], [activeTab]);
  const isExperienceTab = activeTab === "Experience";
  const hasHiddenExperienceItems = isExperienceTab && tabItems.length > EXPERIENCE_COLLAPSED_COUNT;
  const visibleItems = useMemo(() => {
    if (isExperienceTab && !showAllExperience) {
      return tabItems.slice(0, EXPERIENCE_COLLAPSED_COUNT);
    }

    return tabItems;
  }, [isExperienceTab, showAllExperience, tabItems]);

  useEffect(() => {
    setShowAllExperience(false);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-bg-0 text-text-0">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-5 sm:px-6 lg:px-10">
        <header className="sticky top-4 z-30 flex justify-center">
          <nav className="flex flex-wrap items-center gap-2 rounded-full border border-accent-2/35 bg-bg-1/85 p-2 text-sm font-medium shadow-card backdrop-blur">
            {siteContent.nav.map((item) => (
              <a
                key={item}
                href={`#${slugFromNav(item)}`}
                className="rounded-full px-4 py-2 transition hover:bg-accent hover:text-bg-0"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main className="space-y-10 pt-8">
          <section
            id="home"
            className="grid gap-5 rounded-2xl border border-line-0 bg-gradient-to-r from-bg-0 to-bg-1 p-6 shadow-glow lg:grid-cols-[1.45fr_1fr]"
          >
            <div className="space-y-4">
              <p className="inline-flex w-fit border border-accent/50 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                {siteContent.brand.role}
              </p>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                Eliminate manual workflow headaches. Deploy AI that actually runs the business.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-text-1">
                {siteContent.brand.intro}
              </p>
              <p className="text-lg font-semibold text-accent">
                {siteContent.brand.vibeLine}
              </p>
              <div className="flex flex-wrap gap-2">
                {siteContent.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-line-0 bg-bg-2 px-4 py-2 text-sm font-semibold text-text-0 transition hover:border-accent hover:text-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="rounded-xl border border-line-0 bg-bg-2 p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-1">
                Quick Profile
              </p>
              <h2 className="mt-2 font-display text-3xl">{siteContent.brand.name}</h2>
              <p className="mt-1 text-sm text-text-1">{siteContent.brand.location}</p>
              <p className="mt-5 text-sm text-text-1">
                12+ years delivering software from startup prototypes to enterprise-scale systems.
              </p>
              <a
                href={`mailto:${siteContent.brand.email}`}
                className="mt-5 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg-0 transition hover:bg-accent-2"
              >
                Contact Oliver
              </a>
            </aside>
          </section>

          <section id="services" className="space-y-4">
            <h2 className="text-center font-display text-5xl font-medium tracking-tight">Services</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {siteContent.offers.map((offer) => (
                <article
                  key={offer.title}
                  className="rounded-xl border border-line-0 bg-bg-1 p-5 shadow-card"
                >
                  <h3 className="font-display text-xl">{offer.title}</h3>
                  <p className="mt-2 leading-7 text-text-1">{offer.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="background" className="rounded-2xl border border-line-0 bg-bg-1 p-5 shadow-glow">
            <h2 className="text-center font-display text-5xl font-medium tracking-tight">Background</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab
                      ? "bg-bg-2 text-text-0 ring-1 ring-accent/40"
                      : "border border-line-0 bg-bg-0 text-text-1 hover:border-accent/60 hover:text-text-0"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {visibleItems.map((item) => (
                <article key={`${item.title}-${item.org}`} className="rounded-lg border border-line-0 bg-bg-2 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-1">{item.dates}</p>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {item.org} | {item.location}
                  </p>
                  <p className="mt-2 leading-7 text-text-1">{item.summary}</p>
                </article>
              ))}
            </div>
            {hasHiddenExperienceItems && (
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllExperience((current) => !current)}
                  className="rounded-full border border-line-0 bg-bg-0 px-5 py-2 text-sm font-semibold text-text-0 transition hover:border-accent hover:text-accent"
                >
                  {showAllExperience ? "See less" : "See more"}
                </button>
              </div>
            )}
          </section>

          <section id="skills" className="space-y-4">
            <h2 className="text-center font-display text-5xl font-medium tracking-tight">Skills</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {siteContent.skills.map((skill) => (
                <article key={skill.label} className="rounded-xl border border-line-0 bg-bg-1 p-4 shadow-card">
                  <h3 className="font-display text-xl">{skill.label}</h3>
                  <p className="mt-2 leading-7 text-text-1">{skill.items}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="rounded-2xl border border-line-0 bg-gradient-to-r from-bg-1 via-bg-2 to-bg-1 p-6 text-text-0 shadow-glow"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.17em] text-accent">
              New Client Offer
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-tight">{siteContent.cta.title}</h2>
            <p className="mt-2 max-w-3xl leading-7 text-text-1">
              {siteContent.cta.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={siteContent.cta.primaryHref}
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg-0 transition hover:bg-accent-2"
              >
                {siteContent.cta.primaryLabel}
              </a>
              <a
                href={siteContent.cta.secondaryHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line-0 bg-bg-2 px-4 py-2 text-sm font-semibold text-text-0 transition hover:border-accent"
              >
                {siteContent.cta.secondaryLabel}
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
