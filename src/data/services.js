<<<<<<< HEAD
export const serviceCategories = [
  { id: "male", name: "Men" },
  { id: "female", name: "Women" },
  { id: "treatments", name: "Hair Treatments" },
  { id: "individual", name: "Individual Grooming" }
];

export const services = [
  // --- MALE SERVICES ---
  {
    id: "haircut-beard",
    title: "Haircut & Beard",
    category: ["male", "individual"],
    price: "₹250",
    numericPrice: 250,
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
    id: "hair-repair",
    title: "Hair Repair",
    category: ["male", "styling"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "50 min",
    description: "Precision couture haircuts and custom styling tailored to your facial structure and hair density."
  },
  {
    id: "facial",
    title: "Facial's",
    category: ["male", "Individual"],
    price: "₹1,500",
    numericPrice: 1500,
    duration: "150 min",
    description: "Premium custom hair wig and patch installation tailored to your head structure and hairline."
  },
  {
    id: "hair-dread-locks",
    title: "Dreadlocks",
    category: ["male", "Individual"],
    price: "₹8,000",
    numericPrice: 8000,
    duration: "150 min",
    description: "Professional dreadlock styling and maintenance for a unique, textured look with long-lasting results."
  },
  {
    id: "male-perm",
    title: "Hair Perm",
    category: ["male", "treatments"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "180 min",
    description: "Professional hair perming to add defined curls, texture, and structural volume."
  },
  {
    id: "male-curl-permanent",
    title: "ADV Curly Zig Zag",
    category: ["male", "treatments"],
    price: "₹5,000",
    numericPrice: 5000,
    duration: "300 min",
    description: "Long-lasting permanent curl styling treatment with advanced protective hair formulas."
  },
  {
    id: "re-growth-curly-adv",
    title: "Curly Zig Zag",
    category: ["male", "individual"],
    price: "₹3,000",
    numericPrice: 3000,
    duration: "180 min",
    description: "Full royal styling, premium HD airbrush makeup, active scalp hair treatment, and exclusive consultation for your special day."
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




  
  // --- FEMALE SERVICES ---
  {
    id: "female-hair-cut",
    title: "Advance Hair Cut with Blow Dry",
    category: ["female", "styling"],
    price: "₹800",
    numericPrice: 800,
    duration: "60 min",
    description: "Precision style haircut, wash, blow dry, and finishing style tailored to your face shape."
  },
  {
    id: "female-highlight",
    title: "Highlight's",
    category: ["female", "styling"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "90 min",
    description: "Professional streak highlights to add dimensions, depth, and vibrant color tones to your hair."
  },
  {
    id: "female-smoothing",
    title: "Smoothing",
    category: ["female", "treatments"],
    price: "₹5,000",
    numericPrice: 5000,
    duration: "180 min",
    description: "Intense hair smoothing treatment for silky, frizz-free, and perfectly straight hair."
  },
  {
    id: "female-kerashine",
    title: "Kerashine",
    category: ["female", "treatments"],
    price: "₹8,000",
    numericPrice: 8000,
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
    price: "₹2,000",
    numericPrice: 2000,
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
    price: "₹2,000",
    numericPrice: 2000,
    duration: "90 min",
    description: "Gorgeous party-ready makeup, subtle contouring, eye styling, and skin finish matching the occasion."
  },
  {
    id: "female-hair-colour",
    title: "Golal Hair Colour",
    category: ["female", "styling"],
    price: "₹5,000",
    numericPrice: 5000,
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
    price: "₹1,000",
    numericPrice: 1000,
    duration: "30 min",
    description: "Full set acrylic or gel nail extensions with customized shape extensions."
  },
  {
    id: "female-ombre",
    title: "Ombre Nails",
    category: ["female", "individual"],
    price: "₹1,500",
    numericPrice: 1500,
    duration: "30 min",
    description: "Trendy gradient ombre nail art shading with smooth transitions."
  },
  {
    id: "female-chrome",
    title: "Chrome Nails",
    category: ["female", "individual"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "45 min",
    description: "Luxury metallic chrome finish nail art coating over gel extensions."
  },
  {
    id: "female-engagement-makeup",
    title: "Engagement Makeup",
    category: ["female", "individual"],
    price: "₹10,000",
    numericPrice: 10000,
    duration: "90 min",
    description: "High-definition engagement makeup with matching hairstyling, lash extensions, and draping support."
  },
  {
    id: "female-reception-makeup",
    title: "Reception Makeup",
    category: ["female", "individual"],
    price: "₹20,000",
    numericPrice: 20000,
    duration: "120 min",
    description: "Premium HD/Airbrush reception makeup, complex hairdos, detailed draping, and styling for a flawless look."
  },
  {
    id: "male-bridal-makeup",
    title: "Bridal Makeup",
    category: ["female", "individual"],
    price: "₹30,000",
    numericPrice: 30000,
    duration: "240 min",
    description: "Elite HD airbrush groom/bridal makeup, skin prep, hair setting, and styling for a flawless royal appearance."
  },
];
=======
export const serviceCategories = [
  { id: "male", name: "Men" },
  { id: "female", name: "Women" },
  { id: "treatments", name: "Hair Treatments" },
  { id: "individual", name: "Individual Grooming" }
];

export const services = [
  // --- MALE SERVICES ---
  {
    id: "haircut-beard",
    title: "Haircut & Beard",
    category: ["male", "individual"],
    price: "₹250",
    numericPrice: 250,
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
    id: "hair-repair",
    title: "Hair Repair",
    category: ["male", "styling"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "50 min",
    description: "Precision couture haircuts and custom styling tailored to your facial structure and hair density."
  },
  {
    id: "facial",
    title: "Facial's",
    category: ["male", "Individual"],
    price: "₹1,500",
    numericPrice: 1500,
    duration: "150 min",
    description: "Premium custom hair wig and patch installation tailored to your head structure and hairline."
  },
  {
    id: "hair-dread-locks",
    title: "Dreadlocks",
    category: ["male", "Individual"],
    price: "₹8,000",
    numericPrice: 8000,
    duration: "150 min",
    description: "Professional dreadlock styling and maintenance for a unique, textured look with long-lasting results."
  },
  {
    id: "male-perm",
    title: "Hair Perm",
    category: ["male", "treatments"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "180 min",
    description: "Professional hair perming to add defined curls, texture, and structural volume."
  },
  {
    id: "male-curl-permanent",
    title: "ADV Curly Zig Zag",
    category: ["male", "treatments"],
    price: "₹5,000",
    numericPrice: 5000,
    duration: "300 min",
    description: "Long-lasting permanent curl styling treatment with advanced protective hair formulas."
  },
  {
    id: "re-growth-curly-adv",
    title: "Curly Zig Zag",
    category: ["male", "individual"],
    price: "₹3,000",
    numericPrice: 3000,
    duration: "180 min",
    description: "Full royal styling, premium HD airbrush makeup, active scalp hair treatment, and exclusive consultation for your special day."
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




  
  // --- FEMALE SERVICES ---
  {
    id: "female-hair-cut",
    title: "Advance Hair Cut with Blow Dry",
    category: ["female", "styling"],
    price: "₹800",
    numericPrice: 800,
    duration: "60 min",
    description: "Precision style haircut, wash, blow dry, and finishing style tailored to your face shape."
  },
  {
    id: "female-highlight",
    title: "Highlight's",
    category: ["female", "styling"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "90 min",
    description: "Professional streak highlights to add dimensions, depth, and vibrant color tones to your hair."
  },
  {
    id: "female-smoothing",
    title: "Smoothing",
    category: ["female", "treatments"],
    price: "₹5,000",
    numericPrice: 5000,
    duration: "180 min",
    description: "Intense hair smoothing treatment for silky, frizz-free, and perfectly straight hair."
  },
  {
    id: "female-kerashine",
    title: "Kerashine",
    category: ["female", "treatments"],
    price: "₹8,000",
    numericPrice: 8000,
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
    price: "₹2,000",
    numericPrice: 2000,
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
    price: "₹2,000",
    numericPrice: 2000,
    duration: "90 min",
    description: "Gorgeous party-ready makeup, subtle contouring, eye styling, and skin finish matching the occasion."
  },
  {
    id: "female-hair-colour",
    title: "Golal Hair Colour",
    category: ["female", "styling"],
    price: "₹5,000",
    numericPrice: 5000,
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
    price: "₹1,000",
    numericPrice: 1000,
    duration: "30 min",
    description: "Full set acrylic or gel nail extensions with customized shape extensions."
  },
  {
    id: "female-ombre",
    title: "Ombre Nails",
    category: ["female", "individual"],
    price: "₹1,500",
    numericPrice: 1500,
    duration: "30 min",
    description: "Trendy gradient ombre nail art shading with smooth transitions."
  },
  {
    id: "female-chrome",
    title: "Chrome Nails",
    category: ["female", "individual"],
    price: "₹2,000",
    numericPrice: 2000,
    duration: "45 min",
    description: "Luxury metallic chrome finish nail art coating over gel extensions."
  },
  {
    id: "female-engagement-makeup",
    title: "Engagement Makeup",
    category: ["female", "individual"],
    price: "₹10,000",
    numericPrice: 10000,
    duration: "90 min",
    description: "High-definition engagement makeup with matching hairstyling, lash extensions, and draping support."
  },
  {
    id: "female-reception-makeup",
    title: "Reception Makeup",
    category: ["female", "individual"],
    price: "₹20,000",
    numericPrice: 20000,
    duration: "120 min",
    description: "Premium HD/Airbrush reception makeup, complex hairdos, detailed draping, and styling for a flawless look."
  },
  {
    id: "male-bridal-makeup",
    title: "Bridal Makeup",
    category: ["female", "individual"],
    price: "₹30,000",
    numericPrice: 30000,
    duration: "240 min",
    description: "Elite HD airbrush groom/bridal makeup, skin prep, hair setting, and styling for a flawless royal appearance."
  },
];
>>>>>>> 890c720324ad05e67170ab7e79c767ca827d8da4
