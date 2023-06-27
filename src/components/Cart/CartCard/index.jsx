/* ------------ IMPORTS ------------ */

// CSS
import "../cart.css";

// Hooks
import { useContext, memo } from "react";

// Internal components
import CartContent from "../CartContent";

// Context
import { MealsContext } from "../../../context/mealsContext";
/*


------------ COMPONENT ------------ */
const CartCard = () => {
  /* 
  
  -- JS ---- */

  // Context
  const { chosenMeals, setChosenMeals } = useContext(MealsContext);
  /*
  
  
  -- RETURN ---- */
  return (
    <div className="hidden min-w-[350px] lg:block lg:basis-3/10">
      <div className={`cart-card ${chosenMeals.length > 0 && "min-h-[322px]"}`}>
        {/* Button */}
        <button className={`btn ${chosenMeals.length === 0 ? "disabled" : "primary"} mb-3 w-full`}>
          Valider mon panier
        </button>

        {/* Cart content */}
        <CartContent chosenMeals={chosenMeals} setChosenMeals={setChosenMeals} />
      </div>
    </div>
  );
};

export default memo(CartCard);
