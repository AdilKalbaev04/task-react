import { Corzinka } from "../../icons";
import {
  addBasket,
  countAdd,
  useGetCardsQuery,
  zoomTrue,
} from "../../store/reducers/restoraunt.reducer";
import styles from "../Home/Main.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Additional = () => {
  const { data, isLoading, isSuccess } = useGetCardsQuery();
  if (isLoading) return <Loaders />;
  const dispatch = useDispatch();

  return (
    <div className={styles.cont_additional}>
      {isSuccess &&
        data.data.map((el) => {
          return (
            <div key={el.id}>
              <h1 className={styles.service_text_h1}>{el.Categories}</h1>
              <div className={styles.cont_services}>
                <NavLink to={"/catalog"}>
                  <div>
                    <img src={el.images[0].url} alt="" />
                  </div>
                </NavLink>
                <div className={styles.service_text}>
                  <span className={styles.service_text_span}>{el.title}</span>
                  <button
                    onClick={() => {
                      dispatch(zoomTrue());
                      dispatch(addBasket(el));
                      dispatch(countAdd());
                    }}
                    className={styles.service_btn}
                  >
                    <span>
                      <Corzinka />
                    </span>
                    выбрать
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Additional;
