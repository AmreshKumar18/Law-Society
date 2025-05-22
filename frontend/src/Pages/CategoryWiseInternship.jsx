import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Free from "../Assets/Free.jpg";
import NGO from "../Assets/NGO.jpg";
import clock from "../Assets/clock.png";
import WhatsApp from "../Assets/WhatsApp.jpg";
import Career from "../Assets/Career.jpg";
import { Link } from "react-router-dom";

const CategoryWiseInternship = () => {
  const { category } = useParams(); // Get the category from the URL
  const [internships, setInternships] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // Fetch internships for the specified category
    const fetchInternships = async () => {
      try {
        const response = await fetch(
          `https://law-society-backend.onrender.com/api/internships/category/${category}`
        );
        const data = await response.json();
        setInternships(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, [category]);

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {/* <div>
        <h1>{decodeURIComponent(category)} Internships</h1>
        {internships.map((internship) => (
          <div key={internship._id}>
            <h2>{internship.title}</h2>
            <p>{internship.company}</p>
            <p>{internship.description}</p>
          </div>
        ))}
      </div> */}
      <div className="categorywise_section">
        <h1 className=" text-black">{decodeURIComponent(category)}</h1>
      </div>
      <div className=" category_internship_container">
        <div className="internshipsdetails_sec">
          {internships.map((item) => (
            <Link to={`/internship/details/${item._id}`}>
              <div className="internship_sec">
                <div className="internships_img">
                  <img src={NGO} alt="" />
                </div>
                <div className="internship_title">
                  <div class="badge badge-primary badge-outline">
                    {item.category}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="time_icon">
                    <img src={clock} alt="" />
                    <h6>{formatDate(item.postedOn)}</h6>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/*  */}
        {/* <div className="group_container">
          <img src={Free} alt="" />
          <img src={WhatsApp} alt="" />
          <img src={Career} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default CategoryWiseInternship;
