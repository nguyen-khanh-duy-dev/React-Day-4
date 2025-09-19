import styles from "./Home.module.scss"
import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"

function Home() {
    return (
        <div className={styles.container}>
            <h1>Đây là home page</h1>
        </div>
    )
}

export default Home
