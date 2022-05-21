import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { InitialState } from "../../components/InitialState/InitialState";
import { UserDetails } from "../../components/UserDetails/UserDetails";
import { UserNotFound } from "../../components/UserNotFound/UserNotFound";
import { UserRepos } from "../../components/UserRepos/UserRepos";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <div className={styles.container}>
      <Header />
      {user.user ? (
        <div className={styles.about}>
          <UserDetails user={user} />
          <UserRepos />
        </div>
      ) : user.isFound ? (
        <InitialState />
      ) : (
        <UserNotFound />
      )}
    </div>
  );
};
