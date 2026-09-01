import {
  Github,
  Mail,
  Linkedin,
  FileText,
  ArrowUpRight,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import posthog from "posthog-js";

function TwitterBird({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function Port() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen w-full bg-[var(--c-bg)] text-[var(--c-text-hi)] transition-colors duration-300">
      {/* Theme toggle */}
      <motion.button
        onClick={() => {
          posthog.capture("theme_toggled", { to: isDark ? "light" : "dark" });
          setIsDark((d) => !d);
        }}
        className="fixed top-5 right-5 z-50 text-[var(--c-text-3)] hover:text-[var(--c-text-hi)] transition-colors"
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Toggle theme"
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.div>
      </motion.button>

      {/* Left-side vertical nav — socials */}
      {isMounted && (
        <motion.nav
          className="fixed left-0 top-0 h-screen flex-col items-start justify-center gap-7 pl-8 z-50 hidden md:flex"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {[
            {
              href: "mailto:shsasane22@gmail.com",
              icon: <Mail size={22} />,
              label: "Email",
              dim: false,
            },
            {
              href: "https://www.linkedin.com/in/sahilsasane/",
              icon: <Linkedin size={22} />,
              label: "LinkedIn",
              dim: false,
              external: true,
            },
            {
              href: "https://github.com/sahilsasane",
              icon: <Github size={22} />,
              label: "GitHub",
              dim: false,
              external: true,
            },
            {
              href: "https://twitter.com/schiz0sane",
              icon: <TwitterBird size={22} />,
              label: "Twitter",
              dim: false,
              external: true,
            },
            {
              href: "https://drive.google.com/file/d/1P2ZNiCE8M3cCQLZdK7bMFkfDCBBBnw9H/view?usp=sharing",
              icon: <FileText size={22} />,
              label: "Resume",
              dim: true,
              external: true,
            },
          ].map(({ href, icon, label, dim, external }, i) => (
            <motion.a
              key={label}
              href={href}
              onClick={() => posthog.capture("social_link_clicked", { label, href })}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`group flex items-center gap-3 transition-colors ${dim
                ? "text-[var(--c-text-2)] hover:text-[var(--c-text-hi)]"
                : "text-[var(--c-text-4)] hover:text-[var(--c-text-1)]"
                }`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ scale: 1.18, x: 4 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
              <motion.span
                className="text-xs whitespace-nowrap text-[var(--c-text-3)]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {label}
              </motion.span>
            </motion.a>
          ))}
        </motion.nav>
      )}

      {/* Floating mobile bottom nav */}
      <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-[22rem] -translate-x-1/2 md:hidden">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className={`grid grid-cols-5 items-center rounded-full bg-[var(--c-bg)]/80 p-2 backdrop-blur-sm backdrop-saturate-150 ${isDark ? "" : "shadow-lg shadow-black/15"}`}
        >
          {mobileSocials.map(({ href, icon, label, external }) => (
            <motion.a
              key={label}
              href={href}
              onClick={() => posthog.capture("social_link_clicked", { label, href })}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              title={label}
              className="flex h-11 w-full items-center justify-center rounded-full text-[var(--c-text-3)] transition-colors hover:bg-[var(--c-bg-badge)]/55 hover:text-[var(--c-text-hi)]"
              whileTap={{ scale: 0.8 }}
              whileHover={{ y: -2 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.nav>
      </div>

      {/* Scrollable content */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 md:pl-20 pb-28 md:pb-0">
        <HomeSection isDark={isDark} />
        <ExperienceSection />
        <ProjectsSection />

      </main>
    </div>
  );
}

const highlights = [
  { label: "Winner", value: "Google GenAI Hackathon 2024" },
  { label: "Runner-up", value: "Bhashini Sprint 2024" },
  { label: "Top 5", value: "4+ national hackathons" },
];

const mobileSocials = [
  {
    href: "mailto:shsasane22@gmail.com",
    icon: <Mail size={18} />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/sahilsasane/",
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/sahilsasane",
    icon: <Github size={18} />,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://twitter.com/sahilsasane",
    icon: <TwitterBird size={18} />,
    label: "Twitter",
    external: true,
  },
  {
    href: "https://drive.google.com/file/d/1P2ZNiCE8M3cCQLZdK7bMFkfDCBBBnw9H/view?usp=sharing",
    icon: <FileText size={18} />,
    label: "Resume",
    external: true,
  },
];

function HomeSection({ isDark }) {
  return (
    <div className="w-full pt-12 sm:pt-16 pb-10">
      {/* Cover + profile photo */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div
          className="w-full h-40 sm:h-52 md:h-64 relative bg-[var(--c-bg)]"
          style={{ clipPath: "inset(0 round 1rem)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 25%, black 75%, transparent), linear-gradient(to bottom, transparent, black 8%, black 25%, transparent)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to right, transparent, black 25%, black 75%, transparent), linear-gradient(to bottom, transparent, black 8%, black 25%, transparent)",
              maskComposite: "intersect",
            }}
          >
            <motion.img
              src="/cover.JPG"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[50%_38%] sm:object-[50%_30%]"
              style={{ mixBlendMode: "screen" }}
              animate={{ opacity: isDark ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.img
              src="/cover-white.JPG"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[50%_38%] sm:object-[50%_30%]"
              style={{ mixBlendMode: "multiply" }}
              animate={{ opacity: isDark ? 0 : 1 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 left-5 translate-y-1/2 w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full overflow-hidden border-4 border-[var(--c-profile-border)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src="/sahil.JPG"
            alt="Sahil Sasane"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Everything below staggered in */}
      <motion.div variants={stagger} initial="hidden" animate="visible">
        {/* Name + role */}
        <motion.div variants={fadeUp} className="mt-12">
          <h1 className="text-3xl sm:text-4xl font-normal mb-1 text-[var(--c-text-hi)]">
            sahil sasane
          </h1>
          <p className="text-sm sm:text-base text-[var(--c-text-2)] mt-1">
            ai engineer
          </p>
        </motion.div>

        {/* Currently badge */}
        <motion.div variants={fadeUp} className="mt-4">
          <span className="inline-flex items-center gap-2 text-xs text-[var(--c-text-2)] bg-[var(--c-bg-badge)] border border-[var(--c-border)] px-3 py-1.5 rounded-full">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Currently — ai engineer @ the modern data company
          </span>
        </motion.div>

        {/* Bio */}
        <motion.div variants={fadeUp} className="mt-8 space-y-3">
          <p className="text-base text-[var(--c-text-1)] leading-relaxed">
            I build AI that doesn't just demo well.
          </p>
          <p className="text-sm text-[var(--c-text-2)] leading-relaxed">
            Drawn to the gap between what ML research promises and what actually
            runs in production — multi-agent systems, production pipelines,
            backends that hold.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={fadeUp}
          className="mt-8 border-t border-[var(--c-border-sub)] pt-6 space-y-3"
        >
          {highlights.map(({ label, value }) => (
            <div key={label} className="flex gap-4 sm:gap-6">
              <span className="text-xs text-[var(--c-text-3)] w-20 sm:w-24 shrink-0 pt-0.5">
                {label}
              </span>
              <span className="text-sm text-[var(--c-text-1)]">{value}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-8 border-t border-[var(--c-border-sub)] pt-6"
        >
          <p className="text-sm text-[var(--c-text-3)]">
            Open to the right roles, collabs, and hard problems.
          </p>
          <motion.a
            href="mailto:shsasane22@gmail.com"
            onClick={() => posthog.capture("email_clicked", { location: "cta" })}
            className="mt-1 inline-block text-sm text-[var(--c-text-2)] hover:text-[var(--c-text-hi)] transition-colors"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.15 }}
          >
            shsasane22@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "The Modern Data Company",
      type: "Modern Data Platform",
      roles: [
        {
          title: "Associate AI Engineer",
          period: "2025 – Present",
          description:
            "Building a multi-agent LLM system (LangGraph) for natural-language querying over enterprise data — schema-aware SQL generation, vector search, and streaming agent pipelines with safety guardrails. Also designed and shipped an OAuth 2.1 authorization broker for secure AI-tool access, later ported from Python to Go.",
        },
        {
          title: "GenAI App Developer Intern",
          period: "2025",
          description:
            "Built the initial version of a multi-agent conversational data agent integrating LLMs with internal data pipelines and REST APIs — the system that later went to production.",
        },
      ],
    },
    {
      company: "Vsure Consultancy Services",
      type: "IT Consultancy",
      roles: [
        {
          title: "AI/ML Developer Intern",
          period: "2024 – 2025",
          description:
            "Developed ML models and computer vision pipelines for identity verification. Automated document processing workflows end-to-end.",
        },
      ],
    },
    {
      company: "Blank Analytica",
      type: "Analytics Startup",
      roles: [
        {
          title: "Data Engineer Intern",
          period: "2024",
          description:
            "Engineered ETL pipelines and analytics infrastructure using Python and cloud tooling. Improved data reliability and reduced processing time.",
        },
      ],
    },
  ];

  return (
    <div className="w-full pb-10">
      <motion.h2
        className="text-2xl font-light text-[var(--c-text-2)] mb-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Experience
      </motion.h2>
      <div className="border-t border-[var(--c-border)]">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="py-8 border-b border-[var(--c-border-sub)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          >
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-base sm:text-lg text-[var(--c-text-hi)]">
                {exp.company}
              </span>
              <span className="text-xs text-[var(--c-text-4)] hidden sm:inline">
                {exp.type}
              </span>
            </div>
            <div className="space-y-0">
              {exp.roles.map((role, j) => (
                <div key={j}>
                  {j > 0 && (
                    <div className="border-t border-[var(--c-border-sub)] my-5" />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-0.5 sm:gap-0">
                      <span className="text-sm text-[var(--c-text-1)]">
                        {role.title}
                      </span>
                      <span className="text-xs sm:text-sm text-[var(--c-text-4)] sm:ml-4 shrink-0">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--c-text-3)] leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Vayu",
      description:
        "Mental-health app for GenZ built in 36 hours — mood tracking, journaling, and a Gemini-powered companion. Winner, Google GenAI Hackathon 2024.",
      tech: ["Flutter", "Gemini", "MongoDB"],
      link: "https://vayu-one.vercel.app/",
    },
    {
      title: "Cautious Memory",
      description:
        "REST API in idiomatic Go — clean architecture, JWT auth, and PostgreSQL, structured for testable service layers.",
      tech: ["Go", "PostgreSQL"],
      link: "https://github.com/sahilsasane/cautious-memory",
    },
    {
      title: "Pneumonia GAN",
      description:
        "GAN-based synthetic chest X-ray generation to augment a CNN pneumonia classifier under limited medical imaging data.",
      tech: ["Python", "PyTorch"],
      link: "https://github.com/sahilsasane/GAN-major",
    },
    {
      title: "VyavaSahayak",
      description:
        "E-commerce platform for vernacular markets, with Gemini-powered multilingual product listings. Runner-up, Bhashini Sprint 2024.",
      tech: ["Express", "Gemini", "MongoDB"],
      link: "https://github.com/nishaaannnt/q-star-bhashini",
    },
    {
      title: "LLM-Based AI Agent",
      description:
        "Natural-language querying over CSV/Excel — schema inference and pandas code generation via a LangChain agent, served through FastAPI.",
      tech: ["Python", "LangChain", "FastAPI"],
      link: "https://github.com/sahilsasane/llm-yolo/tree/main/Part%201",
    },
    {
      title: "Micrograd",
      description:
        "A backprop engine and autograd built from scratch in Python, following Karpathy's micrograd — for understanding what PyTorch does under the hood.",
      tech: ["Python"],
      link: "https://github.com/sahilsasane/micrograd",
    },
  ];

  return (
    <div className="w-full pb-6">
      <motion.h2
        className="text-2xl font-light text-[var(--c-text-2)] mb-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.h2>
      <div className="border-t border-[var(--c-border)]">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("project_clicked", { title: p.title, link: p.link })}
            className="group flex items-center justify-between py-5 border-b border-[var(--c-border-sub)] hover:border-[var(--c-border)] transition-colors"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            whileHover={{ x: 4 }}
          >
            <div className="flex-1 min-w-0 pr-4 sm:pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base text-[var(--c-text-hi)] group-hover:text-[var(--c-text-hi)] transition-colors">
                  {p.title}
                </span>
                <motion.span
                  className="text-[var(--c-text-4)] group-hover:text-[var(--c-text-2)] transition-colors shrink-0"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={13} />
                </motion.span>
              </div>
              <p className="text-sm text-[var(--c-text-3)] leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="hidden sm:flex gap-2 shrink-0">
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  className="text-xs px-2.5 py-1 border border-[var(--c-border)] rounded-full text-[var(--c-text-3)] whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* Mobile: first tag only */}
            <div className="flex sm:hidden shrink-0">
              <span className="text-xs px-2 py-1 border border-[var(--c-border)] rounded-full text-[var(--c-text-4)] whitespace-nowrap">
                {p.tech[0]}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
