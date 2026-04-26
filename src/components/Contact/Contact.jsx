import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLeaf, FaClock, FaCheckCircle } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const contactDetails = [
  {
    title: "Visit Us",
    description: "123 Orchard Lane, Green Valley, CA 90210",
    icon: <FaMapMarkerAlt className="text-white text-2xl" />,
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Call Us",
    description: "+1 (555) FRESH-FRUIT",
    icon: <FaPhoneAlt className="text-white text-2xl" />,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Email Us",
    description: "hello@freshharvest.com",
    icon: <FaEnvelope className="text-white text-2xl" />,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Response Time",
    description: "Within 24 hours",
    icon: <FaClock className="text-white text-2xl" />,
    gradient: "from-purple-400 to-purple-600",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields before sending your message.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-green-50 overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-green-100/50 text-primary rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] border border-primary/20 shadow-sm">
            <FaLeaf className="animate-pulse" />
            Get in Touch
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="mt-6 text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-green-600 to-slate-900 bg-clip-text text-transparent leading-tight">
            We're Here to Help!
          </motion.h2>
          
          <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed">
            Have questions about our fresh fruit deliveries? Want to customize your order? Our friendly team loves chatting about fresh produce and is here to make your experience perfect.
          </motion.p>
        </motion.div>

        {/* Contact Details Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${detail.gradient} rounded-[2rem] p-8 text-white shadow-lg shadow-${detail.gradient.split('-')[1]}-500/20 cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
                >
                  {detail.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">{detail.title}</h3>
                  <p className="text-sm opacity-90 mt-2">{detail.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">Why reach out to us?</h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you're looking for bulk orders, dietary-specific selections, or have any questions about our fruits, we're ready to help create the perfect solution for you.
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                "Expert fruit consultation",
                "Custom delivery schedules",
                "Bulk order discounts",
                "Seasonal recommendations",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 hover:border-primary/30 transition"
                >
                  <FaCheckCircle className="text-primary text-xl shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-br from-primary/5 to-green-100/30 p-6 border border-primary/20">
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">Average response time:</span> Within 2 hours during business hours (Mon-Sat, 8 AM - 7 PM)
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] border-2 border-gradient-to-br from-primary/40 to-green-200/40 bg-gradient-to-br from-white via-slate-50 to-green-50 p-8 md:p-10 shadow-2xl shadow-primary/10"
          >
            <div className="space-y-2 mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Contact Form</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Send us a message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-[1.5rem] border-2 border-slate-200 bg-white px-6 py-4 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full rounded-[1.5rem] border-2 border-slate-200 bg-white px-6 py-4 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your order or question..."
                  required
                  className="w-full rounded-[1.5rem] border-2 border-slate-200 bg-white px-6 py-4 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(56, 189, 248, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-gradient-to-r from-primary to-green-500 px-8 py-5 text-base font-bold text-white shadow-xl shadow-primary/30 transition duration-300 hover:shadow-2xl uppercase tracking-wide"
              >
                Send Message
              </motion.button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              We'll get back to you as soon as possible!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
