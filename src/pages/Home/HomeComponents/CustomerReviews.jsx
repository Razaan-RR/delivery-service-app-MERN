import React, { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'

function CustomerReviews({ reviewsPromise }) {
  const reviews = use(reviewsPromise)

  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        What Our Customers Say
      </h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center max-w-sm mx-auto transition-transform duration-500"
          >
            <img
              src={review.user_photoURL}
              alt={review.userName}
              className="w-24 h-24 rounded-full mb-4 border-2 border-indigo-400"
            />
            <h3 className="font-semibold text-xl mb-2">{review.userName}</h3>
            <div className="flex mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < Math.round(review.ratings) ? '#FBBF24' : 'none'}
                  viewBox="0 0 24 24"
                  stroke="#FBBF24"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.053a1 1 0 00.95.69h7.444c.969 0 1.371 1.24.588 1.81l-6.02 4.358a1 1 0 00-.364 1.118l2.287 7.053c.3.921-.755 1.688-1.54 1.118l-6.02-4.358a1 1 0 00-1.176 0l-6.02 4.358c-.784.57-1.838-.197-1.539-1.118l2.286-7.053a1 1 0 00-.364-1.118L2.184 12.48c-.784-.57-.38-1.81.588-1.81h7.444a1 1 0 00.95-.69l2.286-7.053z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-center">{review.review}</p>
            <span className="text-gray-400 text-sm mt-3">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CustomerReviews
