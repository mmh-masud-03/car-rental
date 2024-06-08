import React from "react";
import { useSelector } from "react-redux";

const ChargesSummary = () => {
  const reservationDetails = useSelector((state) => state.reservationDetails);
  const additionalCharges = useSelector((state) => state.additionalCharges);
  const duration = reservationDetails.duration;
  const collisionDamageWaiver = additionalCharges.collisionDamageWaiver;
  const liabilityInsurance = additionalCharges.liabilityInsurance;

  const durationParts = duration.split(" ");
  const weeks = parseInt(durationParts[0], 10);
  const days = parseInt(durationParts[2], 10);
  const dailyRate = 99;
  const weeklyRate = 390;
  const dailyTotal = days * dailyRate;
  const weeklyTotal = weeks * weeklyRate;

  const collisionDamageWaiverTotal = collisionDamageWaiver ? 9 : 0;
  const liabilityInsuranceTotal = liabilityInsurance ? 15 : 0;

  const totalCharges =
    dailyTotal +
    weeklyTotal +
    collisionDamageWaiverTotal +
    liabilityInsuranceTotal;

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
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right font-semibold">
              Total
            </td>
            <td>${totalCharges.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ChargesSummary;
