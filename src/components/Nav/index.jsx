/* ------------ IMPORTS ------------ */

// CSS
import "./nav.css";

// Theme context
import { useContext } from "react";
import { ThemeContext } from "../../App";

// External components
import { Switch } from "@headlessui/react";

// Images
import logo from "../../assets/img/logo-teal.svg";

// Icons
import { Icon } from "@iconify/react";
/*


------------ COMPONENT ------------ */
const Nav = () => {
  /* 
  
  -- JS ---- */

  // Theme context
  const { theme, toggleTheme } = useContext(ThemeContext);
  /*
  
  
  -- RETURN ---- */
  return (
    <div className="nav">
      <div className="container mx-auto flex h-full w-websiteWidth items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo-deliveroo" className="h-[64%]" />

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

export default Nav;
