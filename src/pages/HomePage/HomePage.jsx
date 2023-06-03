import styles from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.titleHomePage}>
        A tweet card application with interactive features for the user.
      </h1>
    </div>
  );
};
export default HomePage;
