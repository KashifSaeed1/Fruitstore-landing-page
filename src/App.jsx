import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Product from "./components/Product/Product";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

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

  return (
    <>
      <main className="overflow-x-hidden">
        <NavBar setSearchQuery={setSearchQuery} cartItemCount={cartItemCount} />
        <Hero />
        <Product
          searchQuery={searchQuery}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default App;
