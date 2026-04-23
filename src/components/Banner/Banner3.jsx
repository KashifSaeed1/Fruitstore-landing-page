import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { IoBagHandleOutline } from "react-icons/io5";
// import { GiLeaf } from "react-icons/gi";

const bgStyle = {
  backgroundImage: `linear-gradient(135deg, rgba(222, 0, 41, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%), url(${BannerPng})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Banner3 = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div
          style={bgStyle}
          className="relative flex items-center justify-between lg:justify-end gap-8 py-16 md:py-24 px-6 md:px-12 rounded-3xl shadow-2xl overflow-hidden group">
          
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <BannerInfo />
        </div>
      </div>
    </section>
  );
};

function BannerInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col justify-center w-full lg:max-w-[550px] relative z-10">
      
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 inline-block">
          {/* <GiLeaf className="text-primary text-xl" /> */}
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Premium Quality</span>
        </div>
      </motion.div>

      <div className="text-center lg:text-left space-y-6">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
            <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
              FreshNest
            </span>
            <span className="block text-slate-900 mt-2">Fruits Excellence</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-3">
          <p className="text-base md:text-lg leading-relaxed text-slate-700 max-w-lg mx-auto lg:mx-0">
            Your destination for <span className="font-bold text-primary">premium, hand-selected produce</span> sourced from trusted local growers and the world's best orchards.
          </p>
          <p className="text-sm md:text-base text-slate-600 max-w-lg mx-auto lg:mx-0">
            Every piece of fruit is chosen for <span className="text-primary font-semibold">peak freshness</span>, rich flavor, and natural goodness—delivering a delicious way to nourish your day.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
            <span className="text-2xl">🥗</span>
            <span className="text-sm font-semibold text-slate-700">100% Organic</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-semibold text-slate-700">Fresh Daily</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
            <span className="text-2xl">🚚</span>
            <span className="text-sm font-semibold text-slate-700">Fast Delivery</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start pt-4">
          <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <IoBagHandleOutline className="text-xl group-hover:scale-110 transition-transform" />
            <span>Shop Now</span>
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Banner3;