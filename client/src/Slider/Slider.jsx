import React, { Children, useRef, useState } from "react";
// import required modules
import { FreeMode, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ children }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        freeMode={true}
        navigation={true}
        modules={[Navigation, FreeMode, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ maxWidth: "96vw" }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
