import React from "react";
import { Row, Col } from "react-bootstrap";
import happyone from "../assets/image/happy.svg";
import happytwo from "../assets/image/happytwo.svg";
import happythree from "../assets/image/happythree.svg";

const WhatOthers = () => {
  return (
    <div id="Blog" className=" py_117">
      <div className=" Custom_container">
        <div data-aos="fade-down">
          <h2 className=" fs_48 fw_800 ff_halyard_display Whatever_clr  text-center">
            What others are saying
          </h2>
        </div>
        <div>
          <Row className=" pt_56 justify-content-center gap-4  gap-md-0 ">
            <Col lg={4} md={6} sm={12}>
              <div className=" secfive_card" data-aos="fade-right">
                <p className=" fs_18 fw_400 ff_halyard_text cardpara_linehight pb-3 text-center text-lg-start">
                  Completely beautiful website and amazing support! This my
                  second website from this author and I love both of the sites
                  so much and she has helped me so well when I needed it!
                </p>
                <div className=" d-flex flex-column  align-items-center mt_39">
                  <img src={happyone} alt="img" />
                  <p className=" fs_22 fw_600 ff_halyard_display Whatever_clr mt-3">
                    Happy User
                  </p>
                  <p className=" fw-400 fs_18 ff_halyard_text cardpara_linehight ">
                    tempy.club
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className=" secfive_card" data-aos="fade-up">
                <p className=" fs_18 fw_400 ff_halyard_text cardpara_linehight pb-3 text-center text-lg-start">
                  Completely beautiful website and amazing support! This my
                  second website from this author and I love both of the sites
                  so much and she has helped me so well when I needed it!
                </p>
                <div className=" d-flex flex-column  align-items-center mt_39">
                  <img src={happytwo} alt="img" />
                  <p className=" fs_22 fw_600 ff_halyard_display Whatever_clr  mt-3">
                    Happy User
                  </p>
                  <p className=" fw-400 fs_18 ff_halyard_text cardpara_linehight ">
                    tempy.club
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={12}
              className=" mt-md-4  pt-sm-1 mt-lg-0 pt-lg-0"
              data-aos="fade-left"
            >
              <div className=" secfive_card">
                <p className=" fs_18 fw_400 ff_halyard_text cardpara_linehight pb-3 text-center text-lg-start">
                  Completely beautiful website and amazing support! This my
                  second website from this author and I love both of the sites
                  so much and she has helped me so well when I needed it!
                </p>
                <div className=" d-flex flex-column  align-items-center mt_39">
                  <img src={happythree} alt="img" />
                  <p className=" fs_22 fw_600 ff_halyard_display Whatever_clr  mt-3">
                    Happy User
                  </p>
                  <p className=" fw-400 fs_18 ff_halyard_text cardpara_linehight ">
                    tempy.club
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WhatOthers;
