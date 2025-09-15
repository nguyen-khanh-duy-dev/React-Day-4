import { MdOutlineEgg } from "react-icons/md"

import DropdownContainer from "../../../../components/DropdownContainer"
import Label from "../../../../components/Label"
import styles from "./SearchResult.module.scss"
import Buttons from "../../../../../components/Buttons"

function SearchResult() {
    const courses = [
        "Xây dựng website với React",
        "Javascript Pro",
        "Kiến thức nhập môn IT",
    ]

    const posts = [
        "Tạo dự án ReactJS với Webpack",
        "Sản phẩm React sau 2 tuần chăm chỉ học",
        "Authentication & Authorization trong ReactJS",
    ]

    const videos = [
        "Day 35: Vite, CSS module, React Router",
        "Day 34: React.createElement, JSX, Props, State",
    ]

    return (
        <DropdownContainer>
            <div className={styles.box}>
                <div className={styles.header}>
                    <Label className={styles.customLabel}>Khóa học</Label>
                    <Buttons className={styles.customBtn} size="small">
                        Xem thêm
                    </Buttons>
                </div>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index} className={styles.item}>
                            {" "}
                            <MdOutlineEgg /> {course}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.box}>
                <div className={styles.header}>
                    <Label className={styles.customLabel}>Bài viết</Label>
                    <Buttons className={styles.customBtn} size="small">
                        Xem thêm
                    </Buttons>
                </div>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index} className={styles.item}>
                            {" "}
                            <MdOutlineEgg /> {post}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.box}>
                <div className={styles.header}>
                    <Label className={styles.customLabel}>Video</Label>
                    <Buttons className={styles.customBtn} size="small">
                        Xem thêm
                    </Buttons>
                </div>
                <ul>
                    {videos.map((video, index) => (
                        <li key={index} className={styles.item}>
                            {" "}
                            <MdOutlineEgg /> {video}
                        </li>
                    ))}
                </ul>
            </div>
        </DropdownContainer>
    )
}

export default SearchResult
