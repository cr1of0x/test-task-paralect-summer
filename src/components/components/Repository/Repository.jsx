import styles from "./Repository.module.css";

export const Repository = ({ name, description, link }) => {
  return (
    <li className={styles.container}>
      <div className={styles.linkContainer}>
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
          {name}
        </a>{" "}
      </div>
      <div className={styles.description}>{description}</div>
    </li>
  );
};
