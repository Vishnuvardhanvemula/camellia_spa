"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { premiumServices, luxuryServices, bodyPolishing } from "@/data/spa-data";
import { ChevronDown } from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService,
    date: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
      setTimeout(() => {
        const formCard = document.getElementById('form-card');
        if (formCard) {
          const isMobile = window.innerWidth < 768;
          const navbarHeight = isMobile ? 72 : 80;
          const mobileFooterHeight = isMobile ? 60 : 0;
          const totalOffset = navbarHeight + mobileFooterHeight + 8;

          const elementPosition = formCard.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - totalOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 600);
    }
  }, [initialService]);

  const allServices = [
    ...premiumServices.map(s => s.name),
    ...luxuryServices.map(s => s.name),
    ...bodyPolishing.map(s => s.name),
    "Spa Package Enquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Default business number - client to replace with real one
    const businessNumber = "919876543210"; 
    
    const text = `Camellia Spa - Booking Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service || "Not specified"}
Preferred Date: ${formData.date || "Not specified"}
Preferred Time: ${formData.time || "Not specified"}

Message:
${formData.message || "Please confirm availability and pricing."}

Thank you for choosing Camellia Spa.
We'll get back to you shortly.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${businessNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-espresso/60">Full Name</label>
        <input 
          required
          type="text" 
          id="name"
          className="border-b border-espresso/20 pb-2 bg-transparent focus:outline-none focus:border-burgundy transition-colors"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-espresso/60">Phone Number</label>
        <input 
          required
          type="tel" 
          id="phone"
          className="border-b border-espresso/20 pb-2 bg-transparent focus:outline-none focus:border-burgundy transition-colors"
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label className="text-xs uppercase tracking-widest font-semibold text-espresso/60">Preferred Service</label>
        
        <div 
          className="relative border-b border-espresso/20 pb-2 cursor-pointer group"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex items-center justify-between">
            <span className={formData.service ? "text-espresso" : "text-espresso/40"}>
              {formData.service || "Select a treatment"}
            </span>
            <ChevronDown className={`w-4 h-4 text-espresso/40 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {isDropdownOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-espresso/10 shadow-2xl rounded-xl z-50 overflow-hidden flex flex-col max-h-72 overflow-y-auto" data-lenis-prevent>
              <div className="p-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-espresso/40 px-4 py-2">Premium Services</div>
                {premiumServices.map(s => (
                  <div 
                    key={s.name}
                    className="px-4 py-2.5 text-sm hover:bg-gold/10 hover:text-burgundy cursor-pointer transition-colors rounded-lg"
                    onClick={() => { setFormData({...formData, service: s.name}); setIsDropdownOpen(false); }}
                  >
                    {s.name}
                  </div>
                ))}
                
                <div className="text-[10px] font-bold uppercase tracking-widest text-espresso/40 px-4 py-2 mt-2">Luxury Services</div>
                {luxuryServices.map(s => (
                  <div 
                    key={s.name}
                    className="px-4 py-2.5 text-sm hover:bg-gold/10 hover:text-burgundy cursor-pointer transition-colors rounded-lg"
                    onClick={() => { setFormData({...formData, service: s.name}); setIsDropdownOpen(false); }}
                  >
                    {s.name}
                  </div>
                ))}

                <div className="text-[10px] font-bold uppercase tracking-widest text-espresso/40 px-4 py-2 mt-2">Body Polishing</div>
                {bodyPolishing.map(s => (
                  <div 
                    key={s.name}
                    className="px-4 py-2.5 text-sm hover:bg-gold/10 hover:text-burgundy cursor-pointer transition-colors rounded-lg"
                    onClick={() => { setFormData({...formData, service: s.name}); setIsDropdownOpen(false); }}
                  >
                    {s.name}
                  </div>
                ))}

                <div className="text-[10px] font-bold uppercase tracking-widest text-espresso/40 px-4 py-2 mt-2">Packages</div>
                <div 
                  className="px-4 py-2.5 text-sm hover:bg-gold/10 hover:text-burgundy cursor-pointer transition-colors rounded-lg"
                  onClick={() => { setFormData({...formData, service: "Spa Package Enquiry"}); setIsDropdownOpen(false); }}
                >
                  Spa Package Enquiry
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-xs uppercase tracking-widest font-semibold text-espresso/60">Date</label>
          <input 
            type="date" 
            id="date"
            className="border-b border-espresso/20 pb-2 bg-transparent focus:outline-none focus:border-burgundy transition-colors"
            value={formData.date}
            onChange={e => setFormData({...formData, date: e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-xs uppercase tracking-widest font-semibold text-espresso/60">Time</label>
          <input 
            type="time" 
            id="time"
            className="border-b border-espresso/20 pb-2 bg-transparent focus:outline-none focus:border-burgundy transition-colors"
            value={formData.time}
            onChange={e => setFormData({...formData, time: e.target.value})}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-espresso/60">Message (Optional)</label>
        <textarea 
          id="message"
          rows={3}
          className="border-b border-espresso/20 pb-2 bg-transparent focus:outline-none focus:border-burgundy transition-colors resize-none"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <button type="submit" className="mt-8 w-full py-5 bg-gold text-espresso uppercase tracking-widest font-semibold text-sm hover:bg-espresso hover:text-gold transition-colors">
        Send via WhatsApp
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-espresso">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:pt-40 md:pb-20 md:px-12 bg-espresso text-cream text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-tight">Request a Reservation.</h1>
        <p className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Connect with our guest relations team to schedule your bespoke wellness experience.
        </p>
      </section>

      {/* Content */}
      <section id="booking-form" className="py-16 md:py-24 px-4 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

        {/* Contact Info */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-burgundy mb-4">Location</h2>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Camellia Spa</h3>
            <p className="text-base md:text-lg text-espresso/80 max-w-sm leading-relaxed">
              No. 96, 5th Cross, Muneshwara Layout, Kodigehalli Main Road, Basavanapura, Bangalore – 560 036
            </p>
          </div>

          <div className="w-full aspect-[4/3] bg-espresso/5 rounded-xl overflow-hidden relative">
             <iframe
               src="https://maps.google.com/maps?q=13.004697799682617,77.71403503417969&t=&z=15&ie=UTF8&iwloc=&output=embed"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-125 opacity-80"
             ></iframe>
          </div>
        </div>

        {/* Form */}
        <div id="form-card" className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-espresso/5">
          <h2 className="text-xl md:text-2xl font-serif mb-2">Submit Your Inquiry</h2>
          <p className="text-[10px] md:text-xs text-espresso/50 uppercase tracking-widest font-semibold mb-6 md:mb-8">Please note that all reservations are subject to availability. Our team will contact you shortly to confirm your appointment.</p>
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-sm font-semibold tracking-widest text-espresso/50 uppercase">Loading form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>

      </section>
      
      {/* Sticky Mobile Actions */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-espresso text-cream flex text-center z-40 border-t border-gold/20 pb-safe">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex-1 py-4 text-xs uppercase tracking-widest font-bold text-gold block active:bg-gold/10 transition-colors">WhatsApp</a>
      </div>

      <Footer />
    </main>
  );
}
