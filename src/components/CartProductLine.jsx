import roundedPrice from "../utils/roundedPrice";

const CartProductLine = ({ chosenMeals, setChosenMeals, index }) => {
  const meal = chosenMeals[index];
  const price = meal.price * meal.qty;

  const handleQtyPlus = () => {
    const chosenMealsCopy = [...chosenMeals];
    chosenMealsCopy[index].qty++;
    setChosenMeals(chosenMealsCopy);
  };

  const handleQtyMinus = () => {
    const chosenMealsCopy = [...chosenMeals];

    if (chosenMeals[index].qty === 1) {
      chosenMealsCopy.splice([index], 1);
    } else {
      chosenMealsCopy[index].qty--;
    }

    setChosenMeals(chosenMealsCopy);
  };

  return (
    <>
      <div className="product-line">
        <div className="counter">
          <span className="icon icon-minus" onClick={handleQtyMinus}></span>
          <p>{meal.qty}</p>
          <span className="icon icon-plus" onClick={handleQtyPlus}></span>
        </div>

        <p>{meal.title}</p>

        <p className="price">{roundedPrice(price)}</p>
      </div>
    </>
  );
};

export default CartProductLine;
