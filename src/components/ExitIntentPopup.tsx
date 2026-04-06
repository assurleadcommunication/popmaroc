import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeen = sessionStorage.getItem('exit_intent_seen');
        if (!hasSeen) {
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem('exit_intent_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-morocco-blue/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl p-12 text-center"
          >
            <button 
              onClick={close}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-20 h-20 bg-morocco-sand rounded-full flex items-center justify-center mx-auto mb-8">
              <Gift className="w-10 h-10 text-morocco-terracotta" />
            </div>
            
            <h2 className="text-4xl font-serif font-bold mb-4 text-morocco-blue">Attendez !</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Ne partez pas les mains vides. Profitez de <span className="font-bold text-morocco-terracotta">-15%</span> sur votre première commande avec le code :
            </p>
            
            <div className="bg-morocco-sand p-6 rounded-2xl border-2 border-dashed border-morocco-terracotta mb-8">
              <span className="text-3xl font-mono font-bold tracking-widest text-morocco-blue">MAROC15</span>
            </div>
            
            <button 
              onClick={close}
              className="btn-primary w-full text-lg"
            >
              J'en profite maintenant
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
