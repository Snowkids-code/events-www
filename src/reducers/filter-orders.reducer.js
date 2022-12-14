import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//filter data
export const getFilteredDataThunk = createAsyncThunk(
  "orders/filteredOrders",
  (unfliteredOrders) => {
    //filter function used to filter the orders array
    function getFilter(data) {
      return data.status === unfliteredOrders.filterValue.value;
    }

    //call the filter method on the orders array
    return unfliteredOrders.orders.filter(getFilter);
  },
);

//the initial state
const initialState = {
  filteredOrder: [],
  loading: "idle", //idle, pending, fulfilled, rejected
  error: null,
};

//create the userSlice
const filteredOrderSlice = createSlice({
  name: "user", //name of the slice
  initialState,
  extraReducers(builder) {
    builder
      //redifine the array using the filtered data
      .addCase(getFilteredDataThunk.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getFilteredDataThunk.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.order = action.payload; //set order to the new payload
      })
      .addCase(getFilteredDataThunk.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload; //set error if process is rejected
      });
  },
});

export const { addUserData } = filteredOrderSlice.actions;
export default filteredOrderSlice.reducer;
