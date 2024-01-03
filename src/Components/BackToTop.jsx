import React, { useState } from "react";
import FiArrowUp from "../assets/image/backto_top.svg";

import "../App.css";

const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });

  return (
    <>
      <section>
        <a
          className={
            first
              ? " position-fixed  d-none end-0 bottom-0 "
              : " position-fixed  end-0 bottom-0  justify-content-end d-flex me-2  mb-3"
          }
          onClick={() => moveToTop()}
        >
          <a href="#">
            <img
              width={40}
              className=" backtotop  align-items-center justify-content-center"
              src={FiArrowUp}
              alt="uparrow"
            />
          </a>
        </a>
      </section>
    </>
  );
};
export default BackToTop;
