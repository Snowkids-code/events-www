import { createSlice } from "@reduxjs/toolkit";

//define the cart inital state
const initialState = {
  items: [],
  loading: "idle", //idle, pending, fulfilled, rejected
  error: null,
};

//create cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      let newEvent = {
        ...action.payload,
        quantity: 1,
      };

      console.log(action.payload);

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
});

export const { addEvent } = cartSlice.actions;
export default cartSlice.reducer;
