// src/components/ReservationForm.js
import React from "react";
import ReservationDetails from "./ReservationDetails";
import CustomerInformation from "./CustomerInformation";
import VehicleInformation from "./VehicleInformation";
import ChargesSummary from "./ChargesSummary";
import AdditionalCharges from "./AdditionalCharges";

const ReservationForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ReservationDetails />
        <CustomerInformation />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <VehicleInformation />
        <AdditionalCharges />
      </div>
      <ChargesSummary />
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Print / Download
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
