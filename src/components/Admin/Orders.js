import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const data = [];

function Orders() {
    const orders = useSelector(state => state.allOrdersReducer.order);

    const productColumn = [
        { field: "_id", headerName: "ID", width: 220 },
        {
          field: "amount",
          headerName: "Amount",
          width: 150,
          editable: false,
          renderCell: (params) => {
            return <div className="product_name_img">$ {params.row.amount}</div>;
          },
        },
        {
          field: "products",
          headerName: "Events",
          width: 150,
          editable: false,
          renderCell: (params) => {
            return <div>{params.row.events.length}</div>;
          },
        },
        {
          field: "status",
          headerName: "Status",
          width: 150,
          editable: false,
          renderCell: (params) => {
            return (
              <div
                style={
                  params.row.status === "pending" && {
                    border: "1px solid orange",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    color: "orange",
                  }
                }
              >
                {params.row.status}
              </div>
            );
          },
        },
        {
          field: "action",
          headerName: "Actions",
          width: 180,
          renderCell: ({ id }) => {
            return (
              <div className="cell-action">
                <div className="view-button">View</div>
                <div className="edit-button">Edit</div>
                <div className="delete-button">Delete</div>
              </div>
            );
          },
        },
      ];

  return (
    <div className="admin-orders-container">
      <div className="orders-table-container">
        <DataGrid
          rows={orders ? orders : data}
          getRowId={(row) => row._id}
          columns={productColumn}
          pageSize={25}
          pagination
        />
      </div>
    </div>
  );
}

export default Orders;
