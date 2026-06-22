import { FormEvent, useEffect, useState } from 'react'

type Project = {
  title: string
  category: string
  image: string
  description: string
  proof: string[]
  tech: string[]
  github: string
  demo: string
  live?: string
  imagePosition?: string
}

const projects: Project[] = [
  {
    title: 'Airline Management System',
    category: 'MERN / Distributed Systems',
    image: '/assets/airline-management.png',
    description: 'A complete flight discovery and booking platform designed as five focused backend services, with secure user, booking, admin and notification workflows.',
    proof: ['20+ REST APIs', '5 backend services', 'RabbitMQ events'],
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'RabbitMQ'],
    github: 'https://github.com/SarthakYadava/Airline-Management-System',
    demo: 'https://drive.google.com/file/d/1yKOvWJwq7rYAZxwfABQKIQrF7fCjMN5c/view?usp=sharing',
  },
  {
    title: 'Apple iPhone 15 Pro Experience',
    category: 'MERN / Creative Frontend',
    image: '/assets/apple-iphone.png',
    description: 'A cinematic product landing experience with responsive layouts, scroll-synchronised storytelling and interactive 3D product presentation.',
    proof: ['GSAP timelines', 'ScrollTrigger motion', 'Interactive 3D'],
    tech: ['React', 'GSAP', 'Three.js', 'Tailwind CSS'],
    github: 'https://github.com/SarthakYadava/gsap_macbook_landing',
    demo: 'https://drive.google.com/file/d/1ESVF0AEkFjM3k7nblCxXSP9xcWbxw3Rs/view?usp=sharing',
  },
  {
    title: 'CloudVault',
    category: 'Spring Boot + React',
    image: '/assets/cloudvault.png',
    description: 'A secure client document exchange platform with private S3 storage, revocable sharing, owner-level access controls and traceable activity.',
    proof: ['13+ REST APIs', '18 automated tests', 'Private AWS S3'],
    tech: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'AWS S3', 'Docker'],
    github: 'https://github.com/SarthakYadava/cloudvault',
    demo: 'https://drive.google.com/file/d/19O0GsDiZZX722fMz6SoiVoiHJfXq_pWv/view?usp=sharing',
    live: 'https://cloudvault-age0.onrender.com/',
    imagePosition: 'center top',
  },
  {
    title: 'UPI Wallet Simulator',
    category: 'Spring Boot + React',
    image: '/assets/wallet-simulator.png',
    description: 'A full-stack wallet workspace covering KYC onboarding, account funding, wallet transfers, refunds and a searchable transaction ledger.',
    proof: ['7 REST APIs', 'KYC workflow', 'Role-based operations'],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'React', 'MySQL', 'JWT'],
    github: 'https://github.com/SarthakYadava/spring-boot-wallet-simulator',
    demo: 'https://drive.google.com/file/d/1GIcuqy6uVi-BuIrSvkbx-WAXnJyMQBi1/view?usp=sharing',
    live: 'https://spring-boot-wallet-simulator.vercel.app/',
  },
]

const secondaryProjects = [
  {
    name: 'Code Fusion',
    capability: 'Secure, user-specific code snippet management with full CRUD workflows and a responsive three-tier architecture.',
    learning: 'Deepened schema design, JWT authentication, bcrypt password security and frontend-to-API integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
  },
  {
    name: 'API Rate Limiter',
    capability: 'Reusable token-bucket request throttling for Spring services, including consistent HTTP 429 responses across endpoints.',
    learning: 'Explored traffic control, filter design and production-minded protection for microservice APIs.',
    tech: ['Java', 'Spring Boot', 'Bucket4j', 'REST APIs'],
  },
]

const skills = {
  'MERN full stack': ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JavaScript', 'TypeScript', 'JWT', 'REST APIs'],
  'Spring Boot full stack': ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JUnit', 'MySQL', 'PostgreSQL', 'React.js'],
  'Delivery & platform': ['Git', 'GitHub Actions', 'Docker', 'Maven', 'AWS S3', 'RabbitMQ', 'Flyway', 'Swagger', 'Microservices'],
}

const socials = {
  github: 'https://github.com/SarthakYadava',
  linkedin: 'https://www.linkedin.com/in/sarthak-yadav-758176334/',
  hackerrank: 'https://www.hackerrank.com/profile/sarthkyadav10r',
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? 'light' : 'dark'
  }, [lightMode])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('sending')
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('_subject', 'New portfolio message for Sarthak Yadav')
    formData.append('_template', 'table')

    try {
      const response = await fetch('https://formsubmit.co/ajax/sarthkyadav10r@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (!response.ok) throw new Error('Message could not be sent')
      setFormStatus('sent')
      form.reset()
    } catch {
      setFormStatus('error')
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sarthak Yadav, home">
          <span>SY</span>
          <small>portfolio</small>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href="/Sarthak_Yadav_Java_Full_Stack_Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowIcon /></a>
          <button className="theme-toggle" type="button" onClick={() => setLightMode(!lightMode)} aria-label={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}>
            {lightMode ? '☾' : '☼'}
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="hero section" id="home">
          <div className="hero-copy reveal is-visible">
            <div className="availability"><span /> Available for opportunities & remote work</div>
            <p className="eyebrow">MERN · SPRING BOOT · REACT</p>
            <h1>I build complete products across <span>two full-stack worlds.</span></h1>
            <p className="hero-description">I’m Sarthak Yadav, a full-stack developer creating secure backends, responsive interfaces and practical systems with MERN and Spring Boot + React.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowIcon /></a>
              <a className="button button-secondary" href="#contact">Contact me</a>
            </div>
            <div className="social-row" aria-label="Social profiles">
              <a href={socials.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            </div>
          </div>

          <aside className="profile-panel reveal is-visible" aria-label="Profile summary">
            <div className="profile-image-wrap">
              <img src="/assets/sarthak-profile.jpeg" alt="Sarthak Yadav" />
              <span className="profile-orbit" />
            </div>
            <div className="profile-heading">
              <div><p>FULL-STACK DEVELOPER</p><h2>Sarthak Yadav</h2></div>
              <span className="status-dot" title="Available" />
            </div>
            <div className="profile-facts">
              <div><span>Focus</span><strong>MERN + Spring Boot</strong></div>
              <div><span>Based in</span><strong>Gorakhpur, India</strong></div>
              <div><span>Working</span><strong>Remote · On-site</strong></div>
            </div>
            <a className="profile-email" href="mailto:sarthkyadav10r@gmail.com">sarthkyadav10r@gmail.com <ArrowIcon /></a>
          </aside>
        </section>

        <section className="stack-strip" aria-label="Full stack specialities">
          <div><span>01</span><strong>MERN Full Stack</strong><p>Modern interfaces, API design and event-driven Node.js services.</p></div>
          <div><span>02</span><strong>Spring Boot + React</strong><p>Secure Java backends, durable data models and production-minded delivery.</p></div>
          <div className="stack-stat"><strong>300+</strong><p>DSA problems solved across competitive platforms.</p></div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading reveal">
            <div><p className="section-tag"><span /> Flagship work</p><h2>Four projects that show how I think and build.</h2></div>
            <p>From animated product storytelling to secure distributed systems—each project demonstrates a different layer of full-stack ownership.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title} interface`} style={{ objectPosition: project.imagePosition }} />
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="proof-grid">
                    {project.proof.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-actions">
                    <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
                    {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live app <ArrowIcon /></a>}
                    <a className="demo-button" href={project.demo} target="_blank" rel="noreferrer">Demo video <span>&#9654;</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="more-work reveal">
            <div className="more-work-heading"><p className="section-tag"><span /> More experiments</p><h3>Smaller builds. Focused lessons.</h3></div>
            <div className="secondary-grid">
              {secondaryProjects.map((project) => (
                <article className="secondary-card" key={project.name}>
                  <div className="secondary-top"><h4>{project.name}</h4><span>↗</span></div>
                  <div className="learning-box"><small>CAPABILITY</small><p>{project.capability}</p></div>
                  <div className="learning-box"><small>WHAT I LEARNED</small><p>{project.learning}</p></div>
                  <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-intro reveal">
            <p className="section-tag"><span /> About me</p>
            <h2>Engineering with equal attention to the system <em>and</em> the person using it.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>I’m a Computer Science undergraduate at Chandigarh University, graduating in 2026. I enjoy turning broad product requirements into clear data models, reliable APIs and interfaces that feel intentional.</p>
              <p>My work moves comfortably between Java’s structured backend ecosystem and JavaScript’s fast product loop. That range helps me make decisions with the whole application in view—not just one layer.</p>
              <a className="button button-secondary" href="/Sarthak_Yadav_Java_Full_Stack_Resume.pdf" target="_blank" rel="noreferrer">Download resume ↓</a>
            </div>
            <div className="about-cards reveal">
              <article><span>EDUCATION</span><h3>B.E. Computer Science</h3><p>Chandigarh University · 2022–2026</p><strong>CGPA 7.17</strong></article>
              <article><span>PROBLEM SOLVING</span><h3>300+ DSA problems</h3><p>LeetCode · HackerRank · GeeksforGeeks</p><strong>Java Gold Badge</strong></article>
              <article><span>CERTIFICATIONS</span><h3>Cloud & IoT foundations</h3><p>NPTEL Silver certifications</p><strong>2 Silver awards</strong></article>
              <article><span>WORK STYLE</span><h3>Remote-ready delivery</h3><p>Async collaboration · ownership · adaptability</p><strong>Open to work</strong></article>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <div><p className="section-tag"><span /> Technical toolkit</p><h2>Two stacks, one product mindset.</h2></div>
            <p>I choose tools around maintainability, security and the experience the product needs to deliver.</p>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items], index) => (
              <article className="skill-card reveal" key={group}>
                <div className="skill-index">0{index + 1}</div>
                <h3>{group}</h3>
                <div className="skill-cloud">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-heading reveal">
            <p className="section-tag"><span /> Contact</p>
            <h2>Have a role, project or interesting problem?</h2>
            <p>I’m available for full-stack developer roles, internships, freelance opportunities and remote work.</p>
          </div>
          <div className="contact-grid reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-title"><h3>Send a message</h3><p>Share a little context and I’ll get back to you soon.</p></div>
              <input type="text" name="_honey" className="honey" tabIndex={-1} autoComplete="off" />
              <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
              <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>Message<textarea name="message" placeholder="Tell me about the opportunity or project..." rows={6} required /></label>
              <button className="button button-primary form-submit" type="submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending…' : 'Send message'} <ArrowIcon />
              </button>
              {formStatus === 'sent' && <p className="form-message success">Message sent. Thank you—I’ll be in touch.</p>}
              {formStatus === 'error' && <p className="form-message error">Something went wrong. Please email me directly instead.</p>}
            </form>
            <aside className="contact-info">
              <div><small>EMAIL</small><a href="mailto:sarthkyadav10r@gmail.com">sarthkyadav10r@gmail.com <ArrowIcon /></a></div>
              <div><small>GITHUB</small><a href={socials.github} target="_blank" rel="noreferrer">github.com/SarthakYadava <ArrowIcon /></a></div>
              <div><small>LINKEDIN</small><a href={socials.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowIcon /></a></div>
              <div><small>LOCATION</small><p>Gorakhpur, Uttar Pradesh, India</p></div>
              <div className="contact-note"><span className="status-dot" /><p>Currently open to remote and on-site opportunities.</p></div>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home"><span>SY</span><small>portfolio</small></a>
        <p>Built with curiosity, clean code and an unreasonable fondness for good spacing.</p>
        <div><a href={socials.github} target="_blank" rel="noreferrer">GitHub</a><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={socials.hackerrank} target="_blank" rel="noreferrer">HackerRank</a></div>
        <small>© {new Date().getFullYear()} Sarthak Yadav</small>
      </footer>
    </div>
  )
}

export default App
