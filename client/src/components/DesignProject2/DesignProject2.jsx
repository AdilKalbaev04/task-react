import { Pdf } from "../../icons";
import Btn from "../Btn/Btn";
import styles from "../Home/Main.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const DesignProject2 = () => {
  return (
    <div className={styles.block_4}>
      <div className={styles.block_4_img}>
        <img
          className={styles.block_4_img_img}
          src="./public/sxemaTwo.png"
          alt="sxema"
        />
      </div>
      <div className={styles.block_4_text}>
        <span className={styles.block_3_span}>Дизайн-проект за 199 000 ₸</span>{" "}
        <span className={styles.block_3_span2}>Срок выполнения: 14 дней</span>
        <p className={styles.block_3_p}>
          Разработаем планировочное решение вашей квартиры, далее на его основе
          мы подготовим альбом, состоящий из 12 чертежей, необходимых строителям
          для ремонта.
        </p>
        <div className={styles.ul}>
          <ul className={styles.li}>
            <li>2 варианта планировки + финальный сантехника</li>
            <li>планы демонтажа и монтажа стен</li>
            <li>розетки, выключатели, освещение</li>
            <li>сантехника</li>
            <li>план потолка</li>
            <li> план пола и плинтусов</li>
            <li>план дверей</li>
          </ul>
        </div>
        <div className={styles.block_3_block}>
          <NavLink to={"/pop-up"}>
            <Btn> Оставить заявку </Btn>
          </NavLink>

          <div className={styles.block_3_text}>
            <Pdf />
            <span className={styles.block_3_any_span}>
              <NavLink to={"/sxema.png"}>Посмотреть пример</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProject2;
