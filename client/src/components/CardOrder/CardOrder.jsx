import { Pdf } from "../../icons";
import { useGetCardByIdQuery } from "../../store/reducers/restoraunt.reducer";
import Btn from "../Btn/Btn";
import Loaders from "../Loaders/Loaders";
import { Services } from "../Services/Services";
import SliderV2 from "../SliderV2/SliderV2";
import styles from "./CardOrder.module.css";
import { NavLink, useParams } from "react-router-dom";

const CardOrder = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCardByIdQuery(id, { skip: !id });
  if (isLoading) return <Loaders />;

  const cardItem = data.data;
  return (
    <div className={styles.container}>
      <SliderV2 />
      <div className={styles.con_02}>
        <div className={styles.gos}>
          <div className={styles.gl_text}>
            <p className={styles.gl_text}>{cardItem.Categories}</p>
            <div className={styles.x_dark}>
              <h2 className={styles.dark}>{cardItem.title}</h2>
            </div>
          </div>

          <p className={styles.p_01}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
            consequat a, ligula consequat tellus. In tellus ultrices senectus
            nisl sit.
          </p>
          <NavLink to={"/pop-up"}>
            <Btn>В корзину</Btn>
          </NavLink>
          <p className={styles.p_by}>
            Стоимость комнаты: <span>{cardItem.average}mг</span>
          </p>
        </div>

        <div className={styles.ch_2}>
          <div className={styles.gg_02}>
            <div className={styles.gos_02}>
              <div className={styles.g_col2}>
                <h5>-Цветовая гамма:</h5>

                <h5 id={styles.orig}>прохладная палитра</h5>
              </div>
            </div>
          </div>

          <div className={styles.gg_03}>
            <div className={styles.gos_03}>
              <div className={styles.g_col2}>
                <h5>-Основные материалы:</h5>

                <h5 id={styles.orig}>краска, белая эмаль</h5>
              </div>
            </div>
          </div>

          <div className={styles.gg_04}>
            <div className={styles.gos_03}>
              <div className={styles.g_col4}>
                <h5>-Акцентные элементы:</h5>

                <h5 id={styles.orig}>лиловый цвет в отделке стен</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.con_03}>
        <div className={styles.gl_text}>
          <h2 className={styles.primer}>Что вы получаете</h2>
        </div>
        <div className={styles.mr_th}>
          <ul className={styles.mr_th}>
            <li className={styles.mr1_th}>
              смета на мебель и освещение (названия и артикулы)
            </li>
            <li className={styles.mr1_th}>ведомость материалов</li>
            <li className={styles.mr1_th}>
              чертежи дизайна под вашу планировку (развертки стен)
            </li>
          </ul>
        </div>
        <NavLink to={"/sxema.png"}>
          <div className={styles.dop_us}>
            <div className={styles.img_d1}>
              <Pdf />
            </div>
            <div className={styles.pdf_Text}>
              <span>Смотреть пример</span>
              <span className={styles.pdf_Text_2}>Pdf 2,5 Мб</span>
            </div>
          </div>
        </NavLink>
        <div className={styles.services_cont_1}>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
