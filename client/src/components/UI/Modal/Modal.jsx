import cn from "clsx";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";
const Modal = ({ children, isVisible , closed}) => {
  return (
    <>
      <Backdrop isVisible={isVisible} closed={closed} />
      <div className={cn(styles.modal, isVisible && styles.show)}>
        {children}
      </div>
    </>
  );
};

export default Modal;
