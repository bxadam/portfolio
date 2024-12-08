import React, { useState } from "react";
import "./Hamburger.css";
import motherBoard from "../../../utils/assets/motherBoard.svg";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <>
      <div
        className="hamburger__menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={motherBoard}
          alt="motherboard"
          className={`hamburger__image ${isActive ? "active" : ""}`}
        />
        {isActive && (
          <div className="hamburger__dropdown">
            <button className="hamburger__item">Home</button>
            <button className="hamburger__item">About</button>
            <button className="hamburger__item">Services</button>
            <button className="hamburger__item">Contact</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Hamburger;
