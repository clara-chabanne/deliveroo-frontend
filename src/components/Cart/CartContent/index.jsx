/* ------------ IMPORTS ------------ */

// Hooks
import { useContext } from "react";

// Utils
import roundedPrice from "../../../utils/roundedPrice";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";

// Internal components
import CartProductLine from "../ProductLine";

// Context
import { MealsContext } from "../../../context/mealsContext";
/*


------------ COMPONENT ------------ */
const CartContent = () => {
  /* 
  
  -- JS ---- */

  // Context
  const { chosenMeals, setChosenMeals } = useContext(MealsContext);

  // Destructutiong calculate total price
  const { total, subtotal, shippingCost } = calculateTotalPrice(chosenMeals);
  /*
  
  
  -- RETURN ---- */
  return (
    <>
      {/* Selected meals lines */}
      <div className={"products"}>
        {chosenMeals.length === 0 ? (
          <p className="flex items-center justify-center pt-2">Votre panier est vide</p>
        ) : (
          chosenMeals.map((meal, index) => {
            return (
              <CartProductLine key={meal.id} chosenMeals={chosenMeals} setChosenMeals={setChosenMeals} index={index} />
            );
          })
        )}
      </div>

      {chosenMeals.length > 0 && (
        <>
          {/* Subtotal */}
          <div className="subtotal">
            <div className="flex items-center justify-between">
              <p>Sous-total</p>
              <p>{roundedPrice(subtotal)}</p>
            </div>

            {/* Shipping fees */}
            <div className="flex items-center justify-between">
              <p>Frais de livraison</p>
              <p>{roundedPrice(shippingCost)}</p>
            </div>
          </div>

          {/* Total */}
          <div className="total">
            <span>Total</span>
            <span>{roundedPrice(total)}</span>
          </div>
        </>
      )}
    </>
  );
};

export default CartContent;
