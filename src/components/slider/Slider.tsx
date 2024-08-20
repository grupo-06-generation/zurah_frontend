
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";


import { Navigation, Pagination } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <img
            src="src/assets/techagro.jpg"
            alt="Agricultor"
            className="w-full h-40 object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/news1.png"
            alt="News"
            className="w-full h-40 object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/zurah-logo.png"
            alt="Logo"
            className="w-full h-40 object-cover rounded"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
