import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-morocco-blue/40 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-white z-[110] flex flex-col border-l-8 border-morocco-fuchsia"
          >
            <div className="p-8 border-b-4 border-morocco-blue flex justify-between items-center bg-morocco-sand">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-morocco-blue text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-black text-morocco-blue uppercase tracking-tighter">Votre Panier</h2>
                  <p className="text-[10px] font-bold text-morocco-fuchsia uppercase tracking-widest">{cart.length} Articles</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-morocco-blue text-white hover:bg-morocco-fuchsia transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 bg-morocco-sand rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-morocco-blue/20" />
                  </div>
                  <p className="text-xl font-display font-black text-morocco-blue uppercase tracking-tighter">Votre panier est vide</p>
                  <button 
                    onClick={onClose}
                    className="pop-button-blue"
                  >
                    Continuer mes achats
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-morocco-sand border-2 border-morocco-blue overflow-hidden shrink-0 shadow-[4px_4px_0px_0px_rgba(0,56,168,0.2)]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-all duration-500" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-display font-black text-morocco-blue uppercase tracking-tighter leading-tight">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-morocco-fuchsia transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs font-bold text-morocco-fuchsia uppercase tracking-widest">{item.category}</p>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center border-2 border-morocco-blue bg-white">
                          <button 
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:bg-morocco-sand transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-morocco-sand transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-lg font-display font-black text-morocco-blue">{item.price * item.quantity} MAD</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t-4 border-morocco-blue bg-morocco-sand space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Total</span>
                  <span className="text-4xl font-display font-black text-morocco-blue">{totalPrice} MAD</span>
                </div>
                <div className="space-y-4">
                  <Link 
                    to="/checkout" 
                    onClick={onClose}
                    className="w-full pop-button-fuchsia flex items-center justify-center gap-3"
                  >
                    Procéder au Paiement
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/cart" 
                    onClick={onClose}
                    className="w-full pop-button-blue bg-white text-morocco-blue flex items-center justify-center"
                  >
                    Voir le Panier
                  </Link>
                </div>
                <p className="text-[10px] font-bold text-center text-gray-500 uppercase tracking-widest">
                  Livraison gratuite partout au Maroc dès 500 MAD
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
