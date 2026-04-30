import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, Globe, X, Heart, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import CartDrawer from './CartDrawer';

export default function Header() {
  const { t, setLanguage, language } = useLanguage();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="p-2 hover:bg-morocco-sand rounded-full md:hidden border-2 border-transparent hover:border-morocco-blue transition-all"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-2xl md:text-3xl font-display font-extrabold text-morocco-blue tracking-tighter flex items-center gap-1">
            <span className="bg-morocco-blue text-white px-2 py-0.5">POP</span>
            <span className="text-morocco-fuchsia">MAROC</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-display font-bold text-xs uppercase tracking-[0.2em]">
          <Link to="/" className={`transition-all hover:text-morocco-fuchsia ${isActive('/') ? 'text-morocco-fuchsia underline decoration-4 underline-offset-8' : ''}`}>{t('nav.home')}</Link>
          <Link to="/shop" className={`transition-all hover:text-morocco-fuchsia ${isActive('/shop') ? 'text-morocco-fuchsia underline decoration-4 underline-offset-8' : ''}`}>{t('nav.shop')}</Link>
          <Link to="/blog" className={`transition-all hover:text-morocco-fuchsia ${isActive('/blog') ? 'text-morocco-fuchsia underline decoration-4 underline-offset-8' : ''}`}>Journal</Link>
          <Link to="/about" className={`transition-all hover:text-morocco-fuchsia ${isActive('/about') ? 'text-morocco-fuchsia underline decoration-4 underline-offset-8' : ''}`}>{t('nav.about')}</Link>
          <Link to="/contact" className={`transition-all hover:text-morocco-fuchsia ${isActive('/contact') ? 'text-morocco-fuchsia underline decoration-4 underline-offset-8' : ''}`}>{t('nav.contact')}</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative group hidden sm:block">
            <button 
              aria-label="Changer de langue"
              className="p-2 hover:bg-morocco-sand rounded-full flex items-center gap-1 border-2 border-transparent hover:border-morocco-blue transition-all"
            >
              <Globe className="w-5 h-5" />
              <span className="text-[10px] font-extrabold uppercase">{language}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 bg-white border-4 border-morocco-blue shadow-[4px_4px_0px_0px_rgba(0,56,168,1)] overflow-hidden hidden group-hover:block min-w-[120px]">
              <button onClick={() => setLanguage('fr')} className="block w-full px-4 py-2 text-left hover:bg-morocco-fuchsia hover:text-white text-xs font-bold uppercase tracking-widest">Français</button>
              <button onClick={() => setLanguage('ar')} className="block w-full px-4 py-2 text-left hover:bg-morocco-fuchsia hover:text-white text-xs font-bold uppercase tracking-widest">العربية</button>
              <button onClick={() => setLanguage('en')} className="block w-full px-4 py-2 text-left hover:bg-morocco-fuchsia hover:text-white text-xs font-bold uppercase tracking-widest">English</button>
            </div>
          </div>
          
          <button 
            aria-label="Rechercher"
            className="p-2 hover:bg-morocco-sand rounded-full border-2 border-transparent hover:border-morocco-blue transition-all"
          >
            <Search className="w-5 h-5" />
          </button>

          <button 
            aria-label="Mon compte"
            className="p-2 hover:bg-morocco-sand rounded-full border-2 border-transparent hover:border-morocco-blue transition-all hidden sm:block"
          >
            <User className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            aria-label={`Voir le panier (${cartCount} articles)`}
            className="p-2 bg-morocco-blue text-white rounded-none shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(255,0,255,1)] transition-all relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-morocco-fuchsia text-white text-[10px] font-black w-5 h-5 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-morocco-blue/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] p-8 border-r-8 border-morocco-fuchsia"
            >
              <div className="flex justify-between items-center mb-12">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-black text-morocco-blue">
                  POP<span className="text-morocco-fuchsia">MAROC</span>
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Fermer le menu"
                  className="p-2 bg-morocco-blue text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-8 text-2xl font-display font-black uppercase tracking-tighter">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-morocco-fuchsia transition-colors">01. {t('nav.home')}</Link>
                <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-morocco-fuchsia transition-colors">02. {t('nav.shop')}</Link>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-morocco-fuchsia transition-colors">03. Journal</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-morocco-fuchsia transition-colors">04. {t('nav.about')}</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-morocco-fuchsia transition-colors">05. {t('nav.contact')}</Link>
              </nav>

              <div className="absolute bottom-12 left-8 right-8">
                <div className="flex gap-4 mb-8">
                  <button onClick={() => setLanguage('fr')} className={`text-xs font-bold ${language === 'fr' ? 'text-morocco-fuchsia' : 'text-gray-400'}`}>FR</button>
                  <button onClick={() => setLanguage('ar')} className={`text-xs font-bold ${language === 'ar' ? 'text-morocco-fuchsia' : 'text-gray-400'}`}>AR</button>
                  <button onClick={() => setLanguage('en')} className={`text-xs font-bold ${language === 'en' ? 'text-morocco-fuchsia' : 'text-gray-400'}`}>EN</button>
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  L'artisanat marocain réinventé.<br />
                  Fait avec passion à Marrakech.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
