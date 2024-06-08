import React from "react";
import { useSelector } from "react-redux";

const Invoice = () => {
  const customerInformation = useSelector((state) => state.customerInformation);
  const reservationDetails = useSelector((state) => state.reservationDetails);
  const vehicleInformation = useSelector((state) => state.vehicleInformation);
  const additionalCharges = useSelector((state) => state.additionalCharges);

  const { firstName, lastName, email, phone } = customerInformation;
  const { pickupDate, returnDate, duration, discount } = reservationDetails;
  const { vehicleType, vehicle } = vehicleInformation;
  const { collisionDamageWaiver, liabilityInsurance, rentalTax } =
    additionalCharges;

  const dailyRate = 99;
  const weeklyRate = 390;
  const durationParts = duration.split(" ");
  const weeks = parseInt(durationParts[0], 10);
  const days = parseInt(durationParts[2], 10);
  const dailyTotal = days * dailyRate;
  const weeklyTotal = weeks * weeklyRate;
  const collisionDamageWaiverTotal = collisionDamageWaiver ? 9 : 0;
  const liabilityInsuranceTotal = liabilityInsurance ? 15 : 0;
  const rentalTaxTotal = rentalTax
    ? (dailyTotal +
        weeklyTotal +
        collisionDamageWaiverTotal +
        liabilityInsuranceTotal) *
      0.115
    : 0;
  const totalCharges =
    dailyTotal +
    weeklyTotal +
    collisionDamageWaiverTotal +
    liabilityInsuranceTotal +
    rentalTaxTotal -
    discount;

  return (
    <div
      id="invoice-content"
      className="max-w-4xl mx-auto p-6 bg-white border rounded shadow"
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">CH Car Place Inc</h1>
          <p>162 Bergen st</p>
          <p>Brooklyn, NY 11213</p>
          <p>PH#</p>
        </div>
        <div className="text-right">
          <h1 className="text-xl font-bold">Reservation</h1>
          <p>RA #0121</p>
          <p>REPAIR ORDER:</p>
          <p>CLAIM:</p>
          <p>Date/Time Out: {pickupDate}</p>
          <p>Date/Time In: {returnDate}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">RENTER INFO</h2>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{email}</p>
        <p>PH: {phone}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">UNIT DETAILS</h2>
        <p>Unit: {vehicle}</p>
        <p>Make & Model: {vehicleType}</p>
        <p>BILL TO:</p>
        <p>Payment Type: Unpaid</p>
        <p>AUTH: $0.00</p>
        <p>Referral:</p>
        <p>NOTICE: Collision Insurance (CDW) - $7 per day</p>
        <p>
          Limits liability of damages to one's own vehicle up to $1000 in event
          of an accident,
        </p>
        <p>
          by waiving this coverage renter agrees to be hold liable for damages
          up to the entire value of the vehicle.
        </p>
        <div className="flex space-x-4 mt-2">
          <button className="border px-4 py-1 rounded">Accept</button>
          <button className="border px-4 py-1 rounded">Reject</button>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow mb-4">
        <h2 className="font-semibold mb-2">CHARGE SUMMARY</h2>
        <table className="w-full mb-2">
          <thead>
            <tr>
              <th className="text-left">Description</th>
              <th className="text-left">Unit</th>
              <th className="text-left">Price</th>
              <th className="text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {days > 0 && (
              <tr>
                <td>Daily</td>
                <td>{days}</td>
                <td>${dailyRate.toFixed(2)}</td>
                <td>${dailyTotal.toFixed(2)}</td>
              </tr>
            )}
            {weeks > 0 && (
              <tr>
                <td>Weekly</td>
                <td>{weeks}</td>
                <td>${weeklyRate.toFixed(2)}</td>
                <td>${weeklyTotal.toFixed(2)}</td>
              </tr>
            )}
            {collisionDamageWaiver && (
              <tr>
                <td>Collision Damage Waiver</td>
                <td>1</td>
                <td>$9.00</td>
                <td>${collisionDamageWaiverTotal.toFixed(2)}</td>
              </tr>
            )}
            {liabilityInsurance && (
              <tr>
                <td>Liability Insurance</td>
                <td>1</td>
                <td>$15.00</td>
                <td>${liabilityInsuranceTotal.toFixed(2)}</td>
              </tr>
            )}
            {rentalTax && (
              <tr>
                <td>NYS State Tax</td>
                <td>11.5%</td>
                <td>${(rentalTaxTotal / (1 + 0.115)).toFixed(2)}</td>
                <td>${rentalTaxTotal.toFixed(2)}</td>
              </tr>
            )}
            <tr>
              <td>Discount</td>
              <td>-</td>
              <td>-</td>
              <td>-${discount.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Damages</td>
              <td>-</td>
              <td>-</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Traffic tickets</td>
              <td>-</td>
              <td>-</td>
              <td>$0.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-right font-semibold">
                TOTAL ESTIMATED CHARGES
              </td>
              <td>${totalCharges.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3" className="text-right font-semibold">
                Renter Payments
              </td>
              <td>${totalCharges.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-4">
        <p>
          Your rental agreement offers, for an additional charge, an optional
          waiver to cover all or a part of your responsibility for damage to or
          loss of the vehicle: Before deciding whether to purchase the waiver,
          you may wish to determine whether your own automobile insurance or
          credit card agreement provides you coverage for rental vehicle damage
          or loss and determine the amount of the deductible under your own
          insurance coverage. The purchase of the waiver is not mandatory. The
          waiver is not Insurance. I acknowledge that I have received and read a
          copy of this.
        </p>
        <div className="mt-4">
          <p>Renters Signature ____________________________________</p>
          <p>Additional Driver 1 ____________________________________</p>
        </div>
        <div className="mt-4 text-xs">
          <p>
            Rental service may be refused to anyone when done in the best
            interest of the renting company or customer
          </p>
          <p>
            Rates do not include gasoline. - Reserves the right to collect
            deposit covering estimated rental charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
