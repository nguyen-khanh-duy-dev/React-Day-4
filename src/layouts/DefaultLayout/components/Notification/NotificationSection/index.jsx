import styles from "./NotificationSection.module.scss"
import Buttons from "../../../../../components/Buttons"
import Label from "../../../../components/Label"
import NotificationCard from "./NotificationCard"
import DropdownContainer from "../../../../components/DropdownContainer"

function NotificationSection() {
    const notifications = [
        {
            logo: "/f8-logo.png",
            title: "Bài học số 1 được thêm vào",
            date: "10 ngày trước",
            isRead: true,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 2 được thêm vào",
            date: "10 ngày trước",
            isRead: false,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 3 được thêm vào",
            date: "10 ngày trước",
            isRead: true,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 4 được thêm vào",
            date: "10 ngày trước",
            isRead: false,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 5 được thêm vào",
            date: "10 ngày trước",
            isRead: true,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 6 được thêm vào",
            date: "10 ngày trước",
            isRead: true,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 7 được thêm vào",
            date: "10 ngày trước",
            isRead: false,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 8 được thêm vào",
            date: "10 ngày trước",
            isRead: false,
        },
        {
            logo: "/f8-logo.png",
            title: "Bài học số 9 được thêm vào",
            date: "10 ngày trước",
            isRead: false,
        },
    ]
    return (
        <DropdownContainer className={styles.container}>
            <div className={styles.header}>
                <Label>Thông báo</Label>
                <Buttons className={styles.customBtn} size="small">
                    Đánh dấu đã đọc
                </Buttons>
            </div>

            {notifications.map((item, index) => (
                <NotificationCard
                    logo={item.logo}
                    title={item.title}
                    date={item.date}
                    isRead={item.isRead}
                    key={index}
                />
            ))}
        </DropdownContainer>
    )
}

export default NotificationSection
