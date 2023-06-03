import styles from './BackgroundImage.module.css';
import CardImage from "../../../src/assets/CardImage.png"

const BackgroundImage = () => {
    return (
        <img className={styles.img} src={CardImage} alt="background_image" />
    )
}

export default BackgroundImage;