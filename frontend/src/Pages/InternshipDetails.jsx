import React, { useEffect, useState } from "react";
import Free from "../Assets/Free.jpg";
import NGO from "../Assets/NGO.jpg";
// import clock from "../Assets/clock.png";
import sheet from "../Assets/sheet.png";
import eye from "../Assets/eye.png";
import WhatsApp from "../Assets/WhatsApp.jpg";
import Career from "../Assets/Career.jpg";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const InternshipDetails = () => {
  const [internshipDetails, setInternshipDetails] = useState([]);
  const { id } = useParams();
  const getInternshipDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/internship/${id}`);
      console.log(res.data);
      setInternshipDetails(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getInternshipDetails();
  });

  //
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
      <div className="section internship_container">
        <div className="internshipdetails_sec">
          <h3>{internshipDetails.title}</h3>
          <img src={NGO} alt="" />
          <div className="badge badge-primary">
            {internshipDetails.category}
          </div>
          <div className="details_count">
            <img src={sheet} alt="" />
            <img src={eye} alt="" />
          </div>
          <div>
            <p>{internshipDetails.description}</p>
          </div>
          <div>
            <h2>Requirements</h2>
            <p>
              {internshipDetails.requirements?.map((item) => (
                <p>{item}</p>
              ))}
            </p>
          </div>
          <div>
            <h2>Skill Required</h2>
            <p>
              {internshipDetails.skillsRequired?.map((item) => (
                <p>{item}</p>
              ))}
            </p>
          </div>
          <div>
            <p>
              <strong>Company:</strong> {internshipDetails.company}
            </p>
            <p>
              <strong>Location:</strong> {internshipDetails.location}
            </p>
            <p>
              <strong>Duration:</strong> {internshipDetails.duration}
            </p>
            <p>
              <strong>Stipend:</strong> {internshipDetails.stipend}
            </p>
            <p>
              <strong>Application Deadline:</strong>{" "}
              {formatDate(internshipDetails.applicationDeadline)}
            </p>
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

export default InternshipDetails;
