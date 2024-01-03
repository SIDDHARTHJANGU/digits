import React from "react";
import { Col, Row } from "react-bootstrap";
import secthree_img from "../assets/image/sec_threeimg.png";
import { Design, Easy, Fast } from "./Mysvg";

const WhateverWork = () => {
  return (
    <div id="Company" className=" pt_80">
      <div className=" Custom_container">
        <div data-aos="fade-down">
          {" "}
          <h2 className=" fs_48 ff_halyard_display fw_800 Whatever_clr text-center">
            Whatever work you do,{" "}
            <span className=" d-sm-block"> we're able to help</span>
          </h2>
        </div>
        <Row className="  d-flex justify-content-between align-items-center pt_50 ">
          <Col md={6} lg={6}>
            <div data-aos="fade-right">
              <img className=" w-100" src={secthree_img} alt="img" />
            </div>
          </Col>
          <Col md={6} lg={5} className=" gap-5 mt-5  ">
            <div className=" d-flex   gap-5" data-aos="fade-left">
              <div>
                <Design />
              </div>
              <div>
                <h3 className=" fs_22 fw_600 ff_halyard_display Whatever_clr ">
                  Design and Assets
                </h3>
                <p className=" fs_18 ff_halyard_text fw_400 Make_clr mt_25 ">
                  Make your brand stand out with{" "}
                  <span className=" d-lg-block">
                    {" "}
                    pixel-perfect design crafted to
                  </span>
                  perfection.
                </p>
              </div>
            </div>
            <div className=" line mt_41" data-aos="fade-left"></div>
            <div className=" d-flex   gap-5" data-aos="fade-left">
              <div>
                <Easy />
              </div>
              <div>
                <h3 className=" fs_22 fw_600 ff_halyard_display Whatever_clr">
                  Easy Content
                </h3>
                <p className=" fs_18 ff_halyard_text fw_400 Make_clr mt_25 ">
                  Import your demos or build pages{" "}
                  <span className=" d-lg-block">
                    {" "}
                    visually. Bonus: All images and
                  </span>
                  illustrations included!
                </p>
              </div>
            </div>
            <div className=" line mt_41" data-aos="fade-left"></div>
            <div className=" d-flex   gap-5" data-aos="fade-left">
              <div>
                <Fast />
              </div>
              <div>
                <h3 className=" fs_22 fw_600 ff_halyard_display Whatever_clr">
                  Fast and Reliable
                </h3>
                <p className=" fs_18 ff_halyard_text fw_400 Make_clr mt_25 ">
                  No heavy-weight plugins. No{" "}
                  <span className=" d-lg-block">
                    builders. No unneccesary file
                  </span>
                  loading. Pure WordPress.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhateverWork;
