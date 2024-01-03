import styles from "./title.module.css"

const Title = (props) => {
return <h2 className={styles.font}>{props.text}</h2>
}

export default Title;