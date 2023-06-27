/* ------------ IMPORTS ------------ */

// CSS
import "./footer.css";

// Hooks
import { memo } from "react";
/*


------------ COMPONENT ------------ */
const Footer = () => {
  return (
    <footer>
      <p className="description">Made with ♥️ by Clara Chabanne - 2023</p>
    </footer>
  );
};

export default memo(Footer);
