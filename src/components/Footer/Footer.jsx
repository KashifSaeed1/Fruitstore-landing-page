import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../Logo/Logo";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialLinks = [
  { name: "Facebook", icon: <FaFacebook />, href: "#" },
  { name: "Twitter", icon: <FaTwitter />, href: "#" },
  { name: "Instagram", icon: <FaInstagram />, href: "#" },
  { name: "YouTube", icon: <FaYoutube />, href: "#" },
];

const footerLinks = {
  shop: [
    { name: "Seasonal Fruits", href: "/seasonal" },
    { name: "Exotic Collection", href: "/exotic" },
    { name: "Organic Selection", href: "/organic" },
    { name: "Gift Baskets", href: "/gifts" },
  ],
  company: [
    { name: "Our Story", href: "/about" },
    { name: "Sustainability", href: "/green" },
    { name: "Farm Partners", href: "/farms" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Return & Refund", href: "/returns" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "#contact" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success("Welcome to the FreshHarvest family!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email.");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-primary/10 pt-20 pb-8 mt-20 border-t border-primary/20">
      <Toaster position="top-right" />
      <div className="container px-6 mx-auto">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left"
        >
          {/* 1. Brand & Value Prop */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Logo />
            <p className="text-gray-600 text-sm leading-relaxed">
              We believe in the power of nature. Our mission is to bridge the gap between 
              local orchards and your table, ensuring every bite is as fresh as the day it was picked.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="text-gray-500 hover:text-primary text-xl transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-primary font-bold text-lg">Shop Fresh</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-primary text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-primary font-bold text-lg">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <FaMapMarkerAlt className="mt-1 text-primary shrink-0" />
                <span>123 Orchard Lane, Green Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <FaPhoneAlt className="text-primary shrink-0" />
                <span>+1 (555) FRESH-FRUIT</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <FaEnvelope className="text-primary shrink-0" />
                <span>hello@freshharvest.com</span>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Hours</p>
              <p className="text-sm text-gray-600">Mon - Sat: 8:00 AM - 7:00 PM</p>
            </div>
          </motion.div>

          {/* 4. Newsletter & Trust */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-primary font-bold text-lg">Fresh Updates</h3>
            <p className="text-sm text-gray-600">
              Join 10,000+ fruit lovers and get exclusive seasonal deals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-all"
                type="submit"
              >
                Join Newsletter
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.support.map((link) => (
              <a key={link.name} href={link.href} className="text-xs text-gray-500 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} FreshHarvest. Cultivated with ❤️ for a healthier world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
