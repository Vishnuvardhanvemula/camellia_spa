"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { premiumServices, luxuryServices, bodyPolishing } from "@/data/spa-data";

export default function Home() {
  const featured = [
    premiumServices.find(s => s.name === "Swedish"),
    premiumServices.find(s => s.name === "Deep Tissue"),
    premiumServices.find(s => s.name === "Traditional Thai"),
    luxuryServices.find(s => s.name === "Hot Stone Massage"),
    bodyPolishing.find(s => s.name === "Chocolate Body Polishing"),
    luxuryServices.find(s => s.name === "Four Hands (Signature) Massage"),
  ].filter(Boolean) as any[];

  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-end md:items-center pb-24 md:pb-0 pt-32">
        <Image
          src="/images/img1.jpg"
          alt="Camellia Spa Luxury Room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-espresso/10" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Camellia Spa · Wellness & Restoration
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[88px] text-cream font-serif leading-[1.05] max-w-3xl">
              A softer way<br />to slow down.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-cream/80 text-lg md:text-xl max-w-xl font-light mt-4"
          >
            A warm, private space designed for unhurried moments of care and relaxation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link href="/contact" className="px-8 py-4 bg-gold text-espresso hover:bg-cream transition-colors text-sm uppercase tracking-widest font-semibold text-center">
              Book Your Appointment
            </Link>
            <Link href="/services" className="px-8 py-4 border border-cream/30 text-cream hover:bg-cream/10 transition-colors text-sm uppercase tracking-widest font-semibold text-center">
              Explore Treatments
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/img2.jpg"
              alt="Treatment Room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <span className="text-burgundy text-xs font-bold tracking-[0.2em] uppercase">
              The Camellia Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-espresso leading-tight">
              Warm spaces. Thoughtful treatments. Time to breathe.
            </h2>
            <p className="text-espresso/70 text-lg leading-relaxed">
              Step into a sanctuary of calm. Our private rooms are carefully prepared to offer you personal attention in a quiet, unhurried environment. Let go of the outside world and immerse yourself in deep relaxation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-espresso leading-tight mb-4">
                Treatments worth lingering over.
              </h2>
              <p className="text-espresso/60 text-lg">
                Explore selected experiences from the Camellia Spa menu.
              </p>
            </div>
            <Link href="/services" className="text-burgundy font-semibold text-sm uppercase tracking-widest hover:text-espresso transition-colors">
              View Full Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((service, i) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 border border-espresso/10 hover:border-burgundy/30 hover:shadow-xl transition-all duration-500 bg-cream rounded-sm flex flex-col"
              >
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-2xl font-serif text-espresso pr-4">{service.name}</h3>
                  <span className="text-gold font-medium">₹{'price' in service ? service.price : service.duration60}</span>
                </div>
                <div className="mt-auto flex justify-between items-center text-sm">
                  <span className="text-espresso/50 uppercase tracking-wider text-xs">
                    {'duration60' in service ? '60 / 90 MIN' : 'POLISHING'}
                  </span>
                  <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="text-burgundy opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 uppercase tracking-wider text-xs font-semibold">
                    Enquire <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Space Gallery */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="relative h-[60vh] md:h-[80vh] rounded-xl overflow-hidden group">
            <Image src="/images/img3.jpg" alt="Couples Treatment" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-8 left-8 text-cream text-xs uppercase tracking-[0.2em] font-semibold">Shared Rituals</span>
          </div>
          <div className="relative h-[60vh] md:h-[80vh] rounded-xl overflow-hidden group">
            <Image src="/images/img4.jpg" alt="Treatment Room" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-8 left-8 text-cream text-xs uppercase tracking-[0.2em] font-semibold">Private Rest</span>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-deep-burgundy text-cream">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-cream">
            Make self-care a ritual.
          </h2>
          <p className="text-cream/70 text-lg">
            Invest in your well-being with our exclusive spa packages designed for ongoing renewal.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gold/20 p-10 flex flex-col gap-6 hover:bg-gold/5 transition-colors">
            <h3 className="text-3xl font-serif">₹8,000</h3>
            <div className="h-[1px] w-full bg-gold/20" />
            <ul className="text-cream/80 space-y-4 text-sm tracking-wide">
              <li>• 8 Hours total</li>
              <li>• 8 Months Validity</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-8 text-gold uppercase tracking-widest text-xs font-semibold">Enquire →</Link>
          </div>

          <div className="border border-gold p-10 flex flex-col gap-6 bg-burgundy shadow-2xl scale-105 relative z-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-espresso px-4 py-1 text-[10px] uppercase tracking-widest font-bold">Recommended</span>
            <h3 className="text-4xl font-serif text-white">₹15,000</h3>
            <div className="h-[1px] w-full bg-gold/40" />
            <ul className="text-cream space-y-4 text-sm tracking-wide font-medium">
              <li>• 15 Hours total</li>
              <li>• 15 Months Validity</li>
              <li className="text-gold">• + 5 Luxury Hours</li>
              <li className="text-gold">• + 10 Premium Hours</li>
              <li className="text-gold">• Body Scrubbing OR Head Massage with Navrathna Oil</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-8 text-white hover:text-gold uppercase tracking-widest text-xs font-semibold transition-colors">Enquire →</Link>
          </div>

          <div className="border border-gold/20 p-10 flex flex-col gap-6 hover:bg-gold/5 transition-colors">
            <h3 className="text-3xl font-serif">₹12,000</h3>
            <div className="h-[1px] w-full bg-gold/20" />
            <ul className="text-cream/80 space-y-4 text-sm tracking-wide">
              <li>• 12 Hours total</li>
              <li>• 12 Months Validity</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-8 text-gold uppercase tracking-widest text-xs font-semibold">Enquire →</Link>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <div className="inline-block border border-gold/30 px-8 py-6 rounded-sm bg-burgundy/30">
            <span className="text-gold uppercase tracking-widest text-xs font-bold block mb-2">Complimentary</span>
            <p className="text-cream text-lg font-serif">Head Massage with Navrathna Oil & Body Scrubbing</p>
            <span className="text-cream/60 text-sm mt-1 block">For every massage</span>
          </div>
          <p className="text-cream/40 text-xs mt-8">Package details are subject to spa terms. Confirm availability and inclusions before purchase.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-espresso text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
          <h2 className="text-4xl md:text-6xl font-serif text-cream leading-tight">
            Your time can wait.<br/>Your well-being doesn&apos;t have to.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <Link href="/contact" className="px-10 py-5 bg-gold text-espresso hover:bg-cream transition-colors text-sm uppercase tracking-widest font-semibold">
              Book Your Appointment
            </Link>
            <Link href="/contact" className="px-10 py-5 border border-cream/30 text-cream hover:bg-cream/10 transition-colors text-sm uppercase tracking-widest font-semibold">
              Call Camellia Spa
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
