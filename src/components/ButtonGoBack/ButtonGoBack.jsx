import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ButtonGoBack.module.css';
import { BiCaretLeftCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const ButtonGoBack = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (location.state) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <button className={styles.button} onClick={handleGoBack} type="button">
      <IconContext.Provider
        value={{
          color: 'white',
          size: 22,
          className: 'global-class-name',
        }}
      >
        <div>
          <BiCaretLeftCircle />
        </div>
      </IconContext.Provider>
      <span>Go back</span>
    </button>
  );
};

export default ButtonGoBack;
