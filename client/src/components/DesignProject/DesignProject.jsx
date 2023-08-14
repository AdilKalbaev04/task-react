import { Pdf } from "../../icons";
import Btn from "../Btn/Btn";
import styles from "../Home/Main.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const DesignProject = () => {
  return (
    <div className={styles.block_3_cont}>
      <div className={styles.block_3}>
        <span className={styles.block_3_span}>Планировка за 99 000 ₸</span>
        <span className={styles.block_3_span2}>Срок выполнения: 5 дней</span>
        <p className={styles.block_3_p}>
          Мы разработаем для вас уникальное планировочное решение квартиры,
          которое будет соответствовать как нормам эргономики, так и вашим
          личным пожеланиям, а также подготовим чертеж для согласования
          планировки.
        </p>

        <div className={styles.ul}>
          <ul className={styles.li}>
            <li>2 варианта планировки + финальный</li>
            <li>обмерный план</li>
            <li>план демонтажа стен</li>
            <li>план монтажа перегородок</li>
          </ul>
        </div>
        <div className={styles.block_3_block}>
          <NavLink to={"/pop-up"}>
            <Btn>Оставить заявку</Btn>
          </NavLink>
          <div className={styles.block_3_text}>
            <Pdf />
            <span className={styles.block_3_any_span}>
              <NavLink to={"/sxema.png"}>Посмотреть пример</NavLink>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.img_sxema}>
        <img
          className={styles.img_sxema_wrap}
          src="./public/sxema.png"
          alt="sxema"
        />
      </div>
    </div>
  );
};

export default DesignProject;
