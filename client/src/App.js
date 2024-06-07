import React from "react";
import ReservationDetails from "./components/ReservationDetails";
import CustomerInformation from "./components/CustomerInformation";
import ChargesSummary from "./components/ChargesSummary";
import VehicleInformation from "./components/VehicleInformation";
import AdditionalCharges from "./components/AdditionalCharges";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 p-4">
      <div className="md:w-1/3">
        <ReservationDetails />
        <CustomerInformation />
        <ChargesSummary />
      </div>
      <div className="md:w-1/3">
        <VehicleInformation />
      </div>
      <div className="md:w-1/3">
        <AdditionalCharges />
      </div>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
        Print / Download
      </button>
    </div>
  );
};

export default App;
