import { CorzinkaWhite } from "../../icons";
import Tender from "../AddServ/Tender/Tender";
import Test from "../Home/Test";
import { Services } from "../Services/Services";
import styles from "./Price.module.css";
import { NavLink } from "react-router-dom";

const Price = () => {
  const screenWidth = window.screen.width;

  const layoutTitle = function () {
    if (screenWidth <= 680) {
      return <h2 className={styles.layoutTitle}>Флэтплан-планировка</h2>;
    } else {
      return <h2 className={styles.layoutTitle}>Планировка</h2>;
    }
  };

  const layoutText = function () {
    if (screenWidth <= 680) {
      return (
        <p className={styles.layoutText}>
          Мы разработаем планировочное решение вашей квартиры, отвечающую всем
          нормам эргономики с соблюдением мокрых зон, учтем расстановку мебели,
          расположение покрытий полов, а так же подготовим белую 3D модель
          квартиры.
        </p>
      );
    } else {
      return (
        <p className={styles.layoutText}>
          Мы разработаем для вас уникальное планировочное решение квартиры,
          которое будет соответствовать как нормам эргономики, так и вашим
          личным пожеланиям, а также подготовим чертеж для согласования
          планировки.
        </p>
      );
    }
  };

  const layoutList = function () {
    if (screenWidth <= 680) {
      return (
        <ul className={styles.layoutList}>
          <li className={styles.layoutListItem}>
            Вы купили готовую квартиру с отделкой, н оне знаете как лучше
            расположить мебель и зонировать пространство
          </li>

          <li className={styles.layoutListItem}>
            Вы хотите просто обновить мебель в квартире, где живете сейчас
          </li>

          <li className={styles.layoutListItem}>
            Вы только планируете будущий ремнот и хотите сделать первый шаг к
            его началу
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={styles.layoutList}>
          <li className={styles.layoutListItem}>
            Вы купили квартиру без отделки и планируете начать ремонт;
          </li>

          <li className={styles.layoutListItem}>
            Вы приобрели квартиру с ремонтом, и не понимаете, как правильно
            зонировать ее и расставить мебель;
          </li>

          <li className={styles.layoutListItem}>
            Вы хотите изменить интерьер квартиры, в которой уже проживаете.
          </li>
        </ul>
      );
    }
  };

  const layoutListSec = function () {
    if (screenWidth <= 680) {
      return (
        <ul className={styles.layoutListSec}>
          <li className={styles.layoutListSecItem}>
            1 чертеж планировочного рещения
          </li>

          <li className={styles.layoutListSecItem}>
            3D модель квартиры в черно-белом цвете
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={styles.layoutListSec}>
          <li className={styles.layoutListSecItem}>
            2 варианта планировки + финальный
          </li>

          <li className={styles.layoutListSecItem}>план демонтажа стен</li>

          <li className={styles.layoutListSecItem}>план монтажа перегородок</li>
        </ul>
      );
    }
  };

  const layoutPrice = function () {
    if (screenWidth <= 680) {
      return <span className={styles.layoutPrice}>39 000тг</span>;
    } else {
      return <span className={styles.layoutPrice}>99 000 тг</span>;
    }
  };

  const designProjectTitle = function () {
    if (screenWidth <= 680) {
      return (
        <h2 className={styles.designProjectTitle}>Флэтплан-дизайн проект</h2>
      );
    } else {
      return <h2 className={styles.designProjectTitle}>Дизайн-проект</h2>;
    }
  };

  const designProjectText = function () {
    if (screenWidth <= 680) {
      return (
        <p className={styles.designProjectText}>
          Мы разработаем планировочное решение вашей квартиры, при необходимости
          создадим перепланировку, отвечающую всем нормам эргономики, с
          соблюдением мокрых зон, учтем расстановку мебели, расположение
          покрытий полов, а так же подготовим белую 3D модель квартиры
        </p>
      );
    } else {
      return (
        <div className={styles.designProjectTextWrap}>
          <p className={styles.designProjectText}>
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям.
          </p>
          <p className={styles.designProjectTextSec}>
            Затем мы подготовим альбом, состоящий из 12 чертежей, необходимых
            строителям для ремонта.
          </p>
          <p className={styles.designProjectTextThird}>
            * также, вы можете дополнительно выбрать любой дизайн из нашего
            <NavLink to="/catalog" className={styles.catalogLink}>
              {" "}
              каталога
            </NavLink>
            , и мы добавим его в ваш проект
          </p>
        </div>
      );
    }
  };

  const designProjectList = function () {
    if (screenWidth <= 680) {
      return (
        <ul className={styles.designProjectList}>
          <li className={styles.designProjectListItem}>
            Вам предстоит ремонт в новостройке, где сейчас только бетонные стены
          </li>

          <li className={styles.designProjectListItem}>
            Вы хотите полностью переделать квартиру с уже готовой отделкой или
            вторичку
          </li>

          <li className={styles.designProjectListItem}>
            Вы планируете бюджетный ремонт квартиры для дальнейшей сдачи в
            аренду
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={styles.designProjectList}>
          <li className={styles.designProjectListItem}>
            Вы купили квартиру в новостройке, и нужен чёткий план на ремонт;
          </li>

          <li className={styles.designProjectListItem}>
            Вы хотите полностью переделать квартиру с уже готовой отделкой или
            вторичку;
          </li>

          <li className={styles.designProjectListItem}>
            Вы планируете бюджетный ремонт квартиры для дальнейшей сдачи в
            аренду.
          </li>
        </ul>
      );
    }
  };

  const designProjectPrice = function () {
    if (screenWidth <= 680) {
      return <span className={styles.designProjectPrice}>39 000тг</span>;
    } else {
      return <span className={styles.designProjectPrice}>199 000 тг</span>;
    }
  };

  return (
    <div className={styles.price}>
      <div className={styles.priceLine}>
        <div className={styles.priceLineSec}></div>
      </div>

      <div className={styles.priceMain}>
        <div className={styles.layoutLineMob}></div>
        <div className={styles.layout}>
          <div className={styles.layoutMain}>
            {layoutTitle()}
            {layoutText()}
            <div className={styles.fitIf}>
              <h3 className={styles.fitIfTitle}>Вам подойдет, если:</h3>
              {layoutList()}
            </div>
            <div className={styles.completionDate}>
              <h3 className={styles.completionDateTitle}>Срок выполненния:</h3>
              <p className={styles.completionDateText}>
                5 рабочих дней после получения замера
              </p>
            </div>
            <div className={styles.get}>
              <h3 className={styles.getTitle}>Вы получите:</h3>
              {layoutListSec()}
            </div>
            <div className={styles.layoutPriceWrap}>
              <h3 className={styles.priceTitle}>Цена услуги:</h3>
              {layoutPrice()}
            </div>
            <div className={styles.priceBtnsWrap}>
              <NavLink to={"/pop-up"}>
                <button className={styles.cartBtn}>
                  <img
                    src="./cart-white.svg"
                    alt=""
                    className={styles.cartIcon}
                  />
                  В корзину
                </button>
              </NavLink>
              <button className={styles.exampleBtn}>Посмотреть пример</button>
            </div>
          </div>
        </div>
        <div className={styles.designProjectLineMob}></div>
        <div className={styles.designProject}>
          <div className={styles.designProjectMain}>
            {designProjectTitle()}
            {designProjectText()}
            <div className={styles.fitIf}>
              <h3 className={styles.fitIfTitle}>Вам подойдет, если:</h3>
              {designProjectList()}
            </div>

            <div className={styles.completionDate}>
              <h3 className={styles.completionDateTitle}>Срок выполненния:</h3>
              <ul className={styles.completionDateList}>
                <li className={styles.completionDateListItem}>
                  5 рабочих дней после получения замера - составление планировки
                </li>
                <li className={styles.completionDateListItem}>
                  7 рабочих дней после согласования планировочного решения -
                  подготовка комплекта чертежей
                </li>
              </ul>
            </div>

            <div className={styles.get}>
              <h3 className={styles.getTitle}>Вы получите:</h3>
              <ul className={styles.getList}>
                <li className={styles.getListItem}>
                  2 варианта планировки + финальный
                </li>
                <li className={styles.getListItem}>
                  планы демонтажа и монтажа стен
                </li>
                <li className={styles.getListItem}>
                  розетки, выключатели, освещение
                </li>
                <li className={styles.getListItem}>сантехника</li>
                <li className={styles.getListItem}>план потолка</li>
                <li className={styles.getListItem}>план пола и плинтусов</li>
                <li className={styles.getListItem}>план дверей</li>
              </ul>
            </div>

            <div className={styles.designProjectPriceWrap}>
              <h3 className={styles.priceTitle}>Цена услуги:</h3>
              {designProjectPrice()}
            </div>
            <div className={styles.priceBtnsWrap}>
              <NavLink to={"/pop-up"}>
                <button className={styles.cartBtn}>
                  <img
                    src="./cart-white.svg"
                    alt=""
                    className={styles.cartIcon}
                  />
                  В корзину
                </button>
              </NavLink>
              <button className={styles.exampleBtn}>Посмотреть пример</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tender />
      </div>
      <div>
        <Test />
      </div>
    </div>
  );
};
export default Price;
