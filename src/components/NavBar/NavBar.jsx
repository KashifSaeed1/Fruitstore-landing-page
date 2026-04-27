import { useState } from "react";
import { MdMenu, MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo/Logo";

const NavBarMenu = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Products", url: "#products" },
  { id: 3, title: "Shop", url: "/shop" },
  { id: 4, title: "Categories", url: "/categories" }, 
  { id: 5, title: "Deals", url: "/deals" },           
  { id: 6, title: "About", url: "/about" },
  { id: 7, title: "Contact", url: "#contact" },
];

const NavBar = ({ setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto flex justify-between items-center py-4 px-6"
        >
          <div className="flex-shrink-0">
            <Logo />
          </div>


          <Menu />
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1">
              <MdSearch className="text-gray-500 text-xl" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-24 focus:w-40 transition-all duration-300"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button className="relative text-2xl p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300">
              <MdOutlineShoppingCart />
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 rounded-full">
                3
              </span>
            </button>

            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </motion.div>
      </nav>
      <div className="h-[80px]"></div>

      <ResponsiveMenu open={isOpen} menu={NavBarMenu} closeMenu={() => setIsOpen(false)} />
    </>
  );
};

function Menu() {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-8">
        {NavBarMenu.map((link) => (
          <li key={link.id} className="relative group">
            <a
              href={link.url}
              className="text-gray-700 font-medium text-lg hover:text-primary transition-colors duration-300"
            >
              {link.title}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <div className="md:hidden block">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl focus:outline-none"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MdMenu />
        </motion.div>
      </button>
    </div>
  );
}

export default NavBar;