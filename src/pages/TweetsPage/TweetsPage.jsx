import styles from './TweetsPage.module.css';
import Users from 'components/Users/Users';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';

const TweetsPage = () => {
  return (
    <div>
        <div className={styles.btnWrapper}>
        <ButtonGoBack />
        </div>
      <Users />
    </div>
  );
};
export default TweetsPage;
