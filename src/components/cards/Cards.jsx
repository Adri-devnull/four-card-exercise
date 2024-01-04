import styles from "./cards.module.css"
import { cardInfo } from "../../constants/cardinfo";
import { v4 } from "uuid";
import Card from "../card/Card";

const Cards = () => {
    return <div className={styles.container}>
        {cardInfo.map(card => {
            return (
                <Card
                    key={v4()}
                    titleCard={card.titleCard}
                    information={card.information}
                    src={card.src}
                    color = {card.color}
                />
            )
        })}
    </div>
}

export default Cards;