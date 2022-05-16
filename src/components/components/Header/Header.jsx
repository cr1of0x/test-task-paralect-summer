import { useDispatch } from "react-redux";
import { getUserAndRepos } from "../../../redux/thunks/user";
import { HeaderInput } from "../HeaderInput/HeaderInput";
import logo from "../../../assets/images/github.png";
import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();

  const findUserHandler = (user) => {
    dispatch(getUserAndRepos(user));
  };

  return (
    <div className={styles.container}>
      <img alt="" src={logo} />
      <HeaderInput findUserHandler={findUserHandler} />
    </div>
  );
};
