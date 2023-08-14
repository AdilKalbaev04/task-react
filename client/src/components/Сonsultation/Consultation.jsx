import { Bank, Bug, Kaspi, Ptichka, Time } from "../../icons";
import Btn from "../Btn/Btn";
import styles from "../Home/Main.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Consultation = () => {
  return (
    <div className={styles.title_cont}>
      <h1 className={styles.title}>
        Дизайн-проект для вашей квартиры за 2 недели и 199 000 ₸
      </h1>
      <NavLink to={"/pop-up"}>
        <Btn>Консультация</Btn>
      </NavLink>
      <div className={styles.block}>
        <div className={styles.text_cont}>
          <Time />
          <div className={styles.block_text}>
            <span className={styles.block_text_span}>2 недели</span>
            <p className={styles.block_text_p}>срок выполнения заказа</p>
          </div>
        </div>
        <div className={styles.text_cont}>
          <Ptichka />
          <div className={styles.block_text}>
            <span className={styles.block_text_span}>Не важно</span>
            <p className={styles.block_text_p}>
              Сколько квадратов, <br /> цена - одна!
            </p>
          </div>
        </div>
        <div className={styles.text_cont}>
          <Bug />
          <div className={styles.block_text}>
            <span className={styles.block_text_span}>Рассрочка</span>
            <p className={styles.block_text_p}>до 24 месяцев</p>
            <div className={styles.block_svg}>
              <Bank />
              <Kaspi />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
