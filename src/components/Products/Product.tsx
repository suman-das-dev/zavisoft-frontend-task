const Product = ({ data }) => { // Destructuring from props
  const { images, title, price } = data;

  return (
    <div className="group cursor-pointer bg-[#FAFAFA] rounded-[32px] p-2 flex flex-col h-full border border-transparent hover:border-[#4B6BFB] transition-all duration-300 space-y-3 ">
      
      {/* ইমেজ সেকশন এবং "New" ব্যাজ */}
      <div className="relative bg-white rounded-[28px]  overflow-hidden aspect-square flex items-center justify-center p-2">
        <span className="absolute top-0 left-0 bg-[#4B6BFB] text-white text-xs font-medium px-4 py-2 rounded-br-2xl z-10">
          New
        </span>
        
        {/* শুধুমাত্র প্রথম ইমেজটি দেখাবে */}
        <img 
          src={images?.[0]} 
          alt={title} 
          className="w-full rounded-2xl h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="">
        <h2 className="text-2xl font-semibold text-[#232321]">
          {title}
        </h2>

        {/* বাটন সেকশন */}
        <div className="mt-4 pb-2  ">
          <button
            className="text-sm cursor-pointer w-full justify-center font-medium bg-[#232321] py-2 px-4 rounded-lg text-white flex items-center gap-2 hover:bg-[#4B6BFB] transition-colors"
          >
            <span>View Product</span>
            <span className="text-[#FFA52F]">—</span>
            <span className="text-[#FFA52F]">${price}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;