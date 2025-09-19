import { Outlet } from "react-router"

import styles from "./DefaultLayout.module.scss"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

function DefaultLayout() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultLayout
