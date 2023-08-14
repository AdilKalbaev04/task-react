import Slider from "../../Slider/Slider";
import { Corzinka } from "../../icons";
import {
  useGetCardsQuery,
  addBasket,
} from "../../store/reducers/restoraunt.reducer";
import Btn from "../Btn/Btn";
import Loaders from "../Loaders/Loaders";
import PopUp from "../PopUp/PopUp";
import styles from "./Catalog.module.css";
import CatalogBtn from "./CatalogBtn/CatalogBtn";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const Catalog = () => {
  const { data: data2, isLoading2 } = useGetCardsQuery();
  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalogTitle}>Дизайн комнат</h2>
      <p className={styles.catalogText}>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </p>

      <div className={styles.catalogItemWrap}>
        <div className={styles.catalogItemTitleWrap}>
          <h3 className={styles.catalogItemTitle}>Гостиные</h3>
          <div className={styles.catalogLineWrap}>
            <hr className={styles.catalogLine} />
          </div>
        </div>
        <div>
          <Slider>
            {data2 &&
              data2.data.map((item) => {
                return item.images.map((xz) => {
                  return (
                    <SwiperSlide key={xz.id}>
                      <NavLink to={"/catalog/" + item.id}>
                        <>
                          <img key={xz.id} src={xz.url} alt="kartinka" />
                          <div className={styles.slid_cont_text}>
                            <span className={styles.catalogItemTitle}>
                              {item.title}
                            </span>
                            <CatalogBtn></CatalogBtn>
                          </div>
                        </>
                      </NavLink>
                    </SwiperSlide>
                  );
                });
              })}
          </Slider>
        </div>
      </div>
      <div className={styles.catalogItemWrap}>
        <div className={styles.catalogItemTitleWrap}>
          <h3 className={styles.catalogItemTitle}>Детские</h3>
          <div className={styles.catalogLineWrap}>
            <hr className={styles.catalogLine} />
          </div>
        </div>
        <div>
          <Slider>
            {data2 &&
              data2.data.map((item) => {
                return item.images.map((xz) => {
                  return (
                    <SwiperSlide key={xz.id}>
                      <NavLink to={"/catalog/" + item.id}>
                        <>
                          <img key={xz.id} src={xz.url} alt="kartinka" />
                          <div className={styles.slid_cont_text}>
                            <span className={styles.catalogItemTitle}>
                              {item.title}
                            </span>
                            <CatalogBtn></CatalogBtn>
                          </div>
                        </>
                      </NavLink>
                    </SwiperSlide>
                  );
                });
              })}
          </Slider>
        </div>
      </div>

      <div className={styles.catalogItemWrap}>
        <div className={styles.catalogItemTitleWrap}>
          <h3 className={styles.catalogItemTitle}>Коридоры - прихожие</h3>
          <div className={styles.catalogLineWrap}>
            <hr className={styles.catalogLine} />
          </div>
        </div>
        <div>
          <Slider>
            {data2 &&
              data2.data.map((item) => {
                return item.images.map((xz) => {
                  return (
                    <SwiperSlide key={xz.id}>
                      <NavLink to={"/catalog/" + item.id}>
                        <>
                          <img key={xz.id} src={xz.url} alt="kartinka" />
                          <div className={styles.slid_cont_text}>
                            <span className={styles.catalogItemTitle}>
                              {item.title}
                            </span>
                            <CatalogBtn></CatalogBtn>
                          </div>
                        </>
                      </NavLink>
                    </SwiperSlide>
                  );
                });
              })}
          </Slider>
        </div>
      </div>

      <div className={styles.catalogItemWrap}>
        <div className={styles.catalogItemTitleWrap}>
          <h3 className={styles.catalogItemTitle}>Кухни</h3>
          <div className={styles.catalogLineWrap}>
            <hr className={styles.catalogLine} />
          </div>
        </div>
        <div>
          <Slider>
            {data2 &&
              data2.data.map((item) => {
                return item.images.map((xz) => {
                  return (
                    <SwiperSlide key={xz.id}>
                      <NavLink to={"/catalog/" + item.id}>
                        <>
                          <img key={xz.id} src={xz.url} alt="kartinka" />
                          <div className={styles.slid_cont_text}>
                            <span className={styles.catalogItemTitle}>
                              {item.title}
                            </span>
                            <CatalogBtn></CatalogBtn>
                          </div>
                        </>
                      </NavLink>
                    </SwiperSlide>
                  );
                });
              })}
          </Slider>
        </div>
      </div>

      <div className={styles.catalogItemWrap}>
        <div className={styles.catalogItemTitleWrap}>
          <h3 className={styles.catalogItemTitle}>Санузлы</h3>
          <div className={styles.catalogLineWrap}>
            <hr className={styles.catalogLine} />
          </div>
        </div>
        <div>
          <Slider>
            {data2 &&
              data2.data.map((item) => {
                return item.images.map((xz) => {
                  return (
                    <SwiperSlide key={xz.id}>
                      <NavLink to={"/catalog/" + item.id}>
                        <>
                          <img key={xz.id} src={xz.url} alt="kartinka" />
                          <div className={styles.slid_cont_text}>
                            <span className={styles.catalogItemTitle}>
                              {item.title}
                            </span>
                            <CatalogBtn></CatalogBtn>
                          </div>
                        </>
                      </NavLink>
                    </SwiperSlide>
                  );
                });
              })}
          </Slider>
        </div>
      </div>

      <div className={styles.catalogItemWrap}>
        <div className={styles.catalogItemTitleWrap}>
          <h3 className={styles.catalogItemTitle}>Спальни</h3>
          <div className={styles.catalogLineWrap}>
            <hr className={styles.catalogLine} />
          </div>
        </div>
      </div>
      <div>
        <Slider>
          {data2 &&
            data2.data.map((item) => {
              return item.images.map((xz) => {
                return (
                  <SwiperSlide key={xz.id}>
                    <NavLink to={"/catalog/" + item.id}>
                      <>
                        <img key={xz.id} src={xz.url} alt="kartinka" />
                        <div className={styles.slid_cont_text}>
                          <span className={styles.catalogItemTitle}>
                            {item.title}
                          </span>
                          <CatalogBtn></CatalogBtn>
                        </div>
                      </>
                    </NavLink>
                  </SwiperSlide>
                );
              });
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Catalog;
