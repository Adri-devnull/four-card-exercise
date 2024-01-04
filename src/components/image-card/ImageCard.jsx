import styles from "./imagecard.module.css"

const ImageCard = (props) => {
    return <img className={styles.img} src={props.children}/>
}

export default ImageCard;