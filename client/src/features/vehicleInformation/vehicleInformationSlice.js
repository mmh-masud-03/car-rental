import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCarsAsync = createAsyncThunk(
  "vehicleInformation/fetchCars",
  async () => {
    try {
      const response = await fetch(
        "https://exam-server-7c41747804bf.herokuapp.com/carsList",
        { mode: "no-cors" }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok && data.status === "success") {
        return data.data;
      } else {
        throw new Error("Failed to fetch cars.");
      }
    } catch (error) {
      throw new Error(
        "An error occurred while fetching cars: " + error.message
      );
    }
  }
);

export const vehicleInformationSlice = createSlice({
  name: "vehicleInformation",
  initialState: {
    vehicleType: "",
    vehicle: "",
    cars: [],
    loading: false,
    error: null,
  },
  reducers: {
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCarsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setVehicleType, setVehicle } = vehicleInformationSlice.actions;

export default vehicleInformationSlice.reducer;
