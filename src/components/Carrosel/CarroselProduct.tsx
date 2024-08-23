import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./CarroselProduct.css";

function CarroselProduct() {
  return (
    <div className="flex justify-center items-center w-full ">
      <Swiper
        rewind={true}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-11/12 h-80 m-20 " 
        effect="fade"
      >
        <SwiperSlide>
          <img
            src="https://i.imgur.com/rHmNiNy.png"
            alt="slid"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/fvRxK3v.png"
            alt="Agricultor"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/JINTk7i.png"
            alt="Agricultor"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/SYYNSGG.png"
            alt="Agricultor"
            className="w-[500] h-[500] object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/z0uJThD.png"
            alt="Agricultor"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/POEVYqk.png"
            alt="Logo"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarroselProduct;