import React from "react";

const AdditionalCharges = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-4">Additional Charges</h3>
      <div className="mb-2">
        <label
          htmlFor="collisionDamageWaiver"
          className="block font-medium mb-1"
        >
          Collision Damage Waiver:
        </label>
        <input
          type="number"
          id="collisionDamageWaiver"
          step="0.01"
          defaultValue="9.00"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="liabilityInsurance" className="block font-medium mb-1">
          Liability Insurance:
        </label>
        <input
          type="number"
          id="liabilityInsurance"
          step="0.01"
          defaultValue="10.00"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="rentalTax" className="block font-medium mb-1">
          Rental Tax:
        </label>
        <input
          type="number"
          id="rentalTax"
          step="0.01"
          defaultValue="13.5"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
    </div>
  );
};

export default AdditionalCharges;
