import React from "react";
import Free from "../Assets/Free.jpg";
import NGO from "../Assets/NGO.jpg";
// import clock from "../Assets/clock.png";
import sheet from "../Assets/sheet.png";
import eye from "../Assets/eye.png";
import WhatsApp from "../Assets/WhatsApp.jpg";
import Career from "../Assets/Career.jpg";

const InternshipDetails = () => {
  return (
    <>
      <div className="section internship_container">
        <div className="internshipdetails_sec">
          <h3>Internship Details</h3>
          <img src={NGO} alt="" />
          <div className="details_count">
            <img src={sheet} alt="" />
            <img src={eye} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            distinctio quo repellat modi numquam. Fugit vero ab natus, accusamus
            eos nihil dolores impedit. Saepe sint sed magnam totam, at inventore
            cumque reprehenderit ut necessitatibus corporis facilis! Nemo
            dolorum et quo nisi voluptatibus. Accusantium enim quibusdam nam
            eius nisi dolorum doloribus voluptates. Ducimus incidunt at qui
            minima doloremque aliquam deleniti, obcaecati et velit, consectetur
            laboriosam cum quos laudantium? Dignissimos necessitatibus
            repellendus minima sed? Cupiditate debitis vero temporibus, dolorem
            id est consequuntur fugit error enim sint itaque beatae pariatur
            ratione delectus, voluptatum atque, quasi nesciunt molestiae.
            Tenetur dicta doloribus minima odio cum doloremque unde placeat
            molestiae quis hic sed ipsam deleniti rem enim facere, eos dolorem
            expedita assumenda. Sed ullam aliquam sapiente eveniet omnis natus,
            adipisci atque! Error pariatur iste, quibusdam commodi sed nihil
            dignissimos. Suscipit modi, nemo sed illum quidem quam nobis
            corrupti officiis natus aspernatur. Culpa natus ea quam voluptates,
            neque doloribus eum aperiam deleniti suscipit, odit exercitationem
            repellat laboriosam provident excepturi tempore voluptatibus, quis
            dicta libero? Harum, ad distinctio. Aliquid nulla, maiores pariatur
            architecto vero incidunt temporibus. Illo nobis ab illum harum
            numquam veniam eius ratione dolorum, corrupti est modi voluptatibus
            quo ad veritatis non ea repudiandae dolores officiis!
          </p>
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
