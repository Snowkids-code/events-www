import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserData from "../services/users";

//async thunk to fetch UserData
export const fetchUser = createAsyncThunk(
  "users/fetchUserData",
  async (inputs) => {
    try {
      const res = await UserData.getUserData(inputs);
      return res.data; //user data
    } catch (error) {
      console.log("Err", error);
      // return rejectWithValue(error);
    }
  }
);

//async thunk to fetch userData using the ID
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (Id) => {
    try {
      const response = await UserData.getUserDataById(Id);
      return response.data;
    } catch (error) {
      console.log("Err", error);
    }
  }
);

//the initial state
const initialState = {
  user: {},
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
      // state.user = [...state.user, newUser]; //fill user array
    },
    UserLogout: (state, action) => {
      state.user = [];
      console.log("Logout");
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
      })
      //fetch user by ID after reload
      .addCase(fetchUserById.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.user = action.payload; //set user to the new payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload; //set error if process is rejected
      });
  },
});

export const { addUserData, UserLogout } = userSlice.actions;
export default userSlice.reducer;
