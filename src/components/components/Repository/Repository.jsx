import styles from "./Repository.module.css";

export const Repository = ({ name, description, link }) => {
  return (
    <li className={styles.container}>
      <a href={link} className={styles.link}>
        {name}
      </a>{" "}
      <div className={styles.description}>{description}</div>
    </li>
  );
};
