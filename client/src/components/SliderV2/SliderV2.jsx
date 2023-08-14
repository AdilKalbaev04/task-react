// import required modules
import { Search } from "../../icons";
import { zoomTrue } from "../../store/reducers/restoraunt.reducer";
import ZoomImg from "../ZoomImg/ZoomImg";
import styles from "./SliderV2.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderV2 = () => {
  const [activeImg, setactiveImg] = useState(false);
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.flat.zoom);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
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
        className="swiperWrapp"
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="/public/i1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img className={styles.slid_img} src="/public/i2.png" alt="" />
            <span
              onClick={() => {
                dispatch(zoomTrue());
              }}
              className={styles.slide_icon}
            >
              <Search />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="/public/i3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="/public/i1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img className={styles.slid_img} src="/public/i2.png" alt="" />
            <span
              onClick={() => {
                dispatch(zoomTrue());
              }}
              className={styles.slide_icon}
            >
              <Search />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="/public/i3.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      {basket && <ZoomImg />}
    </>
  );
};
export default SliderV2;
