import React, { useState } from "react";
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

function DashboardWidget({ type }) {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(null);
  let data;

  switch (type) {
    case "Users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query: "Users",
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        bc: "rgba(255, 0, 0, 0.2)",
      };
      break;
    case "Orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
        bc: "rgba(218, 165, 32, 0.2)",
      };
      break;
    case "Earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "view net earnings",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
        bc: "rgba(0, 128, 0, 0.2)",
      };
      break;
    case "Products":
      data = {
        title: "PRODUCTS",
        query: "products",
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
        bc: "rgba(128, 0, 128, 0.2)",
      };
      break;
    default:
      break;
  }
  return (
    <div
      className="dashboard-widget-container"
      style={{ backgroundColor: `${data.bc}` }}
    >
      <div className="left-container">
        <p className="title">{data.title}</p>
        <p className="amount" onClick={() => setAmount(0)}>
          {data.isMoney && "$"} {amount}
        </p>
        <p className="link">{data.link}</p>
      </div>
      <div className="right-container">
        <div
          className={`percentage ${diff < 0 ? "negative" : "positive"}`}
          onClick={() => setDiff(null)}
        >
          {diff < 0 ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default DashboardWidget;
