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
    vibeLine: string;
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
    secondaryLabel: string;
    secondaryHref: string;
  };
};

export const siteContent: SiteContent = {
  brand: {
    name: "Oliver Switzer",
    role: "Freelance AI Automations Engineer",
    location: "Brooklyn, NY",
    email: "oliverswitzer@gmail.com",
    intro:
      "I help small and medium-size businesses eliminate manual workflow bottlenecks with practical AI automations that save time, reduce errors, and improve operational throughput.",
    vibeLine:
      "I also help startup teams and founders un-vibe vibe-coded apps into stable, production-ready products."
  },
  nav: ["Home", "Services", "Background", "Skills", "Contact"],
  links: [
    { label: "Resume", href: "Oliver_Switzer_Resume_02_28_26.pdf" }
  ],
  offers: [
    {
      title: "Workflow Automation Buildouts",
      description:
        "Automate repetitive operations across support, finance, onboarding, reporting, and internal tools."
    },
    {
      title: "AI Readiness and Strategy Sprint",
      description:
        "A practical SMB-focused diagnostic to identify the highest-value AI use cases, constraints, and rollout steps."
    },
    {
      title: "Prototype to Production Hardening",
      description:
        "Refactor and stabilize fast-built products with better architecture, testing, observability, and deployment safety."
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
      label: "Languages",
      items: "Elixir/OTP, TypeScript, Python, Rust, Ruby, Kotlin, Java"
    },
    {
      label: "AI and Data",
      items: "LLM orchestration, MCP, GraphRAG, semantic retrieval, Postgres"
    },
    {
      label: "Infrastructure",
      items: "Docker, Kubernetes, Terraform, AWS, GCP, CI/CD"
    },
    {
      label: "Delivery",
      items: "TDD/BDD, XP, domain-driven design, pairing, agile execution"
    }
  ],
  cta: {
    title: "Complimentary AI Opportunity Audit for SMB teams",
    description:
      "Get a focused review of where AI can produce immediate business value, what to prioritize first, and what to avoid.",
    primaryLabel: "Book the audit",
    primaryHref:
      "mailto:oliverswitzer@gmail.com?subject=Complimentary%20AI%20Opportunity%20Audit",
    secondaryLabel: "Download resume",
    secondaryHref: "Oliver_Switzer_Resume_02_28_26.pdf"
  }
};
