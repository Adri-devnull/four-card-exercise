import styles from "./card.module.css"

const Card = (props) => {
    return <div className={`${styles.card} ${styles[props.color]}`}>{props.children}</div>
}

export default Card;