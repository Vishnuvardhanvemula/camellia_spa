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
      <section className="pt-40 pb-20 px-6 md:px-12 bg-espresso text-cream text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
          Camellia Spa
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Comprehensive Wellness Menu</h1>
        <p className="text-cream/70 text-lg max-w-2xl mx-auto">
          Explore our extensive portfolio of therapeutic massages, advanced body polishes, and curated spa packages, each executed with uncompromising standards of care.
        </p>
      </section>

      {/* Tabs */}
      <section className="sticky top-[80px] z-10 bg-cream/95 backdrop-blur-md border-b border-espresso/10">
        <div className="max-w-4xl mx-auto px-6 overflow-x-auto hide-scrollbar">
          <div className="flex gap-8 md:gap-16 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={clsx(
                  "py-6 text-sm uppercase tracking-widest font-semibold transition-colors relative",
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
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full min-h-[50vh]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "premium" && (
            <>
              <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-serif mb-4">Premium Therapies</h2>
                <p className="text-espresso/70 max-w-xl">
                  Expertly designed therapeutic treatments focused on relieving muscular tension, improving circulation, and promoting deep physical recovery.
                </p>
              </div>
              <div className="flex flex-col gap-8">
              {premiumServices.map((service, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-espresso/10 gap-4 group">
                  <h3 className="text-2xl font-serif group-hover:text-burgundy transition-colors">{service.name}</h3>
                  <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto text-sm font-medium">
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-espresso/50 text-xs uppercase tracking-widest mb-1">60 Min</span>
                      <span>₹{service.duration60}</span>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-espresso/50 text-xs uppercase tracking-widest mb-1">90 Min</span>
                      <span>₹{service.duration90}</span>
                    </div>
                    <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="ml-auto md:ml-4 px-4 py-2 border border-espresso/20 text-espresso uppercase tracking-widest text-[10px] font-bold hover:bg-espresso hover:text-gold transition-colors rounded-sm">
                      Enquire
                    </Link>
                  </div>
                </div>
              ))}
              </div>
            </>
          )}

          {activeTab === "luxury" && (
            <>
              <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-serif mb-4">Luxury Experiences</h2>
                <p className="text-espresso/70 max-w-xl">
                  Indulgent, multi-sensory experiences utilizing premium formulations and advanced techniques for ultimate relaxation.
                </p>
              </div>
              <div className="flex flex-col gap-8">
              {luxuryServices.map((service, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-espresso/10 gap-4 group">
                  <div>
                    <h3 className={clsx("text-2xl font-serif transition-colors", service.isSignature ? "text-burgundy" : "group-hover:text-burgundy")}>
                      {service.name}
                    </h3>
                    {service.isSignature && (
                      <span className="text-gold text-xs uppercase tracking-widest font-semibold mt-2 block">Signature Experience</span>
                    )}
                  </div>
                  <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto text-sm font-medium">
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-espresso/50 text-xs uppercase tracking-widest mb-1">60 Min</span>
                      <span>₹{service.duration60}</span>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-espresso/50 text-xs uppercase tracking-widest mb-1">90 Min</span>
                      <span>₹{service.duration90}</span>
                    </div>
                    <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="ml-auto md:ml-4 px-4 py-2 border border-espresso/20 text-espresso uppercase tracking-widest text-[10px] font-bold hover:bg-espresso hover:text-gold transition-colors rounded-sm">
                      Enquire
                    </Link>
                  </div>
                </div>
              ))}
              </div>
            </>
          )}

          {activeTab === "polishing" && (
            <div>
              <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-serif mb-4">Advanced Body Exfoliation</h2>
                <p className="text-espresso/70 max-w-xl">
                  Refine and revitalize your skin's texture with our luxurious body polishing treatments, designed to deeply hydrate and restore your natural radiance.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                {bodyPolishing.map((service, i) => (
                  <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-espresso/10 gap-4 group">
                    <h3 className="text-2xl font-serif group-hover:text-burgundy transition-colors">{service.name}</h3>
                    <div className="flex items-center gap-8 w-full md:w-auto text-sm font-medium">
                      <span className="text-lg">₹{service.price}</span>
                      <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="ml-auto md:ml-4 px-4 py-2 border border-espresso/20 text-espresso uppercase tracking-widest text-[10px] font-bold hover:bg-espresso hover:text-gold transition-colors rounded-sm">
                        Enquire
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "packages" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {packages.map((pkg, i) => (
                <div key={i} className={clsx(
                  "p-10 flex flex-col gap-6",
                  pkg.featured ? "bg-burgundy text-cream border-gold" : "bg-white border-espresso/10 text-espresso"
                )}>
                  <h3 className="text-4xl font-serif">₹{pkg.price.toLocaleString()}</h3>
                  <div className={clsx("h-[1px] w-full", pkg.featured ? "bg-gold/40" : "bg-espresso/10")} />
                  <ul className="space-y-4 text-sm tracking-wide font-medium flex-1">
                    <li>• {pkg.hours} Hours total</li>
                    <li>• {pkg.validityMonths} Months Validity</li>
                    {pkg.inclusions.map((inc, j) => (
                      <li key={j} className={pkg.featured ? "text-gold" : "text-burgundy"}>• {inc}</li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=${encodeURIComponent("Spa Package Enquiry")}`} className={clsx(
                    "mt-8 uppercase tracking-widest text-xs font-bold transition-colors inline-flex items-center gap-2",
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
      <section className="relative z-20 py-24 px-6 md:px-12 bg-deep-burgundy text-center">
        <h2 className="text-4xl font-serif text-cream mb-8">Ready to deeply relax?</h2>
        <Link href="/contact" className="inline-block px-10 py-5 bg-gold text-espresso hover:bg-cream transition-colors text-sm uppercase tracking-widest font-semibold">
          Reserve Your Time
        </Link>
      </section>

      <Footer />
    </main>
  );
}
