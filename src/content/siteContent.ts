export type ExperienceTab = "Experience" | "Education" | "Publications";

type TimelineItem = {
  title: string;
  org: string;
  location: string;
  dates: string;
  summary: string;
  bullets?: string[];
};

type OfferItem = {
  title: string;
  description: string;
};

export type SiteContent = {
  brand: {
    name: string;
    role: string;
    location: string;
    email: string;
    intro: string;
  };
  nav: string[];
  links: { label: string; href: string }[];
  offers: OfferItem[];
  tabs: Record<ExperienceTab, TimelineItem[]>;
  skills: { label: string; items: string }[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

export const siteContent: SiteContent = {
  brand: {
    name: "Oliver Switzer",
    role: "AI Automations for Small Business",
    location: "Brooklyn, NY",
    email: "oliverswitzer@gmail.com",
    intro:
      "I help small to medium size businesses connect their software and automate the messy parts of running a business."
  },
  nav: ["Services", "Background", "Skills", "Contact"],
  links: [
    { label: "Resume", href: "assets/oliver-resume.pdf" }
  ],
  offers: [
    {
      title: "AI Strategy Sprint",
      description:
        "Not sure where AI fits in your business? Get a focused diagnostic that identifies your highest-value opportunities, practical constraints, and a clear rollout plan."
    },
    {
      title: "Workflow Automation",
      description:
        "Stop losing hours to repetitive tasks. I use visual, no-code tools wherever possible — so you can see how your automations work and adjust them yourself. When something needs custom code, I build that too."
    },
    {
      title: "Custom Solutions",
      description:
        "Some problems need more than off-the-shelf tools. I build custom software for the workflows that are too complex or specific for no-code — while keeping everything as simple to maintain as possible."
    }
  ],
  tabs: {
    Experience: [
      {
        title: "Chief Technology Officer",
        org: "Oddly Good",
        location: "New York",
        dates: "Sep 2023 - Present",
        summary:
          "Co-founded and scaled a creative engineering studio with end-to-end ownership across feasibility, budgeting, vendors, and execution."
      },
      {
        title: "Staff Software Engineer",
        org: "Mechanical Orchard",
        location: "Remote",
        dates: "Nov 2022 - Feb 2026",
        summary:
          "Built agentic AI modernization systems for Fortune 500 enterprises, including semantic retrieval and automated equivalence testing."
      },
      {
        title: "Technical Lead",
        org: "Kohort",
        location: "Remote",
        dates: "Aug 2021 - Oct 2022",
        summary:
          "Shipped real-time collaboration systems and integrated early OpenAI models for transcript summarization and semantic extraction."
      },
      {
        title: "Software Engineer",
        org: "Geometer LLC",
        location: "Remote",
        dates: "Oct 2020 - Aug 2022",
        summary:
          "Built real-time video, transcription, and notes tooling using Elixir/OTP and ML-based transcript workflows."
      },
      {
        title: "Senior Software Engineer",
        org: "Kickstarter",
        location: "New York",
        dates: "Jun 2018 - May 2020",
        summary:
          "Shipped full-stack product features and experiments while mentoring engineers on testing and design quality."
      },
      {
        title: "Software Engineer",
        org: "Pivotal Labs",
        location: "New York",
        dates: "Aug 2015 - May 2018",
        summary:
          "Delivered software across finance, healthcare, charity, and education while leading XP practices with client teams."
      },
      {
        title: "Full-stack Developer",
        org: "littleBits",
        location: "New York",
        dates: "Aug 2014 - Jun 2015",
        summary:
          "Built customer-facing Rails and React products, including interactive simulation and internal product tooling."
      },
      {
        title: "Full-stack Developer",
        org: "HowAboutWe",
        location: "New York",
        dates: "Apr 2014 - Sep 2014",
        summary:
          "Implemented Rails features, A/B testing, worker queues, and geospatial integrations in a fast product environment."
      },
      {
        title: "Graphene Lab Research and Setup Coordinator",
        org: "Bard College",
        location: "Annandale-on-Hudson",
        dates: "Sep 2012 - May 2013",
        summary:
          "Helped establish Bard's graphene research lab and supported student research and lab operations."
      },
      {
        title: "Research Intern",
        org: "Cornell NanoScale Science and Technology Facility",
        location: "Ithaca",
        dates: "Jun 2012 - Aug 2012",
        summary:
          "Conducted spin-transfer device fabrication and characterization research presented at NNIN."
      }
    ],
    Education: [
      {
        title: "B.A. Physics",
        org: "Bard College",
        location: "Annandale-on-Hudson",
        dates: "2009 - 2013",
        summary:
          "Distinguished Scientist Scholar with thesis research on electrical interface effects in single and bilayer graphene."
      },
      {
        title: "Design Thinking and Social Entrepreneurship",
        org: "Stanford d.school / Project Breaker",
        location: "Stanford",
        dates: "2013",
        summary:
          "Intensive workshop focused on design-led innovation, collaboration, and practical social impact."
      },
      {
        title: "Full-Stack Web Development Program",
        org: "The Flatiron School",
        location: "New York",
        dates: "2013",
        summary: "Hands-on full-stack software development training."
      }
    ],
    Publications: [
      {
        title: "Electricity in two dimensions",
        org: "Bard Digital Commons",
        location: "Publication",
        dates: "Apr 2013",
        summary:
          "Senior dissertation on electrical transport dynamics in monolayer and bilayer graphene."
      },
      {
        title: "Spin Torque Ferromagnetic Resonance",
        org: "NNIN Research Accomplishments",
        location: "Publication",
        dates: "Nov 2012",
        summary:
          "Research report on fabrication and measurement of a spin transfer device."
      }
    ]
  },
  skills: [
    {
      label: "Built to last",
      items: "Production-grade systems, not duct-taped demos. Your automation will keep running long after I hand it off."
    },
    {
      label: "AI that actually works",
      items: "Practical automation that saves real hours — not science experiments. Grounded in 12+ years of shipping software."
    },
    {
      label: "Works with your tools",
      items: "Connects to the platforms your team already uses — Google Sheets, Slack, CRMs, email, and more."
    },
    {
      label: "Predictable delivery",
      items: "Clear timelines, regular check-ins, no surprises. You'll always know where things stand."
    }
  ],
  cta: {
    title: "Free AI Opportunity Audit",
    description:
      "Find out exactly where AI can save your business time and money. Get a focused review of your workflows, what to automate first, and what to avoid.",
    primaryLabel: "Book your free audit",
    primaryHref:
      "mailto:oliverswitzer@gmail.com?subject=AI%20Opportunity%20Audit"
  }
};
