/* ------------ IMPORTS ------------ */

// Hooks
import { useState } from "react";

// Utils
import roundedPrice from "../../utils/roundedPrice";

// Internal components
import CartProductLine from "../CartProductLine/index";

// Icons
import { Icon } from "@iconify/react";
/*


------------ COMPONENT ------------ */
const CartBottom = ({ chosenMeals, setChosenMeals }) => {
  /* 
  
  -- JS ---- */
  // State
  const [showCart, setShowCart] = useState(false);

  // Calculate total price
  let subtotal = 0;
  const shippingCost = 2.5;

  chosenMeals.map((meal) => {
    const price = meal.price * meal.qty;
    subtotal = subtotal + price;
    return subtotal;
  });

  const total = subtotal + shippingCost;
  /*
  
  
  -- RETURN ---- */
  return (
    <div className="sticky bottom-0 z-10 flex h-fit max-h-[80vh] w-full flex-col gap-2 overflow-scroll bg-white p-6 shadow-cartBottom lg:hidden">
      {showCart && (
        <>
          <div
            className="flex items-center justify-end"
            onClick={() => {
              setShowCart(false);
            }}>
            <Icon icon="iconamoon:close-bold" className="text-2xl" />
          </div>
          {/* Selected meals lines */}
          <div
            className={`products min-h-[50px] !gap-4 ${
              chosenMeals.length > 0 && "border-b border-solid border-darkWhite dark:border-darkTheme-darkGrey"
            }`}>
            {chosenMeals.map((meal, index) => {
              return (
                <CartProductLine
                  key={meal.id}
                  chosenMeals={chosenMeals}
                  setChosenMeals={setChosenMeals}
                  index={index}
                />
              );
            })}
          </div>

          {chosenMeals.length > 0 && (
            <>
              {/* Subtotal */}
              <div className="subtotal border-darkWhite !py-2 dark:border-darkTheme-darkGrey">
                <div className="flex items-center justify-between">
                  <p>Sous-total</p>
                  <p>{roundedPrice(subtotal)}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p>Frais de livraison</p>
                  <p>{roundedPrice(shippingCost)}</p>
                </div>
              </div>

              {/* Shipping fees */}
              <div className="total py-2">
                <span>Total</span>
                <span>{roundedPrice(total)}</span>
              </div>
            </>
          )}
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

export default CartBottom;
