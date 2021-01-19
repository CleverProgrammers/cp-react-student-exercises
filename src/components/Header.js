import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/">Home</Link>
      <Link to="/1-exercise">Exercise 1</Link>
      <Link to="/2-exercise">Exercise 2</Link>
    </div>
  );
};

export default Header;
