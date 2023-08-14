import { removeTask } from "../../../store/reducers/restoraunt.reducer";
import Btn from "../../Btn/Btn";
import styles from "./OrderInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const OrderInfo = ({ closed2 }) => {
  const removeFlat = () => {};
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.flat.basket);
  return (
    <div className={styles.orderInfo}>
      <div className={styles.closed}>
        <button className={styles.btn_2} onClick={closed2}>
          Закрыть
        </button>
      </div>
      <div>
        <span className={styles.span}>Выбранные комнаты:</span>
      </div>
      {!!basket.length &&
        basket.map((item) => {
          return (
            <div key={item.id} className={styles.cont_order}>
              <div className={styles.img_wrap}>
                <img className={styles.img} src={item.images[0].url} alt="" />
                <span key={item.id}>
                  {item.Categories} {item.average}: {item.title} (
                  <span
                    onClick={() => {
                      dispatch(removeTask(item.id));
                    }}
                    className={styles.del_orange}
                  >
                    удалить
                  </span>
                  /<span className={styles.change}>изменить</span>)
                </span>
              </div>
            </div>
          );
        })}
      <NavLink to={"/pop-up"}>
        <Btn>Перейти к выбору услуг</Btn>
      </NavLink>
    </div>
  );
};

export default OrderInfo;
