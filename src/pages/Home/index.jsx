import styles from "./Home.module.scss"
import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"

function Home() {
    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <Sidebar />
                <h1>Đây là home page</h1>
            </div>
        </div>
    )
}

export default Home
