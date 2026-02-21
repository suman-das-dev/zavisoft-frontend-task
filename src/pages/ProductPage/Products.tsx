import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { Loader } from "@/components/Loader";
import Product from "@/components/Products/Product";
import { useGetProductsQuery } from "@/store/apis/ProductsApi";

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4; 

  const handleNext = () => {
    if (data && startIndex + itemsToShow < data.length) {
      setStartIndex(prev => prev + 1); 
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <div className="mb-20 px-4 md:px-0 mt-16">
      
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center mb-6 md:mb-10 gap-2">
        <h1 className="font-semibold text-[#232321] text-[22px] md:text-5xl leading-[1.1] w-[50%] md:w-auto uppercase">
          You may also like
        </h1>
        
        {/* Navigation Buttons */}
        <div className="flex justify-end w-[50%] md:w-auto">
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-md border cursor-pointer ${startIndex === 0 ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-black border-black bg-white hover:bg-[#232321] hover:text-white group'} transition-all`}
            >
              <ChevronLeft size={20} className={startIndex === 0 ? 'text-gray-300' : 'text-[#232321] group-hover:text-white'} />
            </button>
            <button 
              onClick={handleNext}
              disabled={!data || startIndex + itemsToShow >= data.length}
              className={`p-2 rounded-md border cursor-pointer ${(!data || startIndex + itemsToShow >= data.length) ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-black border-black bg-white hover:bg-[#232321] hover:text-white group'} transition-all`}
            >
              <ChevronRight size={20} className={(!data || startIndex + itemsToShow >= data.length) ? 'text-gray-300' : 'text-[#232321] group-hover:text-white'} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div>
        {isLoading && (
          <div className="flex justify-center py-10">
            <Loader variant="fullscreen" />
          </div>
        )}
        
        {/* Error Handle */}
        {error && <p className="text-red-500 text-center">Failed to load products.</p>}
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {data?.slice(startIndex, startIndex + itemsToShow).map((product) => (
            <Product isLoading={isLoading} key={product.id} data={product} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Products;