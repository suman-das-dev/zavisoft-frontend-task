const Category = ({ data, className = '' }) => {
  return (
    <div className={`relative group overflow-hidden   h-[600px] w-full cursor-pointer ${className}`}>
      {/* ব্যাকগ্রাউন্ড ইমেজ */}
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={data?.image} 
        alt={data?.name} 
      />
      
      {/* টেক্সট এবং ওভারলে */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-10">
        <h1 className="text-white text-5xl font-black uppercase tracking-tighter">
          {data?.name}
        </h1>
        {/* ছোট আইকন বাটন ছবির মতো */}
        <div className="ml-auto bg-[#232321] p-4 rounded-tl-2xl rounded-br-2xl text-white">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l10-10M7 7h10v10"/></svg>
        </div>
      </div>
    </div>
  )
}
export default Category;