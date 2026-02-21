import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Lucide থেকে ইমপোর্ট করা হলো

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
        // Lucide-এ TikTok আইকন না থাকায় ডিজাইনের একুরেসি ঠিক রাখতে অরিজিনাল SVG ব্যবহার করা হয়েছে
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 01-3.975-4.685H12v13.369a3.27 3.27 0 11-3.27-3.27c.527 0 1.02.126 1.45.347V8.56a7.11 7.11 0 105.15 6.84v-4.83a8.683 8.683 0 004.259 1.13v-3.86a4.766 4.766 0 01-0.005-1.154z"/></svg> 
      },
    ]
  };

  return (
    <footer className=" py-10 ">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ================= TOP BLUE SECTION ================= */}
        <div className="bg-[#4B6BFB] rounded-t-[48px] px-8 md:px-16 pt-16 pb-28 flex flex-col md:flex-row justify-between items-start md:items-center relative z-0">
          <div className="max-w-xl mb-12 md:mb-0">
            <h2 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-[900] leading-[1.1] mb-4">
              JOIN OUR KICKSPLUS<br />CLUB & GET 15% OFF
            </h2>
            <p className="text-white text-[16px] md:text-lg font-medium mb-6">
              Sign up for free! Join the community.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-white/70 px-4 py-3 rounded-lg text-white placeholder-white/80 focus:outline-none focus:border-white w-full sm:w-[320px]" 
              />
              <button 
                type="submit" 
                className="bg-[#232321] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-widest hover:bg-black transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
          
          {/* Top Logo Image Container */}
          <div className="flex-shrink-0 relative w-full md:w-auto flex justify-end">
            <img 
              src="/src/assets/footer1.png" 
              alt="KICKS Logo" 
              className="h-[60px] md:h-[100px] object-contain" 
            />
          </div>
        </div>

        {/* ================= BOTTOM BLACK SECTION ================= */}
        <div className="bg-[#232321] rounded-[48px] px-8 md:px-16 lg:px-6 pt-16 pb-12 relative -mt-16 z-10 overflow-hidden flex flex-col min-h-[550px]">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-12 relative z-20 mb-auto">
            
            {/* About us */}
            <div className="lg:pr-10">
              <h3 className="text-[#FFA52F] text-[22px] font-bold mb-5">About us</h3>
              <p className="text-[#E7E7E3] text-[15px] font-medium leading-[1.6]">
                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories Loop */}
            <div>
              <h3 className="text-[#FFA52F] text-[22px] font-bold mb-5">Categories</h3>
              <ul className="text-[#E7E7E3] text-[15px] font-medium space-y-3">
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
              <h3 className="text-[#FFA52F] text-[22px] font-bold mb-5">Company</h3>
              <ul className="text-[#E7E7E3] text-[15px] font-medium space-y-3">
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
              <h3 className="text-[#FFA52F] text-[22px] font-bold mb-5">Follow us</h3>
              <div className="flex gap-5 items-center">
                {footerData.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.path} 
                    aria-label={social.name}
                    className="text-[#E7E7E3] hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Giant Bottom Logo Image Container */}
          <div className="mt-20 w-full flex justify-center translate-y-[26%] pointer-events-none z-10">
            <img 
              src="/src/assets/footer.png" 
              alt="Giant KICKS Background" 
              className="w-full max-w-[1200px] object-cover" 
            />
          </div>
        </div>

      </div>
        
      {/* Copyright */}
      <div className="text-center text-[#232321] text-[14px] font-medium mt-8">
        © All rights reserved
      </div>
    </footer>
  );
}

export default Footer;