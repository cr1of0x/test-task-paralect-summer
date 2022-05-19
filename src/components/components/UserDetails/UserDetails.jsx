import { useSelector } from "react-redux";
import styles from "./UserDetails.module.css";

export const UserDetails = () => {
  const user = useSelector((state) => {
    return state.user.user;
  });

  console.log(user);

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <img alt="" src={user.data.avatar_url} className={styles.avatar} />
          {user.data.name ? (
            <div className={styles.name}>{user.data.name}</div>
          ) : (
            <div className={styles.name}>Unknown</div>
          )}
          <div className={styles.awrapper}>
            <a
              href={user.data.html_url}
              target="_blank"
              rel="noreferrer"
              className={styles.login}
            >
              {user.data.login}
            </a>
          </div>
          <div>Followers: {user.data.followers}</div>
          <div>Following: {user.data.following}</div>
        </>
      ) : (
        <div>No such user</div>
      )}
    </div>
  );
};
