import { useDispatch, useSelector } from "react-redux";
import {
  setPickupDate,
  setReturnDate,
  setDiscount,
} from "../features/reservation/reservationDetailsSlice";

const ReservationDetails = () => {
  const dispatch = useDispatch();
  const pickupDate = useSelector(
    (state) => state.reservationDetails.pickupDate
  );
  const returnDate = useSelector(
    (state) => state.reservationDetails.returnDate
  );
  const duration = useSelector((state) => state.reservationDetails.duration);
  const discount = useSelector((state) => state.reservationDetails.discount);

  const handlePickupDateChange = (e) => {
    dispatch(setPickupDate(e.target.value));
  };

  const handleReturnDateChange = (e) => {
    dispatch(setReturnDate(e.target.value));
  };

  const handleDiscountChange = (e) => {
    dispatch(setDiscount(e.target.value));
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
          onChange={handleDiscountChange}
        />
      </div>
    </div>
  );
};

export default ReservationDetails;
