/* ------------ IMPORTS ------------ */

// Hooks
import { useContext, memo } from "react";

// Internal components
import MealCards from "../MealCards/index";

// Context
import { MealsContext } from "../../context/mealsContext";
/*


------------ COMPONENT ------------ */
const Section = () => {
  /* 
  
  -- JS ---- */

  // Context
  const {
    data: { categories },
  } = useContext(MealsContext);
  /*
  
  
  -- RETURN ---- */
  return (
    <div className="flex basis-full flex-col gap-14 lg:basis-7/10">
      {categories.map((category) => {
        return (
          category.meals.length > 1 && (
            <section className="flex flex-col gap-5" key={category.name}>
              <h2>{category.name}</h2>

              <div className="flex flex-wrap gap-mealsCardsGap">
                <MealCards meals={category.meals} />
              </div>
            </section>
          )
        );
      })}
    </div>
  );
};

export default memo(Section);
