import { useState } from "react"
import UserProfile from "../../components/UserProfile"
import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import ProductList from "../../components/ProductList"
import styles from "./HOCDemo.module.scss"

function HocDemo() {
    const [isLoading, setIsLoading] = useState(true)

    const handleToggleInfo = () => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 1000)
    }
    return (
            <div className={styles.content}>
                <div className={styles.left_content}>
                    <button onClick={handleToggleInfo}>Toggle Info</button>
                    <div className={styles.info}>
                        <UserProfile
                            isLoading={isLoading}
                            className={styles.userInfo}
                        />
                        <ProductList
                            isLoading={isLoading}
                            className={styles.productInfo}
                        />
                    </div>
                </div>
            </div>
    )
}

export default HocDemo
