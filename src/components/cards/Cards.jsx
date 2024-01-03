import styles from "./cards.module.css"

const Cards = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default Cards;