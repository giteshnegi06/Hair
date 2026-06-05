import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-luxury-bg border-t border-luxury-text/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-4">
            <div className="text-3xl font-serif font-bold tracking-tighter mb-8">
              SAHIL <span className="text-luxury-gold">HAIR</span> EXPERT
            </div>
            <p className="text-luxury-text/60 max-w-sm leading-relaxed font-light">
              Redefining luxury grooming in Karnal. Our studio is dedicated to the art of
              transformation and the celebration of individual style.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.5em] font-semibold mb-8 text-luxury-gold ">Sector 34 Studio</h4>
            
            <address className="not-italic text-xs text-luxury-text/80 space-y-3 font-light mb-6">
              <p>Dugra Colony Road, Sec 34, Karnal, Haryana 132001 India</p>
            </address>
            <div className="text-xs text-luxury-text/80 space-y-1 font-light">
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold block mb-1">Contact</span>
              <a href="tel:+919992310449" className="block hover:text-luxury-gold transition-colors">+91 99923 10449</a>
              <a href="mailto:hello@sahilhairexpert.com" className="block hover:text-luxury-gold transition-colors">hello@sahilhairexpert.com</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex flex-col gap-2 mb-3">
              <h4 className="text-[11px] uppercase tracking-[0.5em] font-semibold text-luxury-gold">Sector 13 Studio</h4>
              <span className="text-[9px] uppercase tracking-widest bg-amber-500/70 text-black px-2 py-0.5 font-extrabold rounded w-fit">
                Special for Women's Hair Treatment
              </span>
            </div>
            <address className="not-italic text-xs text-luxury-text/80 space-y-3 font-light mb-6">
              <p>227L, First Floor, Model Town, Karnal, Haryana 132001</p>
            </address>
            <div className="text-xs text-luxury-text/80 space-y-1 font-light">
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold block mb-1">Contact</span>
              <a href="tel:+919992310449" className="block hover:text-luxury-gold transition-colors">+91 90342 73847</a>
              <a href="mailto:hello@sahilhairexpert.com" className="block hover:text-luxury-gold transition-colors">hello@sahilhairexpert.com</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-luxury-gold">Social</h4>
            <div className="flex md:flex-col gap-2">
              <a
                href="https://www.instagram.com/sahil__hair_expert?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.facebook.com/SahilHairStylist/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50 hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://youtube.com/@hairexpertsahil?si=uo1fGLZ_VXCa1CKA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-luxury-text/10 hover:border-luxury-gold hover:text-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 text-luxury-text/50 hover:scale-105"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-luxury-text/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-luxury-text/40 text-center md:text-left">
            © 2026 Sahil Hair Expert. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-luxury-text/40">
            <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
