"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";
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

  // Prevent background scroll when video modal is open on mobile
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <section className={`py-14 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full ${className}`}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-caramel/10 border border-gold/40 rounded-full mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
              {tag}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-espresso leading-tight">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-espresso/70 text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
            {subtitle}
          </p>
          <span className="md:hidden text-[10px] uppercase tracking-widest text-caramel font-semibold flex items-center gap-1">
            Swipe to see all suites →
          </span>
        </div>
      </div>

      {/* Mobile Swipeable / Desktop Responsive Grid */}
      <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
        {displayVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center group relative rounded-2xl overflow-hidden border border-gold/30 hover:border-gold shadow-xl hover:shadow-2xl transition-all duration-300 bg-espresso flex flex-col cursor-pointer active:scale-[0.98]"
            onClick={() => setActiveVideo(video)}
          >
            {/* Portrait Aspect Ratio for Shorts & Vertical Mobile Tour */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-espresso">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
              
              {/* Glowing Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/90 text-espresso flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-cream transition-all duration-300">
                  <Play className="w-6 h-6 fill-espresso ml-0.5" />
                </div>
              </div>

              {/* Tags */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center text-[10px] font-semibold">
                <span className="px-2.5 py-1 bg-espresso/85 backdrop-blur-md border border-gold/40 text-gold uppercase tracking-wider rounded-sm shadow-sm">
                  {video.category}
                </span>
                <span className="px-2.5 py-1 bg-burgundy/90 text-cream uppercase tracking-widest font-semibold rounded-sm border border-gold/20 shadow-sm backdrop-blur-md">
                  Virtual Tour
                </span>
              </div>

              {/* In-Card Title at Bottom for Mobile Polish */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-espresso via-espresso/90 to-transparent">
                <h3 className="font-serif text-lg md:text-xl text-cream group-hover:text-gold transition-colors leading-snug mb-1.5">
                  {video.title}
                </h3>
                <p className="text-cream/75 text-xs line-clamp-2 leading-relaxed mb-3">
                  {video.subtitle}
                </p>
                <div className="flex items-center justify-between text-xs pt-2.5 border-t border-cream/15">
                  <span className="text-gold font-bold uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                    Explore Suite <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="text-cream/50 text-[10px] uppercase tracking-wider font-medium">
                    HD Video
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile-Optimized Vertical Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[400px] sm:max-w-[420px] bg-espresso border border-gold/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-3.5 sm:p-4 border-b border-gold/20 flex justify-between items-center bg-espresso shrink-0">
                <div className="pr-3">
                  <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold block mb-0.5">
                    {activeVideo.category} • Virtual Tour
                  </span>
                  <h3 className="text-cream font-serif text-sm sm:text-base line-clamp-1">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-full text-cream/70 hover:text-gold hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* 9:16 Shorts Ratio Container: Native Vertical Player with Top Title Bar Cropped */}
              <div className="relative aspect-[9/16] w-full max-h-[72vh] bg-black overflow-hidden flex items-center justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`}
                  title={activeVideo.title}
                  className="w-full h-[calc(100%+60px)] -mt-[52px] border-0 pointer-events-auto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer with Direct App Link */}
              <div className="p-3 sm:p-4 bg-espresso flex items-center justify-between gap-3 text-xs text-cream/70 shrink-0 border-t border-gold/15">
                <a
                  href={`https://youtube.com/shorts/${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-cream text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
                >
                  Open in YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-4 py-2 bg-gold text-espresso hover:bg-cream transition-colors uppercase tracking-widest text-[10px] font-bold rounded-sm whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
