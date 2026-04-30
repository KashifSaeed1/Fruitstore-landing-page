import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
const ResponsiveMenu = ({ open, menu, closeMenu, onNavigate }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="z-20 w-full h-screen top-20 left-0 absolute md:hidden block">
          <MenuList menu={menu} closeMenu={closeMenu} onNavigate={onNavigate} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function MenuList({ menu, closeMenu, onNavigate }) {
  const handleClick = (event, link) => {
    if (link.page) {
      event.preventDefault();
      onNavigate(link.page, link.url.startsWith("#") ? link.url : undefined);
    }
    closeMenu();
  };

  return (
    <div className="text-xl font-semibold uppercase bg-primary text-white rounded-3xl py-10 m-6">
      <ul className="flex flex-col items-center gap-6">
        {menu.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              onClick={(event) => handleClick(event, link)}
              className="block px-6 py-3 text-base font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-secondary"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      page: PropTypes.string,
    })
  ).isRequired,
  closeMenu: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
