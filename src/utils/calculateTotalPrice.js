const calculateTotalPrice = (chosenMeals) => {
  let subtotal = 0;
  const shippingCost = 2.5;

  chosenMeals.map((meal) => {
    const price = meal.price * meal.qty;
    subtotal = subtotal + price;
    return subtotal;
  });

  const total = subtotal + shippingCost;

  return { total, subtotal, shippingCost };
};

export default calculateTotalPrice;
