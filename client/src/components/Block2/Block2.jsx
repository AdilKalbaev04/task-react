import styles from "../Home/Main.module.css";
import React from "react";

const Block2 = () => {
  return (
    <div className={styles.block_2}>
      <div className={styles.block_2_light}>
        <h2 className={styles.h2}>Как это работает?</h2>
        <div className={styles.wrap}>
          <div className={styles.logo_cont}>
            <span className={styles.logo}>01</span>
            <div className={styles.logo_span_p}>
              <span className={styles.block_2_span}>Выбор состава проекта</span>
              <p className={styles.block_2_p}>
                Выберите состав вашего <br /> проекта: только планировка или{" "}
                <br />
                дизайн-проект
              </p>
            </div>
          </div>
          <div className={styles.logo_cont}>
            <span className={styles.logo}>02</span>
            <div className={styles.logo_span_p}>
              <span className={styles.block_2_span}> Настройка проекта</span>
              <p className={styles.block_2_p}>
                Отметьте в корзине нужен ли <br /> вам профессиональный замер,{" "}
                <br /> подбор строительной бригады <br /> или точный просчет
                сметы
              </p>
            </div>
          </div>
          <div className={styles.logo_cont}>
            <span className={styles.logo}>03</span>
            <div className={styles.logo_span_p}>
              <span className={styles.block_2_span}>Создание чертежей</span>
              <p className={styles.block_2_p}>
                Наши дизайнеры спроектируют <br /> интерьер, подготовят <br />
                чертежи.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.img_wrap}>
        <img
          className={styles.img_wrap2}
          src="./public/sec-2-img.png"
          alt="backgroundTwo"
        />
      </div>
    </div>
  );
};

export default Block2;
