import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserData from "../services/users";

//async thunk to fetch UserData
export const fetchUser = createAsyncThunk(
  "users/fetchUserData",
  async (inputs) => {
    try {
      const res = await UserData.getUserData(inputs);
      console.log(res.data);
      return res.data; //user data
    } catch (error) {
      console.log("Err", error);
      // return rejectWithValue(error);
    }
  }
);

//the initial state
const initialState = {
  user: [],
  loading: "idle", //idle, pending, fulfilled, rejected
  error: null,
};

//create the userSlice
const userSlice = createSlice({
  name: "user", //name of the slice
  initialState,
  reducers: {
    addUserData: (state, action) => {
      let newUser = {
        ...action.payload,
        quantity: 1,
      };
      state.user = [...state.user, newUser]; //fill user array
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.user = action.payload; //set user to the new payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload; //set error if process is rejected
      });
  },
});

export const { addUserData } = userSlice.actions;
export default userSlice.reducer;
