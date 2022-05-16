import { Header } from "../../components/Header/Header";
import { UserDetails } from "../../components/UserDetails/UserDetails";
import { UserRepos } from "../../components/UserRepos/UserRepos";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.about}>
        <UserDetails />
        <UserRepos />
      </div>
    </div>
  );
};
