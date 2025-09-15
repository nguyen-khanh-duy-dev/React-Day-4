import clsx from "clsx"
import PropTypes from "prop-types"
import { GoDotFill } from "react-icons/go"

import styles from "./NotificationSection.module.scss"

function NotificationCard({ logo, title, date, isRead }) {
    const classNames = clsx(styles.card, {
        [styles.isRead]: isRead,
    })
    return (
        <div className={classNames}>
            <img src={logo} title="logo" className={styles.left} />
            <div className={styles.right}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{date}</div>
            </div>
            {!isRead ? (
                ""
            ) : (
                <div className={styles.icon}>
                    <GoDotFill />
                </div>
            )}
        </div>
    )
}

NotificationCard.PropTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    isRead: PropTypes.bool,
}

export default NotificationCard
