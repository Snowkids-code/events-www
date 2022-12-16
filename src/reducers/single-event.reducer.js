import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EventService from "../services/events";

//intial state of the item
const initialState = {
  item: {},
  loading: "idle", //idle, pending, fulfilled, rejected
  error: null,
};

let modulePrefix = "events";

// async thunk to get single event
export const getSingleEventThunk = createAsyncThunk(
  `${modulePrefix}/get-single-event`,
  async (itemId) => {
    try {
      const res = await EventService.getSingleEvent(itemId);
      return res.data; //single event response
    } catch (error) {
      console.log("Err", error);
      // return rejectWithValue(error);
    }
  }
);

const singleEventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(getSingleEventThunk.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getSingleEventThunk.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.item = action.payload;
      })
      .addCase(getSingleEventThunk.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      });
  },
});

export const { addEvent } = singleEventSlice.actions;
export default singleEventSlice.reducer;
