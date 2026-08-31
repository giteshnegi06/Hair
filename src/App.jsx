/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import BookingWidget from "./components/BookingWidget";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("book");

  const scrollToWidget = () => {
    const element = document.getElementById("booking-portal");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    // Smooth scroll directly to the widget focus area
    setTimeout(() => {
      scrollToWidget();
    }, 50);
  };

  return (
    <div className="min-h-screen bg-luxury-bg selection:bg-luxury-gold selection:text-white pb-10">
      {/* Sleek Navigation bar */}
      <Navbar 
        activeTab={activeTab} 
        onTabSelect={handleTabSelect} 
        onBookNow={() => handleTabSelect("book")} 
      />
      
      <main className="pt-28">
        
        {/* Short, Luxurious Welcome Section mimicking Setmore style */}
        <section className="py-12 text-center max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-4 block animate-pulse">
            Welcome to Our Booking Desk
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4 tracking-wide text-center">
            Elite Hairstyling & Treatments.
          </h2>
          <p className="text-sm text-luxury-text/50 max-w-xl mx-auto font-light leading-relaxed">
            Reserve your session instantly with our master artisan team. Set your services, 
            choose your specialist, picker dates and schedule your confirmation.
          </p>
        </section>

        {/* Setmore Centerpiece Booking Widget Portal */}
        <section id="booking-portal" className="pb-24">
          <BookingWidget activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>

      </main>
      
      {/* Elegant, clean Footer */}
      <Footer />

      {/* Floating WhatsApp Contact Icon */}
      <a
        href="https://wa.me/919992310449"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-white"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.44 1.32 4.94L2.05 22l5.29-1.39a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.91-1.26-4.81-4.18-4.96-4.38-.15-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.29.75 1.24 1.61 2 1.11.99 2.04 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.94.29.15.48.22.55.34.07.13.07.75-.17 1.43Z" />
        </svg>
      </a>
    </div>
  );
}

