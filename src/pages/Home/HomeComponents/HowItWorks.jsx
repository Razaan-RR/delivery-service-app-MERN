import { motion } from "framer-motion";
console.log(motion)

function HowItWorks() {
  const steps = [
    {
      title: "Place Your Order",
      text: "Enter pickup & delivery details and confirm your request in seconds.",
      icon: "🚀",
    },
    {
      title: "We Pick It Up",
      text: "Our rider collects your item safely from your location.",
      icon: "📦",
    },
    {
      title: "Fast Delivery",
      text: "Your package is delivered quickly with real-time tracking.",
      icon: "🏍️",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center py-16 px-6">
      <h2 className="text-3xl font-bold mb-2">How It Works</h2>
      <p className="text-gray-500 mb-10">
        Simple, fast and reliable delivery in just three steps.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
