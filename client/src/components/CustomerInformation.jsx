import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
} from "../features/customerInfo/customerInformationSlice";
import React from "react";

const CustomerInformation = () => {
  const firstName = useSelector((state) => state.customerInformation.firstName);
  const lastName = useSelector((state) => state.customerInformation.lastName);
  const email = useSelector((state) => state.customerInformation.email);
  const phone = useSelector((state) => state.customerInformation.phone);
  const dispatch = useDispatch();

  const handleFirstNameChange = (e) => {
    dispatch(setFirstName(e.target.value));
  };

  const handleLastNameChange = (e) => {
    dispatch(setLastName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePhoneChange = (e) => {
    dispatch(setPhone(e.target.value));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold mb-4">Customer Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">First Name*</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Last Name*</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email*</label>
        <input
          type="email"
          className="w-full border rounded p-2"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone*</label>
        <input
          type="tel"
          className="w-full border rounded p-2"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
};

export default CustomerInformation;
