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
        } else {
          state.items = [...state.items, newEvent];
        }
      } else {
        state.items = [...state.items, newEvent];
      }
    },
    addEventNumber: (state, action) => {
      const newA = [...state.items]; //get the cart items
      //add the quantity by one, if the quantity value is les than 0, set it to 1
      // - prevents us from having negative number of items
      newA[action.payload.key].quantity =
        newA[action.payload.key].quantity < 0
          ? 1
          : newA[action.payload.key].quantity + 1;
    },
    subtractEventNumber: (state, action) => {
      const newArrayItems = [...state.items]; //copy of the state items
      const passedId = action.payload?._id;

      if (passedId !== undefined) {
        const foundItem = newArrayItems.find((item) => item?._id === passedId);

        if (foundItem && foundItem?.quantity !== 0) {
          const newItems = newArrayItems?.filter(
            (item) => item?._id !== foundItem?._id
          );
          state.items = newItems;
        }
      }
      else{
        alert("Please pass item Id")
      }
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

export const {
  addEvent,
  addEventNumber,
  removeEvent,
  clearCart,
  subtractEventNumber,
} = cartSlice.actions;
export default cartSlice.reducer;
