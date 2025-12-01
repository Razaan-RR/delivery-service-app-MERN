import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper/modules"

function Brands() {
  const brands = [
    "https://www.crimsoncup.com/assets/cc_social_logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZifbEmYR7L6UTQfNGxY6iqcAWz7J2dOkqA&s",
    "https://images.seeklogo.com/logo-png/26/1/rokomari-logo-png_seeklogo-261385.png",
    "https://images.seeklogo.com/logo-png/42/1/daraz-logo-png_seeklogo-429389.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1WROgsQl5A2sKe2C0i5x9dO1RDqqLgVKDQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AfvyW3D3uxwr1IxP6oJu0WJgnQdRSK0jXQ&s"
  ]

  return (
    <div className="py-12 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg mx-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 drop-shadow-sm">
        Trusted By Top Brands
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }
        }}
        className="w-full max-w-5xl mx-auto"
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={logo}
                className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition"
                alt="brand"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Brands
