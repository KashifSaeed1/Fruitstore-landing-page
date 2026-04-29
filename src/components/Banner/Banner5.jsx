import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { FaApple, FaLeaf } from "react-icons/fa";
import { MdLocalFlorist } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseBgVariants = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Banner5 = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={pulseBgVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          variants={pulseBgVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-15"
        ></motion.div>
      </div>

      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-40 left-10 text-4xl opacity-20"
      >
        <FaApple className="text-secondary" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute top-1/3 right-16 text-5xl opacity-20"
      >
        <MdLocalFlorist className="text-primary" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-32 right-1/4 text-4xl opacity-20"
      >
        <FaLeaf className="text-secondary" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border border-primary/30 px-6 py-3 w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiStar className="text-secondary text-lg" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
                Exclusive Offer
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Fresh Harvest
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Special Bundle
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              Unlock the magic of premium fruits with our limited-time special bundle. Get up to 40% off on handpicked, farm-fresh produce delivered straight to your doorstep. Premium quality, unbeatable prices!
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                >
                  <FaLeaf className="text-white text-lg" />
                </motion.div>
                <div>
                  <p className="text-white font-semibold">100% Organic</p>
                  <p className="text-gray-400 text-sm">No chemicals, pure freshness</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center"
                >
                  <FiArrowRight className="text-white text-lg" />
                </motion.div>
                <div>
                  <p className="text-white font-semibold">Free Shipping</p>
                  <p className="text-gray-400 text-sm">On orders above $50</p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(222, 44, 77, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-white font-bold text-lg transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                Get Your Bundle Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FiArrowRight />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96 flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="absolute w-48 h-56 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
                style={{ top: "0", left: "10%" }}
              >
                <div className="h-24 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 flex items-center justify-center">
                  <FaApple className="text-5xl text-white opacity-80" />
                </div>
                <p className="text-white font-bold text-lg">Fresh Apples</p>
                <p className="text-gray-300 text-sm mt-1">Crispy & Sweet</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="absolute w-48 h-56 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
                style={{ bottom: "0", right: "10%" }}
              >
                <div className="h-24 bg-gradient-to-br from-secondary to-primary rounded-xl mb-4 flex items-center justify-center">
                  <MdLocalFlorist className="text-5xl text-white opacity-80" />
                </div>
                <p className="text-white font-bold text-lg">Tropical Fruits</p>
                <p className="text-gray-300 text-sm mt-1">Tropical Delight</p>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-32 h-32 bg-gradient-to-br from-primary via-secondary to-primary rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
              >
                <div className="text-center">
                  <p className="text-white font-bold text-3xl">40%</p>
                  <p className="text-white/80 text-xs font-semibold">OFF</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner5;
