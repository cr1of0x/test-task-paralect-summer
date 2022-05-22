import { useDispatch } from "react-redux";
import { getUserRepos } from "../../../redux/thunks/user";
import { PaginateBar } from "../PaginateBar/PaginateBar";
import { Repository } from "../Repository/Repository";
import { ReposNotFound } from "../ReposNotFound/ReposNotFound";
import styles from "./UserRepos.module.css";

export const UserRepos = ({ user }) => {
  const dispatch = useDispatch();

  const REPOS = user.repos;
  const USER_INFO = user.user;
  const REPOS_AMOUNT = USER_INFO ? USER_INFO.data.public_repos : 0;
  const REPOS_LENGTH = REPOS.data.length;

  const handlePageClick = (data) => {
    const username = USER_INFO.data.login;
    const page = data.selected + 1;
    dispatch(getUserRepos(username, page));
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {REPOS_LENGTH !== 0 ? (
          <div className={styles.reposAdaptive}>
            <div className={styles.count}>Repositories ({REPOS_AMOUNT})</div>
            {REPOS.data.map((repo) => {
              return (
                <Repository
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  link={repo.html_url}
                />
              );
            })}
            <PaginateBar
              handlePageClick={handlePageClick}
              reposAmount={REPOS_AMOUNT}
              userinfo={USER_INFO}
            />
          </div>
        ) : (
          <ReposNotFound />
        )}
      </ul>
    </div>
  );
};
