import React from "react";
import accountIcon from "../../assets/svg/account-circle.svg";
import cartIcon from "../../assets/svg/cart-outline.svg";
import Select from "react-select";
import currency from "../../data/dropdown-values.json";
import { Link } from "react-router-dom";

function SideBar() {
  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "rgba(26, 26, 26, 1)",
      backgroundColor: state.isSelected ? "#00bad3" : "white",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? 0 : "rgba(0, 186, 211, 0.1)",
        cursor: "pointer",
      },
    }),
    control: (styles) => ({
      ...styles,
      // border: "none",
      // boxShadow: "none",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "rgba(26, 26, 26, 0.8)",
      padding: "0.5rem 0",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  return (
    <div className="sidebar-container">
      <img alt="account" src={accountIcon} width="24" height="24" />
      <Link to="/cart">
        <img alt="account" src={cartIcon} width="24" height="24" />
      </Link>
      <div className="language-select-container">
        <Select
          isSearchable={false}
          defaultValue={currency[0][0]}
          options={currency[0]}
          styles={styles}
        />
      </div>
    </div>
  );
}

export default SideBar;
