import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
// import Fruit5 from "../../assets/fruits/mango.png"; // New
// import Fruit6 from "../../assets/fruits/strawberry.png"; // New
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation"; // Assuming FadeUp exists
import { IoBagHandleOutline } from "react-icons/io5";

const MenusData = [
  { id: 1, title: "Fresh Red Apples", link: "/", price: "$3.99", img: Fruit1, delay: 0.3, color: "bg-red-50" },
  { id: 2, title: "Fresh Oranges", link: "/", price: "$4.99", img: Fruit2, delay: 0.6, color: "bg-orange-50" },
  { id: 3, title: "Fresh Avocado", link: "/", price: "$5.99", img: Fruit3, delay: 0.9, color: "bg-green-50" },
  { id: 4, title: "Fresh Cherries", link: "/", price: "$2.99", img: Fruit4, delay: 1.2, color: "bg-red-50" },
  // { id: 5, title: "Sweet Mangoes", link: "/", price: "$4.50", img: Fruit5, delay: 1.5, color: "bg-yellow-50" },
  // { id: 6, title: "Strawberries", link: "/", price: "$3.50", img: Fruit6, delay: 1.8, color: "bg-pink-50" },
];

const Menus = () => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <Header />
        <MenuGrid />
      </div>
    </section>
  );
};

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
          Our Fresh <span className="text-secondary">Menus</span>
        </h1>
        <p className="text-gray-500 mt-2 max-w-md">
          Discover our hand-picked selection of premium organic fruits delivered straight to your door.
        </p>
      </motion.div>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-primary font-semibold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
      >
        View All Products
      </motion.button>
    </div>
  );
}

function MenuGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
      {MenusData.map((item) => (
        <motion.div
          key={item.id}
          initial="hidden"
          whileInView="visible"
          variants={FadeLeft(item.delay)}
          whileHover={{ y: -10 }}
          className={`${item.color} rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden`}
        >
          {/* Card Content */}
          <div className="flex justify-between items-center relative z-10">
            <img
              src={item.img}
              alt={item.title}
              className="w-[100px] drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
              <p className="text-2xl font-bold text-secondary">{item.price}</p>
              <button className="mt-4 bg-white p-3 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <IoBagHandleOutline size={20} />
              </button>
            </div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/40 transition-all"></div>
        </motion.div>
      ))}
    </div>
  );
}

export default Menus;