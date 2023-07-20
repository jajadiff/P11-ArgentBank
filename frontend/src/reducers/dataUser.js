import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  id: "",
};

const dataUser = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.id = action.payload.id;
    },
  },
});

export const { setUserProfile } = dataUser.actions;

export default dataUser.reducer;
