import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity } from "@/store/slices/CartSlice"; 
import { Heart, Trash2 } from "lucide-react"; 
import Products from "../ProductPage/Products";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // ================= CALCULATIONS ================= //
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (item.price * (item.cartQuantity || 1));
  }, 0);
  const deliveryFee = cartItems.length > 0 ? 6.99 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handelCheckout=()=>{
    toast.success('Checkout successful!',{ position: "bottom-right", });
  }

  return (
    <div className="min-h-screen bg-[#F2F2F0] md:bg-white ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8 md:py-10 font-sans">
        
        {/* Header Section */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-[22px] md:text-[32px] font-bold mb-1 md:mb-2 text-[#232321]">Saving to celebrate</h1>
          <p className="text-[#232321]/80 text-[13px] md:text-sm font-medium leading-snug max-w-2xl">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
          <p className="text-[#232321] text-[13px] md:text-sm font-medium mt-2">
            <span className="underline cursor-pointer">Join us</span> or <span className="underline cursor-pointer">Sign-in</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-10">
          
          {/* ================= LEFT: YOUR BAG (CART ITEMS) ================= */}
          <div className="w-full lg:w-2/3 bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-8 shadow-sm md:border border-gray-100">
            <h2 className="text-xl md:text-2xl font-bold text-[#232321] mb-1 md:mb-2">Your Bag</h2>
            <p className="text-gray-500 text-[13px] md:text-sm mb-6 md:mb-8">Items in your bag not reserved- check out now to make them yours.</p>

            {cartItems.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-gray-500 text-lg md:text-xl font-semibold">Your cart is empty.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6 md:gap-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-row gap-4 md:gap-6 border-b border-gray-100 pb-6 md:pb-8 last:border-0 last:pb-0">
                    
                    {/* Item Image */}
                    <div className="w-[120px] h-full md:w-48   md:aspect-square flex items-center justify-center">
                      <img 
                        src={item.images?.[0]} 
                        alt={item.title} 
                        className="w-full h-full object-contain rounded-2xl mix-blend-multiply" 

                      />
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1 md:mb-2">
                        <h3 className="text-[15px] md:text-xl font-bold uppercase text-[#232321] pr-2 leading-tight">
                          {item.title}
                        </h3>
                        {/* Desktop Price (Top Right) */}
                        <p className="hidden md:block text-[#4B6BFB] font-bold text-lg whitespace-nowrap">
                          ${(item.price * (item.cartQuantity || 1)).toFixed(2)}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 text-xs md:text-sm mb-1">{item.category?.name || "Men's Road Running Shoes"}</p>
                      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">Enamel Blue/ University White</p>

                      {/* Size & Quantity (Compact for mobile) */}
                      <div className="flex flex-wrap gap-4 md:gap-6 items-center mb-2 md:mb-6">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#232321] text-xs md:text-sm">Size</span>
                          <select className="bg-transparent text-[#232321] text-xs md:text-sm outline-none cursor-pointer font-medium">
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                          </select>
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#232321] text-xs md:text-sm">Quantity</span>
                          <select 
                            value={item.cartQuantity || 1}
                            onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                            className="bg-transparent text-[#232321] text-xs md:text-sm outline-none cursor-pointer font-medium"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Mobile Price (Below Size/Quantity) */}
                      <p className="md:hidden text-[#4B6BFB] font-bold text-[17px] mb-2">
                        ${(item.price * (item.cartQuantity || 1)).toFixed(2)}
                      </p>

                      {/* Action Buttons (Wishlist & Delete) */}
                      <div className="flex gap-4 md:mt-auto">
                        <button className="text-gray-600 hover:text-black transition-colors">
                          <Heart size={20} className="md:w-[22px] md:h-[22px]" />
                        </button>
                        <button 
                          onClick={() => dispatch(removeFromCart(item))}
                          className="text-gray-600 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={20} className="md:w-[22px] md:h-[22px]" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ================= RIGHT: ORDER SUMMARY ================= */}
          <div className="w-full lg:w-1/3 bg-white md:bg-transparent rounded-[24px] md:rounded-none p-5 md:p-0 shadow-sm md:shadow-none">
            <div className="md:sticky md:top-24 flex flex-col gap-5 md:gap-6">
              <h2 className="text-[22px] md:text-[28px] font-bold text-[#232321]">Order Summary</h2>
              
              <div className="flex flex-col gap-3 text-[14px] md:text-[15px] font-medium text-[#232321]">
                <div className="flex justify-between">
                  <span>{cartItems.length} ITEM{cartItems.length !== 1 ? 'S' : ''}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span>Sales Tax</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between text-[17px] md:text-lg font-bold mt-1">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button onClick={handelCheckout} className="w-full bg-[#232321] text-white py-2 md:py-2 rounded-xl font-medium text-sm md:text-base uppercase tracking-wide mt-1 hover:bg-black cursor-pointer transition-colors shadow-md">
                Checkout
              </button>

              <button className="text-left text-[#232321] underline font-medium text-[13px] md:text-[15px] hover:text-gray-600 w-fit">
                User a promo code
              </button>
            </div>
          </div>

        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Cart;