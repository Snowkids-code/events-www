import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getAllOrdersThunk } from "../../reducers/get-orders.reducer";
import { getFilteredDataThunk } from "../../reducers/filter-orders.reducer";

//used for the react-select component
const status = [
  { value: "all", label: "all" },
  { value: "pending", label: "pending" },
  { value: "complete", label: "complete" },
];

function Orders() {
  //get all the orders
  const orders = useSelector((state) => state.allOrdersReducer.order);

  //get the filtered values in an array
  const filteredOrder = useSelector(
    (state) => state.filteredOrderReducer.order
  );

  //create a variable that hold the state of the filter object
  //hold an inital value of all
  const [filter, setFilter] = useState({ value: "all" });

  //call the useDispatch hook
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch the filter process once the value of filter changes
    dispatch(getFilteredDataThunk({ orders: orders, filterValue: filter }));
  }, [filter, dispatch, orders]);

  //get all the order once the application runs
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      //dispatch method to get all the orders
      dispatch(getAllOrdersThunk(orders));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, orders]);


  //for the data table
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

  //react-select styling
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
        {/* React library for the dropdown menu - ReactSelect */}
        <Select
          isSearchable={false}
          defaultValue={status[0]}
          options={status}
          styles={styles}
          onChange={setFilter}
        />
      </div>
      <div className="orders-table-container">
        {/* React library to generate the table - MUI */}
        {/* When the length of the filteredOrder is zero  display the orders array else display the filteredOrder array */}
        <DataGrid
          rows={
            filteredOrder === undefined || filteredOrder.length === 0
              ? orders
              : filteredOrder
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
