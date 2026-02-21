import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react'; 

const Footer = () => {

  // ================= FOOTER DATA ================= //
  const footerData = {
    categories: [
      { name: "Runners", path: "#" },
      { name: "Sneakers", path: "#" },
      { name: "Basketball", path: "#" },
      { name: "Outdoor", path: "#" },
      { name: "Golf", path: "#" },
      { name: "Hiking", path: "#" },
    ],
    company: [
      { name: "About", path: "#" },
      { name: "Contact", path: "#" },
      { name: "Blogs", path: "#" },
    ],
    socials: [
      { 
        name: "Facebook", 
        path: "#", 
        icon: <Facebook size={20} strokeWidth={2} absoluteStrokeWidth /> 
      },
      { 
        name: "Instagram", 
        path: "#", 
        icon: <Instagram size={20} strokeWidth={2} absoluteStrokeWidth /> 
      },
      { 
        name: "Twitter", 
        path: "#", 
        icon: <Twitter size={20} strokeWidth={2} absoluteStrokeWidth fill="currentColor" /> 
      },
      { 
        name: "TikTok", 
        path: "#", 
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 01-3.975-4.685H12v13.369a3.27 3.27 0 11-3.27-3.27c.527 0 1.02.126 1.45.347V8.56a7.11 7.11 0 105.15 6.84v-4.83a8.683 8.683 0 004.259 1.13v-3.86a4.766 4.766 0 01-0.005-1.154z"/></svg> 
      },
    ]
  };

  return (
    <footer className="py-10 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ================= TOP BLUE SECTION ================= */}
        <div className="bg-[#4B6BFB] rounded-3xl md:rounded-t-[48px] px-6 md:px-16 pt-8 pb-16 md:pt-16 md:pb-28 flex flex-col md:flex-row justify-between items-start md:items-center relative z-0">
          <div className="max-w-xl mb-8 md:mb-0 w-full">
            <h2 className="text-white text-[28px] md:text-[48px] lg:text-[56px] font-[900] leading-[1.1] mb-2 md:mb-4">
              Join our KicksPlus<br className="hidden md:block" /> Club & get 15% off
            </h2>
            <p className="text-white text-[14px] md:text-lg font-medium mb-4 md:mb-6">
              Sign up for free! Join the community.
            </p>
            <form className="flex flex-row gap-2 w-full">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-white/70 px-4 py-2 md:py-3 rounded-lg text-white placeholder-white/80 focus:outline-none focus:border-white flex-1 text-sm md:text-base min-w-0" 
              />
              <button 
                type="submit" 
                className="bg-[#232321] text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-bold text-xs md:text-sm tracking-widest hover:bg-black transition-colors shrink-0"
              >
                SUBMIT
              </button>
            </form>
          </div>
          
          <div className="flex-shrink-0 relative w-full md:w-auto flex justify-start md:justify-end mt-4 md:mt-0">
            <img 
              src="/src/assets/footer1.png" 
              alt="KICKS Logo" 
              className="h-[40px] md:h-[100px] object-contain" 
            />
          </div>
        </div>

        {/* ================= BOTTOM BLACK SECTION ================= */}
        <div className="bg-[#232321] rounded-3xl md:rounded-[48px] px-6 md:px-16 lg:px-6 pt-10 md:pt-16 pb-12 relative -mt-6 md:-mt-16 z-10 overflow-hidden flex flex-col min-h-[400px] md:min-h-[550px]">
          
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-x-20 md:gap-y-12 relative z-20 mb-auto">
            
            {/* About us */}
            <div className="lg:pr-10">
              <h3 className="text-[#FFA52F] text-[18px] md:text-[22px] font-bold mb-3 md:mb-5">About us</h3>
              <p className="text-[#E7E7E3] text-[13px] md:text-[15px] font-medium leading-[1.6]">
                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories Loop */}
            <div>
              <h3 className="text-[#FFA52F] text-[18px] md:text-[22px] font-bold mb-3 md:mb-5">Categories</h3>
              <ul className="text-[#E7E7E3] text-[13px] md:text-[15px] font-medium space-y-2 md:space-y-3">
                {footerData.categories.map((category, index) => (
                  <li key={index}>
                    <a href={category.path} className="hover:text-white transition-colors">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Loop */}
            <div>
              <h3 className="text-[#FFA52F] text-[18px] md:text-[22px] font-bold mb-3 md:mb-5">Company</h3>
              <ul className="text-[#E7E7E3] text-[13px] md:text-[15px] font-medium space-y-2 md:space-y-3">
                {footerData.company.map((item, index) => (
                  <li key={index}>
                    <a href={item.path} className="hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us Loop */}
            <div>
              <h3 className="text-[#FFA52F] text-[18px] md:text-[22px] font-bold mb-3 md:mb-5">Follow us</h3>
              <div className="flex gap-4 md:gap-5 items-center">
                {footerData.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.path} 
                    aria-label={social.name}
                    className="text-[#E7E7E3] hover:text-white transition-colors"
                  >
                    <span className="inline-block transform scale-90 md:scale-100">
                        {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Giant Bottom Logo Image Container */}
          <div className="mt-12 md:mt-20 w-full flex justify-center translate-y-[84%] md:translate-y-[26%] pointer-events-none z-10">
            <img 
              src="/src/assets/footer.png" 
              alt="Giant KICKS Background" 
              className="w-full max-w-[1200px] object-cover" 
            />
          </div>
        </div>

      </div>
        
      {/* Copyright */}
      <div className="text-center text-[#232321] text-[12px] md:text-[14px] font-medium mt-6 md:mt-8">
        © All rights reserved
      </div>
    </footer>
  );
}

export default Footer;