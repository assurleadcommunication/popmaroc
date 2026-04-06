import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, Grid, List, X, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ALL_PRODUCTS, CATEGORIES } from '../constants/products';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';

export default function Shop() {
  const { t } = useLanguage();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(5000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  return (
    <div className="pt-32 pb-24 bg-morocco-sand/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="text-morocco-fuchsia font-black uppercase tracking-[0.3em] text-xs">La Boutique Pop</span>
              <h1 className="text-6xl md:text-8xl font-display font-black text-morocco-blue uppercase tracking-tighter leading-none">
                Notre <br />
                <span className="text-morocco-fuchsia neon-text">Catalogue</span>
              </h1>
            </div>
            
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-morocco-blue group-focus-within:text-morocco-fuchsia transition-colors" />
              <input 
                type="text" 
                placeholder="Chercher un trésor..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-4 border-morocco-blue px-16 py-5 font-bold uppercase tracking-widest text-xs focus:outline-none focus:bg-morocco-mint/10 shadow-[4px_4px_0px_0px_rgba(0,56,168,1)] focus:shadow-[8px_8px_0px_0px_rgba(255,0,255,1)] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-8 border-t-4 border-morocco-blue/10">
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-8 py-3 font-display font-black uppercase tracking-widest text-xs border-4 border-morocco-blue transition-all ${selectedCategory === cat.id ? 'bg-morocco-fuchsia text-white shadow-[4px_4px_0px_0px_rgba(0,56,168,1)]' : 'bg-white text-morocco-blue hover:bg-morocco-sand'}`}
              >
                {cat.name}
              </button>
            ))}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="ml-auto flex items-center gap-2 px-8 py-3 font-display font-black uppercase tracking-widest text-xs border-4 border-morocco-blue bg-morocco-mint text-morocco-blue shadow-[4px_4px_0px_0px_rgba(0,56,168,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,56,168,1)] transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtres
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center space-y-8">
            <div className="w-32 h-32 bg-morocco-sand border-4 border-morocco-blue flex items-center justify-center mx-auto rotate-12">
              <Search className="w-16 h-16 text-morocco-blue/20" />
            </div>
            <h2 className="text-4xl font-display font-black text-morocco-blue uppercase tracking-tighter">Aucun trésor trouvé</h2>
            <p className="text-gray-500 font-medium">Essaie de modifier tes filtres ou ta recherche.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange(5000);
              }}
              className="pop-button-blue"
            >
              Réinitialiser
            </button>
          </div>
        )}
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-morocco-blue/40 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-[110] p-12 border-l-8 border-morocco-mint"
            >
              <div className="flex justify-between items-center mb-16">
                <h2 className="text-4xl font-display font-black text-morocco-blue uppercase tracking-tighter">Filtres</h2>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 bg-morocco-blue text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-morocco-fuchsia">Trier par</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {['featured', 'price-low', 'price-high', 'rating'].map(option => (
                      <button 
                        key={option}
                        onClick={() => setSortBy(option)}
                        className={`text-left px-6 py-4 font-bold uppercase tracking-widest text-[10px] border-2 border-morocco-blue transition-all ${sortBy === option ? 'bg-morocco-blue text-white' : 'hover:bg-morocco-sand'}`}
                      >
                        {option === 'featured' && 'Populaires'}
                        {option === 'price-low' && 'Prix Croissant'}
                        {option === 'price-high' && 'Prix Décroissant'}
                        {option === 'rating' && 'Meilleures Notes'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-morocco-fuchsia">Prix Max</h3>
                    <span className="text-2xl font-display font-black text-morocco-blue">{priceRange} MAD</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-4 bg-morocco-sand rounded-none appearance-none cursor-pointer accent-morocco-blue"
                  />
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>0 MAD</span>
                    <span>5000+ MAD</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full pop-button-blue mt-12"
                >
                  Appliquer les filtres
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
