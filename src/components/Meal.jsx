import roundedPrice from "../utils/roundedPrice";

const Meal = ({ meals, chosenMeals, setChosenMeals }) => {
  return (
    <>
      {meals.map((meal) => {
        const handleChoosenMeal = () => {
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

        return (
          <div className="meal-card" key={meal.id} onClick={handleChoosenMeal}>
            <div className="description">
              <h3>{meal.title}</h3>

              {meal.description && <p>{meal.description}</p>}

              <div className="price-div">
                <p className="price">{roundedPrice(meal.price)}</p>
                {meal.popular && (
                  <div className="popular">
                    <span className="icon icon-STAR_FILL"></span>
                    <span>Populaire</span>
                  </div>
                )}
              </div>
            </div>

            {meal.picture && <img src={meal.picture} alt={meal.title} />}
          </div>
        );
      })}
    </>
  );
};

export default Meal;
