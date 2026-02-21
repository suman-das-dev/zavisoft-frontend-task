import { Link } from "react-router";

const Product = ({ data }) => { 
  const { images, title, price } = data;

  return (
    <div className="group cursor-pointer bg-[#FAFAFA] rounded-[16px] md:rounded-[32px] p-1.5 md:p-2 flex flex-col h-full border border-transparent hover:border-[#4B6BFB] transition-all duration-300">
      
      <div className="relative bg-white rounded-[12px] md:rounded-[28px] overflow-hidden aspect-square flex items-center justify-center p-2">
        <span className="absolute top-0 left-0 bg-[#4B6BFB] text-white text-[10px] md:text-xs font-bold px-2.5 py-1 md:px-4 md:py-2 rounded-br-xl md:rounded-br-2xl z-10">
          New
        </span>
        
        <img 
          src={images?.[0]} 
          alt={title} 
          className="w-full rounded-xl md:rounded-2xl h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <div className="flex flex-col flex-1 mt-2.5 md:mt-3 px-1 md:px-0">
        
        <h2 className="text-[12px] md:text-2xl font-black md:font-semibold text-[#232321] uppercase leading-tight mb-2 md:mb-0 line-clamp-3 md:line-clamp-none">
          {title}
        </h2>

        <div className="mt-auto pb-1 md:pb-2">
         <Link to={`/product/${data.id}`}>
          <button
            className="w-full justify-center cursor-pointer bg-[#232321] py-2 px-1 md:px-4 rounded-md md:rounded-lg text-white flex items-center gap-1 md:gap-2 hover:bg-[#4B6BFB] transition-colors"
          >
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-tight">View Product</span>
            <span className="text-[#FFA52F] text-[10px] md:text-sm font-bold">—</span>
            <span className="text-[#FFA52F] text-[10px] md:text-sm font-bold">${price}</span>
          </button>
         </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Product;