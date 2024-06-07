// src/features/vehicleInformationSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const vehicleInformationSlice = createSlice({
  name: "vehicleInformation",
  initialState: {
    vehicleType: "",
    vehicle: "",
  },
  reducers: {
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
  },
});

export const { setVehicleType, setVehicle } = vehicleInformationSlice.actions;

export default vehicleInformationSlice.reducer;
