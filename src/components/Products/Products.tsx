import { useGetProductsQuery } from "@/store/apis/ProductsApi"
import Product from "./Product"
import { Loader } from "../Loader"

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined)
  console.log(data)

  return (
 <div className="mb-20">
       <div className="flex justify-between mb-10">
      <h1 className="font-semibold text-[#232321] text-7xl">
        DON'T MISS OUT <br /> NEW DROPS
      </h1>
      <div className="flex items-end">
        <button className="bg-[#4A69E2] py-2 font-medium px-8 rounded-lg text-white">SHOP NEW DROPS</button>
      </div>
     
    </div>
     <div>
        {isLoading && (
          <Loader variant="fullscreen"/>
        )}
        <div className="grid grid-cols-4 gap-6">
            {data?.slice(0, 4).map((product) => (
          <Product key={product.id} data={product} />
        ))}
        </div>
      </div>
 </div>
  )
}

export default Products
