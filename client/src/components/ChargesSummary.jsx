// src/components/ChargesSummary.js
import React from "react";

const ChargesSummary = () => {
  return (
    <div className="p-4 border rounded shadow bg-blue-50">
      <h2 className="font-semibold mb-4">Charges Summary</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Charge</th>
            <th className="text-left">Unit</th>
            <th className="text-left">Rate</th>
            <th className="text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily</td>
            <td>1</td>
            <td>$99.00</td>
            <td>$99.00</td>
          </tr>
          <tr>
            <td>Weekly</td>
            <td>1</td>
            <td>$390.00</td>
            <td>$390.00</td>
          </tr>
          <tr>
            <td>Collision Damage Waiver</td>
            <td>1</td>
            <td>$9.00</td>
            <td>$9.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right font-semibold">
              Total
            </td>
            <td>$498.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ChargesSummary;
