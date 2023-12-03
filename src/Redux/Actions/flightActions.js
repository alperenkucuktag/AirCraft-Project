import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../Constants";
import axios from "axios";
export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const res = await axios.request(options);
  //uÇUŞLAR DİZİSİNİ DÖNÜP
  //HER BİR DİZİ İÇİN OBJE OLUŞTURDUK
  const flightData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lng: flight[3],
  }));
  return flightData;
});
