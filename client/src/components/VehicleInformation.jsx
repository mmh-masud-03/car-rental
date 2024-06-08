import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setVehicleType,
  setVehicle,
  fetchCarsAsync,
} from "../features/vehicleInformation/vehicleInformationSlice";

const VehicleInformation = () => {
  const vehicleType = useSelector(
    (state) => state.vehicleInformation.vehicleType
  );
  const vehicle = useSelector((state) => state.vehicleInformation.vehicle);
  const cars = useSelector((state) => state.vehicleInformation.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, [dispatch]);

  const handleVehicleTypeChange = (e) => {
    const selectedType = e.target.value;
    dispatch(setVehicleType(selectedType));
    dispatch(setVehicle(""));
  };

  const handleVehicleChange = (e) => {
    dispatch(setVehicle(e.target.value));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold mb-4">Vehicle Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Vehicle Type*</label>
        <select
          className="w-full border rounded p-2"
          value={vehicleType}
          onChange={handleVehicleTypeChange}
        >
          <option>Select Vehicle Type</option>
          {cars.map((car) => (
            <option key={car.id} value={car.type}>
              {car.type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Vehicle*</label>
        <select
          className="w-full border rounded p-2"
          value={vehicle}
          onChange={handleVehicleChange}
        >
          <option>Select Vehicle</option>
          {cars
            .filter((car) => car.type === vehicleType)
            .map((car) => (
              <option key={car.id} value={car.id}>
                {car.make} {car.model}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default VehicleInformation;
