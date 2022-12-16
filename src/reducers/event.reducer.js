import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EventService from "../services/events";

//create the inital state of the events
const initialState = {
  items: [],
  loading: "idle", //idle, pending, fulfilled, rejected
  error: null,
};

let modulePrefix = "events";

// aysnc think to get all events
export const getAllEventsThunk = createAsyncThunk(
  `${modulePrefix}/get-all-events`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await EventService.getAllEvents();
      return response.data;
    } catch (err) {
      console.log("an error", err);
      return rejectWithValue(err);
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      //add a quantity attribute to the events array and set it to 1
      let newEvent = {
        ...action.payload,
        quantity: 1,
      };

      //get items from state
      const allEvents = state.items;

      //check if event array exists
      if (allEvents.length > 0) {
        //check for matching IDs
        let foundEvent = allEvents.find(
          (event) => event.id === Number(newEvent.id)
        );

        //add event quantity
        if (foundEvent !== undefined) {
          foundEvent.quantity++;
        }
      } else {
        state.items = [...state.items, newEvent];
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllEventsThunk.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getAllEventsThunk.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.items = action.payload;
      })
      .addCase(getAllEventsThunk.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      });
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
