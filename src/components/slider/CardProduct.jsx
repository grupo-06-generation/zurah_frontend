// src/components/slider/Slider.js
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './styles.css'; // Certifique-se de que esse caminho está correto

const Slider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      <p className="append-buttons">
        <button onClick={prepend2} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={prepend} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={append} className="append-slide">
          Append Slide
        </button>
        <button onClick={append2} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    </>
  );
};

export default Slider;