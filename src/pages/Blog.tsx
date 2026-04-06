import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Les secrets du tannage à Marrakech",
    excerpt: "Découvrez l'histoire séculaire des tanneurs de Marrakech et le processus naturel qui rend notre cuir unique au monde.",
    image: "https://images.unsplash.com/photo-1590732488572-cf3252b17427?auto=format&fit=crop&q=80&w=800",
    date: "12 Mars 2026",
    author: "Karim B.",
    category: "Artisanat"
  },
  {
    id: 2,
    title: "Comment choisir son tapis Beni Ouarain",
    excerpt: "Tous les conseils pour identifier un véritable tapis Beni Ouarain tissé à la main dans le Moyen Atlas.",
    image: "https://images.unsplash.com/photo-1579656335332-d39812c75f82?auto=format&fit=crop&q=80&w=800",
    date: "05 Mars 2026",
    author: "Zineb A.",
    category: "Décoration"
  },
  {
    id: 3,
    title: "L'art de la cérémonie du thé",
    excerpt: "Plus qu'une boisson, le thé à la menthe est un symbole d'hospitalité. Apprenez les rituels de sa préparation.",
    image: "https://images.unsplash.com/photo-1544787210-228394c3d3e2?auto=format&fit=crop&q=80&w=800",
    date: "28 Février 2026",
    author: "Youssef M.",
    category: "Culture"
  },
  {
    id: 4,
    title: "Les tendances déco marocaine en 2026",
    excerpt: "Le minimalisme rencontre l'artisanat : comment intégrer des touches marocaines dans un intérieur moderne.",
    image: "https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=800",
    date: "20 Février 2026",
    author: "Sara L.",
    category: "Tendances"
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-morocco-terracotta transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Blog & Journal</span>
        </div>

        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-morocco-terracotta font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            L'Art de Vivre
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            Notre Journal & Inspirations
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Plongez au cœur de l'artisanat marocain, découvrez les histoires de nos artisans et laissez-vous inspirer par nos conseils déco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-morocco-blue text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Par {post.author}
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-morocco-terracotta transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-morocco-terracotta group-hover:gap-4 transition-all">
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 p-16 bg-morocco-blue rounded-[3rem] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" />
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6">Restez Inspiré</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, conseils déco et offres exclusives.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse e-mail" 
                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-all"
              />
              <button className="bg-morocco-gold text-morocco-blue px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white transition-all">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
