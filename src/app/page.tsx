'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import ListingCard from '@/components/ListingCard';
import { Play } from 'lucide-react';

export default function HomePage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <main className="relative bg-white text-black">
      <Header />

      {/* Hero Video Section with Overlay Text */}
      <section className="pt-40 pb-20 flex flex-col items-center justify-center px-6 md:px-20 lg:px-32">
        {/* Inset video thumbnail with play icon overlay */}
        <div
          className="relative w-full h-[70vh] overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
          onClick={() => setIsLightboxOpen(true)}
        >
          {/* Thumbnail image */}
          <img
            className="w-full h-full object-cover mb-10 transition-transform duration-500 group-hover:scale-105"
            src="https://pub-92ed77724e604fad91dde281455ebb7b.r2.dev/Screenshot%202025-11-12%20at%205.10.05%20PM.png"
            alt="Darnell White Design"
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/80 backdrop-blur-md rounded-full p-6 shadow-lg">
              <Play className="w-10 h-10 text-black" />
            </div>
          </div>
        </div>

        {/* Lightbox overlay for video */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent close on video click
            >
              <video
                src="https://pub-92ed77724e604fad91dde281455ebb7b.r2.dev/0406a8f9-1fdf-4904-bc10-f078bb5f9f7b.MOV"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
              {/* Close button */}
              <button
                className="absolute top-4 right-4 bg-white/70 hover:bg-white text-black rounded-full p-2 transition"
                onClick={() => setIsLightboxOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>

     

      <Footer />
    </main>
  );
}
