import React from "react";
import Card from "../Components/Card";

const Articles = () => {
  return (
    <>
      <div className="section article_container">
        <h3>All Articles Collection</h3>
        <div className="search_box">
          <input type="search" placeholder="Search Article Here..." />
        </div>
        <div className="article_card">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Articles;
