import React from "react";
import { Link } from "react-router-dom";
import { UserData } from "../UserContext";

const Card = () => {
  const { articles } = UserData();
  // console.log(articles);
  return (
    <>
      {articles.map((item) => (
        <div className="article_section">
          <img
            src={`https://law-society-backend.onrender.com/${item.image}`}
            alt=""
          />
          <div className=" flex justify-between px-3">
            <div className="badge badge-primary">{item.category}</div>
            <div className="badge badge-secondary">{item.writtenBy}</div>
          </div>
          <h5 className=" text-center">{item.title}</h5>
          <Link to={`/articles/details/${item._id}`}>
            <div className=" readmorebtn">Read More</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
