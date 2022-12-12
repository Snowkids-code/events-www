import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";

function DashboardFeatured() {
  return (
    <div className="admin-dashboard-featured-container">
      <div className="top-container">
        <p className="title">Total Revenue</p>
        <MoreVert fontSize="small" style={{ cursor: "pointer" }} />
      </div>
      <div className="center-container">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <div className="summary-container">
          <p className="title">Total sales made today</p>
          <p className="amount">KSH420</p>
          <p className="desc">
            Previous transactions processing. Last payments may not be included
          </p>
        </div>
        <div className="bottom-container">
          <div className="item">
            <div className="item_title">Target</div>
            <div className="item_result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="result_amount">Ksh12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">Last Month</div>
            <div className="item_result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="result_amount">Ksh12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">Last Week</div>
            <div className="item_result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="result_amount">Ksh12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardFeatured;
