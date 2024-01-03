import React from "react";
import { Touchs } from "./Mysvg";

const launched = () => {
  return (
    <div className=" launched_bg">
      <div className=" Custom_container">
        <div className=" d-flex flex-wrap justify-content-md-between justify-content-center text-center text-md-start align-items-center">
          <div data-aos="fade-right">
            <h2 className=" fw_500 fs_48 ff_halyard_display  text-white ready_linehight">
              Ready to launch{" "}
              <span className=" d-md-block"> your next website?</span>
            </h2>
          </div>
          <div
            className=" d-flex   flex-column  justify-content-end mt-3"
            data-aos="fade-left"
          >
            <button className=" touch_btn  ff_halyard_text fw_600 fs_18 touch_linehight  d-flex justify-content-center align-items-center gap-3">
              {" "}
              <Touchs />
              Get in touch now
            </button>
            <p className=" fs_16 fw_400 ff_halyard_text talk_clr pt_19 ">
              Or, take a peek inside our{" "}
              <span className=" studio_clr">design studio</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default launched;
