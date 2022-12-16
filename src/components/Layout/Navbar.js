import React from "react";
import SideBar from "./SideBar";
import navbarItems from "../../data/navbar.json";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left-container">
          <p>Event-BIT</p>
        </div>
        <div className="center-container">
          {navbarItems.map((item) => (
            <ul key={item._id}>
              <Link to={item.path} style={{textDecoration : "none"}}>
                <li>
                  {/* <a href="/#" style={{ textDecoration: "none" }}>
                    {item.value}
                  </a> */}
                  {item.value}
                </li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="right-container">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
