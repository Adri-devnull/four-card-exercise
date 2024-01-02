import styles from "./header.module.css"

const Header = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default Header;