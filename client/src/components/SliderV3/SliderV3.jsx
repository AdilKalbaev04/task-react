import {
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderV3 = () => {
  return (
    <div>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 1,
          //   },
          //   500: {
          //     slidesPerView: 2,
          //   },
          //   768: {
          //     slidesPerView: 3,
          //   },
          // }}
          freeMode={true}
          navigation={true}
          modules={[
            EffectCoverflow,
            Navigation,
            FreeMode,
            Pagination,
            Mousewheel,
            Keyboard,
          ]}
          style={{ width: "1178px" }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./public/images/aboutImages/aboutImg-3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/images/aboutImages/aboutImg-3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/images/aboutImages/aboutImg-3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/images/aboutImages/aboutImg-3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/images/aboutImages/aboutImg-3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/images/aboutImages/aboutImg-3.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SliderV3;
