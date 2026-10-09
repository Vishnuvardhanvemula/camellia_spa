"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoGallery } from "@/components/VideoGallery";
import { spaArticles, SpaArticle } from "@/data/spa-articles";

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Spa Guide", "Treatment Comparison", "Local Wellness"];

  const filteredArticles = activeCategory === "All"
    ? spaArticles
    : spaArticles.filter(art => art.category === activeCategory);

  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 bg-espresso text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-espresso/50 to-espresso pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-caramel/20 border border-gold/40 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              The Camellia Journal
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
            Wellness Guides &amp; Spa Wisdom in KR Puram.
          </h1>

          <p className="text-cream/80 text-base md:text-lg max-w-2xl leading-relaxed">
            Expert insights on massage therapies, hygiene standards, treatment selection, and holistic recovery tailored for East Bengaluru residents.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="sticky top-[72px] md:top-[80px] z-30 bg-cream/95 backdrop-blur-md border-b border-espresso/10 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-3 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-burgundy text-cream shadow-md"
                  : "bg-white/80 text-espresso/70 hover:bg-gold/10 hover:text-espresso border border-espresso/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredArticles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-gold/20 hover:border-gold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              {/* Optional Image Banner */}
              {article.featuredImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-espresso">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-espresso/80 backdrop-blur-md border border-gold/40 text-gold text-[10px] uppercase tracking-wider font-semibold rounded-sm">
                    {article.category}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-espresso/50 uppercase tracking-wider mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-serif text-espresso group-hover:text-burgundy transition-colors leading-snug mb-3">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-espresso/70 text-xs md:text-sm leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-espresso/10 flex items-center justify-between">
                  <span className="text-espresso/50 text-xs">
                    {article.faqs.length} FAQs included
                  </span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-gold font-bold uppercase tracking-widest text-xs flex items-center gap-1.5 group-hover:text-burgundy transition-colors"
                  >
                    Read Guide <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Video Sanctuary Walkthrough Section */}
      <div className="bg-ivory border-y border-gold/20">
        <VideoGallery
          title="Sanctuary in Motion: KR Puram Video Tour."
          subtitle="Explore the serene ambience, textured gold treatment suites, and tranquil amenities of Camellia Spa before your visit."
          tag="Virtual Ambience Tour"
        />
      </div>

      {/* Booking CTA Banner */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-deep-burgundy text-center text-cream">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-bold mb-3">
            KR Puram Sanctuary
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Ready to Experience True Rest?
          </h2>
          <p className="text-cream/80 text-sm md:text-base mb-8 max-w-xl">
            Book your appointment at Camellia Spa near Kodigehalli Main Road, Basavanapura, KR Puram today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-espresso hover:bg-cream transition-all duration-300 hover:scale-[1.02] text-xs uppercase tracking-widest font-semibold"
            >
              Book Your Appointment
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-cream/30 text-cream hover:bg-cream/10 transition-all text-xs uppercase tracking-widest font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
