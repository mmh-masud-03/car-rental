// src/components/Invoice.js
import React from "react";

const Invoice = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border rounded shadow">
      {/* Header */}
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
          <p>Date/Time Out: 03/29/2024 12:33 AM</p>
          <p>Date/Time In: 03/29/2024 01:33 AM</p>
        </div>
      </div>

      {/* Renter Info */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">RENTER INFO</h2>
        <p>Shihab Ahmed</p>
        <p>test@gmail.com</p>
        <p>PH: 051945469</p>
      </div>

      {/* Unit Details */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">UNIT DETAILS</h2>
        <p>Unit: NISSAN ROGUE BLACK</p>
        <p>Make & Model: NISSAN ROGUE BLACK</p>
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

      {/* Charges Summary */}
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
            <tr>
              <td>Hourly</td>
              <td>1</td>
              <td>$0.50</td>
              <td>$0.50</td>
            </tr>
            <tr>
              <td>NYS State Tax</td>
              <td>11.5%</td>
              <td>$0.06</td>
              <td>$0.06</td>
            </tr>
            <tr>
              <td>EST TOTAL TIME & MILEAGE</td>
              <td>-</td>
              <td>-</td>
              <td>$0.56</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>-</td>
              <td>-</td>
              <td>-$0.00</td>
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
              <td>$0.56</td>
            </tr>
            <tr>
              <td colSpan="3" className="text-right font-semibold">
                Renter Payments
              </td>
              <td>$0.56</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Footer */}
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
