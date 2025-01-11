import React from "react";
import Card from "../Components/Card";

const Articles = () => {
  return (
    <>
      <div className="section article_container">
        <h3>All Articles Collection</h3>
        <div className="input_search">
          <input type="search" placeholder="Search Article Here..." />
        </div>
        <div className="article_card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Articles;
