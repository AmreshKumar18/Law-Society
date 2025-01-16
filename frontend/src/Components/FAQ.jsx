import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="faq_sec">
        <h2 className=" text-center text-white">Frequently Asked Question</h2>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content bg-white">
            <p className=" mt-3">hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content bg-white">
            <p className=" mt-3">hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content bg-white ">
            <p className=" mt-3">hello</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
