import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Heart, Star, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../constants/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const { t } = useLanguage();
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-morocco-sand overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 zellige-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-morocco-blue/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-4 bg-morocco-blue text-white px-4 lg:px-6 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] mx-auto lg:mx-0">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]">Nouveauté 2026</span>
              <div className="w-4 lg:w-8 h-px bg-morocco-fuchsia" />
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-morocco-mint">Pop Maroc</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black text-morocco-blue leading-[0.9] tracking-tighter uppercase">
              L'Artisanat <br />
              <span className="text-morocco-fuchsia neon-text">Version Pop</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t('hero.subtitle')} Une fusion audacieuse entre héritage ancestral et énergie vibrante.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 lg:pt-8 justify-center lg:justify-start">
              <Link to="/shop" className="pop-button-fuchsia text-lg group">
                {t('hero.cta')}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="pop-button-blue bg-white text-morocco-blue text-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-morocco-blue text-white rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current ml-1" />
                </div>
                Voir le film
              </button>
            </div>

            <div className="flex items-center gap-4 lg:gap-8 pt-8 lg:pt-12 border-t-2 lg:border-t-4 border-morocco-blue/10 justify-center lg:justify-start">
              <div className="flex -space-x-3 lg:-space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-white overflow-hidden bg-morocco-sand">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-[10px] lg:text-sm font-black text-morocco-blue uppercase tracking-widest">Rejoint par +5000 clients</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-morocco-saffron text-morocco-saffron" />)}
                  <span className="text-[10px] font-bold text-gray-400 ml-2">4.9/5 AVIS</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-none border-8 border-morocco-blue shadow-[24px_24px_0px_0px_rgba(255,0,255,1)] overflow-hidden bg-white">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000" 
                alt="Pop Maroc Hero" 
                className="w-full h-full object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-morocco-blue/10 mix-blend-overlay" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 z-20 bg-morocco-fuchsia text-white p-8 border-4 border-morocco-blue shadow-[8px_8px_0px_0px_rgba(0,56,168,1)]"
            >
              <p className="text-4xl font-display font-black leading-none">-20%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Offre de Bienvenue</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -right-8 z-20 bg-morocco-mint text-morocco-blue p-6 border-4 border-morocco-blue shadow-[8px_8px_0px_0px_rgba(255,0,255,1)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-morocco-blue text-white flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest leading-none">Livraison 48H</p>
                  <p className="text-[10px] font-bold text-morocco-blue/60 uppercase tracking-widest mt-1">Partout au Maroc</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white border-y-4 md:border-y-8 border-morocco-blue">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-morocco-sand border-4 border-morocco-blue flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(255,0,255,1)]">
              <Truck className="w-10 h-10 text-morocco-blue" />
            </div>
            <h3 className="text-2xl font-display font-black text-morocco-blue uppercase tracking-tighter">Livraison Express</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Expédition sous 24h partout au Maroc. Suivez votre colis en temps réel jusqu'à votre porte.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-morocco-mint border-4 border-morocco-blue flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(255,0,255,1)]">
              <ShoppingBag className="w-10 h-10 text-morocco-blue" />
            </div>
            <h3 className="text-2xl font-display font-black text-morocco-blue uppercase tracking-tighter">Paiement à la Livraison</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Commandez en toute confiance. Payez en espèces au livreur une fois votre colis reçu.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-morocco-fuchsia border-4 border-morocco-blue flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,56,168,1)]">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-display font-black text-morocco-blue uppercase tracking-tighter">Qualité Premium</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Chaque pièce est certifiée authentique et fabriquée par nos maîtres artisans partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32 bg-morocco-sand/30 relative">
        <div className="absolute inset-0 zellige-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:20 gap-8">
            <div className="space-y-2 md:space-y-4 text-center md:text-left">
              <span className="text-morocco-fuchsia font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Collection 2026</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-none">
                Nos Meilleurs <br />
                <span className="text-morocco-fuchsia">Trésors</span>
              </h2>
            </div>
            <Link to="/shop" className="pop-button-blue group w-full md:w-auto">
              Voir toute la boutique
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <Link to="/shop?category=leather" className="group relative aspect-[4/5] overflow-hidden border-2 md:border-4 border-morocco-blue shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,0,255,1)]">
              <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800" alt="Cuir" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-morocco-blue/20 group-hover:bg-transparent transition-all" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 bg-gradient-to-t from-morocco-blue to-transparent">
                <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">Cuir</h3>
                <p className="text-[8px] md:text-xs font-bold text-morocco-mint uppercase tracking-widest mt-1 md:mt-2">Découvrir</p>
              </div>
            </Link>
            <Link to="/shop?category=ceramics" className="group relative aspect-[4/5] overflow-hidden border-2 md:border-4 border-morocco-blue shadow-[4px_4px_0px_0px_rgba(152,255,152,1)] md:shadow-[8px_8px_0px_0px_rgba(152,255,152,1)] lg:mt-12">
              <img src="https://images.unsplash.com/photo-1590732488572-cf3252b17427?auto=format&fit=crop&q=80&w=800" alt="Céramique" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-morocco-blue/20 group-hover:bg-transparent transition-all" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 bg-gradient-to-t from-morocco-blue to-transparent">
                <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">Céramique</h3>
                <p className="text-[8px] md:text-xs font-bold text-morocco-mint uppercase tracking-widest mt-1 md:mt-2">Découvrir</p>
              </div>
            </Link>
            <Link to="/shop?category=rugs" className="group relative aspect-[4/5] overflow-hidden border-2 md:border-4 border-morocco-blue shadow-[4px_4px_0px_0px_rgba(244,196,48,1)] md:shadow-[8px_8px_0px_0px_rgba(244,196,48,1)]">
              <img src="https://images.unsplash.com/photo-1579656335332-d39812c75f82?auto=format&fit=crop&q=80&w=800" alt="Tapis" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-morocco-blue/20 group-hover:bg-transparent transition-all" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 bg-gradient-to-t from-morocco-blue to-transparent">
                <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">Tapis</h3>
                <p className="text-[8px] md:text-xs font-bold text-morocco-mint uppercase tracking-widest mt-1 md:mt-2">Découvrir</p>
              </div>
            </Link>
            <Link to="/shop?category=beauty" className="group relative aspect-[4/5] overflow-hidden border-2 md:border-4 border-morocco-blue shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,0,255,1)] lg:mt-12">
              <img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800" alt="Beauté" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-morocco-blue/20 group-hover:bg-transparent transition-all" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 bg-gradient-to-t from-morocco-blue to-transparent">
                <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">Beauté</h3>
                <p className="text-[8px] md:text-xs font-bold text-morocco-mint uppercase tracking-widest mt-1 md:mt-2">Découvrir</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-morocco-blue relative overflow-hidden">
        <div className="absolute inset-0 zellige-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8 md:space-y-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-morocco-fuchsia border-2 md:border-4 border-white shadow-[8px_8px_0px_0px_rgba(152,255,152,1)] rotate-12">
            <Heart className="w-8 h-8 md:w-12 md:h-12 text-white fill-current" />
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none">
            Rejoins la <br />
            <span className="text-morocco-mint neon-text">Pop Family</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            Inscris-toi pour recevoir nos dernières créations, des offres exclusives et 10% de réduction sur ta première commande.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto px-0 sm:px-4">
            <input 
              type="email" 
              placeholder="Ton adresse e-mail" 
              aria-label="Votre e-mail"
              className="flex-1 bg-white border-4 border-morocco-mint px-6 md:px-8 py-4 md:py-5 font-bold focus:outline-none focus:bg-morocco-mint/10 transition-all text-sm md:text-base"
            />
            <button type="submit" className="pop-button-fuchsia text-lg whitespace-nowrap">
              S'abonner
            </button>
          </form>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Pas de spam, promis. Juste de la couleur et de l'artisanat.
          </p>
        </div>
      </section>
    </div>
  );
}
