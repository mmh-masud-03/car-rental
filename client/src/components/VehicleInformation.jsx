// src/components/VehicleInformation.js
import React from "react";

const VehicleInformation = () => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold mb-4">Vehicle Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Vehicle Type*</label>
        <select className="w-full border rounded p-2">
          <option>Select Vehicle Type</option>
          {/* Add options dynamically */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Vehicle*</label>
        <select className="w-full border rounded p-2">
          <option>Select Vehicle</option>
          {/* Add options dynamically */}
        </select>
      </div>
    </div>
  );
};

export default VehicleInformation;
