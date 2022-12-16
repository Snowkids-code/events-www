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
    changeEventNumber: (state, action) => {
      const newArrayItems = [...state.items]; //copy of the state items
      const passedId = action.payload.id; //get the passedId

      //validate that passedId actually has a value
      if (passedId !== undefined) {
        //get the actual item that has the same Id as the one passed
        const foundItem = newArrayItems.find((item) => item?._id === passedId);

        //performe operation depending on the type passed
        switch (action.payload.type) {
          //if thetype assed is add
          case "add":
            //increase item quantity and the total price too
            foundItem.quantity += 1;
            state.totalPrice += foundItem.price[0];
            break;
          //if the type passed is subtract
          case "subtract":
            //if only one item is available in the cart
            if (foundItem && foundItem?.quantity - 1 == 0) {
              //remove item from the cart array
              const newItems = newArrayItems?.filter(
                (item) => item?._id !== foundItem?._id
              );
              //set new array for the cart items
              state.items = newItems;
              state.totalPrice -= foundItem.quantity * foundItem.price[0];
            } else {
              //decrease item quantity and the total price too
              foundItem.quantity -= 1;
              state.totalPrice -= foundItem.price[0];
            }
            break;
          case "remove":
            //remove item from the cart array
            const newItems = newArrayItems?.filter(
              (item) => item?._id !== foundItem?._id
            );
            //set new array for the cart items
            state.items = newItems;
            state.totalPrice -= foundItem.quantity * foundItem.price[0];
            break;
          //if no type is passed at all
          default:
            alert("choose type");
        }
      }
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
  clearCart,
  changeEventNumber,
} = cartSlice.actions;
export default cartSlice.reducer;
