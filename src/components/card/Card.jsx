import ImageCard from "../image-card/ImageCard";
import Information from "../information/Information";
import TitleCard from "../titlecard/TitleCard";
import styles from "./card.module.css"

const Card = (props) => {
    return <div className={`${styles.card} ${styles[props.color]}`}>
        <TitleCard>{props.titleCard}</TitleCard>
        <Information>{props.information}</Information>
        <ImageCard>{props.src}</ImageCard>
    </div>
}

export default Card;