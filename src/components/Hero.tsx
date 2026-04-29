import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=2000" 
          alt="Moroccan Craftsmanship"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200 font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary text-lg px-10">
              {t('hero.cta')}
            </button>
            <button className="px-10 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-all">
              {t('nav.about')}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
