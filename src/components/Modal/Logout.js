import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserLogout } from "../../reducers/user.reducer";

function Logout({ closeModal }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    closeModal();
    dispatch(UserLogout());
  };

  return (
    <div className="logout-container" onClick={closeModal}>
      <div className="logout-wrapper" onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to logout?</p>
        <div className="btn-container">
          <div className="btn-yes" onClick={handleLogout}>
            YES
          </div>
          <div className="btn-no" onClick={closeModal}>
            NO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
