function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } import React, { useState, } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../Images/logo.jpeg";
import { serviceCategories, services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { products } from "../data/products";
import { businessHours } from "../data/businessHours";
import { timeSlots } from "../data/constants";


import {

  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  Star,
  Check,
  Phone,
  MapPin,
  Logs,
  ShoppingBag,
  ArrowLeft,
  Instagram,
  Facebook,
  Youtube,
  Clock4,
  ExternalLink,
  Download,
  X,

} from "lucide-react";
   

function ProductCard({ product }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = product.images || [product.url];

  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIdx, images.length]);

  return (
    <div className="group bg-luxury-text/5 border border-luxury-text/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-luxury-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-luxury-gold/10">
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-black/40">
        <img
          src={images[currentIdx]}
          alt={product.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Indicator Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIdx(idx);
                }}
                type="button"
                className={`rounded-full transition-all duration-300 cursor-pointer ${idx === currentIdx ? "bg-luxury-gold w-2.5 h-2.5" : "bg-white/40 w-1.5 h-1.5"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {product.category && (
          <span className="absolute top-4 right-4 text-[9px] uppercase tracking-widest bg-luxury-gold/90 text-black px-2.5 py-1 font-bold rounded-full text-center">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-sm font-serif font-bold text-white group-hover:text-luxury-gold transition-colors duration-300 leading-snug">
            {product.title}
          </h3>
          <p className="text-xs text-luxury-text/65 leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        {/* Rating & Reviews */}
        {product.rating && (
          <div className="flex items-center gap-2 text-xs">
            <div className="flex text-luxury-gold gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-white font-semibold">{product.rating}</span>
            <span className="text-luxury-text/40">({product.reviews} reviews)</span>
          </div>
        )}

        {/* Benefits */}
        {product.benefits && (
          <div className="space-y-1.5">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-luxury-gold text-xs mt-0.5">✓</span>
                <span className="text-xs text-luxury-text/70">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price & Button */}
        <div className="space-y-3 pt-2 border-t border-luxury-text/10">
          {product.price && (
            <div className="flex justify-between items-center">
              <span className="text-xs text-luxury-text/50 uppercase tracking-widest">Price</span>
              <span className="text-lg font-bold text-luxury-gold font-serif">{product.price}</span>
            </div>
          )}
          <a
            href={product.buyUrl || "#"}
            onClick={(e) => {
              if (product.buyUrl === "#") {
                e.preventDefault();
              }
            }}
            target={product.buyUrl !== "#" ? "_blank" : undefined}
            rel={product.buyUrl !== "#" ? "noopener noreferrer" : undefined}
            className="w-full py-2.5 bg-luxury-gold text-black hover:bg-white text-[11px] uppercase tracking-[0.15em] font-extrabold transition-all duration-300 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-luxury-gold/20 hover:shadow-luxury-gold/30 md:shadow-lg md:shadow-luxury-gold/30 md:hover:shadow-luxury-gold/40 sm:animate-pulse md:animate-none"
          >
            <ShoppingBag size={12} />
            {product.btn || "Buy Now"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BookingWidget({ activeTab: propActiveTab, setActiveTab: propSetActiveTab } = {}) {
  // Tabs: 'book' | 'shop' | 'reviews' | 'about'
  const [internalActiveTab, setInternalActiveTab] = useState("book");

  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;
  const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : setInternalActiveTab;

  // Map active location: 'sec34'
  const [selectedMapLocation, setSelectedMapLocation] = useState("sec34");

  // Wizard Steps: 1 (Services) | 2 (Staff) | 3 (Time) | 4 (Details) | 5 (Success)
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("male");
  const [selectedExpert, setSelectedExpert] = useState(null);

  // Date Picker State
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Slots State
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  // Contact details form
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [whatsappMessageUrl, setWhatsappMessageUrl] = useState("https://wa.me/919992310449");
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  // Helper for calendar days
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const selectServiceToggle = (service) => {
    setSelectedServices(prev => {
      const exists = prev.some(s => s.id === service.id);
      if (exists) {
        return prev.filter(s => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const calculateTotal = () => {
    return selectedServices.reduce((sum, s) => sum + s.numericPrice, 0);
  };

  const handleBookNowTabDirect = (service) => {
    setSelectedServices([service]);
    setWizardStep(2);
    setActiveTab("book");
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) return;

    // Show success modal
    setShowSuccessModal(true);

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    const serviceTitles = selectedServices.map(s => s.title).join(", ");
    const totalPrice = selectedServices.reduce((acc, s) => acc + s.numericPrice, 0);

    // Prepare Whatsapp message
    const waMessage =
      `SAHIL HAIR EXPERT - APPOINTMENT REQUEST\n\n` +
      `Date: ${formattedDate}\n` +
      `Time Slot: ${selectedTimeSlot}\n` +
      `Services: ${serviceTitles}\n` +
      `Total Cost: ₹${totalPrice}\n\n` +
      `Client Details:\n` +
      `• Name: ${formName}\n` +
      `• Phone: ${formPhone}\n` +
      `• Email: ${formEmail || "N/A"}\n` +
      `• Special Request: ${formNotes || "None"}\n\n` +
      `_Please confirm my booking slot. Thank you!_`;

    const whatsappUrl = `https://wa.me/919992310449?text=${encodeURIComponent(waMessage)}`;
    setWhatsappMessageUrl(whatsappUrl);

    // Open WhatsApp immediately without timeout to bypass browser popup blockers
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const downloadReceipt = () => {
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }) : "";

    const serviceTitles = selectedServices.map(s => s.title).join(", ");
    const totalPrice = selectedServices.reduce((acc, s) => acc + s.numericPrice, 0);

    const receiptText = `
========================================
        SAHIL HAIR EXPERT
       Appointment Receipt
========================================
Date: ${formattedDate}
Time Slot: ${selectedTimeSlot}
----------------------------------------
Services:
${selectedServices.map(s => ` - ${s.title} (${s.price})`).join("\n")}
----------------------------------------
Total Cost: ₹${totalPrice}
========================================
Client Details:
Name: ${formName}
Phone: ${formPhone}
Email: ${formEmail || "N/A"}
Special Request: ${formNotes || "None"}
========================================
Thank you for booking with us!
See you soon at Sahil Hair Expert.
========================================
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([receiptText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Sahil_Hair_Expert_Receipt_${formName.replace(/\s+/g, '_') || 'Booking'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Render Calendar Helper
  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDayIdx = firstDayOfMonth(year, month);
    const dayCells = [];

    // Empty spaces for padding
    for (let i = 0; i < firstDayIdx; i++) {
      dayCells.push(<div key={`pad-${i}`} className="w-full aspect-square text-transparent max-w-10 flex items-center justify-center" />);
    }

    // Days grid
    const today = new Date();
    for (let day = 1; day <= totalDays; day++) {
      const dateToCheck = new Date(year, month, day);
      // Disable past days
      const isPast = new Date(year, month, day, 23, 59, 59) < today;
      const isSelected = _optionalChain([selectedDate, 'optionalAccess', _2 => _2.toDateString, 'call', _3 => _3()]) === dateToCheck.toDateString();
      const isToday = today.toDateString() === dateToCheck.toDateString();

      dayCells.push(
        <button
          key={`day-${day}`}
          type="button"
          disabled={isPast}
          onClick={() => setSelectedDate(dateToCheck)}
          className={`w-full aspect-square text-xs font-semibold rounded-full flex items-center justify-center transition-all duration-300 max-w-10
            ${isPast
              ? "opacity-20 cursor-not-allowed text-luxury-text/40"
              : "cursor-pointer text-luxury-text hover:bg-luxury-gold hover:text-black"
            }
            ${isSelected ? "bg-luxury-gold text-black font-extrabold shadow-lg" : ""}
            ${isToday && !isSelected ? "border border-luxury-gold/50 text-luxury-gold" : ""}
          `}
        >
          {day}
        </button>
      );
    }
    return dayCells;
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6">

      {/* Setmore Signature Business Card Header */}
      <div className="bg-luxury-text/5 border border-luxury-text/10 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
          {/* Circular Salon Logo */}
          <div className="relative">
            <div className="w-20 h-20 shrink-0 rounded-full border border-luxury-gold/30 bg-black flex items-center justify-center overflow-hidden">
              {/* <Scissors className=" text-luxury-gold" /> */}
              <img src={logo} alt="Sahil_hair_expert" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full shadow-lg" />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-serif text-white tracking-wide">Sahil Hair Expert</h1>
              {/* <span className="text-[9px] uppercase tracking-widest bg-luxury-gold/20 text-luxury-gold px-2.5 py-1 font-bold rounded">Karnal Studio</span> */}
            </div>

            <p className="text-xs text-luxury-text/60 font-light flex items-center justify-center md:justify-start gap-1.5 flex-wrap">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              <span>Sec 34 Studio</span>
              <span className="w-1 h-1 bg-luxury-text/30 rounded-full" />
              <span>Karnal, Haryana</span>
            </p>

            {/* Reviews indicator */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 text-xs">
              <div className="flex text-luxury-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
              </div>
              <span className="text-white font-medium">4.9</span>
              <span className="text-luxury-text/40">(248 google reviews)</span>
            </div>
          </div>
        </div>

        {/* Real-time Business details card */}
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-3 w-full md:w-auto">
          <div className="flex md:flex-col gap-4 md:gap-2 items-center">
            <a
              href="https://www.instagram.com/hair_expertsahil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50 hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram size={12} />
            </a>

            <a
              href="https://www.facebook.com/share/1B96HG1bi7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50 hover:scale-105"
              aria-label="Facebook"
            >
              <Facebook size={12} />
            </a>

            <a
              href="https://youtube.com/@hairexpertsahil?si=uo1fGLZ_VXCa1CKA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50 hover:scale-105"
              aria-label="YouTube"
            >
              <Youtube size={12} />
            </a>
          </div>
          <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto border-t md:border-t-0 md:border-l border-luxury-text/10 pt-4 md:pt-0 md:pl-8 gap-4 md:gap-1 text-center md:text-right">
            <div className="text-left md:text-right">
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold block font-mono">Today Status</span>
              <span className="text-xs font-semibold text-green-400">Open • Closes 9:30 PM</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 block font-mono">timezone</span>
              <span className="text-xs text-luxury-text/70">GMT+05:30 (India)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Setmore Tabs Row */}
      <div className="flex justify-between md:justify-start items-center border-b border-luxury-text/10 gap-2 overflow-x-auto pb-px no-scrollbar mb-8">
        {[
          { id: "book", label: "Book Appointment", icon: Logs },
          { id: "shop", label: "Shop", icon: ShoppingBag },
          { id: "reviews", label: "Reviews", icon: Star },
          { id: "about", label: "Hours & Info", icon: Clock4 }
        ].map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // reset booking wizard state safely unless successful
                if (tab.id === "book" && wizardStep === 4) {
                  setWizardStep(1);
                  setSelectedServices([]);
                  setSelectedDate(null);
                  setSelectedTimeSlot("");
                  setCategoryFilter("male");
                }
              }}
              className={`flex items-center gap-1.5 py-4 px-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 relative select-none cursor-pointer whitespace-nowrap
                ${isActive
                  ? "text-luxury-gold font-bold"
                  : "text-luxury-text/50 hover:text-luxury-text"}`}
            >
              <IconComponent size={14} className={isActive ? "text-luxury-gold" : "text-luxury-text/40"} />
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Primary Tab View Panel */}
      <div className="min-h-112.5">
        <AnimatePresence mode="wait">

          {/* TAB 1: BOOKING WIZARD */}
          {activeTab === "book" && (
            <motion.div
              key="tab-book"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-black/30 border border-luxury-text/10 rounded-2xl p-6 md:p-8"
            >
              {/* Stepper Wizard Progress Indicators */}
              {wizardStep < 5 && (
                <div className="flex justify-center items-center mb-8 pb-6 border-b border-luxury-text/10 overflow-x-auto no-scrollbar scroll-smooth">
                  {[
                    { step: 1, label: "Services" },
                    { step: 2, label: "Time Slot" },
                    { step: 3, label: "Your Info" }
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-2 whitespace-nowrap px-2">
                      <div className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all duration-300
                        ${wizardStep === s.step
                          ? "bg-luxury-gold text-black"
                          : wizardStep > s.step
                            ? "bg-green-500 text-white"
                            : "bg-luxury-text/10 text-luxury-text/50"}`}
                      >
                        {wizardStep > s.step ? <Check size={12} strokeWidth={3} /> : s.step}
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest font-bold font-mono transition-colors duration-300
                        ${wizardStep === s.step ? "text-white" : "text-luxury-text/40"}`}
                      >
                        {s.label}
                      </span>
                      {s.step < 3 && <ChevronRight size={12} className="text-luxury-text/20 mx-1 hidden sm:block" />}
                    </div>
                  ))}
                </div>
              )}

              {/* STEP 1: SELECT SERVICES */}
              {wizardStep === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-xl font-serif text-white uppercase tracking-wide">1. Select Luxury Services</h2>
                      <p className="text-xs text-luxury-text/50">Choose one or multiple services to bundle into your customized slots.</p>
                    </div>
                    {/* Selected tally */}
                    <div className="bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold px-3 py-1.5 rounded-lg text-xs font-mono">
                      Selected: <span className="font-bold">{selectedServices.length}</span>
                    </div>
                  </div>

                  {/* Category Selection Filter pills */}
                  <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar">
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategoryFilter(cat.id)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer
                          ${categoryFilter === cat.id
                            ? "bg-luxury-gold text-black font-bold shadow-md shadow-luxury-gold/5"
                            : "bg-luxury-text/5 hover:bg-luxury-text/10 text-luxury-text/60 border border-luxury-text/10"}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* Services Menu Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services
                      .filter(s => {
                        if (categoryFilter === "all") return true;
                        if (Array.isArray(s.category)) {
                          return s.category.includes(categoryFilter);
                        }
                        return s.category === categoryFilter;
                      })
                      .map((service) => {
                        const isSelected = selectedServices.some(item => item.id === service.id);
                        return (
                          <div
                            key={service.id}
                            onClick={() => selectServiceToggle(service)}
                            className={`p-5 rounded-xl border transition-all duration-500 flex flex-col justify-between cursor-pointer group hover:scale-[1.01]
                              ${isSelected
                                ? "bg-luxury-gold/5 border-luxury-gold shadow-lg shadow-luxury-gold/5"
                                : "bg-luxury-text/5 border-luxury-text/10 hover:border-luxury-gold/40"}`}
                          >
                            <div className="space-y-1.5">
                              <div className="flex justify-between items-start gap-2">
                                <h3 className="text-sm font-semibold tracking-wide text-white group-hover:text-luxury-gold transition-colors duration-300">
                                  {service.title}
                                </h3>
                                <span className="text-sm font-bold text-luxury-gold font-mono whitespace-nowrap">
                                  {service.price}
                                </span>
                              </div>
                              {/* <p className="text-xs text-luxury-text/65 font-light leading-relaxed line-clamp-2">
                                {service.description}
                              </p> */}
                            </div>

                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-luxury-text/10 text-[10px] uppercase font-mono tracking-wider">
                              <span className="flex items-center gap-1 text-luxury-text/40">
                                <Clock size={12} className="text-luxury-gold/60" />
                                {service.duration}
                              </span>

                              <span className={`flex items-center gap-1 font-bold tracking-widest
                                ${isSelected ? "text-luxury-gold" : "text-luxury-text/50"}`}
                              >
                                {isSelected ? (
                                  <>
                                    <Check size={12} className="text-luxury-gold animate-bounce" />
                                    Selected
                                  </>
                                ) : (
                                  "+ ADD SERVICE"
                                )}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {/* Step 1 Control Bar */}
                  <div className="pt-6 border-t border-luxury-text/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left">
                      <span className="text-xs opacity-50 block font-mono">ESTIMATED TOTAL</span>
                      <span className="text-xl font-bold font-serif text-luxury-gold">₹{calculateTotal()}</span>
                      <span className="text-[10px] text-luxury-text/40 uppercase tracking-widest block font-mono">
                        {selectedServices.length} Service(s) selected
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={selectedServices.length === 0}
                      onClick={() => {
                        setWizardStep(2);
                        window.scrollTo({ top: 400, behavior: "smooth" });
                      }}
                      className={`px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 select-none justify-center w-full sm:w-auto transition-all duration-300
                        ${selectedServices.length > 0
                          ? "bg-luxury-gold text-black shadow-lg shadow-luxury-gold/10 hover:scale-105 active:scale-95 cursor-pointer"
                          : "bg-luxury-text/10 text-luxury-text/40 cursor-not-allowed"}`}
                    >
                      Select Date & Time
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: PREFERRED DATE & TIME */}
              {wizardStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <button
                      onClick={() => setWizardStep(1)}
                      className="flex items-center gap-1.5 text-xs text-luxury-gold uppercase tracking-widest font-semibold hover:underline mb-3 cursor-pointer"
                    >
                      <ArrowLeft size={13} /> Back to Services
                    </button>
                    <h2 className="text-xl font-serif text-white uppercase tracking-wide">2. Selected Slot Period</h2>
                    <p className="text-xs text-luxury-text/50 font-light">Choose a date first on the calendar, then pick your desired appointment time block.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Calendar (Solid UI) */}
                    <div className="lg:col-span-7 bg-luxury-text/5 border border-luxury-text/10 p-5 rounded-2xl">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-luxury-text/10">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="p-1.5 font-bold hover:text-luxury-gold transition-colors cursor-pointer"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <span className="text-xs uppercase tracking-widest font-mono font-bold text-white">
                          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </span>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="p-1.5 font-bold hover:text-luxury-gold transition-colors cursor-pointer"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      {/* Calendar Weekday headers */}
                      <div className="grid grid-cols-7 gap-1 text-center font-bold mb-3 justify-items-center">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
                          <span key={`${d}-${idx}`} className="w-full text-[10px] text-luxury-gold font-mono block text-center max-w-10">{d}</span>
                        ))}
                      </div>

                      {/* Calendar days grid */}
                      <div className="grid grid-cols-7 gap-1.5 justify-items-center">
                        {renderCalendarDays()}
                      </div>
                    </div>

                    {/* Right Column: Time Slots */}
                    <div className="lg:col-span-5 flex flex-col">
                      <div className="bg-luxury-text/5 border border-luxury-text/10 p-5 rounded-2xl flex-1 flex flex-col">
                        <div className="mb-4 pb-2 border-b border-luxury-text/10 text-center lg:text-left">
                          <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-mono block">Chosen date</span>
                          <span className="text-sm font-semibold text-white">
                            {selectedDate
                              ? selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" })
                              : "No date selected"}
                          </span>
                        </div>

                        {!selectedDate ? (
                          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-luxury-text/30">
                            <CalendarIcon size={32} strokeWidth={1} className="mb-2 text-luxury-gold/50" />
                            <p className="text-xs font-light">Please select your preferred date on the calendar first.</p>
                          </div>
                        ) : (
                          <div className="flex-1 space-y-3">
                            <span className="text-[10px] uppercase tracking-widest text-luxury-text/45 font-mono block mb-2 font-bold">Pick your time slot:</span>
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-2 max-h-55 overflow-y-auto pr-1 text-xs no-scrollbar">
                              {timeSlots.map((time) => {
                                const isSelected = selectedTimeSlot === time;
                                return (
                                  <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTimeSlot(time)}
                                    className={`py-2 px-3 rounded text-center border font-mono tracking-tighter transition-all duration-300 text-[10px] font-bold cursor-pointer
                                      ${isSelected
                                        ? "bg-luxury-gold border-luxury-gold text-black shadow-md font-extrabold"
                                        : "bg-luxury-text/5 border-luxury-text/10 text-luxury-text/70 hover:border-luxury-gold/60"}`}
                                  >
                                    {time}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 2 Controls */}
                  <div className="pt-6 border-t border-luxury-text/10 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => {
                        setWizardStep(1);
                        window.scrollTo({ top: 400, behavior: "smooth" });
                      }}
                      className="px-6 py-3 border border-luxury-text/10 rounded-lg text-xs text-luxury-text/50 uppercase tracking-widest font-semibold hover:bg-luxury-text/5 hover:text-white transition-colors cursor-pointer"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      disabled={!selectedDate || !selectedTimeSlot}
                      onClick={() => {
                        setWizardStep(3);
                        window.scrollTo({ top: 400, behavior: "smooth" });
                      }}
                      className={`px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 select-none transition-all duration-300
                        ${selectedDate && selectedTimeSlot
                          ? "bg-luxury-gold text-black shadow-lg shadow-luxury-gold/10 hover:scale-105 active:scale-95 cursor-pointer"
                          : "bg-luxury-text/10 text-luxury-text/40 cursor-not-allowed"}`}
                    >
                      Fill Contact Info
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFORMATION FORM */}
              {wizardStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <button
                      onClick={() => setWizardStep(2)}
                      className="flex items-center gap-1.5 text-xs text-luxury-gold uppercase tracking-widest font-semibold hover:underline mb-3 cursor-pointer"
                    >
                      <ArrowLeft size={13} /> Back to Date & Time
                    </button>
                    <h2 className="text-xl font-serif text-white uppercase tracking-wide">3. Personal Guidelines</h2>
                    <p className="text-xs text-luxury-text/50 font-light">Provide your contact info details so we can synchronize your scheduler blocks.</p>
                  </div>

                  <form onSubmit={handleSubmitBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Form Input fields */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest font-bold opacity-60 font-mono">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Your Name (e.g. Nitish Kamboj)"
                          className="w-full bg-transparent border border-luxury-text/10 rounded-xl px-4 py-3 text-sm focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder-luxury-text/20"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-bold opacity-60 font-mono">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            placeholder="Your contact (e.g. +91 98765-43210)"
                            className="w-full bg-transparent border border-luxury-text/10 rounded-xl px-4 py-3 text-sm focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder-luxury-text/20 font-mono"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-bold opacity-60 font-mono">Email Address</label>
                          <input
                            type="email"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            placeholder="name@example.com (Optional)"
                            className="w-full bg-transparent border border-luxury-text/10 rounded-xl px-4 py-3 text-sm focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder-luxury-text/20 font-mono"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest font-bold opacity-60 font-mono">Special Directives</label>
                        <textarea
                          rows={3}
                          value={formNotes}
                          onChange={(e) => setFormNotes(e.target.value)}
                          placeholder="E.g. Hair restoration preferences, perming style requirements, or specific timings details..."
                          className="w-full bg-transparent border border-luxury-text/10 rounded-xl px-4 py-3 text-sm focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder-luxury-text/20 resize-none font-light leading-relaxed"
                        />
                      </div>
                    </div>

                    {/* Summary confirmation ticket */}
                    <div className="lg:col-span-5">
                      <div className="bg-luxury-text/5 border border-luxury-gold/25 rounded-2xl p-5 space-y-4 relative overflow-hidden backdrop-blur-md">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-full blur-2xl" />

                        <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-gold border-b border-luxury-text/10 pb-2.5 font-mono">
                          Review Request Detail
                        </h3>

                        <div className="space-y-3.5 text-xs">
                          <div className="space-y-1">
                            <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 font-mono block">service(s)</span>
                            <ul className="text-white font-medium list-disc list-inside space-y-1 pl-1">
                              {selectedServices.map(s => (
                                <li key={s.id} className="truncate">
                                  {s.title}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 font-mono block font-bold leading-normal">status</span>
                              <span className="text-white font-semibold flex items-center gap-1">
                                Confirmed
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 font-mono block font-bold leading-normal">duration tally</span>
                              <span className="text-white font-semibold font-mono flex items-center gap-1.5">
                                <Clock size={12} className="text-luxury-gold/80" />
                                {selectedServices.reduce((sum, s) => {
                                  const mins = parseInt(s.duration);
                                  return sum + (isNaN(mins) ? 0 : mins);
                                }, 0)} Mins
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 font-mono block">preferred date</span>
                              <span className="text-white font-mono font-semibold">
                                {_optionalChain([selectedDate, 'optionalAccess', _5 => _5.toLocaleDateString, 'call', _6 => _6("en-US", { month: "short", day: "numeric", year: "2-digit" })])}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 block font-mono">time slot</span>
                              <span className="text-white font-mono font-semibold">
                                {selectedTimeSlot}
                              </span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-luxury-text/10 flex justify-between items-center bg-black/20 -mx-5 -mb-5 px-5 py-4">
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Estimated fee:</span>
                            <span className="text-lg font-bold font-serif text-luxury-gold font-mono">₹{calculateTotal()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 Buttons - Form Submission */}
                    <div className="lg:col-span-12 pt-4 border-t border-luxury-text/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setWizardStep(2);
                          window.scrollTo({ top: 400, behavior: "smooth" });
                        }}
                        className="px-6 py-3 border border-luxury-text/10 rounded-lg text-xs text-luxury-text/50 uppercase tracking-widest font-semibold hover:bg-luxury-text/5 hover:text-white transition-colors cursor-pointer w-full sm:w-auto"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="px-10 py-4 bg-luxury-gold text-black text-xs font-bold uppercase tracking-[0.2em] rounded-lg shadow-lg shadow-luxury-gold/15 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer"
                      >
                        Booking Request
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </motion.div>
          )}

          {/* SUCCESS MODAL */}
          <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            key="success-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-luxury-bg border border-luxury-text/10 rounded-2xl p-8 max-w-lg w-full text-center space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-luxury-text/10 rounded-full transition-all duration-300 text-luxury-text/60 hover:text-white"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-500/5">
                <Check size={32} strokeWidth={3} className="animate-pulse" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wide">Reservation Sent!</h2>
                <p className="text-xs text-luxury-text/65 leading-relaxed font-light">
                  We have compiled your selection details into a custom appointment receipt on WhatsApp to secure confirmation.
                </p>
              </div>

              {/* Summary ticket copy */}
              <div className="bg-luxury-text/5 border border-luxury-text/10 rounded-xl p-5 text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-luxury-text/10 pb-2">
                  <span className="text-luxury-text/40 uppercase tracking-widest">Service items:</span>
                  <span className="font-semibold text-white truncate max-w-50">
                    {selectedServices.map(s => s.title).join(", ")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-luxury-text/40 uppercase tracking-widest">Status:</span>
                  <span className="font-semibold text-white">
                    Booking Confirmed
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-luxury-text/40 uppercase tracking-widest font-mono">Selected Timing:</span>
                  <span className="font-semibold text-luxury-gold font-mono">
                    {_optionalChain([selectedDate, 'optionalAccess', _5 => _5.toLocaleDateString, 'call', _6 => _6("en-US", { month: "short", day: "numeric" })])} @ {selectedTimeSlot}
                  </span>
                </div>

                <div className="flex justify-between border-t border-luxury-text/10 pt-2 text-sm font-semibold">
                  <span className="text-white uppercase tracking-widest font-bold">Estimated Cost:</span>
                  <span className="text-luxury-gold font-mono font-bold">₹{calculateTotal()}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    // Reset everything
                    setShowSuccessModal(false);
                    setWizardStep(1);
                    setSelectedServices([]);
                    setSelectedDate(null);
                    setSelectedTimeSlot("");
                    setFormName("");
                    setFormPhone("");
                    setFormEmail("");
                    setFormNotes("");
                    setActiveTab("book");
                  }}
                  className="px-6 py-3 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Book Another Visit
                </button>

                <button
                  type="button"
                  onClick={downloadReceipt}
                  className="px-6 py-3 bg-luxury-gold text-black hover:bg-white hover:text-black rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Download size={14} />
                  Download Receipt
                </button>

                <a
                  href={whatsappMessageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-green-500/10 flex items-center justify-center gap-1.5"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>


          {/* TAB 2: SHOP */}
          {activeTab === "shop" && (
            <motion.div
            key="tab-shop"
            initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-black/30 border border-luxury-text/10 rounded-2xl p-6 md:p-8"
            >
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wide items-center">BONZZO PROFESSIONAL — 
                    <span className="text-sm ml-1.5">The Power of Natural Care</span></h2>
                  <p className="text-xs text-luxury-text/50">Curated styling and hair care products recommended by Sahil Hair Expert.</p>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-mono text-luxury-gold bg-luxury-gold/10 px-2.5 py-1 font-bold rounded">
                  {products.length} Products Available
                </span>
              </div>

              {/* Product cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </motion.div>
          )}


          {/* TAB 3: CLIENT GOOGLE REVIEWS */}
          {activeTab === "reviews" && (
            <motion.div
              key="tab-reviews"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-black/30 border border-luxury-text/10 rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-luxury-text/10">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wide">Client Experience Reviews</h2>
                  <p className="text-xs text-luxury-text/50 font-light">Honest, unedited comments syndicating customer satisfaction.</p>
                </div>

                <div className="flex items-center gap-4 bg-luxury-text/5 border border-luxury-text/10 p-4 rounded-xl">
                  <div className="text-center px-2">
                    <span className="text-3xl font-serif font-bold text-white block">4.9</span>
                    <span className="text-[8px] uppercase tracking-widest text-luxury-text/40 font-mono">average score</span>
                  </div>
                  <div className="h-10 w-px bg-luxury-text/10" />
                  <div className="space-y-1">
                    <div className="flex text-luxury-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-text/45 font-mono block">verified Google Reviews</span>
                  </div>
                </div>
              </div>

              {/* Reviews Cards List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((review, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-luxury-text/5 border border-luxury-text/10 rounded-xl flex flex-col justify-between space-y-4 hover:border-luxury-gold/30 transition-colors duration-500"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex text-luxury-gold">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={10} fill="currentColor" className="mr-0.5" />
                          ))}
                        </div>
                        <span className="text-[10px] text-luxury-text/30 font-mono">{review.date}</span>
                      </div>

                      <p className="text-xs text-luxury-text/75 italic font-light leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="flex justify-between items-end pt-3 border-t border-luxury-text/5 text-xs">
                      <div>
                        <h4 className="font-serif font-bold text-white text-sm">{review.name}</h4>
                        <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold font-mono">{review.role}</span>
                      </div>

                      <div className="flex items-center gap-1 text-[8px] uppercase tracking-widest font-mono text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded">
                        <Check size={8} strokeWidth={4} /> Verified Client
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: HOURS & BUSINESS INFO */}
          {activeTab === "about" && (
            <motion.div
              key="tab-about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-black/30 border border-luxury-text/10 rounded-2xl p-6 md:p-8 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Left Column: Studio description and active hours */}
                <div className="md:col-span-7 space-y-6">
                  <div className="space-y-4">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-luxury-gold block font-mono">Advanced Technique</span>
                    <h2 className="text-xl font-serif text-white uppercase tracking-wide">My Self-Developed Advanced Zig-Zag Curly Hair Treatment</h2>

                    <p className="text-xs text-luxury-text/75 font-light leading-relaxed">
                      I'm Sahil Thakur, Hair Expert & Founder of Sahil Hair Expert, with years of professional experience in hair styling and advanced hair treatments.
                    </p>

                    <p className="text-xs text-luxury-text/75 font-light leading-relaxed">
                      Through continuous practical experience and working with different hair types, I developed my own Advanced Zig-Zag Curly Hair Treatment Technique. This specialized technique is designed to create a unique zig-zag curl pattern with defined, textured, and stylish curls.
                    </p>

                    <div className="pt-2 space-y-2">
                      <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-luxury-gold">What Makes Zig-Zag Curly Treatment Different?</p>
                      <p className="text-xs text-luxury-text/75 font-light leading-relaxed">
                        Unlike a traditional curly look, my technique focuses on creating a distinct zig-zag curl pattern that gives the hair a more unique and textured appearance. Every client's hair is different—that's why the treatment is customized according to hair length, texture, condition, density, and desired look.
                      </p>
                    </div>

                    <div className="pt-2 space-y-2">
                      <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-luxury-gold">My Professional Process</p>
                      <div className="text-xs text-luxury-text/75 font-light leading-relaxed space-y-1">
                        <p><span className="text-luxury-gold font-semibold">01 — Hair Analysis:</span> Professional assessment of hair length, texture, condition, and treatment suitability.</p>
                        <p><span className="text-luxury-gold font-semibold">02 — Customized Planning:</span> Selecting appropriate technique and curl pattern according to client's hair and desired style.</p>
                        <p><span className="text-luxury-gold font-semibold">03 — Zig-Zag Curl Formation:</span> Using specialized professional technique to create unique zig-zag curl pattern.</p>
                        <p><span className="text-luxury-gold font-semibold">04 — Finishing & Styling:</span> Refining curls to achieve definition, shape, texture, and professional final finish.</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-luxury-text/10">
                      <p className="text-xs text-luxury-text/75 font-light leading-relaxed italic">
                        My goal is not simply to create curls—it is to create a unique, personalized, and professionally designed curly look for every client. With proper aftercare and hair management, clients can maintain the appearance and definition of their curls.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Operating schedule listing */}
                <div className="md:col-span-5 h-fit bg-luxury-text/5 border border-luxury-text/10 p-5 rounded-2xl relative">
                  <h3 className="text-sm uppercase tracking-widest text-luxury-gold font-bold mb-4 pb-2.5 border-b border-luxury-text/10 font-mono">
                    Weekly Calendar Hours
                  </h3>

                  <div className="space-y-3 text-xs">
                    {businessHours.map((row) => (
                      <div key={row.day} className="flex justify-between items-center text-luxury-text/80">
                        <span className="font-medium text-white">{row.day}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[11px] text-luxury-text/60">{row.hours}</span>
                          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 font-bold font-mono">
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-center md:justify-start items-center text-center gap-3 p-4 ">
                      <Clock className="w-5 h-5 text-luxury-gold " />
                      <div className="ml-3">
                        <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 block font-mono">Walk-Ins policy</span>
                        <span className="text-xs font-semibold text-white tracking-wider">Appts Priority</span>
                      </div>
                    </div>

                    {/* Phone Contacts */}
                    <div className="grid grid-cols-1 gap-2 pt-3 border-t border-luxury-text/10">
                      <a
                        href="tel:+919992310449"
                        className="relative h-fit p-3 bg-luxury-text/5 border border-luxury-text/10 hover:border-luxury-gold/50 rounded-xl block group transition-colors duration-300"
                      >
                        <span className="absolute top-1.5 right-2 text-[8px] uppercase tracking-widest bg-amber-500/70 text-black px-2 py-0.5 font-extrabold rounded w-fit animate-pulse duration-200">Studio</span>
                        <Phone className="w-5 h-5 text-luxury-gold mb-1" />
                        <span className="text-[10px] uppercase tracking-widest text-luxury-text/40 block font-mono">Phone</span>
                        <span className="text-base font-semibold text-white font-mono">+91 99923 10449</span>
                      </a>
                      <a
                        href="tel:+919034273847"
                        className="relative h-fit p-3 bg-luxury-text/5 border border-luxury-text/10 hover:border-luxury-gold/50 rounded-xl block group transition-colors duration-300"
                      >
                        <span className="absolute top-1.5 right-2 text-[8px] uppercase tracking-widest bg-amber-500/70 text-black px-2 py-0.5 font-extrabold rounded w-fit animate-pulse duration-200">Academy</span>
                        <Phone className="w-5 h-5 text-luxury-gold mb-1" />
                        <span className="text-[10px] uppercase tracking-widest text-luxury-text/40 block font-mono">Phone</span>
                        <span className="text-base font-semibold text-white font-mono">+91 90342 73847</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Embedded Location Map with Dark Mode Custom Filter */}
                <div className="md:col-span-12 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-luxury-gold block font-mono">Location Map</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedMapLocation("sec34")}
                        className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none bg-luxury-gold border-luxury-gold text-black shadow-md font-extrabold"
                      >
                        Sector 34 Studio
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-luxury-text/5 border border-luxury-text/10 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />

                      <div>
                        <span className="text-white font-semibold text-xs block">
                          Sector 34 Branch (Main Studio)
                        </span>

                        <span className="text-luxury-text/60 text-xs font-light">
                          Dugra Colony Road, G.No-1 Vikas Nagar, Near Vijata Public School Sec 34, Karnal, Haryana 132001
                        </span>
                      </div>
                    </div>

                    <a
                      href={
                        selectedMapLocation === "sec34"
                          ? "https://www.google.com/maps?q=Sahil+Hair+Expert+Sec+34+Karnal+Haryana"
                          : "https://maps.app.goo.gl/hXw14MggajfLJhVe9"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-wider font-bold text-luxury-gold hover:underline flex items-center gap-1 shrink-0"
                    >
                      Open in Maps <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-luxury-text/10 bg-black relative shadow-lg shadow-black/20">
                    <iframe
                      src={
                        selectedMapLocation === "sec34"
                          ? "https://www.google.com/maps?q=Sahil+Hair+Expert+Sec+34+Karnal+Haryana&output=embed"
                          : "https://www.google.com/maps?q=29.7028056,77.0001667&output=embed"
                      }
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sahil Hair Expert Location Map"
                    />
                  </div>
                </div>

              </div>

              {/* Social Channels Row */}
              <div className="pt-6 border-t border-luxury-text/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-luxury-text/40 uppercase tracking-widest font-mono">connect digitally</span>
                <div className="flex gap-4">
                  {[
                    { id: "insta", icon: Instagram, link: "https://www.instagram.com/hair_expertsahil/" },
                    { id: "facebook", icon: Facebook, link: "https://www.facebook.com/share/1B96HG1bi7/" },
                    { id: "youtube", icon: Youtube, link: "https://youtube.com/@hairexpertsahil?si=uo1fGLZ_VXCa1CKA" }
                  ].map((chan) => {
                    const IconComponent = chan.icon;
                    return (
                      <a
                        key={chan.id}
                        href={chan.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 border  border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50"
                      >
                        <IconComponent size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
