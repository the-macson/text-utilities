import React from "react";
import {Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/text-utilities">Home</Link>
        <Link to="/text-utilities/about">About</Link>
      </div>
    </>
  );
};
export default Navbar;
