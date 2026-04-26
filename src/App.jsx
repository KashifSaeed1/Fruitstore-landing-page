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
  return (
    <>
      <main className="overflow-x-hidden">
        <NavBar />
        <Hero />
        <Product />
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
