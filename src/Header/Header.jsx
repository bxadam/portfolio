import React, { useState } from "react";
import "./Header.css"; // Import your CSS file for styling
import Hamburger from "../Components/Hamburger/Hamburger";

const Header = () => {
  return (
    <header className="header">
      <Hamburger />
    </header>
  );
};

export default Header;
