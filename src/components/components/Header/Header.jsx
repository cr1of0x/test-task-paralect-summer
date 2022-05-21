import { useDispatch } from "react-redux";
import { getUser, getUserRepos } from "../../../redux/thunks/user";
import { HeaderInput } from "../HeaderInput/HeaderInput";
import logo from "../../../assets/images/github.png";
import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();

  const findUserHandler = (user) => {
    dispatch(getUser(user));
    dispatch(getUserRepos(user, 1));
  };

  return (
    <div className={styles.container}>
      <img alt="" src={logo} />
      <HeaderInput findUserHandler={findUserHandler} />
    </div>
  );
};
