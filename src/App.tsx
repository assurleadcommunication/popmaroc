import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import WhatsAppButton from './components/WhatsAppButton';
import ExitIntentPopup from './components/ExitIntentPopup';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col font-sans selection:bg-morocco-fuchsia selection:text-white">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
            <NewsletterPopup />
            <ExitIntentPopup />
            <WhatsAppButton />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

