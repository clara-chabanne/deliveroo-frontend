const Meal = ({ meals }) => {
  console.log("meals =>", meals);

  return (
    <>
      {meals.map((meal) => {
        return (
          <div className="meal-card" key={meal.id}>
            <div className="description">
              <h3>{meal.title}</h3>

              {meal.description && <p>{meal.description}</p>}

              <div className="price-div">
                <span className="price">{meal.price.replace(".", ",")} €</span>
                {meal.popular && (
                  <div className="popular">
                    <span className="icon icon-STAR_FILL"></span>
                    <span>Populaire</span>
                  </div>
                )}
              </div>
            </div>

            {meal.picture && <img src={meal.picture} alt="" />}
          </div>
        );
      })}
    </>
  );
};

export default Meal;
