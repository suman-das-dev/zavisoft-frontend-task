
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
    <section className=" py-20 px-2 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black uppercase   inline-block pb-1">Reviews</h2>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition">SEE ALL</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#FAFAFA] shadow rounded-3xl flex flex-col min-h-[350px]">
             <div className="p-6">
                 <div className="flex items-center mb-2">
                <span className="font-bold text-lg md:text-xl text-black mr-2  pb-0.5">{review.name}</span>
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name + ' avatar'}
                    className="ml-auto w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                  />
                ) : (
                  <span className="ml-auto w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">IMG</span>
                )}
              </div>
              <p className="text-gray-700 text-sm mb-2">{review.text}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg mr-1">{'★'.repeat(5)}</span>
                <span className="text-black font-semibold text-sm">{review.rating}</span>
              </div>
             </div>
                <div className="flex-1 flex items-end " >
                {review.img ? (
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-full h-56 object-cover rounded-b-3xl "
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300 text-2xl">IMG</div>
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