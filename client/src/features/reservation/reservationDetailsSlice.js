// src/features/reservationDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const reservationDetailsSlice = createSlice({
  name: "reservationDetails",
  initialState: {
    pickupDate: "",
    returnDate: "",
    duration: "",
    discount: 0,
  },
  reducers: {
    setPickupDate: (state, action) => {
      state.pickupDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const { setPickupDate, setReturnDate, setDuration, setDiscount } =
  reservationDetailsSlice.actions;

export default reservationDetailsSlice.reducer;
