const roundedPrice = (num) => {
  let price = Number(num).toFixed(2).replace(".", ",") + " €";
  return price;
};

export default roundedPrice;
