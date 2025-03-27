import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../Logo/Logo";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
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
  { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
  { name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
  { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
  { name: "YouTube", icon: <FaYoutube />, href: "https://youtube.com" },
];

const categoryLinks = [
  { name: "Seasonal Fruits", href: "/seasonal" },
  { name: "Exotic Collection", href: "/exotic" },
  { name: "Organic Selection", href: "/organic" },
  { name: "Gift Baskets", href: "/gifts" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success("Subscription Successful! Thank you for subscribing.");
      setEmail("");
    } else {
      toast.error("Please enter a valid email.");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-primary/5 pt-16 pb-8 mt-12 border-t border-primary/10">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container px-6 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Logo />
            <p className="text-gray-600 max-w-xs mx-auto md:mx-0">
              Delivering nature's freshest treasures directly to your doorstep
              since 2010.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FreshHarvest. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-medium uppercase border-b-2 border-accent pb-1">
              Fruit Categories
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {categoryLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-medium uppercase border-b-2 border-accent pb-1">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Subscribe to get special offers, seasonal recipes, and fruit-care
              tips.
            </p>
            <form className="mt-4" onSubmit={handleSubscribe}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-shadow duration-300 w-full"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-300"
                  type="submit"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ y: -3, color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-300 hover:text-primary bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md"
              aria-label={social.name}
            >
              <span className="text-2xl font-['Apple_Color_Emoji']">
                {social.icon}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
