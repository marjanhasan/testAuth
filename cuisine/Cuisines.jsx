import React from "react";
import CusineCards from "./CusineCards";

const Cuisines = ({ cuisine }) => {
  return (
    <div className="mt-6 my-container">
      <div className="title-body">
        <h2 className="title">Availabe Cuisine</h2>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
      <div className="md:flex">
        {cuisine.map((card) => (
          <CusineCards key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
