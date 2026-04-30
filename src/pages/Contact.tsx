import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-morocco-terracotta transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
          <div>
            <span className="text-morocco-terracotta font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
              Contactez-nous
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">
              Nous sommes à votre écoute
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-16">
              Une question sur un produit, une commande ou une demande spéciale ? Notre équipe premium est là pour vous accompagner.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group cursor-pointer">
                <div className="w-16 h-16 bg-morocco-sand rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-morocco-terracotta group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Téléphone</h3>
                  <p className="text-gray-500 text-lg">+212 5 22 00 00 00</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Lun - Sam : 09:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group cursor-pointer">
                <div className="w-16 h-16 bg-morocco-sand rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-morocco-terracotta group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">E-mail</h3>
                  <p className="text-gray-500 text-lg">contact@maisonartisanat.ma</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group cursor-pointer">
                <div className="w-16 h-16 bg-morocco-sand rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-morocco-terracotta group-hover:text-white transition-all duration-500">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">WhatsApp</h3>
                  <p className="text-gray-500 text-lg">+212 6 00 00 00 00</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Conseils personnalisés</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group cursor-pointer">
                <div className="w-16 h-16 bg-morocco-sand rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-morocco-terracotta group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Showroom</h3>
                  <p className="text-gray-500 text-lg">Angle Rue Al-Moutanabi, Gauthier, Casablanca</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Sur rendez-vous uniquement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-morocco-sand rounded-bl-[3rem] -z-10" />
            <h2 className="text-3xl font-serif font-bold mb-10">Envoyez-nous un message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nom Complet</label>
                  <input type="text" placeholder="Ahmed Alami" className="w-full bg-gray-50 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-morocco-terracotta transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">E-mail</label>
                  <input type="email" placeholder="ahmed@example.com" className="w-full bg-gray-50 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-morocco-terracotta transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Sujet</label>
                <select className="w-full bg-gray-50 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-morocco-terracotta transition-all outline-none appearance-none">
                  <option>Question sur une commande</option>
                  <option>Demande de personnalisation</option>
                  <option>Partenariat artisans</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={5} placeholder="Comment pouvons-nous vous aider ?" className="w-full bg-gray-50 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-morocco-terracotta transition-all outline-none resize-none" />
              </div>
              <button className="w-full bg-morocco-terracotta text-white py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-morocco-terracotta/90 transition-all shadow-lg shadow-morocco-terracotta/20">
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-[500px] rounded-[4rem] overflow-hidden shadow-2xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=1920" 
            alt="Casablanca Map Placeholder" 
            className="w-full h-full object-cover transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-morocco-blue/20 flex items-center justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-xs">
              <MapPin className="w-10 h-10 text-morocco-terracotta mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold mb-2">Notre Showroom</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">Angle Rue Al-Moutanabi, Gauthier, Casablanca</p>
              <button className="text-xs font-bold uppercase tracking-widest text-morocco-terracotta hover:underline">Ouvrir dans Google Maps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
