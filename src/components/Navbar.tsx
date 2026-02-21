import React, { useState } from "react";
import { FlameIcon, Search, User, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const links = [
    { name: "New Drops", icon: FlameIcon, link: '/new-drops' },
    { name: "Men", icon: ChevronDown, link: '/man' }, 
    { name: "Women", icon: ChevronDown, link: '/women' }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems || []);
    
    const cartItemCount = cartItems.reduce((sum, item) => sum + (item.cartQuantity || 1), 0);
    return (
        <nav className="w-full py-4 px-4 md:px-0 relative"> 
            <div className="bg-white rounded-[24px] px-4 md:px-8 py-3 md:py-4 flex justify-between items-center shadow-sm border border-gray-100 mx-auto">
                
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Menu size={24} className="text-[#232321]" />
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link, index) => (
                        <Link 
                            to={link.link} 
                            key={index} 
                            className="flex items-center gap-1 text-sm font-bold text-[#232321] hover:opacity-70 transition-all"
                        >
                            {link.name}
                            {link.icon && (
                                <link.icon 
                                    size={16} 
                                    className={link.name === "New Drops" ? "text-orange-500 fill-orange-500" : "text-black"} 
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex-shrink-0">
                    <Link to={'/'}> 
                        <img src="/src/assets/Group.png" alt="Logo" className="h-6 md:h-8 w-auto object-contain" /> 
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-3 md:gap-6">
                    <button className="hidden md:block hover:scale-110 transition-transform">
                        <Search size={22} className="text-[#232321]" />
                    </button>
                    <button className="hover:scale-110 transition-transform hidden md:block">
                        <User size={20} className="text-[#232321] md:w-[22px]" />
                    </button>
                    <Link 
                        to={'/cart'} 
                        className="bg-[#FFA52F] w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-[10px] md:text-xs font-bold shadow-md hover:bg-orange-400 transition-colors"
                    >
                        {cartItemCount}
                    </Link>
                </div>
            </div>

            {/* ================= MOBILE SIDEBAR MENU ================= */}
            
            <div 
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div 
                className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 shadow-2xl ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-10">
                    <img src="/src/assets/Group.png" alt="Logo" className="h-6 w-auto object-contain" />
                    <button onClick={() => setIsMenuOpen(false)} className="hover:rotate-90 transition-transform">
                        <X size={28} className="text-[#232321]" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="flex flex-col gap-6">
                    {links.map((link, index) => (
                        <Link 
                            to={link.link} 
                            key={index}
                            onClick={() => setIsMenuOpen(false)} 
                            className="flex items-center gap-3 text-lg font-bold text-[#232321] hover:text-[#4B6BFB] transition-colors pb-4 border-b border-gray-100"
                        >
                            {link.icon && (
                                <link.icon 
                                    size={22} 
                                    className={link.name === "New Drops" ? "text-orange-500 fill-orange-500" : "text-gray-500"} 
                                />
                            )}
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Bottom Section (Optional: My Account / Search) */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-4">
                    <Link to="/search" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-lg font-bold text-[#232321]">
                        <Search size={22} className="text-gray-500" />
                        Search
                    </Link>
                    <Link to="/account" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-lg font-bold text-[#232321]">
                        <User size={22} className="text-gray-500" />
                        My Account
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;