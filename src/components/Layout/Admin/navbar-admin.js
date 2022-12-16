import React, { useState } from "react";
import { useSelector } from "react-redux";
import account from "../../../assets/svg/account.svg";
import message from "../../../assets/svg/message.svg";
import search from "../../../assets/svg/search.svg";
import Logout from "../../Modal/Logout";

function NavbarAdmin() {
  //get user data from the redux store
  const currentUser = useSelector((state) => state.userReducer.user);

  //hook to determine modal appearance
  const [logout, setLogout] = useState(false);

  //close the logout modal
  const handleCloseModal = () => {
    setLogout(false);
  };

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
        <div className="item-account" onClick={() => setLogout(!logout)}>
          <img alt="" src={account} height={24} width={24} />
          <p>{currentUser.username}</p>
        </div>
        {logout && <Logout closeModal={handleCloseModal} />}
      </div>
    </div>
  );
}

export default NavbarAdmin;
