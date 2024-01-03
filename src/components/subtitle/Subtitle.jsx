import styles from "./subtitle.module.css";

const Subtitle = (props) => {
    return <h2 className={styles.font}>{props.text}</h2>
}

export default Subtitle;