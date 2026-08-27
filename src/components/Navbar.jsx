import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeTab, onTabSelect, onBookNow }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Book Now", tabId: "book" },
    { label: "Shop", tabId: "shop" },
    { label: "Reviews", tabId: "reviews" },
    { label: "Hours & Info", tabId: "about" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-bg/85 backdrop-blur-md border-b border-luxury-text/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl sm:text-2xl font-serif font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => {
            onTabSelect("book");
            setIsMobileMenuOpen(false);
          }}
        >
          SAHIL <span className="text-luxury-gold uppercase">HAIR</span> EXPERT
        </motion.div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] font-semibold">
          {menuItems.map((item) => {
            const isActive = activeTab === item.tabId;
            return (
              <button 
                key={item.tabId} 
                onClick={() => onTabSelect(item.tabId)}
                className={`transition-all duration-300 relative py-1 hover:text-luxury-gold cursor-pointer select-none
                  ${isActive ? "text-luxury-gold font-bold" : "text-luxury-text/60"}`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="navTabUnderline" 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxury-gold" 
                  />
                )}
              </button>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onBookNow();
              setIsMobileMenuOpen(false);
            }}
            className="hidden sm:block px-6 py-2 bg-luxury-gold text-black text-[10px] uppercase tracking-[0.2em] font-extrabold hover:bg-white hover:text-black transition-all duration-500 rounded cursor-pointer"
          >
            Schedule Desk
          </motion.button>
          
          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-luxury-gold focus:outline-none transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 left-0 w-full bg-luxury-bg/95 backdrop-blur-lg border-b border-luxury-text/10 shadow-xl overflow-hidden z-40"
          >
            <div className="flex flex-col px-6 py-5 space-y-4 text-xs uppercase tracking-[0.2em] font-semibold">
              {menuItems.map((item) => {
                const isActive = activeTab === item.tabId;
                return (
                  <button
                    key={item.tabId}
                    onClick={() => {
                      onTabSelect(item.tabId);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left py-2.5 transition-all duration-300 cursor-pointer select-none
                      ${isActive ? "text-luxury-gold font-bold pl-2 border-l-2 border-luxury-gold" : "text-luxury-text/60 pl-0"}`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <button
                onClick={() => {
                  onBookNow();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 bg-luxury-gold text-black font-extrabold tracking-[0.2em] rounded cursor-pointer block sm:hidden"
              >
                Schedule Desk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
