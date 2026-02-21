const Category = ({ data, className = '' }) => {
  return (
    <div className={`relative bg-[#FAFAFA] overflow-hidden h-[350px] md:h-[600px] w-full cursor-pointer flex flex-col justify-between ${className}`}>
      
      <div className="w-full flex-1 md:h-full relative flex items-center justify-center ">
         <img 
            className="w-full h-full object-contain md:object-cover transition-transform duration-700 md:group-hover:scale-110" 
            src={data?.image} 
            alt={data?.name} 
          />
      </div>
      
      <div className="w-full relative md:absolute inset-0 md:bg-black/20 md:group-hover:bg-black/40 transition-colors flex justify-between items-end p-6 md:p-10">
        
        <h1 className="text-[#232321] md:text-white text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight pr-4">
          {data?.name}
        </h1>
        
        <div className="bg-[#232321] p-3 md:p-4 rounded-xl md:rounded-tl-3xl md:rounded-br-3xl md:rounded-tr-none md:rounded-bl-none text-white shrink-0">
             <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l10-10M7 7h10v10"/></svg>
        </div>
      </div>
    </div>
  )
}

export default Category;