const reviews = [
  {
    name: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    img: '/src/assets/reviews/img-1.png',
    avatar: '/src/assets/reviews/avatar1.png',
  },
  {
    name: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    img: '/src/assets/reviews/img-2.png',
    avatar: '/src/assets/reviews/avatar2.png',
  },
  {
    name: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
      img: '/src/assets/reviews/img-3.png',
    avatar: '/src/assets/reviews/avatar3.png',
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#EAEAEA] py-12 md:py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-6xl font-black tracking-tighter text-[#232321] uppercase">Reviews</h2>
          <button className="bg-[#4B6BFB] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-xs md:text-sm tracking-wider hover:bg-blue-700 transition">SEE ALL</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white shadow-sm rounded-[32px] flex flex-col min-h-[350px] overflow-hidden">
              
              <div className="p-6 md:p-8 flex-1">
                 {/* Header in Card: Avatar and Title */}
                 <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-xl md:text-2xl text-[#232321] mb-2">{review.name}</span>
                      <p className="text-[#232321]/70 text-sm md:text-base font-medium">{review.text}</p>
                    </div>
                    {review.avatar && (
                      <img
                        src={review.avatar}
                        alt={review.name + ' avatar'}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover ml-4"
                      />
                    )}
                 </div>
                 
                 {/* Rating */}
                 <div className="flex items-center mt-2">
                    <div className="flex text-[#FFA52F] text-lg mr-2">
                       {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                    <span className="text-[#232321] font-bold text-sm">{review.rating}</span>
                 </div>
              </div>

              {/* Review Image */}
              <div className="w-full h-48 md:h-64 mt-auto">
                {review.img ? (
                  <img
                    src={review.img}
                    alt="Review visual"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">No Image</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Reviews;