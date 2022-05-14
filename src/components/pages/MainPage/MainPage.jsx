import { Header } from "../../components/Header/Header";
import { UserDetails } from "../../components/UserDetails/UserDetails";
import { UserRepos } from "../../components/UserRepos/UserRepos";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <UserDetails />
      <UserRepos />
    </div>
  );
};
