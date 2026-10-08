"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { premiumServices, luxuryServices, bodyPolishing, packages } from "@/data/spa-data";
import Link from "next/link";
import clsx from "clsx";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"premium" | "luxury" | "polishing" | "packages">("premium");

  const tabs = [
    { id: "premium", label: "Premium Services" },
    { id: "luxury", label: "Luxury Services" },
    { id: "polishing", label: "Body Polishing" },
    { id: "packages", label: "Packages" },
  ] as const;

  return (
    <main className="flex min-h-screen flex-col bg-cream text-espresso">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:pt-40 md:pb-20 md:px-12 bg-espresso text-cream text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
          Camellia Spa
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-tight">Comprehensive Wellness Menu</h1>
        <p className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our extensive portfolio of therapeutic massages, advanced body polishes, and curated spa packages, each executed with uncompromising standards of care.
        </p>
      </section>

      {/* Tabs */}
      <section className="sticky top-[80px] z-10 bg-cream/95 backdrop-blur-md border-b border-espresso/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 overflow-x-auto hide-scrollbar">
          <div className="flex gap-6 md:gap-16 min-w-max py-4 md:py-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={clsx(
                  "px-2 py-3 md:py-6 text-xs md:text-sm uppercase tracking-widest font-semibold transition-colors relative whitespace-nowrap",
                  activeTab === tab.id ? "text-burgundy" : "text-espresso/40 hover:text-espresso"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 md:px-12 max-w-4xl mx-auto w-full min-h-[50vh]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "premium" && (
            <>
              <div className="mb-8 md:mb-12 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Premium Therapies</h2>
                <p className="text-espresso/70 text-sm md:text-base max-w-xl">
                  Expertly designed therapeutic treatments focused on relieving muscular tension, improving circulation, and promoting deep physical recovery.
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8">
              {premiumServices.map((service, i) => (
                <div key={i} className="flex flex-col py-6 md:py-8 border-b border-espresso/10 gap-4 group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h3 className="text-xl md:text-2xl font-serif group-hover:text-burgundy transition-colors pr-4">{service.name}</h3>
                    <div className="flex items-center gap-6 md:gap-16 w-full md:w-auto text-sm font-medium">
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-espresso/50 text-[10px] md:text-xs uppercase tracking-widest mb-1">60 Min</span>
                        <span>₹{service.duration60}</span>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-espresso/50 text-[10px] md:text-xs uppercase tracking-widest mb-1">90 Min</span>
                        <span>₹{service.duration90}</span>
                      </div>
                      <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="ml-auto md:ml-4 px-4 py-2 border border-espresso/20 text-espresso uppercase tracking-widest text-[10px] font-bold hover:bg-espresso hover:text-gold transition-colors rounded-sm whitespace-nowrap">
                        Enquire
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-espresso/70 mt-2">
                    <div className="flex-1">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso/50 mb-2">The Process</h4>
                      <p className="leading-relaxed">{service.process}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso/50 mb-2">Key Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </>
          )}

          {activeTab === "luxury" && (
            <>
              <div className="mb-8 md:mb-12 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Luxury Experiences</h2>
                <p className="text-espresso/70 text-sm md:text-base max-w-xl">
                  Indulgent, multi-sensory experiences utilizing premium formulations and advanced techniques for ultimate relaxation.
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8">
              {luxuryServices.map((service, i) => (
                <div key={i} className="flex flex-col py-6 md:py-8 border-b border-espresso/10 gap-4 group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className={clsx("text-xl md:text-2xl font-serif transition-colors", service.isSignature ? "text-burgundy" : "group-hover:text-burgundy")}>
                        {service.name}
                      </h3>
                      {service.isSignature && (
                        <span className="text-gold text-[10px] md:text-xs uppercase tracking-widest font-semibold mt-2 block">Signature Experience</span>
                      )}
                    </div>
                    <div className="flex items-center gap-6 md:gap-16 w-full md:w-auto text-sm font-medium">
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-espresso/50 text-[10px] md:text-xs uppercase tracking-widest mb-1">60 Min</span>
                        <span>₹{service.duration60}</span>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-espresso/50 text-[10px] md:text-xs uppercase tracking-widest mb-1">90 Min</span>
                        <span>₹{service.duration90}</span>
                      </div>
                      <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="ml-auto md:ml-4 px-4 py-2 border border-espresso/20 text-espresso uppercase tracking-widest text-[10px] font-bold hover:bg-espresso hover:text-gold transition-colors rounded-sm whitespace-nowrap">
                        Enquire
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-espresso/70 mt-2">
                    <div className="flex-1">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso/50 mb-2">The Process</h4>
                      <p className="leading-relaxed">{service.process}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso/50 mb-2">Key Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </>
          )}

          {activeTab === "polishing" && (
            <div>
              <div className="mb-8 md:mb-12 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Advanced Body Exfoliation</h2>
                <p className="text-espresso/70 text-sm md:text-base max-w-xl">
                  Refine and revitalize your skin's texture with our luxurious body polishing treatments, designed to deeply hydrate and restore your natural radiance.
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                {bodyPolishing.map((service, i) => (
                  <div key={i} className="flex flex-col py-6 md:py-8 border-b border-espresso/10 gap-4 group">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <h3 className="text-xl md:text-2xl font-serif group-hover:text-burgundy transition-colors pr-4">{service.name}</h3>
                      <div className="flex items-center gap-6 w-full md:w-auto text-sm font-medium">
                        <span className="text-base md:text-lg">₹{service.price}</span>
                        <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="ml-auto md:ml-4 px-4 py-2 border border-espresso/20 text-espresso uppercase tracking-widest text-[10px] font-bold hover:bg-espresso hover:text-gold transition-colors rounded-sm whitespace-nowrap">
                          Enquire
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-espresso/70 mt-2">
                      <div className="flex-1">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso/50 mb-2">The Process</h4>
                        <p className="leading-relaxed">{service.process}</p>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso/50 mb-2">Key Benefits</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {service.benefits.map((benefit, bIdx) => (
                            <li key={bIdx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "packages" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {packages.map((pkg, i) => (
                <div key={i} className={clsx(
                  "p-6 md:p-10 flex flex-col gap-4 md:gap-6",
                  pkg.featured ? "bg-burgundy text-cream border-gold" : "bg-white border-espresso/10 text-espresso"
                )}>
                  <h3 className="text-3xl md:text-4xl font-serif">₹{pkg.price.toLocaleString()}</h3>
                  <div className={clsx("h-[1px] w-full", pkg.featured ? "bg-gold/40" : "bg-espresso/10")} />
                  <ul className="space-y-3 md:space-y-4 text-xs md:text-sm tracking-wide font-medium flex-1">
                    <li>• {pkg.hours} Hours total</li>
                    <li>• {pkg.validityMonths} Months Validity</li>
                    {pkg.inclusions.map((inc, j) => (
                      <li key={j} className={pkg.featured ? "text-gold" : "text-burgundy"}>• {inc}</li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=${encodeURIComponent("Spa Package Enquiry")}`} className={clsx(
                    "mt-6 md:mt-8 uppercase tracking-widest text-[10px] md:text-xs font-bold transition-colors inline-flex items-center gap-2",
                    pkg.featured ? "text-white hover:text-gold" : "text-burgundy hover:text-espresso"
                  )}>
                    Enquire <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Booking CTA */}
      <section className="relative z-20 py-16 md:py-24 px-6 md:px-12 bg-deep-burgundy text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6 md:mb-8">Ready to deeply relax?</h2>
        <Link href="/contact" className="inline-block px-8 py-4 md:px-10 md:py-5 bg-gold text-espresso hover:bg-cream transition-colors text-xs md:text-sm uppercase tracking-widest font-semibold">
          Reserve Your Time
        </Link>
      </section>

      <Footer />

      {/* Sticky Mobile Actions */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-espresso text-cream flex text-center z-40 border-t border-gold/20 pb-safe">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex-1 py-4 text-xs uppercase tracking-widest font-bold text-gold block active:bg-gold/10 transition-colors">WhatsApp</a>
      </div>
    </main>
  );
}
