import { Link } from "react-scroll";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#F5F7FA] overflow-hidden flex items-center"
    >
      {/* Glow background adapté au thème clair */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/15 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-300/20 blur-[140px] rounded-full"></div>

      {/* Motif géométrique subtil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #1e3a5f 0px, #1e3a5f 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #1e3a5f 0px, #1e3a5f 1px, transparent 1px, transparent 60px)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10 pt-28 pb-20">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold mb-5">
            Azor Engineering
          </p>

          <h1 className="text-gray-900 font-bold leading-tight text-5xl md:text-7xl mb-6">
            Construire <br />
            avec <span className="text-blue-600">vision</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
Experts en génie civil, structures métalliques, assainissement, traitement de l’humidité, fosses biologiques, signalisation routière et infrastructures durables au Gabon.          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="services"
              smooth={true}
              duration={600}
              offset={-70}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 cursor-pointer transition shadow-lg shadow-blue-200"
            >
              Nos services <FaArrowRight />
            </Link>

            <a
              href="tel:+241074431226"
              className="border border-gray-300 hover:border-gray-400 bg-white text-gray-800 px-8 py-4 rounded-xl flex items-center gap-3 transition shadow-sm hover:shadow-md"
            >
              <FaPhoneAlt className="text-orange-500" />
              Nous appeler
            </a>
          </div>

          {/* Mini features */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "Devis rapide",
              "Equipe qualifiee",
              "Respect des delais",
              "Solutions durables",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <FaCheckCircle className="text-green-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-[30px] overflow-hidden shadow-2xl shadow-gray-300/60 border border-gray-200">
            <img
              src="/hero-bg.jpg"
              alt="construction"
              className="w-full h-[650px] object-cover"
            />
          </div>

          {/* Floating card 1 */}
          <div className="absolute -left-10 top-12 bg-white rounded-2xl shadow-xl shadow-gray-200 p-5 w-52 border border-gray-100">
            <p className="text-3xl font-bold text-blue-600">10+</p>
            <p className="text-gray-500 text-sm">Annees d'experience</p>
          </div>

          {/* Floating card 2 */}
          <div className="absolute -right-8 bottom-10 bg-gray-900 text-white rounded-2xl shadow-xl p-5 w-56 border border-gray-700">
            <p className="text-3xl font-bold text-orange-400">50+</p>
            <p className="text-gray-400 text-sm">Projets realises</p>
          </div>
        </div>
      </div>
    </section>
  );
}