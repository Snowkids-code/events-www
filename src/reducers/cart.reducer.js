import { createSlice } from "@reduxjs/toolkit";

//define the cart inital state
const initialState = {
  items: [],
  loading: "idle", //idle, pending, fulfilled, rejected
  error: null,
  totalPrice: 0,
};

//create cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      let newEvent = {
        ...action.payload,
        quantity: action.payload.count,
      };

      // state.items = [...state.items, newEvent];
      state.totalPrice += action.payload.price[0] * action.payload.count;

      //get items from state
      const allEvents = state.items;

      //check if event array exists
      if (allEvents.length > 0) {
        //check for matching IDs
        let foundEvent = allEvents.find((event) => event._id === newEvent._id);

        //add event quantity
        if (foundEvent !== undefined) {
          foundEvent.quantity++;
        }
      } else {
        state.items = [...state.items, newEvent];
      }
    },
    addEventNumber: (state, action) => {
      // state.items.quantity = action.payload
      const newA = [...state.items];
      console.log(state);
      //   state.items = [...state.items, newEvent];
      console.log(action.payload.quantity);
    },
    removeEvent: (state, action) => {
      //remove event from the array
      state.items.splice(action.payload.key, 1);
    },
    clearCart: (state, action) => {
      //revert everything to the initial state
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addEvent, addEventNumber, removeEvent, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
