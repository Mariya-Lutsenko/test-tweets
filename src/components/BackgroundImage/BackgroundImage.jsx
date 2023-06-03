import styles from './BackgroundImage.module.css'
import cardImage from '../../../src/assets/cardImage.png'


const BackgroundImage = () => {
    return (
        <img className={styles.img} src={cardImage} alt="background_image" />
    )
}

export default BackgroundImage;