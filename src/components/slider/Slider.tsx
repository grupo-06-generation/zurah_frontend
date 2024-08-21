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

          src="src/assets/slide.png"
          alt="Agricultor"
          className="w-full h-full object-cover rounded" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/assets/techagro.jpg"

          src="https://i.imgur.com/5rlvcav.png"

          alt="Agricultor"
          className="w-full h-[600px] object-cover rounded pointer-events-none cursor-pointer" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.imgur.com/pMFsGCm.png"
          alt="News"
          className="w-full h-[600px] object-cover rounded" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/assets/zurah-logo.png"
          alt="Logo"
          className="w-full h-[600px] object-cover rounded" 
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;