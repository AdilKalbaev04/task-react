import styles from "./Backdrop.module.css";

const Backdrop = ({ isVisible, closed }) => {
  return isVisible && <div className={styles.backDrop} onClick={closed} />;
};

export default Backdrop;
