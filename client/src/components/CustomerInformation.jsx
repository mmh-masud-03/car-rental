import React from "react";

const CustomerInformation = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
      <div className="mb-2">
        <label htmlFor="firstName" className="block font-medium mb-1">
          First Name*:
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="lastName" className="block font-medium mb-1">
          Last Name*:
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block font-medium mb-1">
          Email*:
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone*:
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full border border-gray-300 rounded-md px -3 py-2"
          required
        />
      </div>
    </div>
  );
};

export default CustomerInformation;
