import { useState } from "react"

import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import styles from "./HOCDemo.module.scss"

import UserProfile from "../../components/UserProfile"
import ProductList from "../../components/ProductList"

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
                        counter={true}
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
