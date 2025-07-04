import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { IoBagHandleOutline } from "react-icons/io5";
import BTN from "../BTN/BTN";
const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};
const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container flex justify-end
      space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Brand info */}
        <BannerInfo />
      </div>
    </section>
  );
};

function BannerInfo() {
  return (
    <div className="flex flex-col justify-center">
      <div
        className="text-center md:text-left space-y-4 
  lg:max-w-[400px]">
        <motion.h1
          variants={FadeLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-6xl font-bold uppercase">
          Brand info
        </motion.h1>
        <motion.p
          variants={FadeLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
      FreshNest Fruits is your destination for premium, hand-selected produce sourced from trusted local growers and the world’s best orchards. Every piece of fruit is chosen for peak freshness, rich flavor, and natural goodness—delivering a delicious way to nourish your day.
        </motion.p>

        {/* button section */}
        <BTN fade={FadeLeft(1.1)}>
          <span>
            <IoBagHandleOutline />
          </span>
          Order Now
        </BTN>
      </div>
    </div>
  );
}
export default Banner3;
