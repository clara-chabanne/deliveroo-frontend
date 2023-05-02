const roundedPrice = (num) => {
  let price = (Math.round(num * 100) / 100).toFixed(2).replace(".", ",") + " €";
  return price;
};

export default roundedPrice;
