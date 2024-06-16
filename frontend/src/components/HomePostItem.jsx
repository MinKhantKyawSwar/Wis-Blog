import { Link } from "react-router-dom";

const HomePostItem = ({ post }) => {
  const { id, title, date, image, description, category } = post;
  return (
    <>
      <Link to={"/"} className="home-blogs-link">
        <img className="home-blogs" src={image} alt={title} />
        <p>{title}</p>
      </Link>
    </>
  );
};

export default HomePostItem;
