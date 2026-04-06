import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Plus, Minus, Search, MessageCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "Livraison",
    questions: [
      {
        q: "Quels sont les délais de livraison au Maroc ?",
        a: "Nous livrons partout au Maroc sous 24h à 48h ouvrables. Pour les zones reculées, le délai peut aller jusqu'à 72h."
      },
      {
        q: "Quels sont les frais de livraison ?",
        a: "La livraison est gratuite pour toute commande supérieure à 500 MAD. Pour les commandes inférieures, les frais sont fixes à 40 MAD partout au Maroc."
      },
      {
        q: "Puis-je suivre ma commande ?",
        a: "Oui, dès que votre commande est expédiée, vous recevrez un numéro de suivi par e-mail et SMS pour suivre votre colis en temps réel."
      }
    ]
  },
  {
    category: "Paiement",
    questions: [
      {
        q: "Quels modes de paiement acceptez-vous ?",
        a: "Nous acceptons le paiement à la livraison (Cash on Delivery) partout au Maroc, ainsi que les paiements par carte bancaire marocaine (CMI) et internationale (Visa, Mastercard)."
      },
      {
        q: "Le paiement par carte est-il sécurisé ?",
        a: "Absolument. Nous utilisons des protocoles de sécurité avancés et ne stockons jamais vos informations bancaires. Toutes les transactions sont traitées via des passerelles de paiement certifiées."
      }
    ]
  },
  {
    category: "Retours & Échanges",
    questions: [
      {
        q: "Puis-je retourner un article ?",
        a: "Oui, vous disposez de 7 jours après réception pour retourner un article s'il ne vous convient pas, à condition qu'il soit dans son état d'origine."
      },
      {
        q: "Comment effectuer un retour ?",
        a: "Contactez notre service client via WhatsApp ou e-mail. Nous organiserons le passage d'un livreur pour récupérer l'article."
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-morocco-terracotta transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">FAQ</span>
        </div>

        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-morocco-terracotta font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
            Centre d'Aide
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">
            Questions Fréquentes
          </h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Comment pouvons-nous vous aider ?" 
              className="w-full bg-white border border-gray-100 rounded-3xl px-16 py-5 shadow-xl focus:outline-none focus:border-morocco-terracotta transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
          <aside className="space-y-4 sticky top-32">
            {FAQ_DATA.map(cat => (
              <button 
                key={cat.category}
                onClick={() => {
                  setActiveCategory(cat.category);
                  setOpenIndex(null);
                }}
                className={`w-full text-left px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all ${activeCategory === cat.category ? 'bg-morocco-terracotta text-white shadow-lg shadow-morocco-terracotta/20' : 'hover:bg-gray-50 text-gray-400'}`}
              >
                {cat.category}
              </button>
            ))}
          </aside>

          <main className="lg:col-span-3 space-y-6">
            {FAQ_DATA.find(c => c.category === activeCategory)?.questions.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-serif font-bold text-morocco-blue group-hover:text-morocco-terracotta transition-colors">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-morocco-terracotta text-white rotate-180' : 'bg-morocco-sand text-morocco-terracotta'}`}>
                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-10 pb-8"
                    >
                      <p className="text-gray-500 leading-relaxed text-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </main>
        </div>

        {/* Contact CTA */}
        <div className="mt-32 p-16 bg-morocco-sand rounded-[3rem] text-center border border-morocco-terracotta/10">
          <h2 className="text-3xl font-serif font-bold mb-6">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Notre équipe de support premium est disponible pour répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="bg-morocco-terracotta text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-morocco-terracotta/90 transition-all shadow-lg shadow-morocco-terracotta/20">
              Nous Contacter
            </Link>
            <button className="flex items-center gap-3 text-morocco-blue font-bold uppercase tracking-widest hover:text-morocco-terracotta transition-colors">
              <MessageCircle className="w-6 h-6" />
              Chat WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
