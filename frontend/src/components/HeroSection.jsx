import React from "react";
import { Link } from "react-router-dom";
import HeroCategory from "./HeroCategory";
import HeroCard from "./HeroCard";
import HomePostItem from "./HomePostItem";

const HeroSection = ({ post }) => {
  const randomizer = (items) => {
    const random = Math.floor(Math.random() * items.length);
    const product = items[random];

    //selecting latest data
    let arrLength = items.length;
    const newData1 = items[arrLength - 1];
    const newData2 = items[arrLength - 2];
    const newData3 = items[arrLength - 3];
    const newData4 = items[arrLength - 4];
    const newData5 = items[arrLength - 5];
    const newData6 = items[arrLength - 6];
    const newData7 = items[arrLength - 7];

    return (
      <section className="hero">
        <div className="main-content">
          <div className="randomizer">
            <div className="randomizer-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="randomizer-title">
              <span className="hero-category-1">
                {product.category.map((category, categoryIndex) => (
                  <HeroCategory category={category} key={categoryIndex} />
                ))}
              </span>
              <h1>{product.title}</h1>
              <p>{product.date}</p>
              <div>
                <Link to={"/"}>
                  Learn more<span>...</span>
                </Link>
              </div>
            </div>
          </div>
          <h1>Expore Millions of Interesting Blogs</h1>
          <hr />
          <div className="card-container">
            {items.map(
              (post, index) =>
                post.id < 7 && <HomePostItem post={post} key={index} />
            )}
          </div>
          <hr />
        </div>
        <div className="sidebar">
          <div>
            <h1 className="latest-title">Latest News!</h1>
            <hr />
            <HeroCard newData={newData1} />
            <HeroCard newData={newData2} />
            <HeroCard newData={newData3} />
            <HeroCard newData={newData4} />
            <HeroCard newData={newData5} />
            <HeroCard newData={newData6} />
            <HeroCard newData={newData7} />
          </div>
        </div>
      </section>
    );
  };
  return <>{randomizer(post)}</>;
};

export default HeroSection;
