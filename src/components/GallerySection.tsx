import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Expand, ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySectionProps {
  id: string;
  title: string;
  images: string[];
  scrollingImages?: string[];
}

export default function GallerySection({ id, title, images, scrollingImages }: GallerySectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const selectedIndex = selectedImage ? images.indexOf(selectedImage) : -1;

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== -1) {
      const nextIndex = (selectedIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  }, [selectedIndex, images]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== -1) {
      const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
      setSelectedImage(images[prevIndex]);
    }
  }, [selectedIndex, images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (isModalOpen) {
          setIsModalOpen(false);
        }
      }
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isModalOpen, handleNext, handlePrev]);

  return (
    <section id={id} className="py-24 relative overflow-hidden bg-black">

      <div className="px-6 md:px-12 mb-12 flex justify-between items-end relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter uppercase"
        >
          {title}
        </motion.h2>
        
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-neon-violet transition-colors duration-300"
        >
          Show All
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative group/gallery pb-8">
        {/* Violet glow behind scrolling images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[150%] bg-neon-violet/15 blur-[120px] rounded-[100%] pointer-events-none z-0"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] relative z-10">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-6 pr-6">
              {(scrollingImages || images.slice(0, 6)).map((src, idx) => (
                <div
                  key={`${setIdx}-${idx}`}
                  className="relative flex-none w-[48vw] md:w-[24vw] lg:w-[18vw] aspect-[4/5] group/item cursor-pointer rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/20 p-2 shadow-xl hover:shadow-2xl hover:shadow-neon-violet/40 hover:bg-white/10 hover:border-white/30 transition-all duration-500"
                  onClick={() => setSelectedImage(src)}
                >
                  {/* Liquid glass edge reflection */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-neon-violet/20 via-transparent to-white/20 opacity-50 pointer-events-none"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                    <img 
                      src={src} 
                      alt={`${title} ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glossy overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-30 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-neon-violet/0 group-hover/item:bg-neon-violet/30 transition-colors duration-500 mix-blend-overlay pointer-events-none"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <Expand size={32} className="text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Grid View */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="sticky top-0 z-10 flex justify-between items-center px-6 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
              <h3 className="text-2xl font-bold tracking-tight uppercase">{title} Gallery</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 md:p-12 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
              {images.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative aspect-square cursor-pointer group rounded-lg overflow-hidden bg-white/5"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`${title} thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Expand size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-20"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-20"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>

            <motion.img 
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl shadow-neon-violet/20 z-10"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
