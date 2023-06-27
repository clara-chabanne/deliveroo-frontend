/* ------------ IMPORTS ------------ */

// CSS
import "./nav.css";

// Hooks
import { useContext, memo } from "react";

// External components
import { Switch } from "@headlessui/react";

// Context
import { ThemeContext } from "../../context/themeContext";
import { MealsContext } from "../../context/mealsContext";

// Images
import logo from "../../assets/img/logo-teal.svg";

// Icons
import { Icon } from "@iconify/react";
/*


------------ COMPONENT ------------ */
const Nav = () => {
  /* 
  
  -- JS ---- */

  // Context
  const { theme, setTheme } = useContext(ThemeContext);
  const { setChosenMeals } = useContext(MealsContext);

  // Set theme in localStorage on switch change
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };
  /*
  
  
  -- RETURN ---- */
  return (
    <div className="nav">
      <div className="container mx-auto flex h-full w-websiteWidth items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="logo-deliveroo"
          className="h-[64%] hover:cursor-pointer"
          onClick={() => {
            setChosenMeals([]);
          }}
        />

        {/* Switch */}
        <Switch checked={theme === "dark"} onChange={toggleTheme} className="theme-switch">
          <div className="theme-switch-circle">
            {theme === "dark" ? <Icon icon="ph:moon-bold" /> : <Icon icon="octicon:sun-16" />}
          </div>
        </Switch>
      </div>
    </div>
  );
};

export default memo(Nav);
