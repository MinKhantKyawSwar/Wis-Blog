import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ newData }) => {
  const { id, title, date, image, description } = newData;
  const data = [];
  return (
    <>
      <Link to={"/"} className="sideBar-sec">
        <img src={image} alt={title} />
        <div className="sideBar-title">
          <h1>{title}</h1>
        </div>
      </Link>
    </>
  );
};

export default HeroCard;
