import Btn from "../Btn/Btn";
import styles from "./TestV2.module.css";
import React from "react";

const TestV2 = () => {
  return (
    <div className={styles.block_7}>
      <div className={styles.block_7_text}>
        <h3 className={styles.block_7_h3}>
          Давайте определим, что вам нравится
        </h3>
        <p className={styles.block_7_p}>
          Пройдите короткий тест и мы покажем подходящие вам стилевые решения
        </p>
        <Btn>Пройти тест</Btn>
      </div>
    </div>
  );
};

export default TestV2;
