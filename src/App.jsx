import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";

const App = () => {
  return (
    <>
      <main className=" overflow-x-hidden">
        <NavBar />
        <Hero/>
        <Menus/>
      </main>
    </>
  );
};
export default App;
