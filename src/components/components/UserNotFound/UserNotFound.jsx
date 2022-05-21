import styles from "./UserNotFound.module.css";
import { BiUser } from "react-icons/bi";

export const UserNotFound = () => {
  return (
    <div className={styles.container}>
      <BiUser className={styles.icon} />
      <div className={styles.text}>User not found</div>
    </div>
  );
};
