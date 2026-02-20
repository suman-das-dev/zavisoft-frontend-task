import { FlameIcon, Search, User, ChevronDown } from "lucide-react"; 
import { Link } from "react-router-dom";

const links = [
    { name: "New Drops", icon: FlameIcon, link: '/new-drops' },
    { name: "Men", icon: ChevronDown, link: '/man' }, 
    { name: "Women", icon: ChevronDown, link: '/women' }
];

const Navbar = () => {
    return (
        <nav className="w-full px-6 py-4"> 
            <div className="bg-white rounded-[24px] px-8 py-4 flex justify-between items-center shadow-sm border border-gray-100 max-w-7xl mx-auto">
                
                {/* ১. বাম পাশের মেনু */}
                <div className="flex items-center gap-8">
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
                <Link to={'/'}> <img src="/src/assets/Group.png" alt="Logo" className="h-8 w-32" /> </Link>
                </div>

                <div className="flex items-center gap-6">
                    <button className="hover:scale-110 transition-transform">
                        <Search size={22} className="text-[#232321]" />
                    </button>
                    <button className="hover:scale-110 transition-transform">
                        <User size={22} className="text-[#232321]" />
                    </button>
                    <Link 
                        to={'/cart'} 
                        className="bg-[#FFA52F] w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold shadow-md hover:bg-orange-400 transition-colors"
                    >
                        0
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;