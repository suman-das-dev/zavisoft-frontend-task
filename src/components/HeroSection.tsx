import React, { useState } from 'react';

const HeroSection = () => {
  const [mainImage, setMainImage] = useState("/src/assets/Hero-Section-img-3.jpg");

  const thumbnails = [
    { id: 1, src: "/src/assets/Hero-Section-img-2.jpg" },
    { id: 2, src: "/src/assets/Hero-Section-img-1.jpg" },
  
  ];

  return (
    <section className="w-full mb-10 mt-10">
      {/* Main Container with Rounded Corners */}
      <div className="relative w-full h-[750px] rounded-[40px] overflow-hidden">
        
        <img 
          src={mainImage}
          alt="Main Display" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out" 
        />

        {/* Floating Tag (Left Side) */}
        <div className="absolute left-0 top-1/4 bg-black text-white px-4 py-8 rounded-r-2xl [writing-mode:vertical-lr] rotate-180 text-xs font-medium tracking-widest uppercase">
          Nike product of the year
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-lg z-10">
          <div className="inline-block border-2 border-yellow-400 p-1 mb-4">
             <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none">
                Nike Air Max
             </h2>
          </div>
          <p className="text-white text-lg md:text-xl font-medium mb-6 leading-tight">
            Nike introducing the new air max for everyone's comfort
          </p>
          <button className="bg-[#4B6BFB] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Side Thumbnails (Right Side) */}
        <div className="absolute right-6 bottom-10 flex flex-col gap-4 z-10">
          {thumbnails.map((thumb) => (
            <div 
              key={thumb.id}
              onClick={() => setMainImage(thumb.src)} 
              className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl border-2 overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 ${
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