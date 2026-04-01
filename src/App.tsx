import {
  profile,
  services,
  skillCategories,
  experience,
  featuredProjects,
  productHighlights,
  personalProjects,
  testimonials,
  linkedInRecommendationsUrl,
  linkedInExperienceUrl,
} from "./content";
import { RecommendationsCarousel } from "./components/RecommendationsCarousel";
import { WorkBand } from "./components/WorkBand";
import {
  IconGithub,
  IconLayoutDesign,
  IconProductStack,
} from "./components/WorkIcons";
import { ServiceIcon } from "./components/ServiceIcons";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="logo" href="#top">
            {profile.name.split(" ")[0]} Kamenov
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="nav__cta">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero__grid">
            <div>
              <p className="hero__eyebrow">Freelance · {profile.location}</p>
              <h1 id="hero-title">{profile.title}</h1>
              <p className="hero__lead">{profile.tagline}</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href={profile.links.email}>
                  Start a project
                </a>
                <a className="btn btn--ghost" href={profile.links.github}>
                  GitHub
                </a>
                <a className="btn btn--ghost" href={profile.links.linkedin}>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="hero__portrait">
              <div className="portrait-frame">
                <img
                  src={profile.avatarUrl}
                  alt={`Portrait of ${profile.name}`}
                  width={220}
                  height={220}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="shell">
            <header className="section__head">
              <h2 id="services-title">Services</h2>
              <p>
                Focused offerings — a single craftsman for interface work, from first
                sketch to shipped code. Pick what you need; everything stays coherent.
              </p>
            </header>
            <div className="service-grid">
              {services.map((s) => (
                <article
                  key={s.title}
                  className={`service-card service-card--${s.icon}`}
                >
                  <div className="service-card__icon" aria-hidden>
                    <ServiceIcon id={s.icon} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="shell">
            <header className="section__head">
              <h2 id="skills-title">Skills &amp; tools</h2>
            </header>
            <div className="skill-categories">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="skill-category">
                  <h3 className="skill-category__title">{cat.title}</h3>
                  <div className="skill-chips">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="skill-chip">
                        {s.name}
                        {s.note ? <small>{s.note}</small> : null}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section"
          aria-labelledby="experience-title"
        >
          <div className="shell">
            <header className="section__head">
              <h2 id="experience-title">Experience</h2>
              <p>
                9 years of experience in Product engineering, consulting, and freelance.
              </p>
            </header>
            <div className="timeline">
              {experience.map((job) => (
                <article
                  key={`${job.role}-${job.period}-${job.company}`}
                  className="timeline-item"
                >
                  <h3>{job.role}</h3>
                  <p className="meta">
                    {job.company} · {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                  <p>{job.summary}</p>
                </article>
              ))}
            </div>
            <div className="section-read-more">
              <a
                className="btn btn--primary"
                href={linkedInExperienceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="See full experience on LinkedIn (opens in a new tab)"
              >
                See more
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="shell">
            <header className="section__head">
              <h2 id="projects-title">Selected work</h2>
              <p>
                <strong className="work-legend work-legend--github">open source</strong>
                {" / "}
                <strong className="work-legend work-legend--product">product</strong>{" "}
                delivery inside companies {" / "}
                <strong className="work-legend work-legend--studio">
                  design &amp; client
                </strong>{" "}
                work.
              </p>
            </header>

            <WorkBand
              variant="github"
              title="Open source on GitHub"
              lede="Pinned repositories and upstream libraries — contributions and experiments in the open."
              icon={<IconGithub />}
            >
              <div className="project-grid">
                {featuredProjects.map((p) => (
                  <article key={p.name} className="project-card">
                    <div className="project-card__meta">
                      {p.stack.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <a
                      className="project-card__link"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </a>
                  </article>
                ))}
              </div>
            </WorkBand>

            {productHighlights.length > 0 ? (
              <WorkBand
                variant="product"
                title="Product &amp; internal tools"
                lede="Shipping features, dashboards, and internal systems within product organisations."
                icon={<IconProductStack />}
              >
                <div className="project-grid">
                  {productHighlights.map((p) => (
                    <article key={p.name} className="project-card">
                      <div className="project-card__meta">
                        {p.stack.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3>{p.name}</h3>
                      <p>{p.description}</p>
                      <a
                        className="project-card__link"
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.linkLabel}
                      </a>
                    </article>
                  ))}
                </div>
              </WorkBand>
            ) : null}

            <WorkBand
              variant="studio"
              title="Design, clients &amp; side projects"
              lede="UI/UX explorations, Figma prototypes, freelance pieces, and work that lives outside core product repos."
              icon={<IconLayoutDesign />}
            >
              <div className="project-grid">
                {personalProjects.map((p) => (
                  <article
                    key={p.name}
                    className={`project-card${p.href ? "" : " project-card--placeholder"}`}
                  >
                    {p.stack && p.stack.length > 0 ? (
                      <div className="project-card__meta">
                        {p.stack.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    {p.href ? (
                      <a
                        className="project-card__link"
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.linkLabel ?? "Open project →"}
                      </a>
                    ) : (
                      <span className="project-card__link" style={{ opacity: 0.5 }}>
                        Link coming soon
                      </span>
                    )}
                  </article>
                ))}
              </div>
            </WorkBand>
          </div>
        </section>

        <section className="section" aria-labelledby="testimonials-title">
          <div className="shell shell--wide">
            <header className="section__head">
              <h2 id="testimonials-title">Recommendations</h2>
            </header>
            <RecommendationsCarousel
              items={testimonials}
              linkedinRecommendationsUrl={linkedInRecommendationsUrl}
            />
            <div className="section-read-more">
              <a
                className="btn btn--primary"
                href={linkedInRecommendationsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read all recommendations on LinkedIn (opens in a new tab)"
              >
                Read more
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="shell">
            <div className="contact-panel">
              <h2 id="contact-title">Let&apos;s build something solid</h2>
              <p>
                Tell me about your product, timeline, and stack. I&apos;ll reply with
                next steps.
              </p>
              <div className="contact-links">
                <a className="btn btn--primary" href={profile.links.email}>
                  Email
                </a>
                <a className="btn btn--ghost" href={profile.links.linkedin}>
                  LinkedIn
                </a>
                <a className="btn btn--ghost" href={profile.links.github}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}.{" "}
          <a href={profile.links.linkedin}>LinkedIn</a>
          {" · "}
          <a href={profile.links.github}>GitHub</a>
        </p>
      </footer>
    </>
  );
}

export default App;
