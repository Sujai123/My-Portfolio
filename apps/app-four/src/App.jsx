import {
  ArrowUpRight,
  Award,
  Clock3,
  BookOpenText,
  BriefcaseBusiness,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const MotionDiv = motion.div;
const MotionSection = motion.section;
const MotionArticle = motion.article;

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const proofChips = ["6+ years", "React", "Rails", "Product UI", "AI productivity"];

const impactStats = [
  { value: "6+", label: "years shipping product software" },
  { value: "2019", label: "delivering production apps across teams" },
  { value: "SSO", label: "contribution improving enterprise sign-in" },
];

const quickSnapshot = [
  { label: "Role", value: "Frontend-heavy Full-Stack Engineer" },
  { label: "Core stack", value: "React, Rails, PostgreSQL" },
  { label: "Timezone", value: "IST (UTC+5:30)" },
  { label: "Location", value: "Coimbatore, India" },
];

const highlights = [
  {
    title: "Product-first frontend",
    text: "I care about interfaces that are easy to scan, pleasant to use, and resilient across real product states.",
  },
  {
    title: "Full-stack delivery",
    text: "React, Rails, and PostgreSQL experience lets me reason from UI polish through API shape and data flow.",
  },
  {
    title: "AI-enhanced productivity",
    text: "I use AI tools effectively to move faster, explore solutions, improve quality, and support day-to-day problem-solving.",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "ProcureDesk",
    period: "Dec 2025 - Present",
    summary:
      "Working as a full-stack developer with ReactJS on the frontend and Ruby on Rails with PostgreSQL on the backend.",
  },
  {
    role: "Associate Tech Lead",
    company: "Rently",
    period: "Aug 2019 - Nov 2025",
    summary:
      "Worked across multiple teams and Agile projects, contributed to Single Sign-On integration for the Manager Portal, and mentored junior developers.",
  },
];

const projects = [
  {
    title: "Personal Portfolio",
    role: "React + TypeScript",
    outcome: "Built a responsive portfolio and continue improving it to make the experience more engaging and useful.",
    tech: ["React", "TypeScript", "Responsive UI"],
    href: "https://sujai-beniks-portfolio.netlify.app/",
    cta: "View live site",
  },
  {
    title: "Shopdotco",
    role: "Ecommerce product",
    outcome: "Built using React, TypeScript, and Material UI",
    tech: ["React", "TypeScript", "Material UI", "Ecommerce"],
    href: "https://shopdotco.netlify.app/",
    cta: "View live site",
  },
  {
    title: "Manager Portal Single Sign-On",
    role: "Product Feature",
    outcome: "Contributed to Single Sign-On integration for the Manager Portal, improving the sign-in experience for users.",
    tech: ["React", "Rails", "Auth", "PostgreSQL"],
    href: "https://www.rently.com/",
    cta: "View product",
  },
  {
    title: "Public UI Practice & Writing",
    role: "Learning in public",
    outcome: "Completed IcodeThis challenges, built mini projects on CodePen and CodeSandbox, and published engineering writing.",
    tech: ["UI Challenges", "CodePen", "Blogs"],
    href: "https://engineering.rently.com/discovering-the-stale-closure-trap-a-weird-bug/",
    cta: "Read article",
  },
];

const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Material UI"] },
  { group: "Backend", items: ["Ruby", "Ruby on Rails", "REST APIs", "Auth flows"] },
  { group: "Database", items: ["PostgreSQL", "SQL", "Data modeling"] },
  { group: "Productivity", items: ["AI tools", "Problem-solving", "Clean code", "Mentoring"] },
];

const selectedImpact = [
  { icon: Award, text: "Best Team Player award for collaborative delivery and team reliability." },
  { icon: CheckCircle2, text: "Guided junior developers with training, review, and steady technical direction." },
  { icon: BriefcaseBusiness, text: "Contributed to Single Sign-On integration for the Manager Portal." },
  { icon: BookOpenText, text: "Published engineering writing and completed public UI challenges and mini projects." },
];

const contact = {
  email: "sujaibeniks001@gmail.com",
  linkedin: "https://in.linkedin.com/in/sujai-beniks-j-89693616b",
  github: "https://github.com/Sujai123",
  location: "Coimbatore, Tamil Nadu, India",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const themeStorageKey = "app-four-theme";

function getInitialTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const menuButtonRef = useRef(null);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        menuButtonRef={menuButtonRef}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={scrollTo}
        onThemeToggle={() =>
          setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
        }
        theme={theme}
      />
      <main>
        <Hero onViewWork={() => scrollTo("projects")} onContact={() => scrollTo("contact")} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

function Header({ activeSection, menuOpen, menuButtonRef, onMenuToggle, onNavigate, onThemeToggle, theme }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Sujai Beniks J home">
        <span>SB</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            className={activeSection === item.id ? "nav-link active" : "nav-link"}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
            aria-current={activeSection === item.id ? "true" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <a className="header-cta" href={`mailto:${contact.email}`}>
        <Mail size={16} />
        Contact
      </a>

      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${nextTheme} mode`}
        onClick={onThemeToggle}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <button
        className="menu-button"
        type="button"
        ref={menuButtonRef}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={onMenuToggle}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              className={activeSection === item.id ? "mobile-link active" : "mobile-link"}
              key={item.id}
              onClick={() => onNavigate(item.id)}
              type="button"
              aria-current={activeSection === item.id ? "true" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero({ onViewWork, onContact }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <HeroVisual />
      <div className="hero-content">
        <MotionDiv
          className="hero-copy"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">
            <Sparkles size={16} />
            Product-focused engineer for clean, useful software
          </p>
          <h1 id="hero-title">
            Sujai Beniks J
          </h1>
          <p className="hero-lede">
            I design and build practical product interfaces with React, then carry them through
            backend delivery with Rails and PostgreSQL.
          </p>
          <p className="hero-proof">6+ years delivering user-facing features across product teams.</p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={onViewWork}>
              View Work
              <ArrowUpRight size={18} />
            </button>
            <button className="button secondary" type="button" onClick={onContact}>
              Contact
            </button>
          </div>
          <div className="proof-chips" aria-label="Key strengths">
            {proofChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <dl className="quick-snapshot" aria-label="Quick profile snapshot">
            {quickSnapshot.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </MotionDiv>

        <MotionDiv
          className="impact-panel"
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          {impactStats.map((stat) => (
            <div className="impact-stat" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}

function HeroVisual() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${8 + ((index * 17) % 84)}%`,
        top: `${10 + ((index * 29) % 78)}%`,
        delay: `${(index % 8) * 0.35}s`,
        scale: 0.65 + (index % 5) * 0.16,
      })),
    [],
  );

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="circuit-board">
        <div className="glass-plane plane-a" />
        <div className="glass-plane plane-b" />
        <div className="code-stack">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="orbit-ring ring-a" />
        <div className="orbit-ring ring-b" />
      </div>
      <div className="particle-field">
        {particles.map((particle) => (
          <i
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              transform: `scale(${particle.scale})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, intro, children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection
      className={`content-section ${className}`}
      id={id}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="section-heading">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        {intro ? <span>{intro}</span> : null}
      </div>
      {children}
    </MotionSection>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A product-minded engineer with a UI eye."
      intro="I focus on shipping interfaces that are easy to scan, pleasant to use, and reliable in production."
    >
      <div className="about-grid">
        <p className="about-lede">
          I build web experiences that balance pleasant UI, reliable full-stack delivery, and
          clean maintainable code. I enjoy solving problems, learning continuously, and using
          AI thoughtfully to improve productivity without losing engineering judgment.
        </p>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Built across teams, products, and systems."
      intro="From frontend polish to backend delivery, I contribute where product quality and execution speed matter."
    >
      <div className="experience-layout">
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div className="timeline-marker" />
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="impact-list" aria-label="Selected impact">
          <h3>Selected Impact</h3>
          {selectedImpact.map((item) => (
            <div className="impact-row" key={item.text}>
              <item.icon size={18} />
              <p>{item.text}</p>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Personal work, product features, and public learning."
      intro="A mix of shipped UI work, feature delivery, and learning-in-public outputs with practical outcomes."
    >
      <div className="project-grid">
        {projects.map((project, index) => (
          <MotionArticle
            className="project-card"
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="project-number">0{index + 1}</div>
            <div className="project-role">{project.role}</div>
            <h3>{project.title}</h3>
            <p>{project.outcome}</p>
            <div className="tech-list">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className="case-study-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.cta} for ${project.title}`}
            >
              {project.cta}
              <ArrowUpRight size={16} />
            </a>
          </MotionArticle>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical toolkit for shipping polished products."
      intro="Comfortable across frontend, backend, data, and team-level engineering responsibilities."
    >
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.group}>
            <h3>{group.group}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something clear, useful, and sharp."
      intro="Open to frontend-heavy full-stack roles, product engineering collaborations, and meaningful UI work."
    >
      <div className="contact-panel">
        <div>
          <p>
            I’m interested in product engineering conversations, frontend-heavy full-stack work,
            and teams that care about clean, practical, user-friendly software.
          </p>
          <div className="location">
            <MapPin size={18} />
            {contact.location}
          </div>
          <p className="contact-note">
            <Clock3 size={18} />
            Usually replies within 24-48 hours.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} />
            Email Me
          </a>
          <a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a className="icon-link" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
      </div>
    </Section>
  );
}

export default App;
