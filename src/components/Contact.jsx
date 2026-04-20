import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-blue-500 text-sm uppercase tracking-widest font-semibold mb-2">
            Parlons de votre projet
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-bold">
            Contactez-nous
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Infos */}
          <div className="space-y-8">
            {[
              { icon: <FaMapMarkerAlt />, label: "Adresse", value: "Libreville – BP 8903\nQuartier Okala" },
              { icon: <FaPhone />,        label: "Téléphone", value: "+241 074 43 12 26\n+241 060 40 21 35" },
              { icon: <FaEnvelope />,     label: "E-mail",    value: "contact@azorengineering.com" },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 text-xl flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="font-heading text-gray-900 text-sm uppercase tracking-widest mb-1">{c.label}</p>
                  <p className="font-body text-gray-500 text-sm whitespace-pre-line">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {sent && (
              <div className="bg-emerald-50 border border-emerald-400 text-emerald-600 text-sm font-body px-4 py-3 rounded-lg">
                ✅ Message envoyé ! Nous vous répondons sous 24h.
              </div>
            )}
            <input
              type="text"
              placeholder="Votre nom"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 font-body text-sm px-5 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Votre email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 font-body text-sm px-5 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <textarea
              rows={5}
              placeholder="Décrivez votre projet..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 font-body text-sm px-5 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-heading uppercase tracking-wider py-3 rounded-lg transition-all duration-300 text-sm"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}