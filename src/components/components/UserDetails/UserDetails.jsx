import { useSelector } from "react-redux";
import styles from "./UserDetails.module.css";
import { FaUser, FaUserFriends } from "react-icons/fa";

export const UserDetails = () => {
  const user = useSelector((state) => {
    return state.user.user;
  });

  const followersAndFollowingCalculate = (number) => {
    return number > 1000 ? (number / 1000).toFixed(1) + "k" : number;
  };

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
          <div className={styles.followContainer}>
            <div className={styles.followersContainer}>
              <FaUserFriends className={styles.followersIcon} />
              <div className={styles.followersText}>
                {followersAndFollowingCalculate(user.data.followers)} followers
              </div>
            </div>
            <div className={styles.followingContainer}>
              <FaUser className={styles.followingIcon} />
              <div className={styles.followingText}>
                {followersAndFollowingCalculate(user.data.following)} following
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>No such user</div>
      )}
    </div>
  );
};
