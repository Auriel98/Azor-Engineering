import { useParams, useNavigate } from "react-router-dom";
import { services } from "./Services";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

/* ── Petite icone SVG fleche retour ── */
const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Icone check SVG ── */
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7L5.5 10.5L12 3.5" stroke="#2E7DC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Hook animation au scroll ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Stats globales ── */
const globalStats = [
  { value: "10+", label: "Annees d'experience" },
  { value: "50+", label: "Projets realises" },
  { value: "100%", label: "Satisfaction client" },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  const [heroLoaded, setHeroLoaded] = useState(false);
  const [contentRef, contentVisible] = useReveal();
  const [sideRef, sideVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, [slug]);

  /* ── Page 404 ── */
  if (!service) {
    return (
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="overflow-x-hidden">
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <Navbar />
        <div
          className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
          style={{ background: "#080F14" }}
        >
          <p
            style={{
              color: "#2E7DC4",
              letterSpacing: "0.3em",
              fontSize: "0.75rem",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
            }}
            className="uppercase mb-4"
          >
            Erreur 404
          </p>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem,5vw,3.5rem)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
            }}
            className="mb-6"
          >
            Service introuvable
          </h1>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#2E7DC4",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "14px 36px",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            RETOUR A L'ACCUEIL
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Paragraphes du detail : support string multiligne ET tableau ── */
  const paragraphs = Array.isArray(service.details)
    ? service.details.filter((l) => l.trim())
    : (service.details?.trim().split("\n").filter((l) => l.trim()) ?? []);

  /* ── Tags : 3 premiers mots de chaque paragraphe (max 4) ── */
  const tags = paragraphs.slice(0, 4).map((p) => {
    const words = p.trim().split(" ");
    return words.slice(0, 3).join(" ");
  });

  /* ── Couleur du service courant pour les accents ── */
  const accentColor = service.color || "#2E7DC4";

  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'Barlow', sans-serif", background: "#F4F6F8" }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --blue: #2E7DC4;
          --accent: ${accentColor};
          --amber: #F5A623;
          --dark: #080F14;
          --dark2: #0E1A24;
          --light: #F4F6F8;
        }
        .sd-hero-img {
          transform: ${heroLoaded ? "scale(1.0)" : "scale(1.06)"};
          transition: transform 1.4s cubic-bezier(0.16,1,0.3,1);
        }
        .sd-fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .sd-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .sd-line-grow {
          width: 0;
          transition: width 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s;
        }
        .sd-line-grow.visible { width: 56px; }
        .sd-tag {
          background: rgba(46,125,196,0.08);
          border: 1px solid rgba(46,125,196,0.22);
          color: var(--blue);
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          padding: 5px 12px;
          text-transform: uppercase;
          transition: background 0.2s, border-color 0.2s;
        }
        .sd-tag:hover {
          background: rgba(46,125,196,0.18);
          border-color: rgba(46,125,196,0.5);
        }
        .sd-stat-card {
          border-left: 2px solid var(--blue);
          padding: 14px 0 14px 18px;
          transition: border-color 0.2s;
        }
        .sd-stat-card:hover { border-color: var(--amber); }
        .sd-cta-btn {
          background: var(--blue);
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 16px 44px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%);
        }
        .sd-cta-btn:hover { background: #1d5fa0; }
        .sd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.22);
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 9px 18px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .sd-back-btn:hover {
          background: rgba(46,125,196,0.35);
          border-color: rgba(46,125,196,0.6);
        }
        .sd-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
        }
        .sd-para-block {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 22px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          transition: background 0.2s;
        }
        .sd-para-block:last-child { border-bottom: none; }
        .sd-para-block:hover {
          background: rgba(46,125,196,0.02);
          border-radius: 6px;
          padding-left: 8px;
          padding-right: 8px;
          margin-left: -8px;
          margin-right: -8px;
        }
        .sd-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 2.4rem;
          color: rgba(46,125,196,0.12);
          line-height: 1;
          min-width: 44px;
          user-select: none;
          padding-top: 2px;
        }
        .sd-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .sd-corner {
          position: absolute;
          width: 28px;
          height: 28px;
        }
        .sd-corner-tl { border-top: 2px solid var(--amber); border-left: 2px solid var(--amber); }
        .sd-corner-br { border-bottom: 2px solid var(--blue); border-right: 2px solid var(--blue); }
        .sd-hero-badge {
          position: absolute;
          bottom: 48px;
          right: 40px;
          background: var(--amber);
          color: var(--dark);
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 18px;
          clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
        }
        @media (max-width: 768px) {
          .sd-layout { flex-direction: column !important; }
          .sd-sidebar {
            width: 100% !important;
            border-left: none !important;
            border-top: 1px solid rgba(0,0,0,0.08) !important;
            padding-left: 0 !important;
            padding-top: 32px !important;
          }
          .sd-hero-badge { bottom: 60px; right: 20px; }
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section
        className="sd-diagonal relative overflow-hidden"
        style={{ height: "72vh", minHeight: "480px", background: "#080F14" }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="sd-hero-img absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,15,20,0.97) 0%, rgba(8,15,20,0.78) 45%, rgba(8,15,20,0.28) 80%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,15,20,0.75) 0%, transparent 55%)" }}
        />

        {/* Grille subtile */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,125,196,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,196,0.04) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Barre tricolore top */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #2E7DC4 0%, #F5A623 50%, #4A8B3A 100%)",
            zIndex: 10,
          }}
        />

        {/* Cornières decoratives */}
        <div className="sd-corner sd-corner-tl absolute" style={{ zIndex: 10, top: "82px", left: "32px" }} />
        <div className="sd-corner sd-corner-br absolute" style={{ zIndex: 10, bottom: "88px", right: "32px" }} />

        {/* Bouton retour */}
        <div className="absolute z-20" style={{ top: "88px", left: "76px" }}>
          <button className="sd-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft /> Retour
          </button>
        </div>

        {/* Contenu hero */}
        <div
          className="absolute inset-0 flex flex-col justify-end z-10"
          style={{
            paddingBottom: "88px",
            paddingLeft: "clamp(24px, 6vw, 80px)",
            paddingRight: "clamp(24px, 6vw, 80px)",
          }}
        >
          {/* Breadcrumb */}
          <div className="sd-breadcrumb mb-5">
            <span
              style={{ color: "rgba(255,255,255,0.4)", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Accueil
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>Services</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ color: "#F5A623" }}>{service.title}</span>
          </div>

          {/* Eyebrow */}
          <div style={{ marginBottom: "14px" }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#F5A623",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ width: "28px", height: "2px", background: "#F5A623", display: "inline-block" }} />
              Notre expertise
            </span>
          </div>

          {/* Titre */}
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              color: "#fff",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              maxWidth: "720px",
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {service.title.toUpperCase()}
          </h1>

          {/* Trait bleu + desc */}
          <div
            style={{
              marginTop: "22px",
              display: "flex",
              alignItems: "flex-start",
              gap: "18px",
              maxWidth: "580px",
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
            }}
          >
            <div
              style={{ width: "3px", minHeight: "52px", background: "#2E7DC4", flexShrink: 0, marginTop: "3px" }}
            />
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
              }}
            >
              {service.desc}
            </p>
          </div>
        </div>

        {/* Badge */}
        <div className="sd-hero-badge" style={{ zIndex: 10 }}>
          Azor Engineering
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION PRINCIPALE — 2 colonnes
      ═══════════════════════════════════ */}
      <section
        style={{
          background: "#F4F6F8",
          paddingTop: "80px",
          paddingBottom: "96px",
          paddingLeft: "clamp(20px, 6vw, 80px)",
          paddingRight: "clamp(20px, 6vw, 80px)",
        }}
      >
        <div
          className="sd-layout"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            gap: "72px",
            alignItems: "flex-start",
          }}
        >
          {/* ── COLONNE GAUCHE : Description ── */}
          <div
            ref={contentRef}
            className={`sd-fade-up ${contentVisible ? "visible" : ""}`}
            style={{ flex: "1 1 0", minWidth: 0 }}
          >
            {/* En-tete de section */}
            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#2E7DC4",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ width: "24px", height: "2px", background: "#2E7DC4", display: "inline-block" }} />
                Description du service
              </p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "#080F14",
                  lineHeight: 1.05,
                }}
              >
                {service.title}
              </h2>
              <div
                className={`sd-line-grow ${contentVisible ? "visible" : ""}`}
                style={{ height: "3px", background: "#F5A623", marginTop: "16px" }}
              />
            </div>

            {/* Paragraphes numerotes */}
            {paragraphs.length > 0 ? (
              <div>
                {paragraphs.map((p, i) => (
                  <div key={i} className="sd-para-block">
                    <span className="sd-number">{String(i + 1).padStart(2, "0")}</span>
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 400,
                        fontSize: "0.96rem",
                        color: "#3D4F5C",
                        lineHeight: 1.8,
                      }}
                    >
                      {p.trim()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback si pas de details */
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.96rem",
                  color: "#3D4F5C",
                  lineHeight: 1.8,
                }}
              >
                {service.desc}
              </p>
            )}

            {/* Tags / points-cles */}
            {tags.length > 0 && (
              <div style={{ marginTop: "36px" }}>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.68rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#8A9BAA",
                    marginBottom: "14px",
                  }}
                >
                  Points cles
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {tags.map((tag, i) => (
                    <span key={i} className="sd-tag">
                      {tag}...
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── COLONNE DROITE : Sidebar ── */}
          <div
            ref={sideRef}
            className={`sd-sidebar sd-fade-up ${sideVisible ? "visible" : ""}`}
            style={{
              width: "290px",
              flexShrink: 0,
              borderLeft: "1px solid rgba(0,0,0,0.09)",
              paddingLeft: "40px",
            }}
          >
            {/* Image miniature */}
            <div
              style={{
                width: "100%",
                height: "180px",
                overflow: "hidden",
                marginBottom: "30px",
                position: "relative",
              }}
            >
              <img
                src={service.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,15,20,0.55) 0%, transparent 60%)",
                }}
              />
              {/* Corniere decorative */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  width: "18px",
                  height: "18px",
                  borderBottom: "2px solid #F5A623",
                  borderLeft: "2px solid #F5A623",
                }}
              />
              {/* Tag categorie sur image */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: accentColor,
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                }}
              >
                {service.tag}
              </div>
            </div>

            {/* Stats */}
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8A9BAA",
                marginBottom: "20px",
              }}
            >
              En chiffres
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "36px" }}>
              {globalStats.map((s, i) => (
                <div key={i} className="sd-stat-card" style={{ transitionDelay: `${i * 0.09}s` }}>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#080F14",
                      lineHeight: 1,
                      marginBottom: "3px",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.77rem",
                      color: "#7A8C99",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Separateur */}
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "28px" }} />

            {/* Pourquoi nous */}
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8A9BAA",
                marginBottom: "16px",
              }}
            >
              Pourquoi nous choisir
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "11px",
              }}
            >
              {[
                "Equipes certifiees",
                "Normes internationales",
                "Devis gratuit",
                "Suivi de projet",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.84rem",
                    color: "#3D4F5C",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "rgba(46,125,196,0.10)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          BLOC CTA
      ═══════════════════════════════════ */}
      <section
        ref={ctaRef}
        className={`sd-fade-up ${ctaVisible ? "visible" : ""}`}
        style={{
          background: "#0E1A24",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "clamp(20px, 6vw, 80px)",
          paddingRight: "clamp(20px, 6vw, 80px)",
        }}
      >
        {/* Texture grille */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,125,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,196,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Watermark texte */}
        <div
          className="absolute right-0 top-1/2 pointer-events-none select-none"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(7rem, 18vw, 16rem)",
            color: "rgba(46,125,196,0.04)",
            lineHeight: 1,
            transform: "translateY(-50%)",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
            paddingRight: "20px",
          }}
        >
          PROJET
        </div>

        {/* Barre amber gauche */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            background: "linear-gradient(to bottom, #F5A623, transparent)",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Texte gauche */}
          <div style={{ maxWidth: "540px" }}>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#F5A623",
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ width: "24px", height: "2px", background: "#F5A623", display: "inline-block" }} />
              Passons a l'action
            </p>
            <h3
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#fff",
                lineHeight: 1.05,
                marginBottom: "18px",
              }}
            >
              VOUS AVEZ UN PROJET ?
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: "0.96rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
              }}
            >
              Contactez-nous pour obtenir un devis gratuit et personnalise. Nos experts analysent votre besoin et
              vous proposent la meilleure solution technique.
            </p>
          </div>

          {/* Boutons droite */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
            <button
              className="sd-cta-btn"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Demander un devis gratuit
            </button>
            <a
              href="tel:+241074431226"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingLeft: "12px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A623")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 2C2.5 1.72 2.72 1.5 3 1.5H5.27C5.52 1.5 5.73 1.68 5.77 1.93L6.27 4.93C6.3 5.15 6.19 5.37 6 5.46L4.8 6.06C5.5 7.68 6.82 8.99 8.44 9.7L9.04 8.5C9.13 8.31 9.35 8.2 9.57 8.23L12.57 8.73C12.82 8.77 13 8.98 13 9.23V11.5C13 11.78 12.78 12 12.5 12H12C6.75 12 2.5 7.75 2.5 2.5V2Z"
                  stroke="#F5A623"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +241 074 43 12 26
            </a>
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}