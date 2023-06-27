/* ------------ IMPORTS ------------ */

// Hooks
import { useContext, memo } from "react";

// Utils
import roundedPrice from "../../utils/roundedPrice";

// Context
import { MealsContext } from "../../context/mealsContext";
/*


------------ COMPONENT ------------ */
const MealCard = ({ meal }) => {
  /* 
  
  -- JS ---- */

  // Meals context
  const { chosenMeals, setChosenMeals } = useContext(MealsContext);

  // Function on card clic
  const handleChoosenMeal = (meal) => {
    const chosenMealsCopy = [...chosenMeals];
    const mealExists = chosenMealsCopy.find((e) => e.id === meal.id);

    if (mealExists) {
      mealExists.qty++;
      setChosenMeals(chosenMealsCopy);
    } else {
      chosenMealsCopy.push({ id: meal.id, title: meal.title, price: meal.price, qty: 1 });
      setChosenMeals(chosenMealsCopy);
    }
  };
  /*
  
  
  -- RETURN ---- */
  return (
    <div
      className="meal-card"
      onClick={() => {
        handleChoosenMeal(meal);
      }}>
      {/* Text */}
      <div className={`meal-card-content ${meal.description.length > 5 ? "justify-between" : "justify-start"}`}>
        <h3>{meal.title}</h3>

        {meal.description && <p className="description">{meal.description}</p>}

        <div className="flex items-center gap-2.5">
          <p className="text-17 text-darkGrey">{roundedPrice(meal.price)}</p>
          {meal.popular && (
            <div className="popular">
              <span className="icon-STAR_FILL text-[20px]"></span>
              <span>Populaire</span>
            </div>
          )}
        </div>
      </div>

      {/* Picture */}
      {meal.picture && (
        <img
          src={meal.picture}
          alt={meal.title}
          className="h-[130px] w-[130px] shrink-0 rounded-md object-cover object-center-bottom"
        />
      )}
    </div>
  );
};

export default memo(MealCard);
