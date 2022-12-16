import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OrderData from "../services/orders";

//async thunk to add order data
export const insertOrder = createAsyncThunk(
  "orders/setOrderData",
  async (data) => {
    try {
      const res = await OrderData.addOrder(data);
      return res.data; //user data
    } catch (error) {
      console.log("Err", error);
      // return rejectWithValue(error);
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
const orderSlice = createSlice({
  name: "user", //name of the slice
  initialState,
  extraReducers(builder) {
    builder
      .addCase(insertOrder.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(insertOrder.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.order = action.payload; //set order to the new payload
      })
      .addCase(insertOrder.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload; //set error if process is rejected
      });
  },
});

export const { addUserData } = orderSlice.actions;
export default orderSlice.reducer;
