import { useDispatch, useSelector } from "react-redux";
import {
  setPickupDate,
  setReturnDate,
  setDuration,
  setDiscount,
} from "../features/reservation/reservationDetailsSlice";
import React, { useState } from "react";

const ReservationDetails = () => {
  const dispath = useDispatch();
  const pickupDate = useSelector((state) => state.pickupDate);
  const returnDate = useSelector((state) => state.returnDate);
  const duration = useSelector((state) => state.duration);
  const discount = useSelector((state) => state.discount);
  const handlePickupDateChange = (e) => {
    const value = e.target.value;
    dispath(setPickupDate(value));
    calculateDuration(value, returnDate);
  };

  const handleReturnDateChange = (e) => {
    const value = e.target.value;
    dispath(setReturnDate(value));
    calculateDuration(pickupDate, value);
  };
  const handkeDiscountChange = (e) => {
    const value = e.target.value;
    dispath(setDiscount(value));
  };
  const calculateDuration = (pickup, returnD) => {
    if (pickup && returnD) {
      const pickupDate = new Date(pickup);
      const returnDate = new Date(returnD);
      const diffInTime = returnDate.getTime() - pickupDate.getTime();

      const diffInDays = diffInTime / (1000 * 3600 * 24);
      const weeks = Math.floor(diffInDays / 7);
      const days = Math.floor(diffInDays % 7);

      const remainingTimeInMs =
        diffInTime - (weeks * 7 + days) * 24 * 3600 * 1000;
      const hours = Math.floor(remainingTimeInMs / (1000 * 3600));

      setDuration(
        `${weeks} Week${weeks !== 1 ? "s" : ""} ${days} Day${
          days !== 1 ? "s" : ""
        } ${hours} Hour${hours !== 1 ? "s" : ""}`
      );
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold mb-4">Reservation Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Reservation ID</label>
        <input type="text" className="w-full border rounded p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Pickup Date*</label>
        <input
          type="datetime-local"
          className="w-full border rounded p-2"
          value={pickupDate}
          onChange={handlePickupDateChange}
          placeholder="Select Date and Time"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Return Date*</label>
        <input
          type="datetime-local"
          className="w-full border rounded p-2"
          value={returnDate}
          onChange={handleReturnDateChange}
          placeholder="Select Date and Time"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Duration</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={duration}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Discount</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={discount}
          onChange={handkeDiscountChange}
        />
      </div>
    </div>
  );
};

export default ReservationDetails;
