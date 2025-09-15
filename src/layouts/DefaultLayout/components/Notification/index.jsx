import { IoIosNotifications } from "react-icons/io"

import styles from "./Notification.module.scss"
import Buttons from "../../../../components/Buttons"
import NotificationSection from "./NotificationSection"
import { useState } from "react"

function Notification() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <Buttons
                size="small"
                className={styles.customBtn}
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoIosNotifications className={styles.icon} />
            </Buttons>

            {isOpen && (
                <div className={styles.notificationSection}>
                    <NotificationSection />
                </div>
            )}
        </div>
    )
}

export default Notification
