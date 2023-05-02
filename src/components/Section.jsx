import Meal from "./Meal";

const Section = ({ categories }) => {
  return (
    <>
      {categories.map((category) => {
        console.log(category);

        return (
          category.meals.length > 1 && (
            <section className="meal-category" key={category.name}>
              <h2>{category.name}</h2>

              <div className="meals-div">
                <Meal meals={category.meals} />
              </div>
            </section>
          )
        );
      })}
    </>
  );
};

export default Section;
