import React from "react";
import family from "../Assets/family.png";
import business from "../Assets/business.png";
import trust from "../Assets/trust.png";
import file from "../Assets/file.png";
import education from "../Assets/education.png";
import workers from "../Assets/workers.png";

const Features = () => {
  return (
    <>
      <div>
        <h2>Our Practice Areas</h2>
        <h6>
          Problems trying to resolve the conflict between the two major realms.
        </h6>
        <div className="services">
          <div className="service">
            <img src={business} alt="" />
            <h3>Trust & Estates</h3>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={trust} alt="" />
            <h3>Business Law</h3>
            <h6>
              Quality excellence for optimal and sustainable business operation.
            </h6>
          </div>
          <div className="service">
            <img src={family} alt="" />
            <h3>Family Law</h3>
            <h6>Optimize human resources for sustainable business growth.</h6>
          </div>
          <div className="service">
            <img src={file} alt="" />
            <h3>Method Development</h3>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={education} alt="" />
            <h3>Method Development</h3>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={workers} alt="" />
            <h3>Method Development</h3>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
