import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Équipe de professionnels qualifiés et certifiés",
  "Matériaux de haute qualité conformes aux normes",
  "Respect des délais et du budget",
  "Suivi de chantier rigoureux",
  "Intervention rapide sur tout Libreville",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Cluster d'images — deux cercles superposés */}
        <div className="relative w-80 h-80 mx-auto">
          {/* Grand cercle */}
          <div className="absolute top-0 left-0 w-60 h-60 rounded-full overflow-hidden bg-[#f0e8de]">
            <img
              src="/betonA.jpg"
              alt="Chantier Azor Engineering"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Petit cercle */}
          <div className="absolute bottom-2 right-0 w-36 h-36 rounded-full overflow-hidden border-4 border-white bg-[#dde9f5]">
            <img
              src="/signalisationR.jpg"
              alt="Équipe Azor Engineering"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge flottant */}
          <div className="absolute top-2 right-2 bg-white rounded-xl shadow-md px-4 py-3 text-center">
            <p className="font-serif text-2xl font-bold text-red-500 leading-none">10+</p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide leading-tight">
              Ans<br />d'expérience
            </p>
          </div>
        </div>

        {/* Contenu texte */}
        <div>
          <p className="text-blue-500 text-xs uppercase tracking-widest font-semibold mb-3">
            Qui sommes-nous
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-dark font-bold mb-5 leading-tight">
            Expertise & Qualité au service du Gabon
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Azor Engineering est un bureau d'études et entreprise de travaux basé à Libreville.
            Nous intervenons dans les domaines du génie civil, des structures métalliques,
            de l'assainissement et de la signalisation routière avec rigueur et professionnalisme.
          </p>

          {/* Stats */}
          <p className="font-semibold text-sm text-dark mb-3">
            Nos clients nous font confiance.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-3xl font-bold text-emerald-500">95%</p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                de nos clients satisfaits de nos prestations
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-500">9/10</p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                projets livrés dans les délais impartis
              </p>
            </div>
          </div>

          {/* Points clés */}
          <ul className="space-y-2 mb-7">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">{p}</span>
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
            En savoir plus →
          </button>
        </div>

      </div>
    </section>
  );
}