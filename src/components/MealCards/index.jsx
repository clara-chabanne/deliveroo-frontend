/* ------------ IMPORTS ------------ */

// CSS
import "./meal-cards.css";

// Hooks
import { memo } from "react";

// Internal components
import MealCard from "../MealCard";
/*


------------ COMPONENT ------------ */
const MealCards = ({ meals }) => {
  return (
    <>
      {meals.map((meal) => {
        return <MealCard key={meal.id} meal={meal} />;
      })}
    </>
  );
};

export default memo(MealCards);
