/* ------------ IMPORTS ------------ */

// CSS
import "./cart.css";

// Utils
import roundedPrice from "../../utils/roundedPrice";

// Internal components
import CartProductLine from "../CartProductLine/index";
/*


------------ COMPONENT ------------ */
const Cart = ({ chosenMeals, setChosenMeals }) => {
  /* 
  
  -- JS ---- */

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
    <>
      <div className={`cart ${chosenMeals.length > 0 && "min-h-[322px]"}`}>
        {/* Button */}
        <button className={`btn ${chosenMeals.length === 0 ? "disabled" : "primary"} mb-3 w-full`}>
          Valider mon panier
        </button>

        {/* Selected meals lines */}
        <div
          className={`products ${
            chosenMeals.length > 0 && "border-b border-solid border-darkWhite dark:border-darkTheme-darkGrey"
          } pb-6 pt-3`}>
          {chosenMeals.length === 0 ? (
            <p className="flex items-center justify-center pt-2">Votre panier est vide</p>
          ) : (
            chosenMeals.map((meal, index) => {
              return (
                <CartProductLine
                  key={meal.id}
                  chosenMeals={chosenMeals}
                  setChosenMeals={setChosenMeals}
                  index={index}
                />
              );
            })
          )}
        </div>

        {chosenMeals.length > 0 && (
          <>
            {/* Subtotal */}
            <div className="subtotal border-darkWhite dark:border-darkTheme-darkGrey">
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
            <div className="total pb-1 pt-6">
              <span>Total</span>
              <span>{roundedPrice(total)}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
