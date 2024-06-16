import React from "react";

const HeroCategory = ({ category }) => {
  return (
    <div className="hero-category-div">
      <p className="hero-category">{category}</p>
    </div>
  );
};

export default HeroCategory;
