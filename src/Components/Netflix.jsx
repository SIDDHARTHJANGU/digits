import React from "react";
import netflix_one from "../assets/image/netflix.svg";
import sectwo_img from "../assets/image/drawkit.svg";
import secthree_img from "../assets/image/figma.svg";
import secfour_img from "../assets/image/cinemax.svg";
import secfive_img from "../assets/image/stripe.svg";
import secsix_img from "../assets/image/google.svg";
import secseven_img from "../assets/image/disiney.svg";
import Marquee from "react-fast-marquee";
const Netflix = () => {
  return (
    <div id="Products" className=" mt-sm-5 pt-5 pt-lg-5 ">
      <div className=" Custom_container mt-5 pt-5">
        <div className=" text-center" data-aos="fade-down">
          <h2 className=" ff_halyard_text fs_16 fw_400 Trusted_clr ">
            Trusted by forward-thinking software teams around the world
          </h2>
        </div>
        <Marquee className=" mt_49  ">
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={netflix_one}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={sectwo_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secthree_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secfour_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secfive_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secsix_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secseven_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secfour_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secfive_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secsix_img}
              alt="img"
            />
          </div>
          <div>
            <img
              className=" mx-md-5 mx-3 px-1 px-sm-0"
              src={secseven_img}
              alt="img"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Netflix;
