import { IoIosNotifications } from "react-icons/io"

import styles from "./Notification.module.scss"
import Buttons from "../../../../components/Buttons"
import NotificationSection from "./NotificationSection"
import { useEffect, useRef, useState } from "react"

function Notification() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const handleClick = (e) => {
            if (
                buttonRef.current &&
                sectionRef.current &&
                !sectionRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false)
            }
        }

        window.addEventListener("click", handleClick)

        return () => {
            window.removeEventListener("click", handleClick)
        }
    })

    return (
        <div className={styles.container}>
            <Buttons
                ref={buttonRef}
                size="small"
                className={styles.customBtn}
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoIosNotifications className={styles.icon} />
            </Buttons>

            {isOpen && (
                <div ref={sectionRef} className={styles.notificationSection}>
                    <NotificationSection />
                </div>
            )}
        </div>
    )
}

export default Notification
