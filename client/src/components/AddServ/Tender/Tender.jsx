import { Services } from "../../Services/Services";
import styles from "./Tender.module.css";
import { NavLink } from "react-router-dom";

const Tender = ({ title, price, img }) => {
  const screenWidth = window.screen.width;

  const tenderPrice = function () {
    if (screenWidth <= 680) {
      return <span className={styles.tenderPrice}>{price}</span>;
    } else {
      return <span className={styles.tenderPrice}>{price}</span>;
    }
  };

  const tenderText = function () {
    // if (screenWidth <= 680) {
    //   return (
    //     <p className={styles.tenderText}>
    //       Мы отправим ваш проект проверенным строительным бригадам, которые
    //       сделают подробный расчет. Мы проверим их расчеты и подготовим для вас
    //       сводную таблицу, чтобы вы могли наглядно сравнить предложения и
    //       выьрать тех исполнителей, которые вам подходят.
    //     </p>
    //   );
    // } else {
    //   return (
    //     <p className={styles.tenderText}>
    //       Мы отправим ваш проект проверенным строительным бригадам, которые
    //       сделают расчёт. Если у вас на примете есть строители, наш специалист
    //       по техническому надзору проедет на их стройки и проверит качество
    //       работы, а после даст вам своё заключение.
    //     </p>
    //   );
    // }
  };

  return (
    <div className={styles.tender}>
      <div className={styles.tenderTitleContainer}>
        <img className={styles.img_tender} src={img} alt="" />
        <h2 className={styles.tenderTitle}>{title}</h2>
      </div>
      <div className={styles.tenderMainContainer}>
        <div className={styles.tenderTextContainer}>{tenderText()}</div>
        {/* <div className={styles.tenderBuyingContainer}>
          <div className={styles.tenderBtnsWrap}>
            <NavLink to={"/pop-up"}>
              <button className={styles.tenderBtnCart}>
                <img
                  src="./cart-white.svg"
                  alt=""
                  className={styles.tenderBtnIcon}
                />
                В корзину
              </button>
            </NavLink>

            <button className={styles.tenderBtnBuy}>Купить</button>
          </div>
          <div className={styles.tenderPriceWrap}>
            <h3 className={styles.tenderPriceTitle}>Стоимость услуги:</h3>
            {tenderPrice()}
          </div>
        </div> */}

        <div className={styles.tenderAddServContainer}>
          <h2 className={styles.tenderAddServTitle}>Смотрите также</h2>
          <div className={styles.tenderAddServ}>
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tender;
