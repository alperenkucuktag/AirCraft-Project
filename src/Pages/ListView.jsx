import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "aos/dist/aos.css";
import AOS from "aos";

const ListView = ({ openModal }) => {
  const state = useSelector((store) => store.flightSlice);
  const [itemOffset, setItemOffset] = useState(10);

  useEffect(() => {
    AOS.init({
      // AOS'u başlat
      duration: 1000, // Animasyon süresi (isteğe bağlı)
      easing: "ease-in-out", // Animasyon eğrisi (isteğe bağlı)
      once: true, // Animasyonun sadece bir kez çalışmasını sağlar (isteğe bağlı)
    });
  }, []);

  //sayfa başına düşen eleman sayısı

  const itemsPerPage = 10;

  //GÖSTERİLCEK SON ELEMANI SON ELEMANI TESPİT EDER
  const endOffset = itemOffset + itemsPerPage;

  //GÖSTERİLCEK ELEMANLARI DİZİDEN ALIYOR
  const currentItems = state?.flights.slice(itemOffset, endOffset);

  //TOPLAM KAÇ SAYFA HESAPLAR
  const pageCount = Math.ceil(state?.flights.length / itemsPerPage);
  //SAYFA DEĞİŞTİĞİNDE ÇALIŞIR
  const handlePageClick = (event) => {
    //GÖSTERİLCEK YENİ ELEMANLARI HESAPLAR
    const newOffset = (event.selected * itemsPerPage) % state?.flights.length;
    //STATE'İ GÜNCELLER
    setItemOffset(newOffset);
  };
  // console.log(state);
  return (
    <div className='p-4'>
      <table className='table table-dark table-hover'>
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((fly) => (
            <tr data-aos='fade-left'>
              <td data-aos='fade-left'>{fly.id}</td>
              <td data-aos='fade-left'>{fly.code}</td>
              <td data-aos='fade-left'>{fly.lat}</td>
              <td data-aos='fade-left'>{fly.lng}</td>
              <td data-aos='fade-left'>
                <button onClick={() => openModal(fly.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        nextLabel='ileri >'
        onPageChange={handlePageClick}
        className='pagination'
        previousLabel='< geri'
        pageCount={pageCount}
        activeClassName='active'
      />
    </div>
  );
};

export default ListView;
