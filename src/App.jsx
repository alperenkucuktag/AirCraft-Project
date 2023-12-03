import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import MapView from "./Pages/MapView";
import ListView from "./Pages/ListView";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "./Redux/Actions/flightActions";
import DetailModal from "./Components/DetailModal";

const App = () => {
  const [map, setMap] = useState(true);
  const [showDetail, setShowdetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  //Modalı açar
  const openModal = (id) => {
    //detayı gösterilcek uçağın id'sini state 'e aktarma
    setDetailId(id);
    //modal'ı aç
    setShowdetail(true);
  };

  return (
    <>
      <Header />
      <div className='view-buttons'>
        <button
          className={map ? "active" : ""}
          onClick={() => {
            setMap(true);
          }}
        >
          Harita Görünümü
        </button>
        <button
          className={!map ? "active" : ""}
          onClick={() => {
            setMap(false);
          }}
        >
          Liste Görünümü
        </button>
      </div>
      {map ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {/* Modal'ı gösterme */}
      {showDetail && (
        <DetailModal
          detailId={detailId}
          closeModal={() => setShowdetail(false)}
        />
      )}
    </>
  );
};

export default App;
