import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PRODUCTS, Product } from '../constants/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingBag, Heart, Share2, ChevronLeft, ChevronRight, Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, Info } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const foundProduct = ALL_PRODUCTS.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.colors && foundProduct.colors.length > 0) setSelectedColor(foundProduct.colors[0]);
      if (foundProduct.sizes && foundProduct.sizes.length > 0) setSelectedSize(foundProduct.sizes[0]);
    } else {
      navigate('/shop');
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!product) return null;

  const relatedProducts = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const productImages = product.images || [product.image];

  return (
    <div className="pt-32 pb-24 bg-morocco-sand/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-12">
          <Link to="/" className="hover:text-morocco-blue transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-morocco-blue transition-colors">Boutique</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-morocco-blue">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] bg-white border-8 border-morocco-blue shadow-[16px_16px_0px_0px_rgba(255,0,255,1)] overflow-hidden relative group"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={19d8997e-42da-4743-a75b-bf1c757a6e2c.png} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {productImages.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setSelectedImage(prev => (prev === 0 ? productImages.length - 1 : prev - 1))}
                    className="w-12 h-12 bg-white border-4 border-morocco-blue flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] hover:bg-morocco-fuchsia hover:text-white transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setSelectedImage(prev => (prev === productImages.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 bg-white border-4 border-morocco-blue flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] hover:bg-morocco-fuchsia hover:text-white transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </motion.div>
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square bg-white border-4 transition-all overflow-hidden ${selectedImage === i ? 'border-morocco-fuchsia shadow-[4px_4px_0px_0px_rgba(0,56,168,1)] scale-105' : 'border-morocco-blue/20 hover:border-morocco-blue'}`}
                  >
                    <img src={19d8997e-42da-4743-a75b-bf1c757a6e2c.png} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  <span className="bg-morocco-blue text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="bg-morocco-fuchsia text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(152,255,152,1)]">
                      Nouveau
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-white border-2 border-morocco-blue flex items-center justify-center hover:bg-morocco-fuchsia hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,56,168,1)]">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white border-2 border-morocco-blue flex items-center justify-center hover:bg-morocco-mint hover:text-morocco-blue transition-all shadow-[2px_2px_0px_0px_rgba(0,56,168,1)]">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-none">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'fill-morocco-saffron text-morocco-saffron' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-xs font-black text-morocco-blue uppercase tracking-widest">4.8 / 5</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">(12 Avis Clients)</span>
              </div>
              <p className="text-4xl font-display font-black text-morocco-blue">
                {product.price} <span className="text-sm">MAD</span>
              </p>
            </div>

            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              {product.description}
            </p>

            {/* Options */}
            <div className="space-y-8 pt-8 border-t-4 border-morocco-blue/10">
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-morocco-fuchsia">Couleurs Disponibles</h3>
                  <div className="flex gap-4">
                    {product.colors.map((color) => (
                      <button 
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 border-4 transition-all ${selectedColor === color ? 'border-morocco-blue scale-110 shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]' : 'border-transparent hover:scale-105'}`}
                        style={{ backgroundColor: color.toLowerCase() === 'camel' ? '#C19A6B' : color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-morocco-fuchsia">Choisir la Taille</h3>
                    <button className="text-[10px] font-black uppercase tracking-widest text-morocco-blue underline">Guide des tailles</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 font-display font-black uppercase tracking-widest text-sm border-4 transition-all ${selectedSize === size ? 'bg-morocco-blue text-white border-morocco-blue shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]' : 'bg-white text-morocco-blue border-morocco-blue/20 hover:border-morocco-blue'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center border-4 border-morocco-blue bg-white shadow-[4px_4px_0px_0px_rgba(0,56,168,0.1)]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-morocco-sand transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-16 text-center text-xl font-black">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-morocco-sand transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <button 
                  onClick={() => addToCart({ ...product, quantity })}
                  className="flex-1 pop-button-fuchsia text-lg flex items-center justify-center gap-4 group"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Ajouter au Panier
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-10 border-t-4 border-morocco-blue/10">
              <div className="flex items-center gap-4 p-4 bg-white border-2 border-morocco-blue">
                <Truck className="w-8 h-8 text-morocco-blue" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">Livraison 48H</p>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Partout au Maroc</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border-2 border-morocco-blue">
                <ShieldCheck className="w-8 h-8 text-morocco-blue" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">Paiement COD</p>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">100% Sécurisé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-32">
          <div className="flex border-b-4 border-morocco-blue">
            {['description', 'details', 'avis'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-12 py-6 font-display font-black uppercase tracking-widest text-sm transition-all relative ${activeTab === tab ? 'text-morocco-fuchsia' : 'text-morocco-blue hover:text-morocco-fuchsia'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-2 bg-morocco-fuchsia" />
                )}
              </button>
            ))}
          </div>
          <div className="py-16 max-w-3xl">
            {activeTab === 'description' && (
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                <p>{product.description}</p>
                <p>Inspirée par les motifs traditionnels du Zellige, cette pièce unique a été revisitée avec une palette de couleurs Pop Art pour apporter une touche de modernité et d'énergie à votre intérieur.</p>
              </div>
            )}
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-morocco-blue">Matériaux</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Céramique de Fès, Pigments Naturels</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-morocco-blue">Dimensions</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">25cm x 25cm x 10cm</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-morocco-blue">Entretien</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Lavage à la main recommandé</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-morocco-blue">Origine</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Fabriqué à la main à Marrakech</p>
                </div>
              </div>
            )}
            {activeTab === 'avis' && (
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-display font-black text-morocco-blue uppercase tracking-tighter">Avis Clients (12)</h3>
                  <button className="pop-button-blue text-xs py-3">Donner mon avis</button>
                </div>
                <div className="space-y-8">
                  {[1, 2].map((i) => (
                    <div key={i} className="p-8 bg-white border-4 border-morocco-blue shadow-[8px_8px_0px_0px_rgba(0,56,168,0.05)]">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-morocco-sand border-2 border-morocco-blue flex items-center justify-center font-black">Y</div>
                          <div>
                            <p className="text-sm font-black text-morocco-blue uppercase tracking-widest">Yassine B.</p>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3 h-3 fill-morocco-saffron text-morocco-saffron" />)}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Il y a 2 jours</span>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">"Magnifique pièce ! Les couleurs sont encore plus vibrantes en vrai. Livraison rapide et emballage très soigné. Je recommande vivement Pop Maroc !"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <div className="flex justify-between items-end mb-16">
              <div className="space-y-4">
                <span className="text-morocco-fuchsia font-black uppercase tracking-[0.3em] text-xs">Vous aimerez aussi</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-none">Produits <span className="text-morocco-fuchsia">Similaires</span></h2>
              </div>
              <Link to="/shop" className="text-xs font-black uppercase tracking-widest text-morocco-blue underline">Voir tout</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
