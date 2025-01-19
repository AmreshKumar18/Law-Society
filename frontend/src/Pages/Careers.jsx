import React from "react";
import Free from "../Assets/Free.jpg";
import NGO from "../Assets/NGO.jpg";
import clock from "../Assets/clock.png";
import WhatsApp from "../Assets/WhatsApp.jpg";
import Career from "../Assets/Career.jpg";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <div className="section internship_container">
        <div className="internshipdetails_sec">
          <Link to="/internship/details">
            <div className="internship_sec">
              <div className="internship_img">
                <img src={NGO} alt="" />
              </div>
              <div className="internship_title">
                <h4>Online Internship Opportunity at Hamari Pahchan NGO</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tenetur tempore ipsam voluptatum inventore
                  reprehenderit repellat! Voluptatum provident eos laboriosam.
                </p>
                <div className="time_icon">
                  <img src={clock} alt="" />
                  <h6>January 17, 2025</h6>
                </div>
              </div>
            </div>
          </Link>

          <div className="internship_sec">
            <div className="internship_img">
              <img src={NGO} alt="" />
            </div>
            <div className="internship_title">
              <h4>Online Internship Opportunity at Hamari Pahchan NGO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tenetur tempore ipsam voluptatum inventore
                reprehenderit repellat! Voluptatum provident eos laboriosam.
              </p>
              <div className="time_icon">
                <img src={clock} alt="" />
                <h6>January 17, 2025</h6>
              </div>
            </div>
          </div>
          <div className="internship_sec">
            <div className="internship_img">
              <img src={NGO} alt="" />
            </div>
            <div className="internship_title">
              <h4>Online Internship Opportunity at Hamari Pahchan NGO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tenetur tempore ipsam voluptatum inventore
                reprehenderit repellat! Voluptatum provident eos laboriosam.
              </p>
              <div className="time_icon">
                <img src={clock} alt="" />
                <h6>January 17, 2025</h6>
              </div>
            </div>
          </div>
          <div className="internship_sec">
            <div className="internship_img">
              <img src={NGO} alt="" />
            </div>
            <div className="internship_title">
              <h4>Online Internship Opportunity at Hamari Pahchan NGO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tenetur tempore ipsam voluptatum inventore
                reprehenderit repellat! Voluptatum provident eos laboriosam.
              </p>
              <div className="time_icon">
                <img src={clock} alt="" />
                <h6>January 17, 2025</h6>
              </div>
            </div>
          </div>
          <div className="internship_sec">
            <div className="internship_img">
              <img src={NGO} alt="" />
            </div>
            <div className="internship_title">
              <h4>Online Internship Opportunity at Hamari Pahchan NGO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tenetur tempore ipsam voluptatum inventore
                reprehenderit repellat! Voluptatum provident eos laboriosam.
              </p>
              <div className="time_icon">
                <img src={clock} alt="" />
                <h6>January 17, 2025</h6>
              </div>
            </div>
          </div>
          <div className="internship_sec">
            <div className="internship_img">
              <img src={NGO} alt="" />
            </div>
            <div className="internship_title">
              <h4>Online Internship Opportunity at Hamari Pahchan NGO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tenetur tempore ipsam voluptatum inventore
                reprehenderit repellat! Voluptatum provident eos laboriosam.
              </p>
              <div className="time_icon">
                <img src={clock} alt="" />
                <h6>January 17, 2025</h6>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="group_container">
          <img src={Free} alt="" />
          <img src={WhatsApp} alt="" />
          <img src={Career} alt="" />
        </div>
      </div>
    </>
  );
};

export default Careers;
