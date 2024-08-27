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
        centeredSlides={false}
        spaceBetween={10} 
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full max-w-[900px] h-64 m-10" 
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, 
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, 
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src="https://i.imgur.com/rHmNiNy.png"
            alt="slide"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/fvRxK3v.png"
            alt="Agricultor"
            className="w-full h-full object-cover"
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
            className="w-[500px] h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/z0uJThD.png"
            alt="Agricultor"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.imgur.com/POEVYqk.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarroselProduct;