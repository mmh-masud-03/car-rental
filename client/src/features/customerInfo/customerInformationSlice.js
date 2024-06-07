// src/features/customerInformationSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const customerInformationSlice = createSlice({
  name: "customerInformation",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setPhone } =
  customerInformationSlice.actions;

export default customerInformationSlice.reducer;
