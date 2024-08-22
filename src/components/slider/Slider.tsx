import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      effect="fade"
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-full h-96" 
    >
      <SwiperSlide>
        <img
          src="https://i.imgur.com/pMFsGCm.png"
          alt="Agricultor"
          className="w-full h-full object-cover rounded-lg" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.imgur.com/H0JIGQd.png"
          alt="News"
          className="w-full h-full object rounded-lg" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/assets/zurah-logo.png"
          alt="Logo"
          className="w-full h-full object-cover rounded-lg" 
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;