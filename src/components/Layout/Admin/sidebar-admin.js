import React from "react";
import { Link } from "react-router-dom";
import title from "../../../data/admin-sidebar-content.json"

function SidebarAdmin() {
  return (
    <div style={{ flex: "1.5" }} className="left-bar-container-admin max-[1000px]:border-none">
      <div className="left-bar-wrapper">
        <p className="title">MAIN</p>
        <ul>
          {title?.map((link, i) => (
            <Link to={link.link} style={{ textDecoration: "none" }} key={link._id}>
              <li>
                <img alt="" src={link.img} height={24} width={24} />
                <a href="/#">{link.title}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarAdmin;
