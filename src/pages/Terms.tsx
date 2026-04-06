import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, FileText, Scale, Lock } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-morocco-terracotta transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Conditions Générales</span>
        </div>

        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-morocco-terracotta font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
            Cadre Légal
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">
            Conditions Générales de Vente
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Dernière mise à jour : 06 Avril 2026. Veuillez lire attentivement nos conditions avant de passer commande.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
          <aside className="space-y-8 sticky top-32">
            <div className="bg-morocco-sand p-10 rounded-3xl border border-morocco-terracotta/10">
              <h3 className="text-xl font-serif font-bold mb-6">Sommaire</h3>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                <li className="text-morocco-terracotta cursor-pointer hover:text-morocco-terracotta transition-colors">1. Objet</li>
                <li className="cursor-pointer hover:text-morocco-terracotta transition-colors">2. Produits</li>
                <li className="cursor-pointer hover:text-morocco-terracotta transition-colors">3. Prix & Paiement</li>
                <li className="cursor-pointer hover:text-morocco-terracotta transition-colors">4. Livraison</li>
                <li className="cursor-pointer hover:text-morocco-terracotta transition-colors">5. Retours</li>
              </ul>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <ShieldCheck className="w-8 h-8 text-morocco-olive" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Paiement Sécurisé CMI</span>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <FileText className="w-8 h-8 text-morocco-terracotta" />
                <h2 className="text-3xl font-serif font-bold text-morocco-blue">1. Objet</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Les présentes conditions générales de vente (CGV) régissent l'ensemble des transactions effectuées sur le site Maison de l'Artisanat. Toute commande passée sur ce site implique l'adhésion entière et sans réserve du client à ces CGV.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <Scale className="w-8 h-8 text-morocco-terracotta" />
                <h2 className="text-3xl font-serif font-bold text-morocco-blue">2. Produits & Disponibilité</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Nos produits sont issus de l'artisanat marocain traditionnel. En raison de leur nature artisanale, de légères variations de couleurs, de dimensions ou de motifs peuvent exister par rapport aux photos présentées, ce qui garantit l'authenticité de chaque pièce.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Les offres de produits sont valables tant qu'elles sont visibles sur le site et dans la limite des stocks disponibles.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <Lock className="w-8 h-8 text-morocco-terracotta" />
                <h2 className="text-3xl font-serif font-bold text-morocco-blue">3. Prix & Modalités de Paiement</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Les prix sont indiqués en Dirhams Marocains (MAD) toutes taxes comprises (TTC). Maison de l'Artisanat se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Le paiement peut s'effectuer par carte bancaire marocaine ou internationale via la plateforme sécurisée CMI, ou en espèces à la livraison (Cash on Delivery).
              </p>
            </section>

            <section className="p-12 bg-morocco-blue rounded-[3rem] text-white">
              <h2 className="text-3xl font-serif font-bold mb-8">Besoin d'aide juridique ?</h2>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Si vous avez des questions concernant nos conditions générales de vente ou notre politique de confidentialité, n'hésitez pas à nous contacter.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-morocco-gold text-morocco-blue px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white transition-all">
                Nous Contacter
              </Link>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
