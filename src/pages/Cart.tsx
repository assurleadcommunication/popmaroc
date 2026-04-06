import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Trash2, ShoppingBag, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const { t } = useLanguage();

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-24 text-center px-4">
        <div className="w-24 h-24 bg-morocco-sand rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-10 h-10 text-morocco-terracotta" />
        </div>
        <h1 className="text-4xl font-serif font-bold mb-6">Votre panier est vide</h1>
        <p className="text-gray-500 mb-12 max-w-md mx-auto">
          Il semble que vous n'ayez pas encore ajouté de trésors à votre panier. Explorez notre collection pour trouver votre bonheur.
        </p>
        <Link to="/shop" className="inline-flex items-center gap-3 bg-morocco-terracotta text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-morocco-terracotta/90 transition-all shadow-lg shadow-morocco-terracotta/20">
          <ArrowLeft className="w-5 h-5" />
          Retour à la Boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-morocco-terracotta transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Votre Panier</span>
        </div>

        <h1 className="text-4xl font-serif font-bold mb-16">Votre Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div 
                layout
                key={item.id} 
                className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-32 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-morocco-terracotta mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-2">{item.name}</h3>
                  <p className="text-lg font-bold text-morocco-blue mb-6">
                    {item.price} MAD
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-bold w-12 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      Retirer
                    </button>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-xl font-bold text-morocco-blue">
                    {item.price * item.quantity} MAD
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <aside className="space-y-8">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm sticky top-32">
              <h2 className="text-2xl font-serif font-bold mb-8">Résumé de la commande</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span className="font-bold text-morocco-blue">{totalPrice} MAD</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span className="text-morocco-olive font-bold">Gratuite</span>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                  <div>
                    <span className="text-sm text-gray-400 uppercase tracking-widest block mb-1">Total</span>
                    <span className="text-3xl font-bold text-morocco-blue">{totalPrice} MAD</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link 
                  to="/checkout" 
                  className="w-full bg-morocco-terracotta text-white py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-morocco-terracotta/90 transition-all shadow-lg shadow-morocco-terracotta/20"
                >
                  Procéder au Paiement
                </Link>
                <Link 
                  to="/shop" 
                  className="w-full border border-gray-200 text-gray-600 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
                >
                  Continuer mes achats
                </Link>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-100 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-morocco-sand rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-5 h-5 text-morocco-terracotta" />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Paiement sécurisé et confidentiel. Vos données sont protégées.
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
