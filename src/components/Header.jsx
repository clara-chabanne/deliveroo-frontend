const Header = ({ restaurant, categories }) => {
  return (
    <div className="restaurant container">
      <div className="description">
        <h1>{restaurant.name}</h1>
        <p className="baseline">{restaurant.description}</p>
      </div>

      <img src={restaurant.picture} alt="Brunch avec tartines d'avocat et de saumon" />
    </div>
  );
};

export default Header;
