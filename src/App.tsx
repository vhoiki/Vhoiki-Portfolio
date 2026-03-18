/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GallerySection from './components/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const photographyModules = import.meta.glob('/public/photography/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG}', { eager: true });
const photographyImages = Object.keys(photographyModules)
  .map(path => path.replace('/public', ''))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const graphicDesignModules = import.meta.glob('/public/graphic-design/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG}', { eager: true });
const graphicDesignImages = Object.keys(graphicDesignModules)
  .map(path => path.replace('/public', ''))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const getRandomItems = (arr: string[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function App() {
  const randomPhotographyScrolling = useMemo(() => getRandomItems(photographyImages, 10), []);
  const randomGraphicDesignScrolling = useMemo(() => getRandomItems(graphicDesignImages, 10), []);

  return (
    <div className="bg-dark-base min-h-screen text-white selection:bg-neon-violet/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <GallerySection 
          id="photography" 
          title="Photography" 
          images={photographyImages}
          scrollingImages={randomPhotographyScrolling} 
        />
        <GallerySection 
          id="graphic-design" 
          title="Graphic Design" 
          images={graphicDesignImages}
          scrollingImages={randomGraphicDesignScrolling} 
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

