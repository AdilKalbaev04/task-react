import { Corzinka } from "../../icons";
import {
  addBasket,
  countAdd,
  useGetCardsQuery,
  zoomTrue,
} from "../../store/reducers/restoraunt.reducer";
import Additional from "../Additional/Additional";
import Block2 from "../Block2/Block2";
import DesignFlat from "../DesignFlat/DesignFlat";
import DesignProject2 from "../DesignProject2/DesignProject2";
import DesignProject from "../DesignProject/DesignProject";
import Loaders from "../Loaders/Loaders";
import MyOrder from "../MyOrder/MyOrder";
import PlanRepair from "../PlanRepair/PlanRepair";
import TestV2 from "../TestV2/TestV2";
import TitleH2 from "../TitleH2/TitleH2";
import Modal from "../UI/Modal/Modal";
import OrderInfo from "../UI/OrderInfo/OrderInfo";
import Consultation from "../Сonsultation/Consultation";
import styles from "./Main.module.css";
import Test from "./Test";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Main = () => {
  const [pur, setPur] = useState(false);
  const purHandler = () => setPur(true);
  const purCancelHandler = () => setPur(false);
  const { data, isLoading, isSuccess } = useGetCardsQuery();
  if (isLoading) return <Loaders />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.fon}>
        <Modal isVisible={pur} closed={purCancelHandler}>
          {isSuccess && <OrderInfo closed2={purCancelHandler} />}
        </Modal>
        <MyOrder click={purHandler} />
        <Consultation />
      </div>
      <Block2 />
      <div>
        <TitleH2 />
        <DesignProject />
        <DesignProject2 />
        <PlanRepair />
        <DesignFlat />
        <Additional />

        <TestV2 />

        <Test />
      </div>
    </div>
  );
};

export default Main;
