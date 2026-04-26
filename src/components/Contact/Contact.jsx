import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const contactDetails = [
  {
    title: "Visit Us",
    description: "123 Orchard Lane, Green Valley, CA 90210",
    icon: <FaMapMarkerAlt className="text-primary text-2xl" />,
  },
  {
    title: "Call Us",
    description: "+1 (555) 373-4748",
    icon: <FaPhoneAlt className="text-primary text-2xl" />,
  },
  {
    title: "Email Us",
    description: "hello@freshharvest.com",
    icon: <FaEnvelope className="text-primary text-2xl" />,
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
    <section id="contact" className="bg-white pt-24 pb-16">
      <Toaster position="top-right" />

      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]">
              <FaLeaf />
              Fresh Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Let's talk about your next fresh order.
            </h2>
            <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
              Need help choosing the perfect fruit box? Want to ask about a custom delivery or large order? Our team is ready to answer within minutes.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    {detail.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">{detail.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary/5 to-white p-8 shadow-xl"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-primary">Send a message</p>
              <h3 className="text-3xl font-bold text-slate-900">Ready when you are</h3>
              <p className="text-gray-600">
                Share your message and we will tailor the best fruit plan for you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary/80 focus:ring-2 focus:ring-primary/10"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary/80 focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message"
                className="w-full rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary/80 focus:ring-2 focus:ring-primary/10"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
