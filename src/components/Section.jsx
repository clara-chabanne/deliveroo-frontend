import Meal from "./Meal";

const Section = ({ categories, chosenMeals, setChosenMeals }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          category.meals.length > 1 && (
            <section className="meal-category" key={category.name}>
              <h2>{category.name}</h2>

              <div className="meals-div">
                <Meal meals={category.meals} chosenMeals={chosenMeals} setChosenMeals={setChosenMeals} />
              </div>
            </section>
          )
        );
      })}
    </>
  );
};

export default Section;
