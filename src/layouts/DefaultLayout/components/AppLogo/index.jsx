import styles from "./AppLogo.module.scss"

function AppLogo() {
    return (
        <div className={styles.container}>
            <img src="/f8-logo.png" className={styles.logo}/>
            <span className={styles.text}>Học lập trình để đi làm</span>
        </div>
    )
}

export default AppLogo
