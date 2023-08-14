import { Corzinka } from "../../icons";
import styles from "./MyOrder.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const MyOrder = ({ click }) => {
  const basket = useSelector((store) => store.flat);
  const sum = basket.basket.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber.average;
  }, 0);
  const counts = basket.count;
  return (
    <div onClick={click} className={styles.order_cont}>
      <div className={styles.sometext}>
        <span className={styles.order_text}>Мой заказ</span>
        <p className={styles.order_price}>
          {counts} x {sum}mг
        </p>
      </div>
      <div className={styles.order_svg}>
        <Corzinka />
      </div>
    </div>
  );
};

export default MyOrder;
