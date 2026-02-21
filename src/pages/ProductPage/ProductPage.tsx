import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "@/components/Loader";
import { useGetProductQuery } from "@/store/apis/ProductsApi";
import { Heart } from "lucide-react"; 
import Products from "./Products";

const ProductPage = () => {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useGetProductQuery(productId);
  
  const [activeImg, setActiveImg] = useState(0);

  if (isLoading) return <div className=" flex items-center justify-center"><Loader variant="fullscreen" /></div>;
  if (!product) return <div className="text-center py-20 font-bold text-2xl">Product not found</div>;

  // API Data 
  const images = product?.images || [];
  const title = product?.title || "Product Title";
  const price = product?.price ? `$${product.price}.00` : "$0.00";
  const description = product?.description || "";

  return (
   <div>
     <div className="max-w-[1440px] mx-auto py-10 md:px-0 px-4 font-sans">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-10">

        {/* ================= LEFT: IMAGES SECTION ================= */}
        <div className="w-full lg:w-1/2">
          
          {/* ১. Desktop View (2x2 Grid) */}
          <div className="hidden md:grid grid-cols-2 gap-2">
            {images.slice(0, 4).map((image, idx) => {
              let roundedClass = "rounded-xl"; 
              if (idx === 0) roundedClass = "rounded-tl-[48px]"; 
              if (idx === 1) roundedClass = "rounded-tr-[48px]"; 
              if (idx === 2) roundedClass = "rounded-bl-[48px]"; 
              if (idx === 3) roundedClass = "rounded-br-[48px]"; 

              return (
                <div key={idx} className={`bg-[#F4F4F4] overflow-hidden aspect-square flex items-center justify-center ${roundedClass}`}>
                  <img 
                    src={image} 
                    alt={`Product ${idx}`} 
                    className=" object-contain hover:scale-110 transition-transform duration-500 cursor-pointer" 
                  />
                </div>
              );
            })}
          </div>

          {/* ২. Mobile View (Main Image + Thumbnails) */}
          <div className="md:hidden flex flex-col gap-4">
            {/* Main Active Image */}
            <div className="bg-[#F4F4F4] rounded-[32px]  aspect-square flex items-center justify-center">
              <img 
                src={images[activeImg]} 
                alt="Selected Product" 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
            {/* Dots / Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 rounded-lg scrollbar-hide">
              {images.map((image, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImg(idx)} 
                  className={`shrink-0 w-20 h-20 bg-[#F4F4F4] rounded-lg border-2 transition-colors ${
                    activeImg === idx ? 'border-[#4B6BFB]' : 'border-transparent'
                  }`}
                >
                  <img src={image} className="w-full h-full object-contain mix-blend-multiply" alt="Thumbnail" />
                </button>
              ))}
            </div>
          </div>
        </div>


        {/* ================= RIGHT: DETAILS SECTION ================= */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4 md:pt-0">
          
          {/* Badge */}
          <span className="bg-[#4B6BFB] text-white text-xs  font-normal px-2 py-2 rounded-lg w-fit mb-2 md:mb-4 uppercase tracking-wider">
            New Release
          </span>

          {/* Title */}
          <h1 className="md:text-3xl text-xl  text-[#232321] font-semibold uppercase tracking-tighter leading-[1.1] mb-2 md:mb-4">
            {title}
          </h1>

          {/* Price */}
          <p className="text-[#4B6BFB] text-xl md:text-2xl font-medium tracking-tight mb-2 md:mb-4">
            {price}
          </p>

          {/* Color Section (Hardcoded UI) */}
          <div className="mb-2 md:mb-4">
            <h3 className="text-sm font-medium uppercase mb-3 text-[#232321]">Color</h3>
            <div className="flex gap-3">
              {/* Active Color */}
              <button className="w-10 h-10 rounded-full bg-[#1A1C29] border-[3px] border-white outline outline-2 outline-[#232321] shadow-sm"></button>
              {/* Inactive Color */}
              <button className="w-10 h-10 rounded-full bg-[#7D8A70] hover:scale-110 transition-transform"></button>
            </div>
          </div>

          {/* Size Section (Hardcoded UI) */}
          <div className="mb-2 md:mb-4">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-sm font-bold uppercase text-[#232321]">Size</h3>
              <button className="text-xs font-bold underline text-gray-500 hover:text-black">SIZE CHART</button>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['38', '39', '40', '41', '42', '43', '44', '45', '46', '47'].map((size, i) => {
                let btnStyle = "bg-white text-[#232321] shadow-sm border border-gray-100 hover:border-black"; // Default
                if (i === 0) btnStyle = "bg-[#232321] text-white shadow-md"; // Active (38)
                if (i === 1 || i === 2) btnStyle = "bg-[#EAEAEA] text-gray-400 cursor-not-allowed"; // Disabled (39, 40)

                return (
                  <button key={size} className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${btnStyle}`}>
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 md:gap-4 mb-2 md:mb-4">
            <button className="flex-1 cursor-pointer bg-[#232321] text-white py-4 rounded-xl font-medium text-sm  uppercase tracking-wider hover:bg-black transition-colors shadow-md">
              ADD TO CART
            </button>
            <button className="w-14 h-14 bg-[#232321] cursor-pointer text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors shadow-md shrink-0">
              <Heart size={24} className="cursor-pointer" />
            </button>
          </div>
          <button className="w-full bg-[#4B6BFB] text-white py-4 cursor-pointer rounded-xl font-medium text-sm  uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md mb-2 md:mb-4">
            BUY IT NOW
          </button>

          {/* About the Product */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-bold uppercase mb-2 md:mb-4 text-[#232321] tracking-wide">About the product</h3>
            <p className="text-[#232321]/70 text-[15px] font-medium mb-2 md:mb-4">
              Shadow Navy / Army Green
            </p>
            
            <p className="text-[#232321]/70 text-[15px] leading-relaxed mb-2 md:mb-4">
              This product is excluded from all promotional discounts and offers.
            </p>

            {/* Dynamic Description from API */}
            <p className="text-[#232321] text-[15px] leading-relaxed font-medium mb-2 md:mb-4">
              {description}
            </p>

            <ul className="list-disc pl-5 text-[15px] text-[#232321]/70 space-y-2">
              <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
              <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <Products/>
   </div>
  );
}

export default ProductPage;