import React from "react";
import method from "../Assets/method.png";
import quality from "../Assets/quality.png";
import human from "../Assets/human.png";
import policy from "../Assets/policy.png";
import strategy from "../Assets/strategy.png";
import management from "../Assets/management.png";

const Services = () => {
  return (
    <>
      <div className="service_container">
        <h2>What We Can Offer You</h2>
        <h6>
          Optimize Your Journey With Our Consulting Services, delivering
          Personalized Solutions for success
        </h6>
        <div className="services">
          <div className="service">
            <img src={method} alt="" />
            <h4>Method Development</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={quality} alt="" />
            <h4>Quality Assurance</h4>
            <h6>
              Quality excellence for optimal and sustainable business operation.
            </h6>
          </div>
          <div className="service">
            <img src={human} alt="" />
            <h4>Human Resources</h4>
            <h6>Optimize human resources for sustainable business growth.</h6>
          </div>
          <div className="service">
            <img src={policy} alt="" />
            <h4>Method Development</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={strategy} alt="" />
            <h4>Method Development</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={management} alt="" />
            <h4>Method Development</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
