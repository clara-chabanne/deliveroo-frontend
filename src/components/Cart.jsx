import CartProductLine from "./CartProductLine";
import roundedPrice from "../utils/roundedPrice";

const Cart = ({ chosenMeals, setChosenMeals }) => {
  let subtotal = 0;
  const shippingCost = 2.5;

  chosenMeals.map((meal) => {
    const price = meal.price * meal.qty;
    subtotal = subtotal + price;
    return subtotal;
  });

  const total = subtotal + shippingCost;

  return (
    <>
      <div className="cart">
        <button className={chosenMeals.length === 0 ? "disabled" : ""}>Valider mon panier</button>

        {/* Lignes repas sélectionnés */}
        <div className="products">
          {chosenMeals.length === 0 ? (
            <p className="empty-cart-text">Votre panier est vide</p>
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
            {/* Sous-total */}
            <div className="subtotal">
              <div>
                <p>Sous-total</p>
                <p className="price">{roundedPrice(subtotal)}</p>
              </div>

              <div>
                <p>Frais de livraison</p>
                <p className="price">{roundedPrice(shippingCost)}</p>
              </div>
            </div>

            {/* Frais de livraison */}
            <div className="total">
              <span>Total</span>
              <span className="price">{roundedPrice(total)}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
