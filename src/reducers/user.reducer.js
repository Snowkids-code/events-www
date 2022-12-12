import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import UserData from "../services/users";

//async thunk to fetch UserData
export const fetchUser = createAsyncThunk(
  "users/fetchUserData",
  async (inputs) => {
    try {
      const res = await UserData.getUserData(inputs);
      console.log(res.data);
      return res.data;
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
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      let newUser = {
        ...action.payload,
        quantity: 1,
      };
      state.user = [...state.user, newUser];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      });
  },
});

export const { addUserData } = userSlice.actions;
export default userSlice.reducer;
