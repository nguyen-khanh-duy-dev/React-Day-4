import { useEffect, useState } from "react"
import Buttons from "../../../../components/Buttons"
import styles from "./MyCourses.module.scss"
import CoursesSection from "./CoursesSection"

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        return () => {}
    }, [isOpen])

    return (
        <div className={styles.container}>
            <Buttons
                size="small"
                className={styles.custom}
                onClick={() => setIsOpen(!isOpen)}
            >
                Khóa học của tôi
            </Buttons>

            {isOpen && (
                <div className={styles.coursesSection}>
                    <CoursesSection />
                </div>
            )}
        </div>
    )
}

export default MyCourses
