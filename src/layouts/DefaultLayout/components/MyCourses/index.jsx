import { useEffect, useRef, useState } from "react"

import Buttons from "../../../../components/Buttons"
import styles from "./MyCourses.module.scss"
import CoursesSection from "./CoursesSection"

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false)

    const buttonRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const handleClick = (e) => {
            // Nếu ko có !buttonRef.current.contains(e.target)
            // => thì sẽ mở và đóng dropdown ngay lập tức
            // Trường hợp này xử lý chỉ khi bấm ra ngoài button và dropdown thì mới đóng
            // Còn trường hợp bấm vào button toggle dropdown thì xử lý ở dưới
            if (
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
    }, [isOpen])

    return (
        <div className={styles.container}>
            <Buttons
                ref={buttonRef}
                size="small"
                className={styles.custom}
                // Toggle đóng mở dropdown tại button "Khóa học của tôi"
                onClick={() => setIsOpen(!isOpen)}
            >
                Khóa học của tôi
            </Buttons>

            {isOpen && (
                <div ref={sectionRef} className={styles.coursesSection}>
                    <CoursesSection />
                </div>
            )}
        </div>
    )
}

export default MyCourses
