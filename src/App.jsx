import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";


const App = () => {
  return (
    <>
      <main className=" overflow-x-hidden">
        <NavBar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
      </main>
    </>
  );
};
export default App;
