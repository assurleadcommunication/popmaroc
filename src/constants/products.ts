export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  rating: number;
  reviews: number;
  stock: number;
  colors?: string[];
  sizes?: string[];
  isNew?: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'Tout', nameAr: 'الكل' },
  { id: 'leather', name: 'Cuir', nameAr: 'الجلد' },
  { id: 'ceramics', name: 'Céramique', nameAr: 'الخزف' },
  { id: 'rugs', name: 'Tapis', nameAr: 'الزرابي' },
  { id: 'beauty', name: 'Beauté', nameAr: 'الجمال' },
  { id: 'decor', name: 'Déco', nameAr: 'الديكور' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sac Babouche Pop",
    category: "leather",
    price: 850,
    image: "Capture d’écran 2026-04-29 225022.jpg",
    description: "Un sac en cuir traditionnel réinterprété avec des couleurs vives et des motifs pop.",
    rating: 4.8,
    reviews: 124,
    stock: 15,
    colors: ["#0038A8", "#FF00FF", "#F4C430"],
    sizes: ["S", "M", "L"],
    isNew: true
  },
  {
    id: 2,
    name: "Tajine Zellige Fluo",
    category: "ceramics",
    price: 450,
    image: "https://images.unsplash.com/photo-1590732488572-cf3252b17427?auto=format&fit=crop&q=80&w=800",
    description: "Tajine décoratif avec motifs zellige en couleurs néon. Pièce unique faite main.",
    rating: 4.9,
    reviews: 89,
    stock: 8,
    colors: ["#98FF98", "#FF8C00"],
    sizes: ["20cm", "30cm", "40cm"]
  },
  {
    id: 3,
    name: "Tapis Beni Ouarain Pop",
    category: "rugs",
    price: 3200,
    image: "https://images.unsplash.com/photo-1579656335332-d39812c75f82?auto=format&fit=crop&q=80&w=800",
    description: "Tapis traditionnel en laine avec des motifs géométriques colorés style Pop Art.",
    rating: 5.0,
    reviews: 45,
    stock: 3,
    colors: ["#FFFFFF", "#000000", "#FF00FF"],
    sizes: ["120x180", "200x300"]
  },
  {
    id: 4,
    name: "Huile d'Argan Premium",
    category: "beauty",
    price: 250,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    description: "Huile d'argan 100% pure et bio, pressée à froid dans une coopérative de femmes.",
    rating: 4.7,
    reviews: 210,
    stock: 50,
    colors: ["#F4C430"],
    sizes: ["50ml", "100ml", "250ml"],
    isNew: true
  },
  {
    id: 5,
    name: "Pouf en Cuir Majorelle",
    category: "decor",
    price: 650,
    image: "https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=800",
    description: "Pouf en cuir véritable teinté au bleu Majorelle emblématique.",
    rating: 4.6,
    reviews: 78,
    stock: 12,
    colors: ["#0038A8"],
    sizes: ["Standard"]
  },
  {
    id: 6,
    name: "Lanterne Cuivre Pop",
    category: "decor",
    price: 1200,
    image: "https://images.unsplash.com/photo-1544787210-228394c3d3e2?auto=format&fit=crop&q=80&w=800",
    description: "Lanterne en cuivre ciselée à la main avec reflets colorés.",
    rating: 4.9,
    reviews: 34,
    stock: 5,
    colors: ["#D4AF37", "#FF00FF"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 7,
    name: "Petit Sac Croco Chic",
    category: "leather",
    price: 140,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800",
    description: "L'élégance et la praticité réunies dans ce petit sac à texture crocodile blanche. Un accessoire chic avec finitions soignées et fermeture sécurisée pour un look raffiné au quotidien.",
    rating: 4.8,
    reviews: 56,
    stock: 25,
    colors: ["#FFFFFF"],
    sizes: ["Taille Unique"],
    isNew: true
  },
];

export const ALL_PRODUCTS = [...PRODUCTS];
