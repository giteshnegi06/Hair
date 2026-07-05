function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } import React, { useState, } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../Images/Logo (2).png";
import Hairoil from "../Images/Hair oil.jpeg";
import Rahul from "../Images/Rahul.jpeg";
import Vicke from "../Images/Vicke.jpeg";
import Sahil from "../Images/Sahil.jpeg";
import Hair1 from "../Images/Hair1.jpeg";
import Hair2 from "../Images/Hair2.jpeg";
import Hair3 from "../Images/BoostHair.jpeg";


import {

  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  Star,
  Check,
  Phone,
  MapPin,
  Sparkles,
  ShoppingBag,
  ArrowLeft,
  Smile,
  Instagram,
  Facebook,
  Youtube,
  Clock4,
  ExternalLink,
  Download,

} from "lucide-react";

// Service Categories divided into Male and Female, plus Styling, Treatments, and Individual Grooming
const serviceCategories = [
  // { id: "all", name: "All Services" },
  { id: "male", name: "Men" },
  { id: "female", name: "Women" },
  // { id: "styling", name: "Hair Styling" },
  { id: "treatments", name: "Hair Treatments" },
  { id: "individual", name: "Individual Grooming" }
];

const services = [
  // --- MALE SERVICES ---
  {
    id: "haircut-beard-sculpt",
    title: "Haircut & Beard Sculpt",
    category: ["male", "individual"],
    price: "₹200",
    numericPrice: 200,
    duration: "45 min",
    description: "Standard styled haircut, refreshing hair wash, and professional beard sculpting with razor lines."
  },
  {
    id: "essential-grooming",
    title: "Essential Grooming Package",
    category: ["male", "individual"],
    price: "₹500",
    numericPrice: 500,
    duration: "45 min",
    description: "Standard styled haircut, refreshing hair wash, and professional beard sculpting with razor lines."
  },
  {
    id: "full-wax",
    title: "Full Wax",
    category: ["male", "individual"],
    price: "₹800",
    numericPrice: 800,
    duration: "40 min",
    description: "Sahil's signature precision haircut, luxurious hot-towel beard design, specialized gold facial massage, and deep conditioning hair spa."
  },
  {
    id: "kera-smooth",
    title: "Kera Smooth",
    category: ["male", "styling"],
    price: "₹1,700",
    numericPrice: 1700,
    duration: "50 min",
    description: "Precision couture haircuts and custom styling tailored to your facial structure and hair density."
  },
  {
    id: "o3-facial",
    title: "O3+ Facial",
    category: ["male", "Individual"],
    price: "₹1,200",
    numericPrice: 1200,
    duration: "150 min",
    description: "Premium custom hair wig and patch installation tailored to your head structure and hairline."
  },
  {
    id: "hair-dread-locks",
    title: "Dreadlocks",
    category: ["male", "Individual"],
    price: "₹6,000",
    numericPrice: 6000,
    duration: "150 min",
    description: "Professional dreadlock styling and maintenance for a unique, textured look with long-lasting results."
  },

  {
    id: "male-perming",
    title: "Hair Perming",
    category: ["male", "treatments"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "180 min",
    description: "Professional hair perming to add defined curls, texture, and structural volume."
  },
  {
    id: "male-curl-permanent",
    title: "Curely Treatment",
    category: ["male", "treatments"],
    price: "₹5,000",
    numericPrice: 5000,
    duration: "300 min",
    description: "Long-lasting permanent curl styling treatment with advanced protective hair formulas."
  },
  {
    id: "male-hair-extensions",
    title: "Hair Extensions",
    category: ["male", "treatments"],
    price: "₹8,000",
    numericPrice: 8000,
    duration: "120 min",
    description: "Non-surgical high-density medical grade hair extensions for added length, volume, and natural blending."
  },
  {
    id: "wig-hair-patch-luxury",
    title: "Wig & Hair Patch",
    category: ["male", "treatments"],
    price: "₹12,000",
    numericPrice: 12000,
    duration: "120 min",
    description: "Non-surgical high-density medical grade custom hair patches and wigs. Features custom clipping/grafting for high natural looks."
  },
  {
    id: "bridal-groom-royale",
    title: "Groom Royale",
    category: ["male", "individual"],
    price: "₹8,000",
    numericPrice: 8000,
    duration: "180 min",
    description: "Full royal styling, premium HD airbrush makeup, active scalp hair treatment, and exclusive consultation for your special day."
  },
  


  // --- FEMALE SERVICES ---
  {
    id: "female-hair-cut",
    title: "Hair Cut",
    category: ["female", "styling"],
    price: "₹500",
    numericPrice: 500,
    duration: "60 min",
    description: "Precision style haircut, wash, blow dry, and finishing style tailored to your face shape."
  },
  {
    id: "female-highlight",
    title: "Highlight",
    category: ["female", "styling"],
    price: "₹1,200",
    numericPrice: 1200,
    duration: "90 min",
    description: "Professional streak highlights to add dimensions, depth, and vibrant color tones to your hair."
  },
  {
    id: "female-smoothing",
    title: "Smoothing",
    category: ["female", "treatments"],
    price: "₹3,000",
    numericPrice: 3000,
    duration: "180 min",
    description: "Intense hair smoothing treatment for silky, frizz-free, and perfectly straight hair."
  },
  {
    id: "female-kerashine",
    title: "Kerashine",
    category: ["female", "treatments"],
    price: "₹4,500",
    numericPrice: 4500,
    duration: "180 min",
    description: "Premium Kerashine treatment to restore keratin protein and add brilliant glossy shine."
  },
  {
    id: "female-nanoplastic",
    title: "Nanoplastic",
    category: ["female", "treatments"],
    price: "₹5,000",
    numericPrice: 5000,
    duration: "120 min",
    description: "Advanced Nanoplastia hair restoration and straightening therapy using safe organic nano-nutrients."
  },
  {
    id: "female-multivitamin-facial",
    title: "Multivitamin Facial",
    category: ["female", "individual"],
    price: "₹1,500",
    numericPrice: 1500,
    duration: "60 min",
    description: "Skin nourishing multivitamin facial to boost radiance, deep cleanse, and hydrate skin layers."
  },
  {
    id: "female-hydra-facial",
    title: "Hydra Facial",
    category: ["female", "individual"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "60 min",
    description: "Advanced multi-step Hydra Facial for deep exfoliation, blackhead extraction, and intense hydration serum infusion."
  },
  {
    id: "female-party-makeup",
    title: "Party Makeup",
    category: ["female", "individual"],
    price: "₹1,500",
    numericPrice: 1500,
    duration: "90 min",
    description: "Gorgeous party-ready makeup, subtle contouring, eye styling, and skin finish matching the occasion."
  },
  {
    id: "female-engagement-makeup",
    title: "Engagement Makeup",
    category: ["female", "individual"],
    price: "₹8,500",
    numericPrice: 8500,
    duration: "90 min",
    description: "High-definition engagement makeup with matching hairstyling, lash extensions, and draping support."
  },
  {
    id: "female-reception-makeup",
    title: "Reception Makeup",
    category: ["female", "individual"],
    price: "₹15,000",
    numericPrice: 15000,
    duration: "120 min",
    description: "Premium HD/Airbrush reception makeup, complex hairdos, detailed draping, and styling for a flawless look."
  },
  {
    id: "female-hair-colour",
    title: "Hair Colour",
    category: ["female", "styling"],
    price: "₹3,000",
    numericPrice: 3000,
    duration: "120 min",
    description: "Full global hair colouring with high-grade ammonia-free salon shades."
  },
  {
    id: "female-root-touchup",
    title: "Root Touchup",
    category: ["female", "styling"],
    price: "₹800",
    numericPrice: 800,
    duration: "50 min",
    description: "Quick precision touch-up to cover root regrowth and gray hair seamlessly."
  },
  {
    id: "female-nails-basic",
    title: "Nails Basic",
    category: ["female", "individual"],
    price: "₹500",
    numericPrice: 500,
    duration: "30 min",
    description: "Basic nail grooming, shaping, cuticle care, and premium gel polish application."
  },
  {
    id: "female-full-tip-set",
    title: "Full Tip Set Nails",
    category: ["female", "individual"],
    price: "₹800",
    numericPrice: 800,
    duration: "30 min",
    description: "Full set acrylic or gel nail extensions with customized shape extensions."
  },
  {
    id: "female-ombre",
    title: "Ombre Nails",
    category: ["female", "individual"],
    price: "₹1,000",
    numericPrice: 1000,
    duration: "30 min",
    description: "Trendy gradient ombre nail art shading with smooth transitions."
  },
  {
    id: "female-chrome",
    title: "Chrome Nails",
    category: ["female", "individual"],
    price: "₹1,500",
    numericPrice: 1500,
    duration: "45 min",
    description: "Luxury metallic chrome finish nail art coating over gel extensions."
  },
  {
    id: "male-bridal-makeup",
    title: "Bridal Makeup",
    category: ["female", "individual"],
    price: "₹15,000",
    numericPrice: 15000,
    duration: "240 min",
    description: "Elite HD airbrush groom/bridal makeup, skin prep, hair setting, and styling for a flawless royal appearance."
  },
];

// Barbers / Experts
const barbers = [
  {
    id: "any",
    name: "Any Available",
    role: "Fastest Booking Option",
    bio: "Select this option to pair with is any top specialist available at your chosen time.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sahil",
    name: "Sahil Thakur",
    role: "Founder & Treatment Specialist",
    image: Sahil
  },
  {
    id: "Rahul",
    name: "Mr. Rahul",
    role: "Texture & Master Stylist",
    image: Vicke
  },
  {
    id: "Aman",
    name: "Mr. Aman",
    role: "Senior Barber Architect",
    image: Rahul
  }
];

// Testimonials Data for Setmore tab
const testimonials = [
  {
    name: "Rohan Verma",
    role: "Local Guide",
    text: "Sahil is a true magician with hair! I've been coming here for 2 years and every visit is a masterpiece. Best hair academy in Karnal for both grooming and learning.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Megha Gupta",
    role: "Regular Client",
    text: "Amazing services! The staff is very professional and the hygiene standards are top-notch. Highly recommended for bridal makeup and hair styling.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Amit Saini",
    role: "Regular",
    text: "The best place to learn and get styled in Karnal. Sahil's attention to detail is incomparable. The atmosphere is very welcoming and luxurious.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Sonia Mehta",
    role: "Bridal Client",
    text: "Found this boutique salon through Google and I'm so glad I did. Excellent service and very polite staff. They made my special day even more beautiful.",
    rating: 5,
    date: "4 months ago"
  }
];

// Products Images
const products = [
  {
    images: [Hair1, Hairoil, Hair2],
    title: "Generic Damage And Protection Hair oil",
    category: "Shop",
    buyUrl: "https://www.amazon.in/dp/B0G1SY3WWQ",
    btn: "Buy Now"
  },
  {
    images: [Hair3,],
    title: "Breackage & Regrowth Shampoo",
    category: "Soon",
    buyUrl: "#",
    btn: "Coming Soon"
  },
];

// Available hours data
const businessHours = [
  { day: "Monday", hours: "9:00 AM - 9:30 PM", status: "Open" },
  { day: "Tuesday", hours: "9:00 AM - 9:30 PM", status: "Open" },
  { day: "Wednesday", hours: "9:00 AM - 9:30 PM", status: "Open" },
  { day: "Thursday", hours: "9:00 AM - 9:30 PM", status: "Open" },
  { day: "Friday", hours: "9:00 AM - 9:30 PM", status: "Open" },
  { day: "Saturday", hours: "9:00 AM - 9:30 PM", status: "Open" },
  { day: "Sunday", hours: "9:00 AM - 9:30 PM", status: "Open" }
];






function ProductCard({ product }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = product.images || [product.url];

  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIdx, images.length]);

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-luxury-text/5 border border-luxury-text/10 rounded-xl overflow-hidden flex flex-col justify-between hover:border-luxury-gold/40 transition-all duration-500 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-black/40">
        <img
          src={images[currentIdx]}
          alt={product.title}
          className="w-full h-full object-cover transition-all duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            {/* <button
              onClick={handlePrev}
              type="button"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 hover:bg-luxury-gold hover:text-black text-white flex items-center justify-center transition-colors duration-300 z-10 cursor-pointer border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 hover:bg-luxury-gold hover:text-black text-white flex items-center justify-center transition-colors duration-300 z-10 cursor-pointer border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={14} />
            </button> */}

            {/* Indicator Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIdx(idx);
                  }}
                  type="button"
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIdx ? "bg-luxury-gold w-3" : "bg-white/40"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {product.category && (
          <span className="absolute top-3 right-3 text-[8px] uppercase tracking-widest bg-black/80 text-luxury-gold px-2 py-0.5 font-bold rounded font-mono">
            {product.category}
          </span>
        )}
      </div>

      {/* Info and Action under the Image */}
      <div className="p-4 flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-1">
          <h3 className="text-xs font-semibold tracking-wide text-white group-hover:text-luxury-gold transition-colors duration-300">
            {product.title}
          </h3>
        </div>

        <a
          href={product.buyUrl || "#"}
          onClick={(e) => {
            if (product.buyUrl === "#") {
              e.preventDefault();
            }
          }}
          target={product.buyUrl !== "#" ? "_blank" : undefined}
          rel={product.buyUrl !== "#" ? "noopener noreferrer" : undefined}
          className="w-full py-2 bg-luxury-gold text-black hover:bg-white text-[10px] uppercase tracking-[0.15em] font-extrabold transition-all duration-300 rounded flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-luxury-gold/5"
        >
          <ShoppingBag size={10} />
          {product.btn || "Buy Now"}
        </a>
      </div>
    </div>
  );
}

export default function BookingWidget({ activeTab: propActiveTab, setActiveTab: propSetActiveTab } = {}) {
  // Tabs: 'book' | 'experts' | 'reviews' | 'gallery' | 'about'
  const [internalActiveTab, setInternalActiveTab] = useState("book");

  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;
  const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : setInternalActiveTab;

  // Map active location: 'sec34' | 'sec13'
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

  // Helper arrays for timesslots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM"
  ];

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

  const handleBookNowExpertDirect = (barber) => {
    setSelectedExpert(barber);
    setWizardStep(1); // will start with services but barber is locked
    setActiveTab("book");
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) return;

    // Advance to Success
    setWizardStep(5);

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
      `Stylist: ${selectedExpert ? selectedExpert.name : "Any Available"}\n` +
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
Stylist: ${selectedExpert ? selectedExpert.name : "Any Available"}
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
              <img src={logo} alt="Sahil_hair_expert" className="w-30 h-28 rounded-3xl" />
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full shadow-lg" />
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-serif text-white tracking-wide">Sahil Hair Expert</h1>
              <span className="text-[9px] uppercase tracking-widest bg-luxury-gold/20 text-luxury-gold px-2.5 py-1 font-bold rounded">Karnal Studio</span>
            </div>

            <p className="text-xs text-luxury-text/60 font-light flex items-center justify-center md:justify-start gap-1.5 flex-wrap">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              <span>Sec 34 Studio</span>
              <span className="w-1 h-1 bg-luxury-text/30 rounded-full" />
              <span>Sec 13 Lounge</span>
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
              href="https://www.instagram.com/sahil__hair_expert?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50 hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram size={12} />
            </a>

            <a
              href="https://www.facebook.com/SahilHairStylist/"
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
          { id: "book", label: "Book Appointment", icon: Sparkles },
          { id: "experts", label: "Our Stylists", icon: Smile },
          { id: "reviews", label: "Reviews", icon: Star },
          { id: "shop", label: "Shop", icon: ShoppingBag },
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
                if (tab.id === "book" && wizardStep === 5) {
                  setWizardStep(1);
                  setSelectedServices([]);
                  setSelectedExpert(null);
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
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-luxury-text/10 overflow-x-auto no-scrollbar scroll-smooth">
                  {[
                    { step: 1, label: "Services" },
                    { step: 2, label: "Specialist" },
                    { step: 3, label: "Time Slot" },
                    { step: 4, label: "Your Info" }
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
                      {s.step < 4 && <ChevronRight size={12} className="text-luxury-text/20 mx-1 hidden sm:block" />}
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
                      onClick={() => setWizardStep(2)}
                      className={`px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 select-none justify-center w-full sm:w-auto transition-all duration-300
                        ${selectedServices.length > 0
                          ? "bg-luxury-gold text-black shadow-lg shadow-luxury-gold/10 hover:scale-105 active:scale-95 cursor-pointer"
                          : "bg-luxury-text/10 text-luxury-text/40 cursor-not-allowed"}`}
                    >
                      Choose Specialist
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: CHOOSE STYLIST */}
              {wizardStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <button
                      onClick={() => setWizardStep(1)}
                      className="flex items-center gap-1.5 text-xs text-luxury-gold uppercase tracking-widest font-semibold hover:underline mb-3 cursor-pointer"
                    >
                      <ArrowLeft size={13} /> Back to Services
                    </button>
                    <h2 className="text-xl font-serif text-white uppercase tracking-wide">2. Choose Your Expert</h2>
                    <p className="text-xs text-luxury-text/50 font-light">Select a master styling coach or opt for any available to reduce schedule queues.</p>
                  </div>

                  {/* Stylists Selector Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {barbers.map((barber) => {
                      const isSelected = _optionalChain([selectedExpert, 'optionalAccess', _4 => _4.id]) === barber.id;
                      return (
                        <div
                          key={barber.id}
                          onClick={() => setSelectedExpert(barber)}
                          className={`p-2 lg:p-4 rounded-xl border transition-all duration-500 cursor-pointer text-center flex flex-col items-center group
                            ${isSelected
                              ? "bg-luxury-gold/5 border-luxury-gold shadow-lg shadow-luxury-gold/5"
                              : "bg-luxury-text/5 border-luxury-text/10 hover:border-luxury-gold/40"}`}
                        >
                          <div className={`w-18 h-18 rounded-full overflow-hidden border-2 mb-4 group-hover:scale-105 transition-transform duration-500
                            ${isSelected ? "border-luxury-gold" : "border-luxury-text/10"}`}
                          >
                            <img
                              src={barber.image}
                              alt={barber.name}
                              className="w-full h-full object-cover grayscale"
                            />
                          </div>

                          <div className="space-y-1.5 flex-1 flex flex-col items-center justify-start w-full">
                            <h3 className="text-sm font-semibold text-white group-hover:text-luxury-gold transition-colors block">
                              {barber.name}
                            </h3>
                            <span className="text-[9px] uppercase tracking-wider text-luxury-gold bg-luxury-gold/10 px-2 py-0.5 rounded font-bold font-mono">
                              {barber.role}
                            </span>
                          </div>

                          <button
                            type="button"
                            className={`mt-4 w-full py-2 rounded text-[10px] font-bold uppercase tracking-wider border transition-all duration-300
                              ${isSelected
                                ? "bg-luxury-gold text-black border-luxury-gold"
                                : "border-luxury-text/10 text-luxury-text/50 hover:bg-luxury-text/5"}`}
                          >
                            {isSelected ? "Selected" : "Select"}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Step 2 Controls */}
                  <div className="pt-6 border-t border-luxury-text/10 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setWizardStep(1)}
                      className="px-6 py-3 border border-luxury-text/10 rounded-lg text-xs text-luxury-text/50 uppercase tracking-widest font-semibold hover:bg-luxury-text/5 hover:text-white transition-colors cursor-pointer"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      disabled={!selectedExpert}
                      onClick={() => setWizardStep(3)}
                      className={`px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 select-none transition-all duration-300
                        ${selectedExpert
                          ? "bg-luxury-gold text-black shadow-lg shadow-luxury-gold/10 hover:scale-105 active:scale-95 cursor-pointer"
                          : "bg-luxury-text/10 text-luxury-text/40 cursor-not-allowed"}`}
                    >
                      Select Date & Time
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PREFERRED DATE & TIME */}
              {wizardStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <button
                      onClick={() => setWizardStep(2)}
                      className="flex items-center gap-1.5 text-xs text-luxury-gold uppercase tracking-widest font-semibold hover:underline mb-3 cursor-pointer"
                    >
                      <ArrowLeft size={13} /> Back to Expert
                    </button>
                    <h2 className="text-xl font-serif text-white uppercase tracking-wide">3. Selected Slot Period</h2>
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

                  {/* Step 3 Controls */}
                  <div className="pt-6 border-t border-luxury-text/10 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setWizardStep(2)}
                      className="px-6 py-3 border border-luxury-text/10 rounded-lg text-xs text-luxury-text/50 uppercase tracking-widest font-semibold hover:bg-luxury-text/5 hover:text-white transition-colors cursor-pointer"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      disabled={!selectedDate || !selectedTimeSlot}
                      onClick={() => setWizardStep(4)}
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

              {/* STEP 4: CONTACT INFORMATION FORM */}
              {wizardStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <button
                      onClick={() => setWizardStep(3)}
                      className="flex items-center gap-1.5 text-xs text-luxury-gold uppercase tracking-widest font-semibold hover:underline mb-3 cursor-pointer"
                    >
                      <ArrowLeft size={13} /> Back to Date & Time
                    </button>
                    <h2 className="text-xl font-serif text-white uppercase tracking-wide">4. Personal Guidelines</h2>
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
                              <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 font-mono block">stylist expert</span>
                              <span className="text-white font-semibold flex items-center gap-1">
                                {selectedExpert ? selectedExpert.name : "Any Available"}
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

                    {/* Step 4 Buttons - Form Submission */}
                    <div className="lg:col-span-12 pt-4 border-t border-luxury-text/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(3)}
                        className="px-6 py-3 border border-luxury-text/10 rounded-lg text-xs text-luxury-text/50 uppercase tracking-widest font-semibold hover:bg-luxury-text/5 hover:text-white transition-colors cursor-pointer w-full sm:w-auto"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="px-10 py-4 bg-luxury-gold text-black text-xs font-bold uppercase tracking-[0.2em] rounded-lg shadow-lg shadow-luxury-gold/15 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer"
                      >
                        Instant Booking Request
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 5: SUCCESS state */}
              {wizardStep === 5 && (
                <div className="text-center py-10 px-4 space-y-6 max-w-lg mx-auto">
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
                      <span className="text-luxury-text/40 uppercase tracking-widest">Stylist Coach:</span>
                      <span className="font-semibold text-white">
                        {selectedExpert ? selectedExpert.name : "Any Available"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-luxury-text/40 uppercase tracking-widest font-mono">Selected Timing:</span>
                      <span className="font-semibold text-luxury-gold font-mono">
                        {_optionalChain([selectedDate, 'optionalAccess', _7 => _7.toLocaleDateString, 'call', _8 => _8("en-US", { month: "short", day: "numeric" })])} @ {selectedTimeSlot}
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
                        setWizardStep(1);
                        setSelectedServices([]);
                        setSelectedExpert(null);
                        setSelectedDate(null);
                        setSelectedTimeSlot("");
                        setFormName("");
                        setFormPhone("");
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
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: OUR STYLISTS EXPERTS LIST */}
          {activeTab === "experts" && (
            <motion.div
              key="tab-experts"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-black/30 border border-luxury-text/10 rounded-2xl p-6 md:p-8"
            >
              <div className="mb-8">
                <h2 className="text-xl font-serif text-white uppercase tracking-wide">Meet the Artisans</h2>
                <p className="text-xs text-luxury-text/50">Our elite styling team pairs traditional, heritage razor skills with contemporary hair perming & restoration aesthetics.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {barbers
                  .filter(b => b.id !== "any") // hide the mock 'any' option in informational list
                  .map((stylist) => (
                    <div
                      key={stylist.id}
                      className="p-2 rounded-xl border border-luxury-text/10 bg-luxury-text/5 hover:border-luxury-gold/40 transition-all duration-500 text-center flex flex-col items-center justify-between group"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 mb-4 border-luxury-text/10 group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={stylist.image}
                          alt={stylist.name}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>

                      <div className="space-y-1.5 flex-1 flex flex-col items-center justify-start w-full">
                        <h3 className="text-sm font-semibold text-white group-hover:text-luxury-gold transition-colors block">
                          {stylist.name}
                        </h3>
                        <span className="text-[9px] uppercase tracking-wider text-luxury-gold bg-luxury-gold/10 px-2 py-0.5 rounded font-bold font-mono">
                          {stylist.role}
                        </span>
                      </div>

                      {/* Booking shortcut CTA */}
                      <button
                        type="button"
                        onClick={() => handleBookNowExpertDirect(stylist)}
                        className="mt-4 w-full py-2 bg-luxury-text/5 hover:bg-luxury-gold text-luxury-text/40 hover:text-black hover:border-luxury-gold rounded text-[10px] font-bold uppercase tracking-wider border border-luxury-text/10 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <CalendarIcon size={12} />
                        Book
                      </button>
                    </div>
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

          {/* TAB 4: SHOP */}
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
                  <h2 className="text-xl font-serif text-white uppercase tracking-wide">Premium Product Shop</h2>
                  <p className="text-xs text-luxury-text/50">Curated styling and hair care products recommended by Sahil Hair Expert.</p>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-mono text-luxury-gold bg-luxury-gold/10 px-2.5 py-1 font-bold rounded">
                  {products.length} Products Available
                </span>
              </div>

              {/* Product cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 5: HOURS & BUSINESS INFO */}
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
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-luxury-gold block font-mono">the heritage brand</span>
                    <h2 className="text-xl font-serif text-white uppercase tracking-wide">Sahil Hair Expert, Karnal</h2>
                    <p className="text-xs text-luxury-text/75 font-light leading-relaxed">
                      Founded by master cosmetic artist Sahil, our Karnal workstation represents Haryana's elite salon space, delivering luxury styling, natural hair replacements (wigs and premium patches), specialized scalp medicine, and airbrush transformations.
                    </p>
                    <p className="text-xs text-luxury-text/75 font-light leading-relaxed">
                      We operate on transparent appointment cycles inspired by the direct luxury of modern booking scheduling hubs like Setmore. Your time is valuable; we honor our commitments precisely.
                    </p>
                  </div>

                  {/* Operational Contacts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-luxury-text/10">
                    <a
                      href="tel:+919992310449"
                      className="relative h-fit p-4 bg-luxury-text/5 border border-luxury-text/10 hover:border-luxury-gold/50 rounded-xl block group transition-colors duration-300"
                    >
                      <span className=" absolute top-2 right-3 text-[8px] uppercase tracking-widest bg-amber-500/70 text-black px-2 py-0.5 font-extrabold rounded w-fit animate-pulse duration-200">Branch 1</span>
                      <Phone className="w-5 h-5 text-luxury-gold mb-2 group-hover:bounce" />
                      <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 block font-mono">Phone Support</span>
                      <span className="text-xs font-semibold text-white font-mono">+91 99923 10449</span>
                    </a>
                    <a
                      href="tel:+919034273847"
                      className="relative h-fit p-4 bg-luxury-text/5 border border-luxury-text/10 hover:border-luxury-gold/50 rounded-xl block group transition-colors duration-300"
                    >
                      <span className=" absolute top-2 right-3 text-[8px] uppercase tracking-widest bg-amber-500/70 text-black px-2 py-0.5 font-extrabold rounded w-fit animate-pulse duration-200">Branch 2</span>
                      <Phone className="w-5 h-5 text-luxury-gold mb-2 group-hover:bounce" />
                      <span className="text-[9px] uppercase tracking-widest text-luxury-text/40 block font-mono">Phone Support</span>
                      <span className="text-xs font-semibold text-white font-mono"> +91 90342 73847</span>
                    </a>


                  </div>
                </div>

                {/* Right Column: Operating schedule listing */}
                <div className="md:col-span-5 bg-luxury-text/5 border border-luxury-text/10 p-5 rounded-2xl relative">
                  <h3 className="text-xs uppercase tracking-widest text-luxury-gold font-bold mb-4 pb-2.5 border-b border-luxury-text/10 font-mono">
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
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none
                          ${selectedMapLocation === "sec34"
                            ? "bg-luxury-gold border-luxury-gold text-black shadow-md font-extrabold"
                            : "bg-luxury-text/5 border-luxury-text/10 text-luxury-text/60 hover:bg-luxury-text/10"}`}
                      >
                        Sector 34 Studio
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedMapLocation("sec13")}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none
                          ${selectedMapLocation === "sec13"
                            ? "bg-luxury-gold border-luxury-gold text-black shadow-md font-extrabold"
                            : "bg-luxury-text/5 border-luxury-text/10 text-luxury-text/60 hover:bg-luxury-text/10"}`}
                      >
                        Sector 13 Lounge
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-luxury-text/5 border border-luxury-text/10 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />

                      <div>
                        <span className="text-white font-semibold text-xs block">
                          {selectedMapLocation === "sec34"
                            ? "Sector 34 Branch (Main Studio)"
                            : "Sector 13 Branch (Premium Lounge - Special for woman’s hair treatments)"}
                        </span>

                        <span className="text-luxury-text/60 text-xs font-light">
                          {selectedMapLocation === "sec34"
                            ? "Dugra Colony Road, Sec 34, Karnal, Haryana 132001"
                            : "227L, First Floor, Model Town, Karnal, Haryana 132001"}
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
                    { id: "insta", icon: Instagram, link: "https://www.instagram.com/sahil__hair_expert?utm_source=qr" },
                    { id: "facebook", icon: Facebook, link: "https://www.facebook.com/SahilHairStylist/" },
                    { id: "youtube", icon: Youtube, link: "https://youtube.com/@hairexpertsahil?si=uo1fGLZ_VXCa1CKA" }
                  ].map((chan) => {
                    const IconComponent = chan.icon;
                    return (
                      <a
                        key={chan.id}
                        href={chan.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50"
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
