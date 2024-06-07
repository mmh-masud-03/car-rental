// src/components/CustomerInformation.js
import React from "react";

const CustomerInformation = () => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold mb-4">Customer Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">First Name*</label>
        <input type="text" className="w-full border rounded p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Last Name*</label>
        <input type="text" className="w-full border rounded p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email*</label>
        <input type="email" className="w-full border rounded p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone*</label>
        <input type="tel" className="w-full border rounded p-2" />
      </div>
    </div>
  );
};

export default CustomerInformation;
