import MealCard from "../MealCard/index";

const Section = ({ categories, chosenMeals, setChosenMeals }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          category.meals.length > 1 && (
            <section className="flex flex-col gap-5" key={category.name}>
              <h2>{category.name}</h2>

              <div className="flex flex-wrap gap-mealsCardsGap">
                <MealCard meals={category.meals} chosenMeals={chosenMeals} setChosenMeals={setChosenMeals} />
              </div>
            </section>
          )
        );
      })}
    </>
  );
};

export default Section;
