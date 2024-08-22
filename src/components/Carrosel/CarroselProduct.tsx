import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./CarroselProduct.css";

function CarroselProduct() {
  return (
    <div className="flex justify-center items-center w-full">
      <Swiper
        rewind={true}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-11/12 h-60 m-12" // Ajuste da largura para garantir centralização
        effect="fade"
      >
        <SwiperSlide>
          <img
            src="src/assets/Zurah (4).png"
            alt="slid"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/Zurah (3).png"
            alt="Agricultor"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/Zurah (1).png"
            alt="Agricultor"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/Zurah (2).png"
            alt="Agricultor"
            className="w-[500] h-[500] object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/legumes-verduras.PNG"
            alt="Agricultor"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/macaverde.jpg"
            alt="News"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/manga.jpg"
            alt="Logo"
            className="w-full h-full object-cover "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarroselProduct;