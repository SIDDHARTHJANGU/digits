import React from "react";
import secfour from "../assets/image/secfour_img.png";

const Simplicity = () => {
  return (
    <div id="Pricing" className=" Simplicity_bg">
      <div className=" Custom_container">
        <div className=" text-center" data-aos="fade-down">
          <h2 className=" fw_600 fs_48 ff_halyard_display Whatever_clr">
            Simplicity meets innovative design
          </h2>
          <p className=" fs_21 fw_400 ff_halyard_text Make_clr mt_40">
            It's really easy to start using Digits.{" "}
            <span className=" d-lg-block">
              Install the theme, choose a demo and
            </span>{" "}
            start designing the future of your business!
          </p>
          <button className=" Buy_btn  fw_400 fs_16 ff_halyard_text mt_40">
            Buy Digits
          </button>
        </div>
      </div>
      <div>
        <img className=" w-100" src={secfour} alt="img" />
      </div>
    </div>
  );
};

export default Simplicity;
