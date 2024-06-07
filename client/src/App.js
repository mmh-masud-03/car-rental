import React from "react";
import ReservationDetails from "./components/ReservationDetails";
import CustomerInformation from "./components/CustomerInformation";
import ChargesSummary from "./components/ChargesSummary";
import VehicleInformation from "./components/VehicleInformation";
import AdditionalCharges from "./components/AdditionalCharges";
import Invoice from "./components/Invoice";
import ReservationForm from "./components/ReservationForm";
const App = () => {
  return (
    <>
      {" "}
      <ReservationForm />
      <div className="min-h-screen bg-gray-100 p-4">
        <Invoice />
      </div>
    </>

    // <div className="flex flex-col justify-between items-center w-full">
    //   <div className="flex flex-row justify-between items-center w-full px-8">
    //     <p>Reservation</p>
    //     <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
    //       Print / Download
    //     </button>
    //   </div>
    //   <div className="flex flex-row justify-around gap-6 my-8">
    //     <ReservationDetails />
    //     <CustomerInformation />
    //     <ChargesSummary />
    //   </div>
    //   <div className="flex flex-row justify-self-start gap-3 my-2">
    //     <VehicleInformation />
    //     <AdditionalCharges />
    //   </div>
    // </div>
    // <div className="flex flex-col md:flex-row md:space-x-4 p-4">
    //   <div className="md:w-1/3">
    //     <ReservationDetails />
    //     <CustomerInformation />
    //     <ChargesSummary />
    //   </div>
    //   <div className="md:w-1/3">
    //     <VehicleInformation />
    //   </div>
    //   <div className="md:w-1/3">
    //     <AdditionalCharges />
    //   </div>
    //   <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
    //     Print / Download
    //   </button>
    // </div>
  );
};

export default App;
