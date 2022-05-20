import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "../../../redux/thunks/user";
import { PaginateBar } from "../PaginateBar/PaginateBar";
import { Repository } from "../Repository/Repository";
import styles from "./UserRepos.module.css";

export const UserRepos = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });

  const repos = user.repos;
  const userinfo = user.user;
  const reposAmount = userinfo ? userinfo.data.public_repos : 0;
  const reposLength = repos.data.length;

  const handlePageClick = (data) => {
    const user = userinfo.data.login;
    const page = data.selected + 1;
    dispatch(getUserRepos(user, page));
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {reposLength !== 0 ? (
          <div>
            <div className={styles.count}>Repositories ({reposAmount})</div>
            {repos.data.map((repo) => {
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
              reposAmount={reposAmount}
              userinfo={userinfo}
            />
          </div>
        ) : (
          <div>No such repos</div>
        )}
      </ul>
    </div>
  );
};
