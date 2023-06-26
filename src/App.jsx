/* ------------ IMPORTS ------------ */

// CSS
import "./global.css";

// Hooks
import { useState, useEffect, createContext } from "react";

// Axios
import axios from "axios";

// External components
import PulseLoader from "react-spinners/PulseLoader";

// Internal components
import Nav from "./components/Nav/index";
import Header from "./components/Header/index";
import Section from "./components/Section/index";
import Cart from "./components/Cart/index";
import CartBottom from "./components/BottomCart";
import Footer from "./components/Footer/index";

export const ThemeContext = createContext(null);
/*


------------ COMPONENT ------------ */
function App() {
  /* 
  
  -- JS ---- */

  // General states
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [chosenMeals, setChosenMeals] = useState([]);

  // Theme
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  // Get theme in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  // Fetch meals data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/`);
        setData(response.data);
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
                <div className="flex basis-full flex-col gap-14 lg:basis-7/10">
                  <Section categories={data.categories} chosenMeals={chosenMeals} setChosenMeals={setChosenMeals} />
                </div>

                <div className="hidden min-w-[350px] lg:block lg:basis-3/10">
                  <Cart chosenMeals={chosenMeals} setChosenMeals={setChosenMeals} />
                </div>
              </div>

              <CartBottom chosenMeals={chosenMeals} setChosenMeals={setChosenMeals} />
            </main>

            <Footer />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
