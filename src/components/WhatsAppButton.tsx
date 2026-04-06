import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = "212600000000"; // Placeholder Moroccan number
  const message = encodeURIComponent("Bonjour, je souhaite avoir plus d'informations sur vos produits.");

  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3"
    >
      <div className="bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          {t('whatsapp.help')}
        </span>
      </div>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8" />
      </div>
    </a>
  );
}
