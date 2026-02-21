import React, { useState } from 'react';

const HeroSection = () => {
  const [mainImage, setMainImage] = useState("/assets/Hero-Section-img-3.jpg");

  const thumbnails = [
    { id: 1, src: "/assets/Hero-Section-img-2.jpg" },
    { id: 2, src: "/assets/Hero-Section-img-1.jpg" },
  ];

  return (
    <section className="w-full mb-8 mt-6 px-4 md:px-0">
      <div className="relative w-full h-[450px] md:h-[750px] rounded-[32px] md:rounded-[40px] overflow-hidden">
        
        <img 
          src={mainImage}
          alt="Main Display" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out" 
        />

        {/* Floating Tag */}
        <div className="absolute left-0 top-1/4 bg-[#232321] text-white px-2 py-4 md:px-4 md:py-8 rounded-r-xl md:rounded-r-2xl [writing-mode:vertical-lr] rotate-180 text-[10px] md:text-xs font-medium tracking-widest uppercase shadow-lg">
          Nike product of the year
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-6 md:bottom-10 left-5 md:left-12 max-w-[220px] md:max-w-lg z-10">
          <div className="inline-block md:border-2 border-yellow-400 md:p-1 mb-2 md:mb-4">
             {/* Text Size Adjusted for Mobile */}
             <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase leading-none drop-shadow-md">
                Nike Air Max
             </h2>
          </div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-medium mb-4 md:mb-6 leading-snug drop-shadow-md">
            Nike introducing the new air max for everyone's comfort
          </p>
          <button className="bg-[#4B6BFB] text-white px-5 py-2 md:px-8 md:py-3 rounded-md md:rounded-lg text-sm md:text-base font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Side Thumbnails */}
        <div className="absolute right-4 bottom-6 md:right-6 md:bottom-10 flex flex-col gap-3 md:gap-4 z-10">
          {thumbnails.map((thumb) => (
            <div 
              key={thumb.id}
              onClick={() => setMainImage(thumb.src)} 
              className={`w-14 h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-xl md:rounded-3xl border-2 overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 ${
                mainImage === thumb.src ? "border-yellow-400" : "border-white"
              }`}
            >
              <img src={thumb.src} alt={`View ${thumb.id}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;