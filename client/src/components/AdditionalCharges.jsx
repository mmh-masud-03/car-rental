import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCollisionDamageWaiver,
  setLiabilityInsurance,
  setRentalTax,
} from "../features/additionalCharges/additionalChargesSlice";

const AdditionalCharges = () => {
  const collisionDamageWaiver = useSelector(
    (state) => state.additionalCharges.collisionDamageWaiver
  );
  const liabilityInsurance = useSelector(
    (state) => state.additionalCharges.liabilityInsurance
  );
  const rentalTax = useSelector((state) => state.additionalCharges.rentalTax);
  const dispatch = useDispatch();

  const handleCollisionDamageWaiverChange = (e) => {
    dispatch(setCollisionDamageWaiver(e.target.checked));
  };

  const handleLiabilityInsuranceChange = (e) => {
    dispatch(setLiabilityInsurance(e.target.checked));
  };

  const handleRentalTaxChange = (e) => {
    dispatch(setRentalTax(e.target.checked));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold mb-4">Additional Charges</h2>
      <div className="mb-2">
        <input
          type="checkbox"
          id="collision-damage-waiver"
          className="mr-2"
          checked={collisionDamageWaiver}
          onChange={handleCollisionDamageWaiverChange}
        />
        <label htmlFor="collision-damage-waiver">
          Collision Damage Waiver ($9.00)
        </label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          id="liability-insurance"
          className="mr-2"
          checked={liabilityInsurance}
          onChange={handleLiabilityInsuranceChange}
        />
        <label htmlFor="liability-insurance">
          Liability Insurance ($15.00)
        </label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          id="rental-tax"
          className="mr-2"
          checked={rentalTax}
          onChange={handleRentalTaxChange}
        />
        <label htmlFor="rental-tax">Rental Tax (11.5%)</label>
      </div>
    </div>
  );
};

export default AdditionalCharges;
