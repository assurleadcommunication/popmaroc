import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-morocco-blue text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 zellige-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white text-morocco-blue flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] group-hover:rotate-12 transition-transform">
                <span className="text-2xl font-display font-black">P</span>
              </div>
              <span className="text-2xl font-display font-black tracking-tighter uppercase">
                Pop <span className="text-morocco-fuchsia">Maroc</span>
              </span>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed">
              L'artisanat marocain réinventé pour la génération Pop. Des pièces uniques, vibrantes et authentiques, fabriquées avec passion à Marrakech.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-morocco-fuchsia transition-all border-2 border-transparent hover:border-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-morocco-mint">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.shop'), path: '/shop' },
                { name: 'Le Journal', path: '/blog' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.contact'), path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm font-bold text-gray-400 hover:text-morocco-fuchsia hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-morocco-mint">Aide & Support</h3>
            <ul className="space-y-4">
              {[
                { name: 'FAQ', path: '/faq' },
                { name: 'Livraison', path: '/faq#shipping' },
                { name: 'Retours', path: '/faq#returns' },
                { name: 'Conditions Générales', path: '/terms' },
                { name: 'Confidentialité', path: '/terms#privacy' }
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm font-bold text-gray-400 hover:text-morocco-fuchsia hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-morocco-mint">Contact</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-morocco-fuchsia flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(152,255,152,1)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-gray-400 leading-relaxed">
                  Showroom Pop Maroc<br />
                  Sidi Ghanem, Marrakech, Maroc
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-morocco-mint text-morocco-blue flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-gray-400">
                  +212 6 00 00 00 00<br />
                  WhatsApp disponible
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-morocco-saffron text-morocco-blue flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,56,168,1)]">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-gray-400">
                  hello@popmaroc.ma
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            © 2026 POP MAROC. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-morocco-fuchsia fill-current" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Designé au Maroc</span>
            </div>
            <div className="flex gap-4 opacity-30 grayscale brightness-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
