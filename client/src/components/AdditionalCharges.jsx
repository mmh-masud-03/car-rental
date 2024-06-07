import React from "react";

const AdditionalCharges = () => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold mb-4">Additional Charges</h2>
      <div className="mb-2">
        <input type="checkbox" id="collision-damage-waiver" className="mr-2" />
        <label htmlFor="collision-damage-waiver">
          Collision Damage Waiver ($9.00)
        </label>
      </div>
      <div className="mb-2">
        <input type="checkbox" id="liability-insurance" className="mr-2" />
        <label htmlFor="liability-insurance">
          Liability Insurance ($15.00)
        </label>
      </div>
      <div className="mb-2">
        <input type="checkbox" id="rental-tax" className="mr-2" />
        <label htmlFor="rental-tax">Rental Tax (11.5%)</label>
      </div>
    </div>
  );
};

export default AdditionalCharges;
