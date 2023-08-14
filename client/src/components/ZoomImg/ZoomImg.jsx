import { zoomFalse, zoomTrue } from "../../store/reducers/restoraunt.reducer";
import styles from "./ZoomImg.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ZoomImg = () => {
  const basket = useSelector((store) => store.flat.zoom);
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(zoomFalse())} className={styles.cont}>
      <img className={styles.img} src="/public/i2.png" alt="" />
      <h1 onClick={() => dispatch(zoomFalse())} className={styles.x}>
        x
      </h1>
    </div>
  );
};

export default ZoomImg;
