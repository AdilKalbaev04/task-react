import styles from "../Home/Main.module.css";
import React from "react";

const DesignFlat = () => {
  return (
    <div className={styles.block_6}>
      <h3 className={styles.block_6_h3}>Дизайн комнат</h3>
      <p className={styles.block_6_p}>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </p>
    </div>
  );
};

export default DesignFlat;
