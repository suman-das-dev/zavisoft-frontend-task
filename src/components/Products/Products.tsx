import { useGetProductsQuery } from "@/store/apis/ProductsApi"
import Product from "./Product"
import { Loader } from "../Loader"

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined)
  console.log(data)

  return (
    <div className="mb-20 px-4 md:px-0">
      
      <div className="flex flex-row justify-between items-center mb-6 md:mb-10 gap-2">
        <h1 className="font-bold text-[#232321] text-[22px] md:text-7xl leading-[1.1] w-[50%] md:w-auto">
          Don’t miss out <br className="hidden md:block" /> new drops
        </h1>
        <div className="flex justify-end w-[50%] md:w-auto">
          <button className="bg-[#4B6BFB] py-2.5 md:py-3 px-4 md:px-8 rounded-lg text-white text-[10px] md:text-base font-bold whitespace-nowrap uppercase">
            SHOP NEW DROPS
          </button>
        </div>
      </div>
      
      <div>
        {isLoading && (
          <Loader variant="fullscreen"/>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {data?.slice(0, 4).map((product) => (
          <Product isLoading={isLoading} key={product.id} data={product} />
        ))}
        </div>
      </div>
      
    </div>
  )
}

export default Products