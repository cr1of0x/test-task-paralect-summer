import styles from "./ReposNotFound.module.css";
import { FiXSquare } from "react-icons/fi";

export const ReposNotFound = () => {
  return (
    <div className={styles.container}>
      <FiXSquare className={styles.icon} />
      <div className={styles.text}>Repository list is empty</div>
    </div>
  );
};
