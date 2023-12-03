import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from "leaflet";
const MapView = ({ openModal }) => {
  const state = useSelector((store) => store.flightSlice);

  const icon = L.icon({
    iconUrl: "/planes.png",
    iconSize: [25, 25],
    iconAnchor: [16, 16],
  });
  return (
    <div>
      <MapContainer
        center={[38.856472, 35.420006]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {state.flights.map((fly) => (
          <Marker icon={icon} key={fly.id} position={[fly.lat, fly.lng]}>
            <Popup>
              <div className='Popup'>
                <span> Kod : {fly.code}</span>
                {state.isError ? (
                  "Uçuş Verisi Yoktur"
                ) : (
                  <button
                    onClick={() => {
                      openModal(fly.id);
                    }}
                  >
                    Detay Görüntüleme
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        <Polyline positions={state.route} />
      </MapContainer>
    </div>
  );
};

export default MapView;
