import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo_AZOR.png" 
                alt="Azor Engineering Logo" 
                className="h-10 object-contain"
              />
            </div>
            <p className="font-body text-sm leading-relaxed">
              Bureau d'études et entreprise de travaux basé à Libreville, Gabon.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-heading text-white text-sm uppercase tracking-widest mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {[
                { to: "hero", label: "Accueil" },
                { to: "services", label: "Prestations" },
                { to: "about", label: "À propos" },
                { to: "contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className="font-body text-sm hover:text-accent cursor-pointer transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="font-heading text-white text-sm uppercase tracking-widest mb-4">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebook />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaWhatsapp />, href: "https://wa.me/241074431226" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-accent rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-body text-xs text-gray-600">
            © {new Date().getFullYear()} Azor Engineering. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}