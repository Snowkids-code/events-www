import React, { useCallback, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getAllOrdersThunk } from "../../reducers/get-orders.reducer";

const data = [];

const status = [
  { value: "all", label: "all" },
  { value: "pending", label: "pending" },
  { value: "complete", label: "complete" },
];

function Orders() {
  const orders = useSelector((state) => state.allOrdersReducer.order);

  const [filter, setFilter] = useState({ value: "all" });
  const [filterOrders, setFilterOrders] = useState(orders);

  const dispatch = useDispatch()

  function getFilteredData(unfilteredData) {
    return unfilteredData.status === filter.value;
  }

  useEffect(() => {
    setFilterOrders(orders.filter(getFilteredData));
  }, [filter]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(getAllOrdersThunk());
    }

    return () => {
      isMounted = false;
    };
  }, []);

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
              params.row.status === "pending"
                ? {
                    border: "1px solid orange",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    color: "orange",
                  }
                : {
                    border: "1px solid green",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    color: "green",
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
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "rgba(26, 26, 26, 0.8)",
      padding: "0.5rem 0",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  return (
    <div className="admin-orders-container">
      <div className="orders-top-container">
        <Select
          isSearchable={false}
          defaultValue={status[0]}
          options={status}
          styles={styles}
          onChange={setFilter}
        />
      </div>
      <div className="orders-table-container">
        <DataGrid
          rows={
            filter.value === "all" ? (orders ? orders : data) : filterOrders
          }
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
