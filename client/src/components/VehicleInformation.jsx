import React, { useState, useEffect } from "react";
import axios from "axios";

const VehicleInformation = () => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const response = await axios.get("/api/cars");
        const vehicleData = response.data;

        const types = [...new Set(vehicleData.map((vehicle) => vehicle.type))];
        setVehicleTypes(types);
        setVehicles(vehicleData);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };

    fetchVehicleData();
  }, []);

  const handleVehicleTypeChange = (event) => {
    setSelectedVehicleType(event.target.value);
    setSelectedVehicle("");
  };

  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
  };

  const filteredVehicles = vehicles.filter(
    (vehicle) => vehicle.type === selectedVehicleType
  );

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>
      <div className="mb-2">
        <label htmlFor="vehicleType" className="block font-medium mb-1">
          Vehicle Type*:
        </label>
        <select
          id="vehicleType"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          value={selectedVehicleType}
          onChange={handleVehicleTypeChange}
          required
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="vehicle" className="block font-medium mb-1">
          Vehicle*:
        </label>
        <select
          id="vehicle"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          value={selectedVehicle}
          onChange={handleVehicleChange}
          required
        >
          <option value="">Select Vehicle</option>
          {filteredVehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VehicleInformation;
