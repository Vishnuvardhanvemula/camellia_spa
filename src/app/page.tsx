"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { premiumServices, luxuryServices, bodyPolishing, articles } from "@/data/spa-data";

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
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/50 to-espresso/20" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            <h1 className="text-5xl md:text-7xl lg:text-[88px] text-cream font-serif leading-[1.05] max-w-3xl drop-shadow-lg">
              Elevate Your<br />Well-Being.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-cream/95 text-lg md:text-xl max-w-xl font-light mt-4 drop-shadow-md"
          >
            Experience a sanctuary of holistic rejuvenation, where expert therapies and uncompromising service restore balance to mind and body.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link href="/contact" className="px-8 py-4 bg-gold text-espresso hover:bg-cream transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl text-sm uppercase tracking-widest font-semibold text-center">
              Book Your Appointment
            </Link>
            <Link href="/services" className="px-8 py-4 border-2 border-cream/40 text-cream hover:bg-cream/20 hover:border-cream/70 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-widest font-semibold text-center backdrop-blur-md shadow-lg hover:shadow-xl">
              Explore Treatments
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 cursor-pointer hidden md:flex"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-cream/60 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cream/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[50vh] md:h-[80vh] w-full rounded-2xl overflow-hidden order-2 md:order-1"
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
            className="flex flex-col gap-6 order-1 md:order-2"
          >
            <span className="text-burgundy text-xs font-bold tracking-[0.2em] uppercase">
              The Camellia Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-espresso leading-tight">
              The Pinnacle of Spa Excellence.
            </h2>
            <p className="text-espresso/70 text-base md:text-lg leading-relaxed">
              Step into an oasis of absolute tranquility. Our meticulously curated treatments and serene environments are designed to provide the ultimate restorative experience, delivered by highly trained wellness professionals dedicated to your care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-espresso leading-tight mb-4">
                Signature Therapies.
              </h2>
              <p className="text-espresso/60 text-base md:text-lg">
                Discover our most sought-after treatments, tailored to alleviate stress, relieve tension, and enhance your natural vitality.
              </p>
            </div>
            <Link href="/services" className="text-burgundy font-semibold text-xs md:text-sm uppercase tracking-widest hover:text-espresso transition-colors">
              View Full Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 md:p-8 border border-espresso/10 hover:border-burgundy/30 hover:shadow-xl transition-all duration-500 bg-cream rounded-sm flex flex-col"
              >
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <h3 className="text-xl md:text-2xl font-serif text-espresso pr-4">{service.name}</h3>
                  <span className="text-gold font-medium text-sm md:text-base">₹{'price' in service ? service.price : service.duration60}</span>
                </div>
                <div className="mt-auto flex justify-between items-center text-xs md:text-sm">
                  <span className="text-espresso/50 uppercase tracking-wider text-[10px] md:text-xs">
                    {'duration60' in service ? '60 / 90 MIN' : 'POLISHING'}
                  </span>
                  <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="text-burgundy opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 uppercase tracking-wider text-[10px] md:text-xs font-semibold">
                    Enquire <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Space Gallery */}
      <section className="py-20 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-caramel/10 border border-gold/40 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">Sanctuary Gallery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-espresso leading-tight">
              Spaces Bathed in Gold & Caramel Warmth.
            </h2>
          </div>
          <p className="text-espresso/70 text-sm md:text-base max-w-md">
            Step into suites meticulously curated with natural teakwood, ambient amber lighting, and serene acoustic isolation designed for deep renewal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[55vh] md:h-[80vh] rounded-2xl overflow-hidden group border border-gold/30 hover:border-gold transition-all duration-700 shadow-2xl">
            <Image 
              src="/images/img3.jpg" 
              alt="Couples Treatment Suite" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
            <div className="absolute inset-0 bg-caramel/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex justify-between items-end">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-[0.25em] font-bold block mb-1">Suite 01 • Dual Sanctuary</span>
                <h3 className="text-cream text-xl md:text-2xl font-serif">Shared Rejuvenation Rituals</h3>
              </div>
              <span className="hidden sm:inline-block px-3 py-1.5 bg-espresso/80 backdrop-blur-md border border-gold/40 text-gold text-[10px] uppercase tracking-widest font-semibold rounded-sm">
                Curated Space
              </span>
            </div>
          </div>

          <div className="relative h-[55vh] md:h-[80vh] rounded-2xl overflow-hidden group border border-gold/30 hover:border-gold transition-all duration-700 shadow-2xl">
            <Image 
              src="/images/img4.jpg" 
              alt="Private Treatment Room" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
            <div className="absolute inset-0 bg-caramel/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex justify-between items-end">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-[0.25em] font-bold block mb-1">Suite 02 • Solo Retreat</span>
                <h3 className="text-cream text-xl md:text-2xl font-serif">Acoustic & Sensory Stillness</h3>
              </div>
              <span className="hidden sm:inline-block px-3 py-1.5 bg-espresso/80 backdrop-blur-md border border-gold/40 text-gold text-[10px] uppercase tracking-widest font-semibold rounded-sm">
                Private Room
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Articles & Journal */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-ivory border-y border-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-caramel/10 border border-gold/30 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                <span className="text-caramel text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">The Camellia Journal</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-espresso leading-tight">
                Articles & Restorative Wisdom.
              </h2>
            </div>
            <p className="text-espresso/70 text-sm md:text-base max-w-md">
              Evidence-based insights into botanical therapy, nervous system regulation, and modern self-care rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-cream border border-gold/20 hover:border-gold p-8 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-caramel to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold text-espresso/50 mb-4">
                    <span className="text-caramel font-bold">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif text-espresso group-hover:text-burgundy transition-colors leading-snug mb-4">
                    {article.title}
                  </h3>
                  <p className="text-espresso/70 text-xs md:text-sm leading-relaxed mb-8">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-espresso/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-espresso/40 font-medium">{article.date}</span>
                  <Link href="/services" className="text-gold hover:text-espresso text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 transition-colors">
                    Explore Ritual <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-deep-burgundy text-cream">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-serif leading-tight mb-6 text-cream">
            Make self-care a ritual.
          </h2>
          <p className="text-cream/70 text-base md:text-lg">
            Invest in your well-being with our exclusive spa packages designed for ongoing renewal.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-gold/20 p-6 md:p-10 flex flex-col gap-4 md:gap-6 hover:bg-gold/5 transition-colors">
            <h3 className="text-2xl md:text-3xl font-serif">₹8,000</h3>
            <div className="h-[1px] w-full bg-gold/20" />
            <ul className="text-cream/80 space-y-3 md:space-y-4 text-xs md:text-sm tracking-wide">
              <li>• 8 Hours total</li>
              <li>• 8 Months Validity</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-6 md:pt-8 text-gold uppercase tracking-widest text-[10px] md:text-xs font-semibold">Enquire →</Link>
          </div>

          <div className="border border-gold p-6 md:p-10 flex flex-col gap-4 md:gap-6 bg-burgundy shadow-2xl scale-105 relative z-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-espresso px-4 py-1 text-[10px] uppercase tracking-widest font-bold">Recommended</span>
            <h3 className="text-3xl md:text-4xl font-serif text-white">₹15,000</h3>
            <div className="h-[1px] w-full bg-gold/40" />
            <ul className="text-cream space-y-3 md:space-y-4 text-xs md:text-sm tracking-wide font-medium">
              <li>• 15 Hours total</li>
              <li>• 15 Months Validity</li>
              <li className="text-gold">• + 5 Luxury Hours</li>
              <li className="text-gold">• + 10 Premium Hours</li>
              <li className="text-gold">• Body Scrubbing OR Head Massage with Navrathna Oil</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-6 md:pt-8 text-white hover:text-gold uppercase tracking-widest text-[10px] md:text-xs font-semibold transition-colors">Enquire →</Link>
          </div>

          <div className="border border-gold/20 p-6 md:p-10 flex flex-col gap-4 md:gap-6 hover:bg-gold/5 transition-colors">
            <h3 className="text-2xl md:text-3xl font-serif">₹12,000</h3>
            <div className="h-[1px] w-full bg-gold/20" />
            <ul className="text-cream/80 space-y-3 md:space-y-4 text-xs md:text-sm tracking-wide">
              <li>• 12 Hours total</li>
              <li>• 12 Months Validity</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-6 md:pt-8 text-gold uppercase tracking-widest text-[10px] md:text-xs font-semibold">Enquire →</Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 md:mt-16 text-center">
          <div className="inline-block border border-gold/30 px-6 md:px-8 py-4 md:py-6 rounded-sm bg-burgundy/30">
            <span className="text-gold uppercase tracking-widest text-[10px] md:text-xs font-bold block mb-2">Complimentary</span>
            <p className="text-cream text-base md:text-lg font-serif">Head Massage with Navrathna Oil & Body Scrubbing</p>
            <span className="text-cream/60 text-xs md:text-sm mt-1 block">For every massage</span>
          </div>
          <p className="text-cream/80 text-[10px] md:text-xs mt-6 md:mt-8">Package details are subject to spa terms. Confirm availability and inclusions before purchase.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-espresso text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 md:gap-10">
          <h2 className="text-3xl md:text-6xl font-serif text-cream leading-tight">
            Prioritize Your Wellness Today.
          </h2>
          <p className="text-cream/70 text-base md:text-lg">
            Secure your reservation and embark on a transformative journey of relaxation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full justify-center">
            <Link href="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-gold text-espresso hover:bg-cream transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl text-xs md:text-sm uppercase tracking-widest font-semibold">
              Book Your Appointment
            </Link>
            <Link href="/contact" className="px-8 py-4 md:px-10 md:py-5 border border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-xs md:text-sm uppercase tracking-widest font-semibold backdrop-blur-sm">
              Call Camellia Spa
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile Actions */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-espresso text-cream flex text-center z-40 border-t border-gold/20 pb-safe">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex-1 py-4 text-xs uppercase tracking-widest font-bold text-gold block active:bg-gold/10 transition-colors">WhatsApp</a>
      </div>
    </main>
  );
}
