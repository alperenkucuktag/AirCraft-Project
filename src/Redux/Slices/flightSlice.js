import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../Actions/flightActions";
const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
  route: [], //detayına baktığımız uçak rotası
};
export const flightSlice = createSlice({
  name: "flights",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.flights = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
  reducers: {
    setRoute: (state, action) => {
      // console.log(action.payload);
      const rota = action.payload.map((routes) => [routes.lat, routes.lng]);
      // console.log(rota);
      state.route = rota;
    },
  },
});

export const { setRoute } = flightSlice.actions;

export default flightSlice.reducer;
