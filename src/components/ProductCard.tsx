import React from 'react';
import { ShoppingBag, Heart, Star, Plus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative pop-card overflow-hidden"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-morocco-sand">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-morocco-fuchsia text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,56,168,1)]">
              Nouveau
            </span>
          )}
          <span className="bg-morocco-blue text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
            {product.category}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
          <button className="w-10 h-10 bg-white border-2 border-morocco-blue flex items-center justify-center hover:bg-morocco-fuchsia hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,56,168,1)]">
            <Heart className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-10 h-10 bg-white border-2 border-morocco-blue flex items-center justify-center hover:bg-morocco-mint hover:text-morocco-blue transition-all shadow-[2px_2px_0px_0px_rgba(0,56,168,1)]"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-morocco-blue/80 to-transparent">
          <button className="w-full bg-white text-morocco-blue py-3 font-display font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-morocco-fuchsia hover:text-white transition-all">
            Voir le Produit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="flex-1">
            <h3 className="text-xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-tight group-hover:text-morocco-fuchsia transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-2xl font-display font-black text-morocco-blue">
            {product.price} <span className="text-xs">MAD</span>
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t-2 border-morocco-blue/10">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-morocco-saffron text-morocco-saffron" />
            <span className="text-xs font-black text-morocco-blue">{product.rating}</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">({product.reviews})</span>
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-morocco-fuchsia hover:text-morocco-blue transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Ajouter
          </button>
        </div>
      </div>
    </motion.div>
  );
}
