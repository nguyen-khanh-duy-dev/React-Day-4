import { BiArrowToTop } from "react-icons/bi"

import styles from "./GoToTop.module.scss"
import { useEffect, useState } from "react"
function GoToTop() {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (e.currentTarget.scrollY >= 300) {
                setIsShow(true)
            } else {
                setIsShow(false)
            }
        })
    }, [setIsShow])

    const handleGoToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <div
            className={`${styles.wrapper} ${
                isShow ? styles.show : styles.hide
            }`}
            onClick={() => handleGoToTop()}
        >
            <BiArrowToTop className={styles.icon} />
        </div>
    )
}

export default GoToTop
