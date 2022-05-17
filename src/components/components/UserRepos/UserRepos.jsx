import { useSelector } from "react-redux";
import { Repository } from "../Repository/Repository";
import styles from "./UserRepos.module.css";

export const UserRepos = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  const repos = user.repos;
  const userinfo = user.user;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {userinfo ? (
          <div className={styles.count}>
            Repositories ({userinfo.data.public_repos})
          </div>
        ) : (
          ""
        )}
        {repos ? (
          repos.data.map((repo) => {
            return (
              <Repository
                key={repo.id}
                name={repo.name}
                description={repo.description}
                link={repo.html_url}
              />
            );
          })
        ) : (
          <div>No such repos</div>
        )}
      </ul>
    </div>
  );
};
