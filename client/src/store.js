import { configureStore } from "@reduxjs/toolkit";
import reservationDetailsReducer from "./features/reservation/reservationDetailsSlice";
import customerInformationReducer from "./features/customerInfo/customerInformationSlice";
import vehicleInformationReducer from "./features/vehicleInformation/vehicleInformationSlice";
import additionalChargesReducer from "./features/additionalCharges/additionalChargesSlice";

export default configureStore({
  reducer: {
    reservationDetails: reservationDetailsReducer,
    customerInformation: customerInformationReducer,
    vehicleInformation: vehicleInformationReducer,
    additionalCharges: additionalChargesReducer,
  },
});
