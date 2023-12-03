import React, { useState } from "react";
import { useSelector } from "react-redux";
import flightSlice from "../Redux/Slices/flightSlice";
const Header = () => {
  const state = useSelector((store) => store.flightSlice);

  return (
    <header>
      <div>
        <img src='/logo.png' alt='logo' />
        <h3>Uçuş Radarı</h3>
      </div>
      <p>
        {state.isLoading
          ? "Uçuşlar Aranıyor ...."
          : !state.isError
          ? `${state.flights.length} Uçuş Bulundu`
          : "Sorun Oluştu"}
      </p>
    </header>
  );
};

export default Header;
