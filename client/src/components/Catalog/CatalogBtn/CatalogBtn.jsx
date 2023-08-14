import styles from "./CatalogBtn.module.css";
import React, { useState } from "react";

const CatalogBtn = () => {
  const [btnText, setBtnText] = useState("Выбрать");
  return (
    <div className={styles.catalogBtnWrap}>
      <button className={styles.catalogBtn}>
        <img src="./cart.svg" alt="" className={styles.catalogBtnIcon} />
        {btnText}
      </button>
    </div>
  );
};

export default CatalogBtn;
