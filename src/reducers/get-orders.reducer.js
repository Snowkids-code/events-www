import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OrderData from "../services/orders";

let modulePrefix = "orders";

// aysnc think to get all events
export const getAllOrdersThunk = createAsyncThunk(
  `${modulePrefix}/get-all-orders`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await OrderData.getAllOrders();
      console.log(response);
      return response.data;
    } catch (err) {
      console.log("an error", err);
      return rejectWithValue(err);
    }
  }
);

//the initial state
const initialState = {
  order: [],
  loading: "idle", //idle, pending, fulfilled, rejected
  error: null,
};

//create the userSlice
const allOrdersSlice = createSlice({
  name: "user", //name of the slice
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllOrdersThunk.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getAllOrdersThunk.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.order = action.payload; //set order to the new payload
      })
      .addCase(getAllOrdersThunk.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload; //set error if process is rejected
      });
  },
});

export default allOrdersSlice.reducer;
