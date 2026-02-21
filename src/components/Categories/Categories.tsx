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
    <div className="  max-w-[1440px] mx-auto bg-black">
      <div className="flex justify-between items-end mb-0 px-10 py-20">
        <h1 className="uppercase text-7xl font-black tracking-tighter text-white">
          Categories
        </h1>
        
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`px-1 py-1 rounded-xl border-1 ${startIndex === 0 ? 'text-gray-300 border-gray-100' : 'text-black border-white hover:bg-white hover:text-black'} transition-all`}
          >
            <ChevronLeft className="text-white hover:bg-black" size={20} />
          </button>
          <button 
            onClick={handleNext}
            disabled={!data || startIndex + 2 >= data.length}
            className={`px-1 py-1 rounded-xl border-1 ${(!data || startIndex + 2 >= data.length) ? 'text-gray-300 border-gray-100' : 'text-black border-white hover:bg-white hover:text-black'} transition-all`}
          >
            <ChevronRight className="text-white hover:bg-black" size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pl-24 ">
        {data?.slice(startIndex, startIndex + 2).map((category, idx) => (
          <Category 
            key={category?.id} 
            data={category} 
            className={idx === 0 ? 'rounded-tl-4xl' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;