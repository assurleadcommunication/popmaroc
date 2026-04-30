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
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
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
    image: "212ee40d-9820-4682-9901-0489e5e10968.png",
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
    image: "d0076ed9-b814-411d-b0c8-1f8f607559f3.png",
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
    image: "ab87f1aa-5240-4d94-a1fc-a798ec467444.png",
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
    image: "44763173-9f43-4e3e-a6b3-da934b08b4ca.png",
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
    image: "31320bfd-3996-4947-86e2-4058e7d82317.png",
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
    image: "23ba1467-d3de-4fbd-bee2-f268da07c7e5.png",
    description: "L'élégance et la praticité réunies dans ce petit sac à texture crocodile blanche. Un accessoire chic avec finitions soignées et fermeture sécurisée pour un look raffiné au quotidien.",
    rating: 4.8,
    reviews: 56,
    stock: 25,
    colors: ["#FFFFFF"],
    sizes: ["Taille Unique"],
    isNew: true
  },
  {
    id: 8,
    name: "Théière Argentée Pop",
    category: "decor",
    price: 550,
    image: "212ee40d-9820-4682-9901-0489e5e10968.png",
    description: "Une théière artisanale en argent ciselé avec une touche de couleur moderne pour vos moments de thé.",
    rating: 4.9,
    reviews: 42,
    stock: 10,
    colors: ["#C0C0C0", "#0038A8"],
    sizes: ["Petit", "Moyen", "Grand"],
    isNew: true
  },
];

export const ALL_PRODUCTS = [...PRODUCTS];
