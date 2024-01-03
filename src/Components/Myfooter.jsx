import React from "react";
import { Row, Col } from "react-bootstrap";
import footer_logo from "../assets/image/nav_logo.svg";
import { Dribble, Envato, Facebook, Instagram, Twitter } from "./Mysvg";

const Myfooter = () => {
  return (
    <div className=" pt_128 overflow-hidden">
      <div className=" Custom_container ">
        <Row className=" d-flex justify-content-between pb_77 ">
          <Col lg={5} md={8}>
            <div>
              <img className="cursor" src={footer_logo} alt="img" />
              <p className=" fw_400 fs_18 ff_halyard_text Digits_clr ">
                Digits is a website template built to{" "}
                <span className=" d-lg-block">
                  work seamlesly with the WordPress
                </span>{" "}
                <span className=" d-lg-block">
                  block editor to create beautifully
                </span>{" "}
                designed pages in minutes.
              </p>
            </div>
          </Col>
          <Col md={12} lg={7}>
            <Row>
              <Col md={4} sm={6} xs={6}>
                <ul>
                  <li className=" fs_22 fw_500 ff_halyard_display Whatever_clr">
                    Pages
                  </li>
                  <li className=" pt_22">
                    <a
                      href="#Home"
                      className=" fw_400 fs_18 ff_halyard_text footer_link"
                    >
                      {" "}
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#About"
                      className=" fw_400 fs_18 ff_halyard_text footer_link"
                    >
                      {" "}
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#News"
                      className=" fw_400 fs_18 ff_halyard_text footer_link"
                    >
                      {" "}
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Pricing"
                      className=" fw_400 fs_18 ff_halyard_text footer_link"
                    >
                      {" "}
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      className=" fw_400 fs_18 ff_halyard_text footer_link"
                    >
                      {" "}
                      Contact
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4} sm={6} xs={6}>
                <ul>
                  <li className=" fs_22 fw_500 ff_halyard_display Whatever_clr">
                    Demos
                  </li>
                  <li className=" pt_22">
                    <a
                      href="#Home"
                      className=" fw_400 fs_18 ff_halyard_text footer_link "
                    >
                      {" "}
                      Classic
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Boxy"
                      className=" fw_400 fs_18 ff_halyard_text footer_link "
                    >
                      {" "}
                      Boxy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Gradient"
                      className=" fw_400 fs_18 ff_halyard_text footer_link "
                    >
                      {" "}
                      Gradient
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Minimal"
                      className=" fw_400 fs_18 ff_halyard_text footer_link "
                    >
                      {" "}
                      Minimal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Night"
                      className=" fw_400 fs_18 ff_halyard_text footer_link "
                    >
                      {" "}
                      Night
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                sm={6}
                md={4}
                className=" d-flex flex-column align-items-lg-end mt-4 pt-1 pt-md-0 mt-md-0"
              >
                <ul>
                  <li className=" fs_22 fw_500 ff_halyard_display Whatever_clr">
                    Resources
                  </li>
                  <div className=" d-flex align-items-center gap_24">
                    <div>
                      <a href="https://www.facebook.com/">
                        {" "}
                        <Facebook />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/?hl=en">
                        {" "}
                        <Instagram />
                      </a>
                    </div>
                    <div>
                      <a href="https://twitter.com/0xrandomrats">
                        {" "}
                        <Twitter />
                      </a>
                    </div>
                    <div>
                      <a href="https://dribbble.com/">
                        {" "}
                        <Dribble />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.envato.com/">
                        {" "}
                        <Envato />
                      </a>
                    </div>
                  </div>

                  <li className=" mt_25">
                    <a
                      href="# Downloadnow"
                      className=" fw_400 fs_18 ff_halyard_text footer_link"
                    >
                      {" "}
                      Download now
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Documentation"
                      className=" fw_400 fs_18 ff_halyard_text footer_link"
                    >
                      {" "}
                      Documentation
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className=" line_footer"></div>
        <div className=" d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between pb_107">
          <div>
            <p className=" fs_14 fw_400 ff_halyard_text Copyright_clr">
              Copyright © 2020 tempy.club
            </p>
          </div>
          <div className=" d-flex align-items-center gap-4">
            <p className=" Privacy_clr fw_400 fs_14 ff_halyard_text">
              Privacy{" "}
            </p>
            <p className=" Privacy_clr fw_400 fs_14 ff_halyard_text">
              {" "}
              Policy Terms of Use
            </p>
            <p className=" Privacy_clr fw_400 fs_14 ff_halyard_text">GDPR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myfooter;
