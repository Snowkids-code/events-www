import React from "react";
import account from "../../../assets/svg/account.svg"
import message from "../../../assets/svg/message.svg"
import search from "../../../assets/svg/search.svg"

function NavbarAdmin() {
  return (
    <div className="navbar-admin-container">
      <div className="left-container">
        <p>Event-BIT</p>
      </div>
      <div className="center-container">
        <div className="search-container">
          <img alt="" src={search} height={24} width={24} />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="right-container">
        <div className="item">
          <img alt="" src="/svg/notification.svg" height={28} width={28} />
          <p>0</p>
        </div>
        <div className="item">
          <img alt="" src={message} height={24} width={24} />
          <p>0</p>
        </div>
        <div className="item-account">
          <img alt="" src={account} height={24} width={24} />
          <p>Joshua</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
