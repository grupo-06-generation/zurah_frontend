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
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-full h-96"
      effect="fade"
    >
      <SwiperSlide>
        <img
          src="src/assets/slide.png"
          alt="slid"
          className="w-full h-full object-cover rounded"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/assets/techagro.jpg"
          alt="Agricultor"
          className="w-full h-full object-cover rounded"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/assets/news1.png"
          alt="News"
          className="w-full h-full object-cover rounded"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/assets/Design.png"
          alt="Logo"
          className="w-full h-full object-cover rounded"
        />
      </SwiperSlide>
    </Swiper>
  );
}
("src/assets/techagro.jpg");


export default Slider;
