import PropTypes from "prop-types"

import styles from "./CourseCard.module.scss"

function CourseCard({ thumbnail, title, lastLearned, progress }) {
    return (
        <div className={styles.container}>
            <img src={thumbnail} title={title} className={styles.left} />
            <div className={styles.right}>
                <h4 className={styles.heading}>{title}</h4>
                <p className={styles.text}>{lastLearned}</p>
                <div className={styles.progressWrapper}>
                    <div
                        style={{ width: `${progress}%` }}
                        className={styles.progressBar}
                    />
                </div>
            </div>
        </div>
    )
}

CourseCard.PropTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lastLearned: PropTypes.string,
    progress: PropTypes.string,
}

export default CourseCard
