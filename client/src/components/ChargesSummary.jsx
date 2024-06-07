import React from "react";

const ChargesSummary = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-4">Charges Summary</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Charge</th>
            <th className="px-4 py-2 text-left">Unit</th>
            <th className="px-4 py-2 text-left">Rate</th>
            <th className="px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t">Daily</td>
            <td className="px-4 py-2 border-t">1</td>
            <td className="px-4 py-2 border-t">$99.00</td>
            <td className="px-4 py-2 border-t">$99.00</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t">Weekly</td>
            <td className="px-4 py-2 border-t">1</td>
            <td className="px-4 py-2 border-t">$390.00</td>
            <td className="px-4 py-2 border-t">$390.00</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t">Collision Damage Waiver</td>
            <td className="px-4 py-2 border-t">1</td>
            <td className="px-4 py-2 border-t">$9.00</td>
            <td className="px-4 py-2 border-t">$9.00</td>
          </tr>
          <tr>
            <th
              className="px-4 py-2 border-t text-left font-semibold"
              colSpan="3"
            >
              Total
            </th>
            <td className="px-4 py-2 border-t">$498.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChargesSummary;
