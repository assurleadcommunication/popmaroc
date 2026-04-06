import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Heart, ShieldCheck, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-morocco-terracotta transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">À Propos</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=1000" 
                alt="Artisanat Marocain" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-morocco-gold p-12 rounded-[3rem] shadow-2xl hidden md:block">
              <span className="text-5xl font-serif font-bold text-morocco-blue block mb-2">15+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-morocco-blue/60">Ans d'Excellence</span>
            </div>
          </div>
          <div className="max-w-xl">
            <span className="text-morocco-terracotta font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
              Notre Histoire
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">
              L'Héritage de l'Artisanat Marocain
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Maison de l'Artisanat est née d'une passion profonde pour le savoir-faire ancestral du Maroc. Notre mission est de préserver cet héritage unique tout en le rendant accessible aux amateurs de design contemporain.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-12">
              Nous travaillons main dans la main avec plus de 50 maîtres artisans à travers tout le Royaume, de Fès à Marrakech, en passant par les montagnes de l'Atlas et les côtes d'Essaouira. Chaque pièce que nous proposons est sélectionnée pour sa qualité irréprochable et son authenticité.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-morocco-sand rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-morocco-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Passion</h3>
                  <p className="text-xs text-gray-400">L'amour du métier</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-morocco-sand rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-morocco-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Qualité</h3>
                  <p className="text-xs text-gray-400">Standard premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="bg-morocco-blue text-white py-32 rounded-[4rem] px-8 md:px-24 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" />
            </svg>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Nos Valeurs Fondamentales</h2>
            <p className="text-gray-300 text-lg">
              Nous croyons en un commerce équitable, durable et respectueux des traditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Globe className="w-10 h-10 text-morocco-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Impact Local</h3>
              <p className="text-gray-400 leading-relaxed">
                Nous soutenons directement les coopératives locales et assurons une rémunération juste à chaque artisan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-morocco-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Communauté</h3>
              <p className="text-gray-400 leading-relaxed">
                Plus qu'une boutique, nous sommes une communauté d'artisans et de passionnés d'art de vivre.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8">
                <ShieldCheck className="w-10 h-10 text-morocco-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Authenticité</h3>
              <p className="text-gray-400 leading-relaxed">
                Chaque produit est certifié authentique et fabriqué selon les méthodes traditionnelles marocaines.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center">
          <h2 className="text-4xl font-serif font-bold mb-16">L'Équipe Maison de l'Artisanat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Karim Benjelloun", role: "Fondateur & Curateur", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Zineb Alami", role: "Directrice Artistique", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
              { name: "Youssef Mansouri", role: "Responsable Artisans", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
              { name: "Sara Laroui", role: "Service Client Premium", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-morocco-terracotta font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
