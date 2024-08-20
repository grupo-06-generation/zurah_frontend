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
      className="mySwiper w-full" // Adicione w-full aqui
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
  );
}

export default Slider;