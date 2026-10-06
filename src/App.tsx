import { useEffect, useState } from "react";
import type { PointerEvent } from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiPause,
  FiPlay,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
} from "react-icons/fi";
import {
  profile,
  socials,
  projects,
  officeProjects,
  experience,
  skillGroups,
  navLinks,
} from "./data";
import { useTheme } from "./hooks/useTheme";
export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const tilt = (event: PointerEvent<HTMLElement>) => {
    if (reduced || motionPaused || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--tilt-x",
      `${((event.clientY - rect.top) / rect.height - 0.5) * -6}deg`,
    );
    event.currentTarget.style.setProperty(
      "--tilt-y",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 6}deg`,
    );
  };
  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };
  useEffect(() => {
    const q = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(q.matches);
    update();
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reduced) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            entry.target.removeAttribute("data-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".section-top, .office-card, .about-section > div, .contact, .tech-group, .experience article",
      )
      .forEach((element) => {
        element.setAttribute("data-reveal", "pending");
        observer.observe(element);
      });
    return () => {
      observer.disconnect();
      document
        .querySelectorAll("[data-reveal]")
        .forEach((element) => element.removeAttribute("data-reveal"));
    };
  }, [reduced]);
  useEffect(() => {
    if (paused || hovered || reduced || motionPaused) return;
    const timer = setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, hovered, reduced, motionPaused]);
  const step = (n: number) => {
    setActive((i) => (i + n + 4) % 4);
    setPaused(true);
  };

  return (
    <div className={motionPaused ? "portfolio motion-paused" : "portfolio"}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header>
        <div className="container nav">
          <a href="#home" className="wordmark">
            <span className="code-bracket">&lt;</span>towsif
            <span className="code-bracket"> /&gt;</span>
          </a>
          <nav
            id="navigation"
            className={menu ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenu(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button motion-toggle"
              aria-label={
                motionPaused ? "Resume animations" : "Pause animations"
              }
              aria-pressed={motionPaused}
              disabled={reduced}
              onClick={() => setMotionPaused((value) => !value)}
            >
              {motionPaused ? <FiPlay /> : <FiPause />}
            </button>
            <button
              className="icon-button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a className="nav-contact" href={socials.email}>
              Let’s talk <FiArrowUpRight />
            </a>
            <a className="nav-resume" href={profile.resumeUrl} download>
              Resume <FiDownload />
            </a>
            <button
              className="icon-button menu-toggle"
              aria-expanded={menu}
              aria-controls="navigation"
              aria-label="Toggle navigation"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section id="home" className="container hero">
          <div className="code-atmosphere" aria-hidden="true">
            <span>{"{ }"}</span>
            <span>{"</>"}</span>
            <span>{"() => "}</span>
            <div className="ambient-orb" />
          </div>
          <div className="hero-heading">
            <p className="eyebrow">
              <span className="dot" /> FRONTEND ENGINEER · DHAKA, BANGLADESH
            </p>
            <h1>
              Towsif
              <span>
                Muhtadi Khan<span className="name-period">.</span>
              </span>
            </h1>
            <p className="developer-role">
              <span>&gt;</span> Frontend Engineer{" "}
              <span className="role-cursor" aria-hidden="true">
                _
              </span>
            </p>
            <div
              className="hero-terminal"
              aria-label="Developer introduction"
              onPointerMove={tilt}
              onPointerLeave={resetTilt}
            >
              <div className="terminal-title">
                <span className="terminal-lights" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>towsif — portfolio.ts</span>
                <span className="terminal-language">TypeScript</span>
              </div>
              <div className="terminal-code">
                <span className="code-line-number" aria-hidden="true">
                  01
                </span>
                <code>
                  <span className="code-keyword">const</span> developer = {"{"}{" "}
                  <span className="code-property">role</span>:{" "}
                  <span className="code-string">"Frontend Engineer"</span>,{" "}
                  <span className="code-property">team</span>:{" "}
                  <span className="code-string">"SNR"</span> {"}"};
                </code>
              </div>
              <div className="terminal-prompt">
                <span aria-hidden="true">❯</span>
                <span>Building interfaces with React &amp; TypeScript.</span>
                <span className="terminal-cursor" aria-hidden="true" />
              </div>
            </div>
            <div className="hero-bottom">
              <p className="hero-intro">
                Frontend engineer. Product thinker.
                <br />I turn complex workflows into clear, intuitive web
                experiences.
              </p>
              <div className="hero-actions">
                <a className="button" href="#projects">
                  Explore my work <FiArrowRight />
                </a>
                <a
                  className="text-link"
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub /> GitHub <FiArrowUpRight />
                </a>
                <a className="resume-button" href={profile.resumeUrl} download>
                  <FiDownload /> Download resume <span>PDF</span>
                </a>
              </div>
              <p className="hero-note">
                Currently building products at <strong>SNR</strong>
                <span>React / TypeScript / API Integration</span>
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="hero-scroll"
            aria-label="Scroll to selected work"
          >
            SELECTED WORK BELOW <span>↓</span>
          </a>
        </section>
        <section id="stack" className="tech-section">
          <div className="container section">
            <div className="section-top">
              <div>
                <p className="eyebrow">02. // SKILLS.JSON</p>
                <h2>Tech Stack</h2>
              </div>
              <p className="section-description">
                The tools behind the interfaces,
                <br />
                services, and workflows I build.
              </p>
            </div>
            <div className="tech-grid">
              {skillGroups.map((group, index) => (
                <article className="tech-group" key={group.name}>
                  <div className="tech-heading">
                    <span className="small-label">
                      0{index + 1} / {group.code}
                    </span>
                    <h3>{group.name}</h3>
                  </div>
                  <div className="tech-icons">
                    {group.skills.map((skill, index) => (
                      <div
                        className="tech-skill"
                        key={skill.name}
                        style={{ animationDelay: `${index * 55}ms` }}
                      >
                        <span
                          className="tech-icon"
                          style={{ color: skill.color }}
                        >
                          <skill.icon aria-hidden="true" />
                        </span>
                        <span className="tech-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="container section">
          <div className="section-top">
            <div>
              <p className="eyebrow">03. // PROJECTS/</p>
              <h2>Featured Projects</h2>
            </div>
            <a
              className="text-link"
              href={socials.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <FiArrowUpRight />
            </a>
          </div>
          <div
            className="showcase"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocusCapture={() => setHovered(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node))
                setHovered(false);
            }}
          >
            <div className="featured-grid">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className={
                    active === i ? "featured-card active" : "featured-card"
                  }
                >
                  {active === i && (
                    <span className="project-loop-track" aria-hidden="true">
                      <span
                        key={`${active}-${paused}-${hovered}-${motionPaused}-${reduced}`}
                        className={
                          paused || hovered || reduced || motionPaused
                            ? "project-loop-fill stopped"
                            : "project-loop-fill"
                        }
                      />
                    </span>
                  )}
                  <div className="featured-card-top">
                    <div className="project-identity">
                      <img src={p.logo} alt="" />
                      <div>
                        <span className="project-category">
                          {
                            [
                              "EDUCATION",
                              "TEAM WORKFLOWS",
                              "JOB DISCOVERY",
                              "FAMILY VIDEO",
                            ][i]
                          }
                        </span>
                        <button
                          className="project-title-button"
                          onClick={() => {
                            setActive(i);
                            setPaused(true);
                          }}
                        >
                          <h3>{p.title}</h3>
                        </button>
                      </div>
                    </div>
                    <span className="project-card-number">0{i + 1}</span>
                  </div>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="featured-links">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      View source <FiGithub />
                    </a>
                    {p.live && (
                      <a
                        className="project-live-action"
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live project <FiArrowUpRight />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>{" "}
            <div className="loop-controls">
              <span>
                <span className="dot" />{" "}
                {paused || reduced || motionPaused
                  ? "Explore at your pace"
                  : "A little loop of what I build"}
              </span>
              <div>
                <button
                  className="icon-button"
                  onClick={() => step(-1)}
                  aria-label="Previous project"
                >
                  <FiChevronLeft />
                </button>
                <button
                  className="icon-button"
                  onClick={() => setPaused(!paused)}
                  disabled={reduced}
                  aria-label={
                    paused ? "Play project loop" : "Pause project loop"
                  }
                >
                  {paused || reduced ? <FiPlay /> : <FiPause />}
                </button>
                <button
                  className="icon-button"
                  onClick={() => step(1)}
                  aria-label="Next project"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="office" className="office-section">
          <div className="container section">
            <div className="section-top">
              <div>
                <p className="eyebrow">PROFESSIONAL / SNR</p>
                <h2>
                  Built with the team<span>.</span>
                </h2>
              </div>
              <p className="section-description">
                Built as part of the team at
                <br />
                Sense & Respond Software LLC.
              </p>
            </div>
            <div className="office-grid">
              {officeProjects.map((p, i) => (
                <a
                  className="office-card"
                  onPointerMove={tilt}
                  onPointerLeave={resetTilt}
                  href={p.url}
                  key={p.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="office-top">
                    <span className={`monogram mark-${i}`}>
                      <img src={p.logo} alt="" />
                    </span>
                    <FiArrowUpRight />
                  </div>
                  <span className="small-label">SNR / 0{i + 1}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <span className="category">{p.category}</span>
                  <span className="office-url">{new URL(p.url).hostname}</span>
                </a>
              ))}
            </div>
            <p className="team-credit">
              Team projects · My contribution: frontend engineering. Product
              ownership belongs to SNR.
            </p>
          </div>
        </section>
        <section id="about" className="container section about-section">
          <div>
            <p className="eyebrow">01. // ABOUT.MD</p>
            <h2>
              Engineering with
              <br />
              the user in mind<span>.</span>
            </h2>
            <div className="about-copy">
              {profile.about.split("\n").map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="education">
              <span className="small-label">EDUCATION</span>
              <strong>BSc in Computer Science & Engineering</strong>
              <span>North South University</span>
            </div>
            <a
              className="text-link"
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <FiArrowUpRight />
            </a>
          </div>
          <div className="experience">
            <p className="eyebrow">04. // GIT LOG --ONELINE</p>
            <h2>Experience</h2>
            {experience.map((e, i) => (
              <article key={e.company}>
                <span className="experience-number">0{i + 1}</span>
                <div>
                  <span className="small-label">{e.period}</span>
                  <h3>{e.role}</h3>
                  <strong>{e.company}</strong>
                  <p>{e.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="container contact">
          <p className="eyebrow">04 / startConversation()</p>
          <h2>
            Have something in mind<span>?</span>
          </h2>
          <p>
            For projects, collaborations, or a conversation about building
            better web experiences.
          </p>
          <a className="email-link" href={socials.email}>
            {profile.email} <FiArrowUpRight />
          </a>
          <div className="socials">
            <a href={socials.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub <FiArrowUpRight />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn <FiArrowUpRight />
            </a>
          </div>
        </section>
      </main>
      <footer className="container">
        <a className="wordmark" href="#home">
          towsif<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Towsif Muhtadi Khan</span>
        <a className="text-link" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
