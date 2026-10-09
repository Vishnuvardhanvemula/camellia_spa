"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { spaVideos, SpaVideo } from "@/data/spa-articles";

interface VideoGalleryProps {
  title?: string;
  subtitle?: string;
  tag?: string;
  className?: string;
  limit?: number;
}

export function VideoGallery({
  title = "Experience Camellia Spa in Motion.",
  subtitle = "Take a virtual tour of our private suites, warm ambient lighting, and serene therapy rooms in KR Puram.",
  tag = "Sanctuary Tour",
  className = "",
  limit,
}: VideoGalleryProps) {
  const [activeVideo, setActiveVideo] = useState<SpaVideo | null>(null);

  const displayVideos = limit ? spaVideos.slice(0, limit) : spaVideos;

  return (
    <section className={`py-16 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full ${className}`}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-caramel/10 border border-gold/40 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
              {tag}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-espresso leading-tight">
            {title}
          </h2>
        </div>
        <p className="text-espresso/70 text-sm md:text-base max-w-md leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* 4 Video Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {displayVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-gold/30 hover:border-gold shadow-xl hover:shadow-2xl transition-all duration-500 bg-espresso flex flex-col cursor-pointer"
            onClick={() => setActiveVideo(video)}
          >
            {/* Thumbnail Box */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold/90 text-espresso flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-cream transition-all duration-300">
                  <Play className="w-5 h-5 md:w-6 md:h-6 fill-espresso ml-0.5" />
                </div>
              </div>

              {/* Category & Duration Tags */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-semibold">
                <span className="px-2.5 py-1 bg-espresso/80 backdrop-blur-md border border-gold/30 text-gold uppercase tracking-wider rounded-sm">
                  {video.category}
                </span>
                {video.duration && (
                  <span className="px-2 py-0.5 bg-espresso/70 text-cream/90 rounded-sm">
                    {video.duration}
                  </span>
                )}
              </div>
            </div>

            {/* Video Details */}
            <div className="p-5 flex flex-col flex-1 justify-between bg-espresso text-cream">
              <div>
                <h3 className="font-serif text-lg md:text-xl text-cream group-hover:text-gold transition-colors leading-snug mb-2">
                  {video.title}
                </h3>
                <p className="text-cream/70 text-xs line-clamp-2 leading-relaxed">
                  {video.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cream/10 flex items-center justify-between text-xs">
                <span className="text-gold font-medium uppercase tracking-widest text-[10px]">
                  Watch Tour
                </span>
                <span className="text-gold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Luxury Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-espresso border border-gold/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 md:p-6 border-b border-gold/20 flex justify-between items-center bg-espresso">
                <div>
                  <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold block mb-1">
                    {activeVideo.category}
                  </span>
                  <h3 className="text-cream font-serif text-lg md:text-2xl">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2 rounded-full text-cream/70 hover:text-gold hover:bg-white/10 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 16:9 Responsive Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 bg-espresso flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-cream/70">
                <p className="max-w-xl">
                  {activeVideo.subtitle}
                </p>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-5 py-2.5 bg-gold text-espresso hover:bg-cream transition-colors uppercase tracking-widest text-[10px] font-bold rounded-sm whitespace-nowrap"
                >
                  Close Tour
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
