import { useState } from "react";
import { useGetCategoriesQuery } from "@/store/apis/ProductsApi";
import Category from "./Category";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Categories = () => {
  const { data, isLoading, error } = useGetCategoriesQuery(undefined);
  const [startIndex, setStartIndex] = useState(1);

  const handleNext = () => {
    if (data && startIndex + 2 < data.length) {
      setStartIndex(prev => prev + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 2);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full bg-[#232321] pb-10 md:pb-0"> 
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex justify-between items-center px-4 py-8 md:px-10 md:py-20">
          <h1 className="uppercase text-[28px] md:text-7xl font-black tracking-tighter text-white">
            Categories
          </h1>
          
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-md border ${startIndex === 0 ? 'text-gray-500 border-gray-500' : 'text-black border-white bg-white hover:bg-gray-200'} transition-all`}
            >
              <ChevronLeft size={16} className={startIndex === 0 ? 'text-gray-500' : 'text-[#232321]'} />
            </button>
            <button 
              onClick={handleNext}
              disabled={!data || startIndex + 2 >= data.length}
              className={`p-2 rounded-md border ${(!data || startIndex + 2 >= data.length) ? 'text-gray-500 border-gray-500' : 'text-black border-white bg-white hover:bg-gray-200'} transition-all`}
            >
              <ChevronRight size={16} className={(!data || startIndex + 2 >= data.length) ? 'text-gray-500' : 'text-[#232321]'} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  md:pl-14 pl-8 ">
  {data?.slice(startIndex, startIndex + 2).map((category, idx) => (
    <Category 
      key={category?.id} 
      data={category} 
        className={idx === 0 ? 'rounded-tl-4xl md:rounded-tl-[48px]' : ''}
    />
  ))}
</div>
      </div>
    </div>
  );
};

export default Categories;