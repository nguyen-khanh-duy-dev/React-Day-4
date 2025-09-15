import CourseCard from "../../../../components/CourseCard"
import DropdownContainer from "../../../../components/DropdownContainer"
import Label from "../../../../components/Label"
import styles from "./CoursesSection.module.scss"
import Buttons from "../../../../../components/Buttons"

function CoursesSection() {
    const courses = [
        {
            thumbnail: "thumb-fullstack.png",
            title: "Fullstack Online",
            lastLearned: "Học cách đây 3 ngày",
            progress: "70",
        },
        {
            thumbnail: "thumb-js-nangcao.png",
            title: "JavaScript Nâng Cao",
            lastLearned: "Học cách đây 3 ngày",
            progress: "70",
        },
        {
            thumbnail: "thumb-js-pro.png",
            title: "JavaScript Pro",
            lastLearned: "Học cách đây 3 ngày",
            progress: "70",
        },
        {
            thumbnail: "thumb-node-express.png",
            title: "Node & ExpressJS",
            lastLearned: "Học cách đây 3 ngày",
            progress: "70",
        },
        {
            thumbnail: "thumb-reactjs.png",
            title: "ReactJS",
            lastLearned: "Học cách đây 3 ngày",
            progress: "70",
        },
    ]

    return (
        <DropdownContainer className={styles.customDrop}>
            <div className={styles.header}>
                <Label>Khóa học của tôi</Label>
                <Buttons size="small" className={styles.customBtn}>
                    Xem tất cả
                </Buttons>
            </div>
            <div className={styles.myCourses}>
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        thumbnail={course.thumbnail}
                        title={course.title}
                        lastLearned={course.lastLearned}
                        progress={course.progress}
                    ></CourseCard>
                ))}
            </div>
        </DropdownContainer>
    )
}

export default CoursesSection
