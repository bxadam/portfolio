import React, { useState } from "react";
import "./Hamburger.css";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      className="hamburger__wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hamburger__menu">
        <div className={`hamburger__line ${isActive ? "active" : ""}`}></div>
        <div className={`hamburger__line ${isActive ? "active" : ""}`}></div>
        <div className={`hamburger__line ${isActive ? "active" : ""}`}></div>
      </div>
      {isActive && (
        <div className="hamburger__dropdown">
          <button className="hamburger__item">Home</button>
          <button className="hamburger__item">About</button>
          <button className="hamburger__item">Services</button>
          <button className="hamburger__item">Contact</button>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
