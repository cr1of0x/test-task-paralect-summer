import styles from "./InitialState.module.css";
import icon from "../../../assets/images/bigLupa.png";

export const InitialState = () => {
  return (
    <div className={styles.container}>
      <img alt="" src={icon} className={styles.image} />
      <div className={styles.text}>Start with searching a GiHub user</div>
    </div>
  );
};
