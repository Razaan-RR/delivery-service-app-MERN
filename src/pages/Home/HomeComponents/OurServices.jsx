import { motion } from "framer-motion";
console.log(motion)

function OurServices() {
  const services = [
    {
      title: "Express Delivery",
      text: "Lightning-fast doorstep delivery within your city.",
      icon: "⚡",
    },
    {
      title: "Parcel Transport",
      text: "Send documents, gifts, food or anything you need moved.",
      icon: "📮",
    },
    {
      title: "Real-Time Tracking",
      text: "Track your rider live until your item is delivered.",
      icon: "📍",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center py-16 px-6">
      <h2 className="text-3xl font-bold mb-2">Our Services</h2>
      <p className="text-gray-500 mb-10">
        We provide professional and reliable delivery services.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-base-100 p-8 rounded-2xl shadow-md hover:shadow-xl border"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-500">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
