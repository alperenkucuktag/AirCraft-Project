import axios from "axios";
import React, { useEffect, useState } from "react";
import { options2 } from "../Constants";
import { useDispatch } from "react-redux";
import { setRoute } from "../Redux/Slices/flightSlice";
import "aos/dist/aos.css";
import AOS from "aos";
const DetailModal = ({ closeModal, detailId }) => {
  const dispatch = useDispatch();
  const [f, setFlightdetail] = useState(null);
  useEffect(() => {
    AOS.init({
      // AOS'u başlat
      duration: 1000, // Animasyon süresi (isteğe bağlı)
      easing: "ease-in-out", // Animasyon eğrisi (isteğe bağlı)
      once: true, // Animasyonun sadece bir kez çalışmasını sağlar (isteğe bağlı)
    });
  }, []);
  useEffect(() => {
    // eski verileri temizle>loading'i tetikler

    setFlightdetail(null);
    //uçuş detayları için istek at
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,

        options2
      )
      .then((res) => {
        setFlightdetail(res.data), dispatch(setRoute(res.data.trail));
      });
  }, [detailId]);
  //   console.log(detailId);

  return (
    <div className='detail-outer'>
      <div className='detail-inner'>
        <p className='close'>
          <span onClick={closeModal}>X</span>
        </p>
        {!f ? (
          <div className='loader'></div>
        ) : (
          <>
            <h2 data-aos='zoom-in-right'>{f.aircraft.model.text}</h2>
            <h2 data-aos='zoom-in-right'>{f.aircraft.model.code}</h2>
            <h4 data-aos='zoom-in-right'>Kuyruk No: </h4>
            <h4 data-aos='zoom-in-right'>{f.aircraft.registration}</h4>
            <h4 data-aos='zoom-in-right'>Firma : {f.airline.name}</h4>
            <img
              data-aos='zoom-in-right'
              src={f.aircraft.images.large[2].src}
              alt=''
            />
            <h4 data-aos='zoom-in-right'>Kalkış:</h4>
            <a
              data-aos='zoom-in-right'
              target='_blank'
              href={f.airport.origin.website}
            >
              {f.airport.origin.name}
            </a>
            <h4 data-aos='zoom-in-right'>Hedef:</h4>
            <a
              data-aos='zoom-in-right'
              target='_blank'
              href={f.airport.destination.website}
            >
              {f.airport.destination.name}
            </a>
            <h4 data-aos='zoom-in-right'>Durum :</h4>
            <span style={{ background: f.status.icon }} className='status'>
              {f.status.text}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
