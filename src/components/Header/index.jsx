/* ------------ IMPORTS ------------ */

// Hooks
import { memo } from "react";
/*


------------ COMPONENT ------------ */
const Header = ({ restaurant }) => {
  return (
    <div className="container mx-auto flex  w-websiteWidth flex-col-reverse items-center gap-7 py-7 lg:flex-row">
      {/* Text */}
      <div className="flex flex-col gap-3 lg:basis-7/10">
        <h1>{restaurant.name}</h1>
        <p className="baseline">{restaurant.description}</p>
      </div>

      {/*  Picture */}
      <div className="h-[180px] w-full lg:h-auto lg:min-w-[350px] lg:basis-3/10">
        <img
          src={restaurant.picture}
          alt="Brunch avec tartines d'avocat et de saumon"
          className="h-full w-full rounded-md object-cover object-center lg:aspect-video lg:object-center-bottom"
        />
      </div>
    </div>
  );
};

export default memo(Header);
