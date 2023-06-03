import styles from './BackgroundImage.module.css'
import cardImage from '../../assets/cardImage.png'



const BackgroundImage = () => {
    return (
       <img src={cardImage} className={styles.img} alt="cardImage"/>
    )
}

export default BackgroundImage;