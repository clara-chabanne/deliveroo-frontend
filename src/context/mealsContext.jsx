import { useState, createContext } from "react";
export const MealsContext = createContext(null);

const MealsProvider = ({ children }) => {
  console.log("MealsProvider rendered");

  // States
  const [data, setData] = useState();
  const [chosenMeals, setChosenMeals] = useState([]);

  const value = {
    data,
    setData,
    chosenMeals,
    setChosenMeals,
  };

  return <MealsContext.Provider value={value}>{children}</MealsContext.Provider>;
};

export default MealsProvider;
