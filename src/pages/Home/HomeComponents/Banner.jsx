import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Banner() {
  return (
    <div className="max-w-5xl mx-auto my-6 rounded-xl overflow-hidden shadow-lg">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3500}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww"
            alt="Fast Delivery"
            className="h-72 w-full object-cover"
          />
          <p className="legend text-lg">Super Fast Doorstep Delivery</p>
        </div>

        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661479355701-62fbf9dd90ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGFja2FnZSUyMFNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Package Safety"
            className="h-72 w-full object-cover"
          />
          <p className="legend text-lg">Safe & Secure Packaging</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1754765542024-c1320f23b75a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvZmVzc2lvbmFsJTIwRGVsaXZlcnklMjBSaWRlcnN8ZW58MHx8MHx8fDA%3D"
            alt="Riders"
            className="h-72 w-full object-cover"
          />
          <p className="legend text-lg">Professional Delivery Riders</p>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/2233188856/photo/smart-logistics-and-inventory-tracking-concept-with-businessman-using-mobile-device-to-manage.webp?a=1&b=1&s=612x612&w=0&k=20&c=MMz3bEYsi3r434l-TjpS9xDiL4nAuLUMbzbdMeMckjo="
            alt="Tracking"
            className="h-72 w-full object-cover"
          />
          <p className="legend text-lg">Real-Time Tracking</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
