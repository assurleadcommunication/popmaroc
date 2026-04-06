import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from './Blog';
import { ChevronRight, Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Instagram } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const foundPost = BLOG_POSTS.find(p => p.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) return null;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-morocco-terracotta transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/blog" className="hover:text-morocco-terracotta transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{post.title}</span>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-morocco-terracotta font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Par {post.author}
              </div>
            </div>
          </div>

          <div className="aspect-[16/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg prose-morocco max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light italic">
              {post.excerpt}
            </p>
            <div className="text-gray-700 leading-relaxed space-y-8 text-lg">
              <p>
                L'artisanat marocain est bien plus qu'une simple production d'objets ; c'est un héritage vivant qui se transmet de génération en génération. Chaque geste, chaque motif, chaque couleur raconte une histoire séculaire ancrée dans la culture et les traditions du Royaume.
              </p>
              <h2 className="text-3xl font-serif font-bold text-morocco-blue mt-12 mb-6">Un Savoir-Faire Ancestral</h2>
              <p>
                Que ce soit dans les tanneries de Fès, les ateliers de poterie de Safi ou les coopératives de tissage du Moyen Atlas, les artisans marocains perpétuent des techniques millénaires. Ils utilisent des matériaux naturels et durables, respectant ainsi l'environnement tout en créant des pièces d'une beauté intemporelle.
              </p>
              <blockquote className="border-l-4 border-morocco-gold pl-8 py-4 my-12 bg-morocco-sand rounded-r-3xl">
                <p className="text-2xl font-serif italic text-morocco-blue">
                  "Chaque pièce est unique, car elle porte en elle l'âme de l'artisan qui l'a façonnée avec passion et patience."
                </p>
              </blockquote>
              <p>
                Aujourd'hui, cet artisanat se réinvente pour s'adapter aux intérieurs modernes sans jamais perdre son essence. Le minimalisme contemporain rencontre l'ornementation traditionnelle pour créer un style unique, chaleureux et authentique.
              </p>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Partager :</span>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-morocco-blue hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-morocco-blue hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-morocco-blue hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-morocco-blue hover:text-white transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <Link to="/blog" className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-morocco-terracotta hover:gap-5 transition-all">
              <ArrowLeft className="w-5 h-5" />
              Retour au Blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
