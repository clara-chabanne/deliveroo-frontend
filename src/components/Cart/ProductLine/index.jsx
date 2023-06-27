/* ------------ IMPORTS ------------ */

// Utils
import roundedPrice from "../../../utils/roundedPrice";
/*


------------ COMPONENT ------------ */
const CartProductLine = ({ chosenMeals, setChosenMeals, index }) => {
  /* 
  
  -- JS ---- */

  // Counter
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
  /*
  
  
  -- RETURN ---- */
  return (
    <>
      <div className="flex-start flex items-center gap-4">
        {/* Counter */}
        <div className="flex items-center gap-2">
          <span className="icon-minus text-2xl text-main" onClick={handleQtyMinus}></span>
          <p>{meal.qty}</p>
          <span className="icon-plus text-2xl text-main" onClick={handleQtyPlus}></span>
        </div>

        {/* Meal title */}
        <p className="flex-1">{meal.title}</p>

        {/* Price */}
        <p>{roundedPrice(price)}</p>
      </div>
    </>
  );
};

export default CartProductLine;
