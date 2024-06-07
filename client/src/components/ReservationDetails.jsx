import React from "react";

const ReservationDetails = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-4">Reservation Details</h3>
      <div className="mb-2">
        <label htmlFor="reservationId" className="block font-medium mb-1">
          Reservation ID:
        </label>
        <input
          type="text"
          id="reservationId"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          disabled
        />
      </div>
      <div className="mb-2">
        <label htmlFor="pickupDate" className="block font-medium mb-1">
          Pickup Date*:
        </label>
        <input
          type="datetime-local"
          id="pickupDate"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="returnDate" className="block font-medium mb-1">
          Return Date*:
        </label>
        <input
          type="datetime-local"
          id="returnDate"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="duration" className="block font-medium mb-1">
          Duration:
        </label>
        <input
          type="text"
          id="duration"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          disabled
        />
      </div>
      <div className="mb-2">
        <label htmlFor="discount" className="block font-medium mb-1">
          Discount:
        </label>
        <input
          type="text"
          id="discount"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
    </div>
  );
};

export default ReservationDetails;
