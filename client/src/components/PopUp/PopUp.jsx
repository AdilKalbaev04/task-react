import { getData, sendData } from "../../api";
import {
  countAddFive,
  countAddFiveRemove,
  countAddFour,
  countAddFourRemove,
  countAddSix,
  countAddSixRemove,
  countAddTree,
  countAddTreeRemove,
  countAddTwo,
  countAddTwoRemove,
  usePostOrderMutation,
} from "../../store/reducers/restoraunt.reducer";
import Loaders from "../Loaders/Loaders";
import styles from "./PopUp.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PopUp = () => {
  const [info, setInfo] = useState({
    name: "",
    tel: "",
    average: 0,
  });
  const [postOrder, { isSuccess }] = usePostOrderMutation();
  const count = useSelector((store) => store.flat.count);

  const funcOnchange = (event) => {
    setInfo((info) => {
      return {
        ...info,
        [event.target.name]: event.target.value,
      };
    });
  };
  const sendDataInfo = (event) => {
    event.preventDefault();
    postOrder({ ...info, average: count });

    setInfo({
      name: "",
      tel: "",
    });
  };
  const dispatch = useDispatch();
  const basket2 = useSelector((store) => store.flat.count);

  const screenWidth = window.screen.width;

  const stili = function () {
    if (screenWidth <= 840) {
      return (
        <div className={styles.stiliContainer}>
          <h3 className={styles.stiliTitle}>Стили</h3>

          <div className={styles.stiliWrap}>
            <div className={styles.stiliItemWrap}>
              <h5 className={styles.stiliItem}>
                Гостиная: <span>Говард Хьюс</span>
              </h5>

              <button className={styles.delBtn}>
                <img src="./x.svg" alt="" className={styles.delIcon} />
              </button>
            </div>

            <div className={styles.stiliItemWrap}>
              <h5 className={styles.stiliItem}>
                Спальня: <span>Рокки Бальбоа</span>
              </h5>

              <button className={styles.delBtn}>
                <img src="./x.svg" alt="" className={styles.delIcon} />
              </button>
            </div>

            <div className={styles.stiliItemWrap}>
              <h5 className={styles.stiliItem}>
                Санузел: <span>Рокки Бальбоа</span>
              </h5>

              <button className={styles.delBtn}>
                <img src="./x.svg" alt="" className={styles.delIcon} />
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const addServ = function () {
    if (screenWidth <= 840) {
      return (
        <div className={styles.addServ}>
          <label className={styles.checkLabel}>
            <input type="checkbox" className={styles.check} />
            <div
              className={styles.customCheck}
              style={{ marginBottom: "20px" }}
            ></div>
            Консультация дизайнера <br /> + 39 000тг
          </label>

          <br />

          <label className={styles.checkLabel}>
            <input type="checkbox" className={styles.check} />
            <div
              className={styles.customCheck}
              style={{ marginBottom: "20px" }}
            ></div>
            Тендер мебельных компаний <br /> + 39 000тг
          </label>
        </div>
      );
    }
  };
  return (
    <div className={styles.popUp}>
      <div className={styles.popUpContainer}>
        <h2 className={styles.popUpTitle}>Ваш заказ:</h2>
        <div className={styles.popUpMain}>
          <div className={styles.popUpSelect}>
            <div className={styles.popUpChoice}>
              <div className={styles.layout}>
                <div className={styles.layoutCheck}>
                  <form action="/" className={styles.layoutForm}>
                    <label className={styles.checkLabel} id={styles.checkLabel}>
                      <input
                        onChange={(event) => {
                          if (event.target.checked) {
                            dispatch(countAddTwo());
                          } else {
                            dispatch(countAddTwoRemove());
                          }
                        }}
                        type="checkbox"
                        className={styles.check}
                      />
                      <div className={styles.customCheck}></div>
                      Планировка
                    </label>
                  </form>
                  <h3 className={styles.checkDesignProjectPrice}>99 000 тг</h3>
                </div>

                <div className={styles.layoutText}>
                  <ul className={styles.layoutList}>
                    <li className={styles.layoutListItem}>
                      2 варианта планировки + финальный
                    </li>

                    <li className={styles.layoutListItem}>
                      план демонтажа стен
                    </li>

                    <li className={styles.layoutListItem}>
                      план монтажа перегородок
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.designProject}>
                <div className={styles.designProjectCheck}>
                  <form action="/" className={styles.designProjectForm}>
                    <label className={styles.checkLabel} id={styles.checkLabel}>
                      <input
                        onChange={(event) => {
                          if (event.target.checked) {
                            dispatch(countAddFive());
                          } else {
                            dispatch(countAddFiveRemove());
                          }
                        }}
                        type="checkbox"
                        className={styles.check}
                      />
                      <div className={styles.customCheck}></div>
                      Дизайн-проект
                    </label>
                  </form>

                  <h3 className={styles.checkDesignProjectPrice}>299 000 тг</h3>
                </div>

                <div className={styles.designProjectText}>
                  <ul className={styles.designProjectList}>
                    <li className={styles.designProjectListItem}>
                      2 варианта планировки + финальный
                    </li>

                    <li className={styles.designProjectListItem}>
                      планы демонтажа и монтажа стен
                    </li>

                    <li className={styles.designProjectListItem}>
                      розетки, выключатели, освещение
                    </li>

                    <li className={styles.designProjectListItem}>сантехника</li>

                    <li className={styles.designProjectListItem}>
                      план потолка
                    </li>

                    <li className={styles.designProjectListItem}>
                      план пола и плинтусов
                    </li>

                    <li className={styles.designProjectListItem}>
                      план дверей
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.popUpAddServ}>
              <h2 className={styles.addServTitleCheck}>
                Дополнительные услуги
              </h2>
              <form action="/" className={styles.addServForm}>
                <label className={styles.checkLabel}>
                  <input
                    onChange={(event) => {
                      if (event.target.checked) {
                        dispatch(countAddTree());
                      } else {
                        dispatch(countAddTreeRemove());
                      }
                    }}
                    type="checkbox"
                    className={styles.check}
                  />
                  <div
                    className={styles.customCheck}
                    style={{ marginBottom: "20px" }}
                  ></div>
                  Тендер строительных бригад <br /> + 49 000 тг
                </label>

                <br />

                <label className={styles.checkLabel}>
                  <input
                    onChange={(event) => {
                      if (event.target.checked) {
                        dispatch(countAddTree());
                      } else {
                        dispatch(countAddTreeRemove());
                      }
                    }}
                    type="checkbox"
                    className={styles.check}
                  />
                  <div
                    className={styles.customCheck}
                    style={{ marginBottom: "20px" }}
                  ></div>
                  Составление сметы <br /> + 49 000 тг
                </label>

                <br />

                <label className={styles.checkLabel}>
                  <input
                    onChange={(event) => {
                      if (event.target.checked) {
                        dispatch(countAddFour());
                      } else {
                        dispatch(countAddFourRemove());
                      }
                    }}
                    type="checkbox"
                    className={styles.check}
                  />
                  <div
                    className={styles.customCheck}
                    style={{ marginBottom: "20px" }}
                  ></div>
                  Печать альбома <br /> + 19 000 тг
                </label>
              </form>
            </div>

            <br />

            {addServ()}

            {stili()}
          </div>

          <div className={styles.popUpTotalWrap}>
            <div className={styles.popUpTotal}>
              <h4 className={styles.totalTitle}>Ваш заказ:</h4>
              <div className={styles.totalPrices}>
                <div className={styles.pricesMeasuring}>
                  <form action="/" className={styles.measuringForm}>
                    <label className={styles.checkLabel}>
                      <input
                        onChange={(event) => {
                          if (event.target.checked) {
                            dispatch(countAddSix());
                          } else {
                            dispatch(countAddSixRemove());
                          }
                        }}
                        type="checkbox"
                        className={styles.check}
                      />
                      <div className={styles.customCheck}></div>
                      Замеры*
                    </label>
                  </form>

                  <h5 className={styles.measuringPrice}>19 000 тг</h5>
                </div>

                <div className={styles.pricesLayout}>
                  <h5 className={styles.layoutTitle}>Планировка</h5>
                  <h5 className={styles.layoutPrice}>99 000 тг</h5>
                </div>

                <div className={styles.pricesSelectRooms}>
                  <h5 className={styles.selectRoomsTitle}>Выбранные комнаты</h5>
                  <h5 className={styles.selectRoomsPrice}>100 000 тг</h5>
                </div>

                <div className={styles.pricesAddServ}>
                  <h5 className={styles.addServTitle}>
                    Тендер строительных бригад
                  </h5>
                  <h5 className={styles.addServPrice}>49 000 тг</h5>
                </div>

                <div className={styles.pricesTotal}>
                  <h5 className={styles.totalTitle}>Итого:</h5>
                  {basket2 && (
                    <h5 className={styles.totalPrice}>{basket2} тг</h5>
                  )}
                </div>
              </div>

              <form
                onSubmit={sendDataInfo}
                action="/"
                className={styles.totalForm}
              >
                <input
                  required
                  type="text"
                  name="name"
                  value={info.name}
                  onChange={funcOnchange}
                  placeholder="Введите ваше имя"
                  className={styles.inputName}
                />
                <input
                  required
                  type="text"
                  name="tel"
                  value={info.tel}
                  onChange={funcOnchange}
                  placeholder="Введите ваш телефон"
                  className={styles.inputTel}
                />
                <div className={styles.totalBtns}>
                  <button className={styles.requestBtn}>Оставить заявку</button>

                  <button className={styles.payingBtn}>
                    Оплатить{" "}
                    <span className={styles.payingPrice}>367 000 тг</span>
                  </button>

                  <button className={styles.kaspiBtn}>
                    <img
                      src="./kaspi.svg"
                      alt=""
                      className={styles.iconKaspi}
                    />
                    Оплатить в рассрочку
                  </button>
                </div>
              </form>

              <p className={styles.totalText}>
                Нажимая на кнопку “Оплатить” вы подтверждаете свое согласие с{" "}
                <a href="/" className={styles.offer}>
                  офертой
                </a>
              </p>
            </div>
            <p className={styles.popUpText}>
              *Наш специалист выезжает на обьект для проведения замера. <br />{" "}
              Если вы хотите замерить квартиру самостоятельно, откажитесь от
              этой услуги, а мы предоставим вам необходимые инструкции.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
