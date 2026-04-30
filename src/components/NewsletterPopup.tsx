import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Gift, ArrowRight } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('pop_maroc_newsletter');
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('pop_maroc_newsletter', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-morocco-blue/60 backdrop-blur-md z-[200]"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white z-[210] overflow-hidden border-8 border-morocco-blue shadow-[32px_32px_0px_0px_rgba(255,0,255,1)] grid grid-cols-1 md:grid-cols-2"
          >
            <div className="relative aspect-square md:aspect-auto bg-morocco-sand overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590732488572-cf3252b17427?auto=format&fit=crop&q=80&w=800" 
                alt="Newsletter Pop" 
                className="w-full h-full object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 zellige-pattern opacity-10" />
              <div className="absolute top-8 left-8 bg-morocco-fuchsia text-white p-6 border-4 border-morocco-blue shadow-[8px_8px_0px_0px_rgba(0,56,168,1)] rotate-[-12deg]">
                <p className="text-4xl font-display font-black leading-none">-10%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Sur ta commande</p>
              </div>
            </div>

            <div className="p-12 md:p-16 flex flex-col justify-center space-y-8 relative">
              <button 
                onClick={handleClose}
                className="absolute top-8 right-8 p-2 bg-morocco-blue text-white hover:bg-morocco-fuchsia transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 bg-morocco-mint text-morocco-blue px-4 py-1.5 border-2 border-morocco-blue shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
                  <Gift className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Cadeau de Bienvenue</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-none">
                  Rejoins la <br />
                  <span className="text-morocco-fuchsia neon-text">Pop Family</span>
                </h2>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  Inscris-toi pour recevoir nos dernières créations, des offres exclusives et 10% de réduction sur ta première commande.
                </p>
              </div>

              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Ton adresse e-mail" 
                  className="w-full bg-morocco-sand/30 border-4 border-morocco-blue px-8 py-5 font-bold focus:outline-none focus:bg-morocco-mint/10 transition-all"
                />
                <button className="w-full pop-button-fuchsia text-lg flex items-center justify-center gap-3 group">
                  S'abonner Maintenant
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                Pas de spam, promis. Juste de la couleur et de l'artisanat.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
