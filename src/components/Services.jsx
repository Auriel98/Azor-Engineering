import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaWater, FaCubes, FaWrench, FaRoad, FaHome, FaLeaf } from "react-icons/fa";

export const services = [
  {
    slug: "assainissement",
    icon: FaWater,
    title: "Ouvrages d'assainissement",
    image: "/assainissement.jpg",
    desc: "Construction d'ouvrages d'assainissement et hydrauliques selon les normes en vigueur.",
    color: "#2563EB",
    tag: "Hydraulique",
    details: `Azor Engineering concoit et realise des ouvrages d'assainissement complets, integrant la collecte, le transport et le traitement des eaux usees domestiques et industrielles. Chaque installation est dimensionnee selon les debits reels du site et les exigences reglementaires gabonaises en vigueur.

Nos equipes effectuent une etude hydrologique et topographique approfondie avant tout demarrage de chantier. Cette phase de diagnostic permet de cartographier les reseaux existants, d'identifier les zones sensibles et de definir les solutions techniques les plus adaptees au contexte local.

Nous intervenons sur la construction de caniveaux, collecteurs, bassins de retention et stations de relevage. Tous les materiaux utilises — beton hydraulique, PEHD, fonte ductile — sont selectionnes pour leur resistance mecanique et leur longevite en milieu tropical humide.

Le suivi de chantier est assure par un conducteur de travaux certifie, garant du respect des plans d'execution, des delais contractuels et des normes de qualite ISO applicables. Des tests d'etancheite et de debit sont systematiquement realises a la reception de chaque ouvrage.`,
  },
  {
    slug: "beton-arme",
    icon: FaCubes,
    title: "Beton arme",
    image: "/betonA.jpg",
    desc: "Entretien et reparation des ouvrages en beton arme pour une durabilite maximale.",
    color: "#EA580C",
    tag: "Structure",
    details: `Azor Engineering assure l'entretien, la rehabilitation et la reparation des ouvrages en beton arme, qu'il s'agisse de ponts, de dalles de couverture, de murs de soutenement ou de fondations industrielles. Notre approche commence toujours par un diagnostic structural rigoureux avant toute intervention.

Nos ingenieurs structures realisent des expertises visuelles et instrumentales pour evaluer l'etat de la carbonatation, la corrosion des armatures et la profondeur des fissures. Ce bilan technique oriente le choix des procedes de reparation les plus efficaces et les plus durables dans le temps.

Les travaux de confortement comprennent le reprofilage au mortier thixotrope, l'injection de fissures a la resine epoxy, la passivation des aciers exposes et la mise en place de systemes d'etancheite de surface. Chaque produit utilise est certifie et compatible avec les conditions climatiques equatoriales.

Nous intervenons egalement sur des projets neufs — construction de semelles, radiers, voiles et poutres — en garantissant la conformite des formulations de beton aux classes d'exposition definies dans les normes BAEL et Eurocode 2 adaptees au contexte gabonais.`,
  },
  {
    slug: "structures-metalliques",
    icon: FaWrench,
    title: "Structures metalliques",
    image: "/structureM.jpeg",
    desc: "Entretien et reparation des structures metalliques industrielles et commerciales.",
    color: "#0891B2",
    tag: "Industrie",
    details: `Azor Engineering prend en charge l'entretien preventif et correctif des structures metalliques dans les secteurs industriel, commercial et portuaire. Nos techniciens specialises interviennent sur charpentes, passerelles, pylones, reservoirs et equipements de levage soumis aux conditions severes du climat equatorial.

La corrosion est le principal ennemi des structures metalliques au Gabon. C'est pourquoi nous appliquons des systemes de protection anticorrosion multicouches — grenaillage SA 2.5, primaire epoxy zinc riche, intermediaire epoxy, finition polyurethane — conformes aux classes C4 et C5 de la norme ISO 12944.

Nos equipes effectuent egalement des controles non destructifs : controle visuel, magnetoscopie, ultrason et ressuage, permettant de detecter les defauts internes sans demonter les elements en place. Ces verifications garantissent la securite structurale des installations entre deux campagnes de maintenance.

Pour les travaux de fabrication et d'assemblage, notre atelier est equipe de postes de soudure certifies. Tous nos soudeurs sont qualifies selon les procedures AWS D1.1 ou EN ISO 3834, assurant des assemblages de haute qualite pour des structures destinees a durer plusieurs decennies.`,
  },
  {
    slug: "signalisation-routiere",
    icon: FaRoad,
    title: "Signalisation routiere",
    image: "/signalisationR.jpg",
    desc: "Realisation de la signalisation routiere horizontale et verticale aux normes.",
    color: "#D97706",
    tag: "Voirie",
    details: `Azor Engineering realise des projets complets de signalisation routiere horizontale et verticale pour les routes nationales, les voiries urbaines et les zones industrielles. Nos interventions couvrent aussi bien les nouveaux amenagements que la remise aux normes de la signalisation existante.

La signalisation horizontale — marquages au sol, passages pietons, lignes axiales et de rive, fleches de direction — est appliquee avec des peintures retroreflectorisees a haute visibilite nocturne. Nous utilisons des machines thermoplastiques pour garantir une epaisseur uniforme et une adherence durable sur asphalte et beton.

La signalisation verticale comprend la fourniture et la pose de panneaux de prescription, d'indication et de danger fabriques en aluminium anodise avec films de classe 2 et 3. Les supports sont dimensionnes pour resister aux charges de vent definies dans les normes SETRA, avec ancrage chimique ou mecanique selon la nature du sol.

Chaque chantier est precede d'un audit de securite routiere permettant d'identifier les points noirs et de prioriser les interventions. Nos etudes de signalisation sont realisees en coordination avec les autorites locales pour assurer la coherence de la gestion du trafic sur l'ensemble du reseau concerne.`,
  },
  {
    slug: "traitement-humidite",
    icon: FaHome,
    title: "Traitement de l'humidite",
    image: "/humidite.jpg",
    desc: "Traitement de l'humidite a l'interieur et a l'exterieur des murs.",
    color: "#059669",
    tag: "Batiment",
    details: `Azor Engineering propose des solutions durables contre les problemes d'humidite affectant les batiments residentiels, commerciaux et institutionnels. En zone equatoriale, les remontees capillaires, les infiltrations laterales et la condensation constituent des pathologies frequentes qui degradent rapidement les structures et nuisent a la qualite de l'air interieur.

Notre processus commence par un diagnostic complet de l'humidite : mesure des teneurs en eau dans les murs, identification de la source (capillarite, infiltration en facade, defaut d'etancheite en toiture) et evaluation des degats causes aux enduits, aux revetements et aux armatures. Ce bilan oriente precisement les travaux a realiser.

Les traitements appliques comprennent l'injection de resines hydrophobes contre les remontees capillaires, la pose de membranes d'etancheite liquide ou de drainage sur les parties enterrees, le rejointoiement hydraulique des fissures actives et l'application d'enduits mineraux de sechage rapide en remplacement des zones degradees.

En complement, nous realisons des travaux d'amelioration de la ventilation et du drainage peripherique des batiments, agissant ainsi sur les causes profondes des problemes d'humidite. Nos interventions sont garanties et accompagnees de conseils de prevention pour eviter la reapparition des pathologies traitees.`,
  },
  {
    slug: "fosses-septiques",
    icon: FaLeaf,
    title: "Fosses septiques",
    image: "/Bio.png",
    desc: "Construction de fosses septiques ecologiques type biofil respectueuses de l'environnement.",
    color: "#16A34A",
    tag: "Ecologie",
    details: `Azor Engineering specialise dans la conception et la construction de fosses septiques ecologiques de type Biofil, une solution d'assainissement autonome particulierement adaptee aux zones non raccordees au reseau collectif. Ces systemes biologiques naturels traitent efficacement les eaux usees sans produits chimiques ni energie exterieure.

Le systeme Biofil repose sur la decomposition acceleree des matieres organiques par des micro-organismes et des vers de terre, produisant un effluent de qualite qui peut etre reintegre dans le sol sans risque de pollution. Notre equipe dimensionne chaque installation en fonction du nombre d'usagers, de la nature du terrain et des contraintes hydrauliques locales.

La construction integre des materiaux durables — beton arme, couvertures prefabriquees et filtres en materiaux naturels — garantissant une longue duree de vie sans entretien lourd. La fosse est enterree et equipee d'acces de visite permettant les rares inspections periodiques recommandees.

Nous accompagnons nos clients de la conception a la mise en service, incluant les etudes de sol, le dossier de declaration administrative, l'execution des travaux et la formation des usagers aux bonnes pratiques d'utilisation. Chaque installation respecte les normes environnementales gabonaises et les recommandations de l'OMS pour l'assainissement en milieu tropical.`,
  },
];

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function ServiceCard({ service, index, navigate }) {
  const [ref, visible] = useScrollReveal();
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      onClick={() => navigate(`/services/${service.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(48px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
      className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-md"
    >
      {/* Image Background */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.33,1,0.68,1)",
          }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: hovered
              ? `linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 100%)`
              : `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)`,
            transition: "background 0.5s ease",
          }}
        />

        {/* Color accent glow on hover */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 80%, ${service.color}44 0%, transparent 65%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Tag chip */}
        <div
          className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{ background: service.color, color: "#fff", letterSpacing: "0.15em" }}
        >
          {service.tag}
        </div>

        {/* Icon circle */}
        <div
          className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.25)",
            transform: hovered ? "rotate(360deg) scale(1.15)" : "rotate(0deg) scale(1)",
            transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <Icon style={{ color: "#fff", fontSize: "16px" }} />
        </div>

        {/* Title always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3
            className="font-bold text-white leading-snug"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            {service.title}
          </h3>
          <div
            style={{
              height: "2.5px",
              background: service.color,
              borderRadius: "2px",
              width: hovered ? "60px" : "28px",
              marginTop: "8px",
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      {/* Bottom content panel */}
      <div
        className="bg-white p-6"
        style={{
          borderBottom: `3px solid ${hovered ? service.color : "transparent"}`,
          transition: "border-color 0.3s ease",
        }}
      >
        <p
          className="text-gray-500 text-sm leading-relaxed mb-4"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          {service.desc}
        </p>

        <div className="flex items-center justify-between">
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: service.color, fontFamily: "'Lato', sans-serif", letterSpacing: "0.08em" }}
          >
            En savoir plus
          </span>

          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: hovered ? service.color : "#f3f4f6",
              transition: "background 0.3s ease, transform 0.3s ease",
              transform: hovered ? "translateX(4px)" : "translateX(0px)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={hovered ? "#fff" : "#6b7280"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "stroke 0.3s ease" }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const navigate = useNavigate();
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400;700;900&display=swap');
        .services-bg-pattern {
          background-color: #f8f9fb;
          background-image:
            radial-gradient(circle at 20% 10%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 90%, rgba(234,88,12,0.06) 0%, transparent 50%);
        }
        .services-divider-line {
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563EB, #EA580C);
          border-radius: 99px;
          transition: width 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s;
          margin: 16px auto 0;
        }
        .services-divider-line.visible { width: 72px; }
      `}</style>

      <section id="services" className="services-bg-pattern py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className="text-center mb-20"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div style={{ width: "32px", height: "1.5px", background: "#2563EB" }} />
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "#2563EB",
                  fontSize: "0.75rem",
                  fontWeight: 900,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Ce que nous faisons
              </p>
              <div style={{ width: "32px", height: "1.5px", background: "#EA580C" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                color: "#111827",
                lineHeight: 1.15,
              }}
            >
              Nos Prestations
            </h2>

            <div className={`services-divider-line ${headerVisible ? "visible" : ""}`} />

            <p
              className="mt-6 max-w-xl mx-auto text-gray-500"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
            >
              Des solutions d'ingenierie adaptees a chaque defi, realisees avec rigueur et expertise au Gabon.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} navigate={navigate} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              textAlign: "center",
              marginTop: "4rem",
              opacity: headerVisible ? 1 : 0,
              transition: "opacity 1s ease 0.8s",
            }}
          >
            <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
              Besoin d'un service specifique ?
            </p>
            <button
              onClick={() => navigate("/#contact")}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 900,
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)",
                color: "#fff",
                padding: "14px 36px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(37,99,235,0.3)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,99,235,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,99,235,0.3)";
              }}
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </>
  );
}