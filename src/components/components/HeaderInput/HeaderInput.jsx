import { useState } from "react";
import styles from "./HeaderInput.module.css";
import icon from "../../../assets/images/lupa.png";

export const HeaderInput = ({ findUserHandler }) => {
  const [user, setUser] = useState("");

  const onChangeHandler = (e) => {
    setUser(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img alt="" src={icon} />
        <input
          placeholder="Enter GitHub username"
          className={styles.input}
          onChange={(e) => {
            onChangeHandler(e);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              findUserHandler(user);
            }
          }}
        />
      </div>
    </div>
  );
};
