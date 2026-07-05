"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    // Images Staggered Animation
    gsap.fromTo(
      imagesRef.current,
      { scale: 0.8, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    // Text Article Animation
    gsap.fromTo(
      textRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  const addToImagesRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background relative z-10 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            A Grand <span className="text-festive">Reunion</span> of Hearts
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Witness the incredible emotional bonding as all SSC batches of Naldanga Bhusion School came together on one field.
          </p>
        </div>

        {/* Article Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Grid for Bhusion Cup */}
            <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50 h-full min-h-[400px]">
              <div 
                className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group shadow-md"
                ref={addToImagesRef}
              >
                <Image
                  src="/bhusioncup/bc1.jpeg"
                  alt="Bhusion Football Cup 2024 Action"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg drop-shadow-md">The Grand Match</h3>
                </div>
              </div>
              <div 
                className="relative h-48 rounded-2xl overflow-hidden group shadow-md"
                ref={addToImagesRef}
              >
                <Image
                  src="/bhusioncup/bc2.jpeg"
                  alt="Bhusion Football Cup Players"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div 
                className="relative h-48 rounded-2xl overflow-hidden group shadow-md"
                ref={addToImagesRef}
              >
                <Image
                  src="/bhusioncup/bc3.jpeg"
                  alt="Bhusion Football Cup Celebration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center" ref={textRef}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-festive/10 text-festive font-semibold text-sm mb-6 w-max border border-festive/20">
                Emotion & Bonding
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                When All SSC Batches Reunited
              </h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                The historic field of <strong className="text-nature font-semibold">Naldanga Bhusion Pilot High School</strong> witnessed something truly magical. For this special football match, <em>all</em> the SSC batches from throughout the years came together, transforming a simple game into an unforgettable grand reunion.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                It was an overwhelming display of emotional bonding, shared nostalgia, and lifelong friendships. The cheers, the hugs, and the tears of joy perfectly captured the essence of <span className="font-semibold text-gold">Utkorsho Bandhon</span>—where our deep roots and shared memories mean more than just winning a trophy.
              </p>
              <button className="self-start px-8 py-3 bg-festive text-white font-bold rounded-full hover:bg-red-800 transition-colors shadow-lg hover:shadow-red-900/20 active:scale-95 duration-200">
                View Full Moments
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
