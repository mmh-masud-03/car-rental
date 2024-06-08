import React, { useRef } from "react";
import ReservationDetails from "./ReservationDetails";
import CustomerInformation from "./CustomerInformation";
import VehicleInformation from "./VehicleInformation";
import ChargesSummary from "./ChargesSummary";
import AdditionalCharges from "./AdditionalCharges";
import Invoice from "./Invoice";

const ReservationForm = () => {
  const invoiceRef = useRef(null);
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");

    printWindow.document.write(
      "<html><head><title>Invoice</title></head><body>"
    );
    printWindow.document.write('<div id="invoice-content">');
    printWindow.document.write(
      document.getElementById("invoice-content").innerHTML
    );
    printWindow.document.write("</div></body></html>");

    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <ReservationDetails />
          <CustomerInformation />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <VehicleInformation />
          <AdditionalCharges />
        </div>
        <ChargesSummary />
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handlePrint}
          >
            Print / Download
          </button>
        </div>
      </div>
      <div className="hidden">
        <Invoice ref={invoiceRef} />
      </div>
    </div>
  );
};

export default ReservationForm;
