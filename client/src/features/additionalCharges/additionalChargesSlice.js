// src/features/additionalChargesSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const additionalChargesSlice = createSlice({
  name: "additionalCharges",
  initialState: {
    collisionDamageWaiver: false,
    liabilityInsurance: false,
    rentalTax: false,
  },
  reducers: {
    setCollisionDamageWaiver: (state, action) => {
      state.collisionDamageWaiver = action.payload;
    },
    setLiabilityInsurance: (state, action) => {
      state.liabilityInsurance = action.payload;
    },
    setRentalTax: (state, action) => {
      state.rentalTax = action.payload;
    },
  },
});

export const { setCollisionDamageWaiver, setLiabilityInsurance, setRentalTax } =
  additionalChargesSlice.actions;

export default additionalChargesSlice.reducer;
