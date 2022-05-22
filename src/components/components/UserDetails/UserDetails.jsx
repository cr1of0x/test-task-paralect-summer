import styles from "./UserDetails.module.css";
import { FaUser, FaUserFriends } from "react-icons/fa";

export const UserDetails = ({ user }) => {
  const USER_INFO = user.user;

  const followersAndFollowingCalculate = (number) => {
    return number > 1000 ? (number / 1000).toFixed(1) + "k" : number;
  };

  return (
    <div className={styles.container}>
      <img alt="" src={USER_INFO.data.avatar_url} className={styles.avatar} />
      <div className={styles.userDetailsAdaptive}>
        {USER_INFO.data.name ? (
          <div className={styles.name}>{USER_INFO.data.name}</div>
        ) : (
          <div className={styles.name}>Unknown</div>
        )}
        <div className={styles.awrapper}>
          <a
            href={USER_INFO.data.html_url}
            target="_blank"
            rel="noreferrer"
            className={styles.login}
          >
            {USER_INFO.data.login}
          </a>
        </div>
        <div className={styles.followContainer}>
          <div className={styles.followersContainer}>
            <FaUserFriends className={styles.followersIcon} />
            <div className={styles.followersText}>
              {followersAndFollowingCalculate(USER_INFO.data.followers)}{" "}
              followers
            </div>
          </div>
          <div className={styles.followingContainer}>
            <FaUser className={styles.followingIcon} />
            <div className={styles.followingText}>
              {followersAndFollowingCalculate(USER_INFO.data.following)}{" "}
              following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
