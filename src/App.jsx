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
    </div>
  );
}

