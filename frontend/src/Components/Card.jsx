import React from "react";
import { Link } from "react-router-dom";
import article from "../Assets/article.png";

const Card = () => {
  return (
    <>
      <div className="article_section">
        <img src={article} alt="" />
        <h5 className=" text-center">The Dilemma Continues</h5>
        <Link to="/articles/details">
          <div className=" readmorebtn">Read More</div>
        </Link>
      </div>
    </>
  );
};

export default Card;
