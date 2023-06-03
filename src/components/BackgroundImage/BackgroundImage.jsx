import styles from './BackgroundImage.module.css'
import cardImage from '../../images/cardImage.png'



const BackgroundImage = () => {
    return (
       <img src={cardImage} className={styles.img} alt="cardImage"/>
    )
}

export default BackgroundImage;