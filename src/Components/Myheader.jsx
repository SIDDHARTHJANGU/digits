import React, { useState, useEffect } from "react";
import { Close, Navicons, Open } from "./Mysvg";
import nav_logo from "../assets/image/logo.png";
import hero_img from "../assets/image/hero_imgone.png";
import pink_triangle from "../assets/image/pink_triangle.svg";
import women_img from "../assets/image/women.svg";
import pink_circle from "../assets/image/pink_circle.svg";
import yellow_circle from "../assets/image/yellow_circle.svg";
import green_rectangle from "../assets/image/Rectangle _green.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Myheader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [show, setShow] = useState(false);
  if (show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const Movement = () => {
    setShow(false);
  };
  return (
    <div className="">
      <nav>
        <div className=" Custom_container">
          <div className=" d-flex align-items-center justify-content-between py_24">
            <div className=" d-flex gap_85 align-items-center">
              <div>
                <img className="cursor" src={nav_logo} alt="img" />
              </div>
              <ul className={show ? "open" : ""}>
                <li>
                  <a
                    href="#Homepages"
                    onClick={Movement}
                    className=" fs_16 fw_400 number_clr ff_halyard_text nav_links position-relative"
                  >
                    Homepages{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#Products"
                    onClick={Movement}
                    className=" fs_16 fw_400 number_clr ff_halyard_text nav_links position-relative"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#Company"
                    onClick={Movement}
                    className=" fs_16 fw_400 number_clr ff_halyard_text nav_links position-relative"
                  >
                    Company <Navicons />
                  </a>
                </li>
                <li>
                  <a
                    href="#Pricing"
                    onClick={Movement}
                    className=" fs_16 fw_400 number_clr ff_halyard_text nav_links position-relative"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#Blog"
                    onClick={Movement}
                    className=" fs_16 fw_400 number_clr ff_halyard_text nav_links position-relative"
                  >
                    Blog
                  </a>
                </li>
                <li className=" d-sm-none">
                  <a
                    href="numbers"
                    className=" fs_16 fw_400 number_clr ff_halyard_text"
                  >
                    +00 123 456 789
                  </a>
                </li>
                <button className=" contact_btn fs_16 fw_400 d-sm-none text-white ff_halyard_text line_hight_contact">
                  Contact Us
                </button>
              </ul>
            </div>
            <div className=" gap_34 d-flex align-items-center">
              <li className=" d-none d-sm-block">
                <a
                  href="numbers"
                  className=" fs_16 fw_400 number_clr ff_halyard_text"
                >
                  +00 123 456 789
                </a>
              </li>
              <button className=" contact_btn fs_16 fw_400 text-white d-none d-sm-block ff_halyard_text line_hight_contact">
                Contact Us
              </button>
              <button
                className="open d-lg-none navicon"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? <Close /> : <Open />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div id="Homepages" className=" hero_bg min_vh_878">
        <div className=" Custom_container">
          <div className=" text-center pt_146" data-aos="fade-down">
            <h1 className=" fs_56 fw_800 ff_halyard_display  design_clr ">
              Good design meets{" "}
              <span className=" d-block"> great user experience</span>
            </h1>
            <p className=" fs_18 fw_400 experts_clr ff_halyard_text mt_27">
              For everyone, from beginners to experts
            </p>
            <div className=" gap_22 d-flex justify-content-center mt_29">
              <button className="Digits_btn text-white fw_400 fs_16 ff_halyard_text">
                Buy Digits
              </button>
              <button className="feature_btn fw_400 fs_16 ff_halyard_text">
                See the Features
              </button>
            </div>
          </div>
          <div
            className=" d-flex justify-content-center  mt_68 position-relative z-3"
            data-aos="fade-up"
          >
            <div>
              <img
                className=" position-absolute pink_triangle "
                src={pink_triangle}
                alt="img"
              />
              <img
                className=" position-absolute women_img"
                src={women_img}
                alt="img"
              />
              <img
                className=" position-absolute pink_circle z-n1"
                src={pink_circle}
                alt="img"
              />
              <img
                className=" position-absolute yellow_circle z-n1"
                src={yellow_circle}
                alt="img"
              />
              <img
                className=" position-absolute green_rectangle z-n1"
                src={green_rectangle}
                alt="img"
              />
            </div>
            <img className="  hero_img" src={hero_img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
