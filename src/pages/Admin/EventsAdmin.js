import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../components/Layout/Admin/navbar-admin";
import SidebarAdmin from "../../components/Layout/Admin/sidebar-admin";

const data = [
  {
    id: 1,
    title: "No Product",
  },
];

function EventsAdmin() {
  const [addProduct, setAddProduct] = useState(false);
  const [events, setEvents] = useState();

  const productColumn = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "brand",
      headerName: "Brand",
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="product-name-img">
            {params.row.img && (
              <div className="product-img-wrapper">
                <img
                  alt=""
                  src={params.row.img}
                  width={32}
                  height={32}
                  className="product-img"
                />
              </div>
            )}

            {params.row.brand}
          </div>
        );
      },
    },
    { field: "title", headerName: "Title", width: 250, editable: false },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: false,
      renderCell: (params) => {
        return <div style={{ fontWeight: "550" }}>$ {params.row.price}</div>;
      },
    },
    {
      field: "styleCode",
      headerName: "Style Code",
      width: 150,
      editable: false,
    },
    { field: "color", headerName: "Color", width: 150, editable: false },
    {
      field: "action",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link
              to={`/products/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="view-button">View</div>
            </Link>
            <div className="edit-button">Edit</div>
            <div className="delete-button">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="admin-events">
      <NavbarAdmin />
      <div style={{ display: "flex" }}>
        <SidebarAdmin />
        <div style={{ flex: "10" }}>
          <div className="admin-events-container">
            <div className="top-container">
              <div
                className="add-product-btn"
                onClick={() => setAddProduct(!addProduct)}
              >
                Add Event
              </div>
            </div>
            <div className="products-table-container">
              <DataGrid
                rows={events ? events : data}
                getRowId={(row) => row.title}
                columns={productColumn}
                pageSize={25}
                pagination
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsAdmin;