import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ShieldCheck, Truck, CreditCard, Wallet, ArrowRight, CheckCircle2, ShoppingBag, MapPin, Phone, User, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
    clearCart();
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="pt-48 pb-24 text-center px-4">
        <div className="w-24 h-24 bg-morocco-sand border-4 border-morocco-blue flex items-center justify-center mx-auto mb-8 rotate-12">
          <ShoppingBag className="w-10 h-10 text-morocco-blue/20" />
        </div>
        <h1 className="text-4xl font-display font-black text-morocco-blue uppercase tracking-tighter mb-6">Ton panier est vide</h1>
        <p className="text-gray-500 mb-12 max-w-md mx-auto font-medium">
          Il semble que tu n'aies pas encore ajouté de trésors à ton panier. Explore notre collection pour trouver ton bonheur.
        </p>
        <Link to="/shop" className="pop-button-blue">
          Retour à la Boutique
        </Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="pt-48 pb-24 text-center px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl mx-auto space-y-12"
        >
          <div className="w-32 h-32 bg-morocco-mint border-8 border-morocco-blue flex items-center justify-center mx-auto shadow-[12px_12px_0px_0px_rgba(255,0,255,1)]">
            <CheckCircle2 className="w-16 h-16 text-morocco-blue" />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-none">
              Commande <br />
              <span className="text-morocco-fuchsia neon-text">Confirmée !</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Merci pour ta confiance ! Ta commande <span className="text-morocco-blue font-black">#POP-2026-8842</span> a été enregistrée avec succès.
            </p>
          </div>
          <div className="bg-morocco-sand p-8 border-4 border-morocco-blue shadow-[8px_8px_0px_0px_rgba(0,56,168,0.1)] text-left space-y-4">
            <p className="text-xs font-black uppercase tracking-widest text-morocco-fuchsia">Prochaines étapes</p>
            <ul className="space-y-4 text-sm font-bold text-morocco-blue">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-morocco-blue text-white text-[10px] flex items-center justify-center">1</div>
                Confirmation par WhatsApp sous 15 min
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-morocco-blue text-white text-[10px] flex items-center justify-center">2</div>
                Expédition de ton colis sous 24h
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-morocco-blue text-white text-[10px] flex items-center justify-center">3</div>
                Livraison à domicile sous 48h
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/shop" className="pop-button-blue">Continuer mes achats</Link>
            <Link to="/" className="pop-button-fuchsia">Retour à l'accueil</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-morocco-sand/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-12">
          <Link to="/" className="hover:text-morocco-blue transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/cart" className="hover:text-morocco-blue transition-colors">Panier</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-morocco-blue">Paiement</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            <div className="space-y-2 lg:space-y-4">
              <span className="text-morocco-fuchsia font-black uppercase tracking-[0.3em] text-[10px] lg:text-xs">Finalisation</span>
              <h1 className="text-4xl md:text-7xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-none">
                Paiement <br />
                <span className="text-morocco-fuchsia neon-text">Sécurisé</span>
              </h1>
            </div>

            <form onSubmit={handleCheckout} className="space-y-12">
              {/* Shipping Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-morocco-blue text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-display font-black text-morocco-blue uppercase tracking-tighter">Informations de Livraison</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <User className="w-3 h-3" /> Nom Complet
                    </label>
                    <input required type="text" placeholder="Ahmed Alami" className="w-full bg-white border-4 border-morocco-blue px-6 py-4 font-bold focus:outline-none focus:bg-morocco-mint/10 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Phone className="w-3 h-3" /> Téléphone (WhatsApp)
                    </label>
                    <input required type="tel" placeholder="06 00 00 00 00" className="w-full bg-white border-4 border-morocco-blue px-6 py-4 font-bold focus:outline-none focus:bg-morocco-mint/10 transition-all" />
                  </div>
                  <div className="space-y-3 sm:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Mail className="w-3 h-3" /> E-mail
                    </label>
                    <input required type="email" placeholder="ahmed@example.com" className="w-full bg-white border-4 border-morocco-blue px-6 py-4 font-bold focus:outline-none focus:bg-morocco-mint/10 transition-all" />
                  </div>
                  <div className="space-y-3 sm:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Adresse de Livraison
                    </label>
                    <textarea required rows={3} placeholder="N°, Rue, Quartier..." className="w-full bg-white border-4 border-morocco-blue px-6 py-4 font-bold focus:outline-none focus:bg-morocco-mint/10 transition-all resize-none" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Ville</label>
                    <select required className="w-full bg-white border-4 border-morocco-blue px-6 py-4 font-bold focus:outline-none focus:bg-morocco-mint/10 transition-all appearance-none">
                      <option value="">Choisir une ville</option>
                      <option value="casablanca">Casablanca</option>
                      <option value="rabat">Rabat</option>
                      <option value="marrakech">Marrakech</option>
                      <option value="tanger">Tanger</option>
                      <option value="fes">Fès</option>
                      <option value="agadir">Agadir</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Truck className="w-3 h-3" /> Mode de Livraison
                    </label>
                    <div className="grid grid-cols-1 gap-4">
                      <label className="flex items-center gap-4 p-4 bg-white border-4 border-morocco-blue cursor-pointer hover:bg-morocco-sand transition-all">
                        <input type="radio" name="shipping" defaultChecked className="w-4 h-4 accent-morocco-blue" />
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest">Standard (48h)</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">40 MAD</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-morocco-blue text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-display font-black text-morocco-blue uppercase tracking-tighter">Mode de Paiement</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex flex-col items-center gap-4 p-8 border-4 transition-all ${paymentMethod === 'cod' ? 'bg-morocco-mint border-morocco-blue shadow-[8px_8px_0px_0px_rgba(0,56,168,1)]' : 'bg-white border-morocco-blue/20 hover:border-morocco-blue'}`}
                  >
                    <Wallet className="w-10 h-10" />
                    <div className="text-center">
                      <p className="text-lg font-display font-black uppercase tracking-tighter">Paiement à la Livraison</p>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Payez en espèces au livreur</p>
                    </div>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex flex-col items-center gap-4 p-8 border-4 transition-all ${paymentMethod === 'card' ? 'bg-morocco-fuchsia text-white border-morocco-blue shadow-[8px_8px_0px_0px_rgba(0,56,168,1)]' : 'bg-white border-morocco-blue/20 hover:border-morocco-blue'}`}
                  >
                    <CreditCard className="w-10 h-10" />
                    <div className="text-center">
                      <p className="text-lg font-display font-black uppercase tracking-tighter">Carte Bancaire</p>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">CMI, Visa, Mastercard</p>
                    </div>
                  </button>
                </div>
              </div>

              <button 
                disabled={isProcessing}
                className="w-full pop-button-fuchsia text-xl py-6 flex items-center justify-center gap-4 group"
              >
                {isProcessing ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-4 border-white border-t-transparent rounded-full"
                    />
                    Traitement en cours...
                  </>
                ) : (
                  <>
                    Confirmer la Commande
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
            <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div className="bg-white p-6 md:p-10 border-4 border-morocco-blue shadow-[8px_8px_0px_0px_rgba(0,56,168,1)] md:shadow-[12px_12px_0px_0px_rgba(0,56,168,1)]">
                <h2 className="text-2xl md:text-3xl font-display font-black text-morocco-blue uppercase tracking-tighter mb-8 md:mb-10 pb-4 md:pb-6 border-b-2 md:border-b-4 border-morocco-sand">Résumé de la commande</h2>
                
                <div className="space-y-6 md:space-y-8 mb-8 md:mb-10 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 md:pr-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-20 h-24 bg-morocco-sand border-2 border-morocco-blue shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-sm font-display font-black text-morocco-blue uppercase tracking-tighter leading-tight">{item.name}</h3>
                      <p className="text-[10px] font-bold text-morocco-fuchsia uppercase tracking-widest">{item.category}</p>
                      <div className="flex justify-between items-end pt-2">
                        <span className="text-xs font-black text-gray-400">Qté: {item.quantity}</span>
                        <span className="text-lg font-display font-black text-morocco-blue">{item.price * item.quantity} MAD</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t-4 border-morocco-sand">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>Sous-total</span>
                  <span className="text-morocco-blue">{totalPrice} MAD</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>Livraison</span>
                  <span className="text-morocco-mint bg-morocco-blue px-2 py-0.5">Gratuite</span>
                </div>
                <div className="pt-6 flex justify-between items-end">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-morocco-fuchsia">Total</span>
                  <span className="text-4xl font-display font-black text-morocco-blue">{totalPrice} MAD</span>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t-4 border-morocco-sand space-y-6">
                <div className="flex items-center gap-4 p-4 bg-morocco-sand/50 border-2 border-dashed border-morocco-blue">
                  <ShieldCheck className="w-8 h-8 text-morocco-blue" />
                  <p className="text-[10px] font-bold text-morocco-blue uppercase tracking-widest leading-relaxed">
                    Paiement 100% sécurisé. <br />
                    Tes données sont protégées.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
