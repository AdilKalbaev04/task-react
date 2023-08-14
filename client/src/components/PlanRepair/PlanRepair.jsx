import Btn from "../Btn/Btn";
import styles from "./PlanRepair.module.css";
import React from "react";

const PlanRepair = () => {
  return (
    <div className={styles.block_5}>
      <div className={styles.block_5_img}>
        <img
          className={styles.block_5_img_img}
          src="./public/karandash.png"
          alt=""
        />
      </div>
      <div className={styles.block_5_text}>
        <h3 className={styles.block_5_text_h3}>Планируете ремонт?</h3>
        <p className={styles.block_5_text_p}>
          Ответьте на несколько вопросов и получите бесплатный чек-лист по
          ремонту
        </p>
        <Btn>Получить чек-лист</Btn>
      </div>
    </div>
  );
};

export default PlanRepair;
