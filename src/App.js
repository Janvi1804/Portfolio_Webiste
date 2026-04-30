import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Certifications", "Education", "Contact"];

const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "Asmi Global Softwares",
    period: "Dec 2025 – Mar 2026",
    location: "Jaipur, India",
    desc: "Developed web applications using ASP.NET, C#, and SQL. Built backend logic, implemented database queries, and integrated front-end components.",
    color: "#00f5d4",
  },
  {
    title: "Frontend Developer",
    company: "Infinex Technologies",
    period: "May 2025 – Dec 2025",
    location: "Jaipur, India",
    desc: "Worked on the company's main website implementing responsive design features and optimizing UX. Collaborated on major client projects using modern web technologies.",
    color: "#f72585",
  },
  {
    title: "Web Developer Intern",
    company: "AU Ignite Future Skills Academy",
    period: "May 2024 – Jul 2024",
    location: "Jaipur, India",
    desc: "Enhanced skills in web development working on various projects using HTML, CSS, JavaScript, and ReactJS. Improved problem-solving abilities and understanding of web principles.",
    color: "#7209b7",
  },
  {
    title: "Web Developer Intern",
    company: "Acmegrade",
    period: "May 2023 – Jul 2023",
    location: "",
    desc: "Collaborated with the design team to implement UI designs using HTML, CSS, and JavaScript. Created and maintained database schemas using MySQL.",
    color: "#f77f00",
  },
];

const SKILLS = {
  "Frontend": ["HTML", "CSS", "JavaScript", "ReactJS", "jQuery"],
  "Backend": ["Python", "C#", "ASP.NET", "SQL"],
  "Tools": ["GitHub", "VSCode", "Visual Studio", "Kaggle", "Tableau"],
};

const PROJECTS = [
  {
    title: "Twitter Sentiment Classification",
    desc: "ML model to classify tweet sentiment as positive/negative/neutral using 1.6M tweets. Applied NLP techniques: tokenization, stop word removal, lemmatization. Built deep learning models with Keras and TensorFlow.",
    tags: ["Python", "TensorFlow", "Keras", "NLP", "ML"],
    icon: "🐦",
    color: "#00f5d4",
  },
  {
    title: "E-Commerce Website",
    desc: "Fully functional e-commerce website with product listings, shopping cart, search, filters, and checkout. Focused on UX and smooth order management.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "🛒",
    color: "#f72585",
  },
  {
    title: "Hotel Management System",
    desc: "Python-based system to manage hotel operations including room booking, guest check-in/check-out, billing, and staff management.",
    tags: ["Python"],
    icon: "🏨",
    color: "#7209b7",
  },
  {
    title: "Personal Portfolio",
    desc: "Personal portfolio website showcasing skills and projects with responsive design optimized for desktop and mobile.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "👤",
    color: "#f77f00",
  },
  {
    title: "Coaching Website",
    desc: "Dynamic coaching website with user-friendly interface, responsive layouts, and interactive features to enhance user engagement.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "📚",
    color: "#06d6a0",
  },
  {
    title: "Rock Paper Scissors Game",
    desc: "Rock-Paper-Scissors game in Python where user plays against computer, featuring random choice generation and result display.",
    tags: ["Python"],
    icon: "✊",
    color: "#118ab2",
  },
];

const CERTS = [
  { name: "Responsive Web Design", org: "FreeCodeCamp", icon: "🎨" },
  { name: "Machine Learning with Python", org: "Great Learning", icon: "🤖" },
  { name: "Web Development Training", org: "Acmegrade", icon: "💻" },
  { name: "Data Analytics with Python", org: "NPTEL", icon: "📊" },
];

const EDUCATION = [
  {
    degree: "B.Tech CS – AI & Data Science",
    school: "Poornima University",
    period: "Oct 2021 – Apr 2025",
    detail: "CGPA: 8.31",
    icon: "🎓",
  },
  {
    degree: "Class XII – CBSE",
    school: "Central Board of Secondary Education",
    period: "Apr 2020 – Mar 2021",
    detail: "92%",
    icon: "📖",
  },
  {
    degree: "Class X – CBSE",
    school: "Central Board of Secondary Education",
    period: "Apr 2018 – Mar 2019",
    detail: "93%",
    icon: "📝",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimSection({ children, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#060612", color: "#e8e8f0", fontFamily: "'Outfit', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a1a; }
        ::-webkit-scrollbar-thumb { background: #00f5d4; border-radius: 2px; }
        html { scroll-behavior: smooth; }

        .nav-link {
          background: none; border: none; color: #aab0c0; font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; font-weight: 500; cursor: pointer; padding: 6px 14px;
          border-radius: 20px; transition: all 0.3s; letter-spacing: 0.04em;
        }
        .nav-link:hover { color: #00f5d4; background: rgba(0,245,212,0.08); }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes gradient-shift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hero-name {
          font-family: 'Outfit', sans-serif; font-weight: 900; font-size: clamp(3rem, 9vw, 7rem);
          background: linear-gradient(135deg, #fff 0%, #00f5d4 40%, #f72585 80%, #fff 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 5s ease infinite;
          line-height: 1;
        }
        .glow-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(.4,0,.2,1);
          position: relative; overflow: hidden;
        }
        .glow-card::before {
          content: ''; position: absolute; inset: 0; border-radius: 20px;
          background: linear-gradient(135deg, rgba(0,245,212,0.05), transparent);
          opacity: 0; transition: opacity 0.4s;
        }
        .glow-card:hover { transform: translateY(-6px); border-color: rgba(0,245,212,0.3); box-shadow: 0 20px 60px rgba(0,245,212,0.08); }
        .glow-card:hover::before { opacity: 1; }

        .tag {
          background: rgba(0,245,212,0.1); color: #00f5d4;
          border: 1px solid rgba(0,245,212,0.25);
          border-radius: 30px; padding: 3px 12px;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em;
          font-family: 'Space Mono', monospace;
        }

        .skill-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; padding: 10px 18px;
          font-size: 0.9rem; font-weight: 500;
          transition: all 0.3s;
          cursor: default;
        }
        .skill-pill:hover {
          background: rgba(0,245,212,0.1);
          border-color: #00f5d4; color: #00f5d4;
          transform: scale(1.05);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800;
          letter-spacing: -0.02em;
        }
        .accent { color: #00f5d4; }
        .mono { font-family: 'Space Mono', monospace; }

        .timeline-dot {
          width: 14px; height: 14px; border-radius: 50%;
          border: 2px solid; flex-shrink: 0; margin-top: 6px;
          position: relative;
        }
        .timeline-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid currentColor; opacity: 0.3;
          animation: pulse-ring 2s ease-out infinite;
        }

        .hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 50px; font-weight: 600;
          font-size: 0.95rem; cursor: pointer; transition: all 0.3s;
          font-family: 'Outfit', sans-serif; letter-spacing: 0.02em;
          text-decoration: none;
        }
        .btn-primary {
          background: linear-gradient(135deg, #00f5d4, #7209b7);
          color: #fff; border: none;
          box-shadow: 0 4px 30px rgba(0,245,212,0.3);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(0,245,212,0.45); }
        .btn-outline {
          background: transparent; color: #e8e8f0;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .btn-outline:hover { border-color: #00f5d4; color: #00f5d4; transform: translateY(-2px); }

        .grid-bg {
          background-image: linear-gradient(rgba(0,245,212,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,245,212,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .noise-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .contact-link {
          display: flex; align-items: center; gap: 12px;
          color: #aab0c0; text-decoration: none; font-size: 1rem;
          padding: 14px 20px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          transition: all 0.3s;
        }
        .contact-link:hover { color: #00f5d4; border-color: rgba(0,245,212,0.3); background: rgba(0,245,212,0.06); transform: translateX(8px); }

        @media (max-width: 768px) {
          .mobile-menu { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>

      {/* Cursor Follower */}
      <div style={{
        position: "fixed", left: cursor.x - 6, top: cursor.y - 6,
        width: 12, height: 12, borderRadius: "50%", background: "#00f5d4",
        pointerEvents: "none", zIndex: 9999, transition: "transform 0.15s",
        transform: cursorHover ? "scale(2.5)" : "scale(1)",
        mixBlendMode: "screen", opacity: 0.8,
      }} />

      <div className="noise-overlay" />

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "10px 5%" : "20px 5%",
        background: scrolled ? "rgba(6,6,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "1.1rem", color: "#00f5d4", letterSpacing: "0.05em" }}>
          JS<span style={{ color: "#f72585" }}>//</span>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
          {NAV_LINKS.map(link => (
            <button key={link} className="nav-link" onClick={() => scrollTo(link)}>{link}</button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu"
          style={{ display: "none", background: "none", border: "none", color: "#e8e8f0", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ width: 24, height: 2, background: menuOpen && i === 1 ? "transparent" : "#00f5d4", display: "block", transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none" }} />
          ))}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
          background: "rgba(6,6,18,0.98)", backdropFilter: "blur(20px)",
          padding: "20px 5%", borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexDirection: "column", gap: 8,
        }}>
          {NAV_LINKS.map(link => (
            <button key={link} className="nav-link" style={{ textAlign: "left" }} onClick={() => scrollTo(link)}>{link}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="about" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 5% 80px", position: "relative" }}>
        {/* Orbs */}
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,245,212,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
          <div style={{ animation: "slide-in-left 1s ease both" }}>
            {/* <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,245,212,0.08)", border: "1px solid rgba(0,245,212,0.2)", borderRadius: 30, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00f5d4", display: "block", animation: "blink 1.5s ease infinite" }} />
            <span style={{ fontSize:   "0.82rem", color: "#00f5d4", fontFamily: "'Space Mono',monospace", letterSpacing: "0.08em" }}>Available for work</span>
            </div> */}
            <h1 className="hero-name">JANVI<br />SETHI</h1>
            <p style={{ marginTop: 16, fontSize: "1.25rem", color: "#7209b7", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Space Mono',monospace" }}>
              Software Developer 
            </p>
            <p style={{ marginTop: 20, maxWidth: 560, color: "#8890a0", lineHeight: 1.8, fontSize: "1rem" }}>
              B.Tech graduate in CS with specialization in AI & Data Science. Passionate about building elegant web applications and intelligent systems. Currently based in Jaipur, India.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <button className="hero-btn btn-primary" onClick={() => scrollTo("Projects")}>
                View Projects <span>→</span>
              </button>
              <button className="hero-btn btn-outline" onClick={() => scrollTo("Contact")}>
                Contact Me
              </button>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 48, color: "#5a6070" }}>
              {[["4", "Internships & Jobs"], ["6+", "Projects Built"], ["8.31", "CGPA"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#00f5d4", fontFamily: "'Space Mono',monospace" }}>{n}</div>
                  <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar blob */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", animation: "float 6s ease-in-out infinite" }}>
            <div style={{
              width: 220, height: 220,
              background: "linear-gradient(135deg, #00f5d4, #7209b7, #f72585)",
              borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "6rem", boxShadow: "0 0 80px rgba(0,245,212,0.2)",
            }}>
              👩‍💻
            </div>
            <div style={{ position: "absolute", inset: -16, borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%", border: "1px solid rgba(0,245,212,0.2)", animation: "spin-slow 20s linear infinite" }} />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <p className="mono" style={{ color: "#f72585", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>// 01. work history</p>
            <h2 className="section-title">Experience <span className="accent">.</span></h2>
          </AnimSection>

          <div style={{ marginTop: 60, display: "flex", flexDirection: "column", gap: 28 }}>
            {EXPERIENCES.map((exp, i) => (
              <AnimSection key={i}>
                <div className="glow-card" style={{ padding: "30px 36px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start" }}
                  onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)}>
                  <div className="timeline-dot" style={{ borderColor: exp.color, background: exp.color + "30", color: exp.color }} />
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, alignItems: "flex-start" }}>
                      <div>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#e8e8f0" }}>{exp.title}</h3>
                        <p style={{ color: exp.color, fontWeight: 600, fontSize: "0.95rem", marginTop: 4 }}>{exp.company}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30`, borderRadius: 20, padding: "4px 14px", fontSize: "0.78rem", fontFamily: "'Space Mono',monospace" }}>{exp.period}</div>
                        {exp.location && <div style={{ fontSize: "0.8rem", color: "#5a6070", marginTop: 6 }}>{exp.location}</div>}
                      </div>
                    </div>
                    <p style={{ color: "#8890a0", marginTop: 14, lineHeight: 1.7, fontSize: "0.95rem" }}>{exp.desc}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <p className="mono" style={{ color: "#7209b7", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>// 02. technical stack</p>
            <h2 className="section-title">Skills <span className="accent">.</span></h2>
          </AnimSection>

          <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {Object.entries(SKILLS).map(([cat, skills], ci) => {
              const colors = ["#00f5d4", "#f72585", "#7209b7"];
              return (
                <AnimSection key={cat}>
                  <div className="glow-card" style={{ padding: "30px 28px", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: colors[ci] + "20", border: `1px solid ${colors[ci]}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                        {["⚡", "🔧", "🛠️"][ci]}
                      </div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: colors[ci], textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Space Mono',monospace" }}>{cat}</h3>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {skills.map(s => (
                        <div key={s} className="skill-pill" style={{ '--hover-color': colors[ci] }}>{s}</div>
                      ))}
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <p className="mono" style={{ color: "#00f5d4", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>// 03. what I've built</p>
            <h2 className="section-title">Projects <span className="accent">.</span></h2>
          </AnimSection>

          <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {PROJECTS.map((proj, i) => (
              <AnimSection key={i}>
                <div className="glow-card" style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}
                  onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: proj.color + "15", border: `1px solid ${proj.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>
                      {proj.icon}
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e8e8f0", lineHeight: 1.3 }}>{proj.title}</h3>
                  </div>
                  <p style={{ color: "#8890a0", fontSize: "0.9rem", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{proj.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {proj.tags.map(t => (
                      <span key={t} className="tag" style={{ background: proj.color + "10", color: proj.color, borderColor: proj.color + "30" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <p className="mono" style={{ color: "#f72585", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>// 04. credentials</p>
            <h2 className="section-title">Certifications <span className="accent">.</span></h2>
          </AnimSection>

          <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {CERTS.map((cert, i) => {
              const colors = ["#00f5d4", "#f72585", "#7209b7", "#f77f00"];
              return (
                <AnimSection key={i}>
                  <div className="glow-card" style={{ padding: "28px 24px", display: "flex", alignItems: "center", gap: 18 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: colors[i] + "15", border: `1px solid ${colors[i]}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
                      {cert.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#e8e8f0", lineHeight: 1.3 }}>{cert.name}</div>
                      <div style={{ fontSize: "0.82rem", color: colors[i], marginTop: 6, fontWeight: 600 }}>{cert.org}</div>
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <p className="mono" style={{ color: "#7209b7", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>// 05. academic background</p>
            <h2 className="section-title">Education <span className="accent">.</span></h2>
          </AnimSection>

          <div style={{ marginTop: 60, display: "flex", flexDirection: "column", gap: 20 }}>
            {EDUCATION.map((edu, i) => {
              const colors = ["#00f5d4", "#f72585", "#7209b7"];
              return (
                <AnimSection key={i}>
                  <div className="glow-card" style={{ padding: "28px 36px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: colors[i] + "15", border: `1px solid ${colors[i]}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
                      {edu.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e8e8f0" }}>{edu.degree}</h3>
                      <p style={{ color: colors[i], fontSize: "0.9rem", fontWeight: 600, marginTop: 4 }}>{edu.school}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ background: colors[i] + "15", color: colors[i], border: `1px solid ${colors[i]}30`, borderRadius: 20, padding: "4px 16px", fontSize: "0.78rem", fontFamily: "'Space Mono',monospace", marginBottom: 8 }}>{edu.period}</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#e8e8f0", fontFamily: "'Space Mono',monospace" }}>{edu.detail}</div>
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5% 80px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <AnimSection>
            <p className="mono" style={{ color: "#00f5d4", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>// 06. get in touch</p>
            <h2 className="section-title">Contact <span className="accent">.</span></h2>
            <p style={{ color: "#8890a0", marginTop: 20, lineHeight: 1.8, fontSize: "1rem", maxWidth: 480, margin: "20px auto 0" }}>
              I'm actively looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </AnimSection>

          <AnimSection>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 48 }}>
              <a href="mailto:janvisethi773@gmail.com" className="contact-link" style={{ justifyContent: "flex-start" }}>
                <span style={{ fontSize: "1.3rem" }}>📧</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#5a6070", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Space Mono',monospace" }}>Email</div>
                  <div style={{ fontSize: "1rem", marginTop: 2 }}>janvisethi773@gmail.com</div>
                </div>
              </a>
              <a href="tel:+919057201392" className="contact-link" style={{ justifyContent: "flex-start" }}>
                <span style={{ fontSize: "1.3rem" }}>📱</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#5a6070", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Space Mono',monospace" }}>Phone</div>
                  <div style={{ fontSize: "1rem", marginTop: 2 }}>+91 9057201392</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/janvi-sethi-981bb4229" target="_blank" rel="noreferrer" className="contact-link" style={{ justifyContent: "flex-start" }}>
                <span style={{ fontSize: "1.3rem" }}>💼</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#5a6070", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Space Mono',monospace" }}>LinkedIn</div>
                  <div style={{ fontSize: "1rem", marginTop: 2 }}>janvi-sethi-981bb4229</div>
                </div>
              </a>
              <a href="https://github.com/Janvi1804" target="_blank" rel="noreferrer" className="contact-link" style={{ justifyContent: "flex-start" }}>
                <span style={{ fontSize: "1.3rem" }}>🐙</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#5a6070", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Space Mono',monospace" }}>GitHub</div>
                  <div style={{ fontSize: "1rem", marginTop: 2 }}>github.com/Janvi1804</div>
                </div>
              </a>
              <div className="contact-link" style={{ justifyContent: "flex-start" }}>
                <span style={{ fontSize: "1.3rem" }}>📍</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#5a6070", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Space Mono',monospace" }}>Location</div>
                  <div style={{ fontSize: "1rem", marginTop: 2 }}>Jaipur, Rajasthan, India</div>
                </div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 5%", textAlign: "center", color: "#3a4050", fontSize: "0.82rem", fontFamily: "'Space Mono',monospace" }}>
        Designed & Built by <span style={{ color: "#00f5d4" }}>Janvi Sethi</span> · 2025
      </footer>
    </div>
  );
}