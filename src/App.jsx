/* ------------ IMPORTS ------------ */

// CSS
import "./assets/css/global.css";

// Hooks
import { useState, useEffect, useContext } from "react";

// Axios
import axios from "axios";

// External components
import PulseLoader from "react-spinners/PulseLoader";

// Internal components
import Nav from "./components/Nav/index";
import Header from "./components/Header/index";
import Section from "./components/Section/index";
import CartCard from "./components/Cart/CartCard/index";
import BottomCart from "./components/Cart/BottomCart/index";
import Footer from "./components/Footer/index";

// Theme context
import { ThemeContext } from "./context/themeContext";
import { MealsContext } from "./context/mealsContext";
/*


------------ COMPONENT ------------ */
function App() {
  /* 
  
  -- JS ---- */

  // Theme
  const { theme, setTheme } = useContext(ThemeContext);
  const { data, setData } = useContext(MealsContext);

  // States
  const [isLoading, setIsLoading] = useState(true);

  // Get theme in localStorage
  useEffect(() => {
    console.log("App useEffect - local storage");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  // Fetch meals data
  useEffect(() => {
    console.log("App useEffect - fetch data");
    const fetchData = async () => {
      try {
        const { data } = await axios.get("restaurantData.json");
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  /*
  
  
  -- RETURN ---- */
  return (
    <div id={theme} className={theme}>
      {isLoading ? (
        <div className="loading-div">
          <PulseLoader height={30} width={4} loading={isLoading} color="#00cdbd" />
        </div>
      ) : (
        <>
          <header className="bg-white dark:bg-darkTheme-black">
            <Nav />
            <Header restaurant={data.restaurant} categories={data.categories} />
          </header>

          <main>
            <div className="container mx-auto flex w-websiteWidth gap-7 pb-14 pt-10">
              {/* Left column */}
              <Section />

              {/* Right column - Only after lg breakpoint */}
              <CartCard />
            </div>

            {/* BottomCart - Only before lg breakpoint */}
            <BottomCart />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
