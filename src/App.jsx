import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Product from "./components/Product/Product";
import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Banner4 from "./components/Banner/Banner4";
import Banner5 from "./components/Banner/Banner5";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Deals from "./components/Deals/Deals";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCart((existingCart) => {
      const found = existingCart.find((item) => item.id === product.id);
      if (found) {
        return existingCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...existingCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((existingCart) => existingCart.filter((item) => item.id !== productId));
  };

  const handleToggleCart = () => {
    setIsCartOpen((open) => !open);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
  };

  const navigateTo = (page, hash) => {
    setActivePage(page);
    if (hash) {
      setTimeout(() => {
        window.location.hash = hash;
      }, 50);
    } else if (page === "home") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <>
      <main className="overflow-x-hidden">
        <NavBar
          setSearchQuery={setSearchQuery}
          cartItemCount={cartItemCount}
          onCartClick={handleToggleCart}
          onNavigate={navigateTo}
        />

        {isCartOpen ? (
          <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onContinueShopping={handleContinueShopping} />
        ) : activePage === "shop" ? (
          <Shop
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onBackHome={() => navigateTo("home")}
          />
        ) : (
          <>
            <Hero />
            <Product
              searchQuery={searchQuery}
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
            <Categories />
            <Deals />
            <Menus />
            <Banner />
            <Banner2 />
            <Banner3 />
            <Banner4 />
            <Banner5 />
            <Contact />
            <Footer />
          </>
        )}
      </main>
    </>
  );
};
export default App;
