import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const tokenLocalStorage = localStorage.getItem("token");

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: null,
  id: "",
  userNameEdit: "",
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
    setUserEdit: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

// export const updateUserProfile = (userName) => (dispatch) => {
//   axios
//     .put(
//       "http://localhost:3001/api/v1/user/profile",
//       {
//         userName: userName,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${tokenLocalStorage}`,
//         },
//       }
//     )
//     .then((response) => {
//       console.log("Username update");
//       dispatch(setUserEdit({ userName }));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

export const { setUserProfile, setUserEdit } = dataUser.actions;

export default dataUser.reducer;
