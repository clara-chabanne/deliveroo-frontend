/* ------------ IMPORTS ------------ */

// CSS
import "../cart.css";

// Hooks
import { useState, useContext, memo } from "react";

// Internal components
import CartContent from "../CartContent";

// Context
import { MealsContext } from "../../../context/mealsContext";

// Icons
import { Icon } from "@iconify/react";

/*


------------ COMPONENT ------------ */
const BottomCart = () => {
  /* 
  
  -- JS ---- */

  // Context
  const { chosenMeals } = useContext(MealsContext);

  // States
  const [showCart, setShowCart] = useState(false);
  /*
  
  
  -- RETURN ---- */
  return (
    <div className="cart-bottom">
      {/* Shows only when button is clicked */}
      {showCart && (
        <>
          {/* Close icon */}
          <div
            className="flex items-center justify-end"
            onClick={() => {
              setShowCart(false);
            }}>
            <Icon icon="iconamoon:close-bold" className="text-2xl" />
          </div>

          {/* Cart content */}
          <CartContent />
        </>
      )}

      {/* Button */}
      <button
        className={`btn btn-number ${chosenMeals.length === 0 ? "disabled" : "primary"} w-full`}
        onClick={() => {
          if (chosenMeals.length > 0) {
            setShowCart(true);
          }
        }}>
        {chosenMeals.length > 0 && (
          <div className="absolute left-4 flex h-[60%] items-center justify-center rounded-md bg-white p-3 text-main">
            {chosenMeals.length}
          </div>
        )}
        Voir mon panier
      </button>
    </div>
  );
};

export default memo(BottomCart);
