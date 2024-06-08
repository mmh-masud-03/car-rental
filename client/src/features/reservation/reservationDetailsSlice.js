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
      state.duration = calculateDuration(state.pickupDate, state.returnDate);
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
      state.duration = calculateDuration(state.pickupDate, state.returnDate);
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

const calculateDuration = (pickupDate, returnDate) => {
  if (!pickupDate || !returnDate) {
    return "";
  }

  const pickupDateTime = new Date(pickupDate);
  const returnDateTime = new Date(returnDate);
  const diffInTime = returnDateTime.getTime() - pickupDateTime.getTime();

  const diffInDays = diffInTime / (1000 * 3600 * 24);
  const weeks = Math.floor(diffInDays / 7);
  const days = Math.floor(diffInDays % 7);

  const remainingTimeInMs = diffInTime - (weeks * 7 + days) * 24 * 3600 * 1000;
  const hours = Math.floor(remainingTimeInMs / (1000 * 3600));

  return `${weeks} Week${weeks !== 1 ? "s" : ""} ${days} Day${
    days !== 1 ? "s" : ""
  } ${hours} Hour${hours !== 1 ? "s" : ""}`;
};

export const { setPickupDate, setReturnDate, setDiscount } =
  reservationDetailsSlice.actions;

export default reservationDetailsSlice.reducer;
