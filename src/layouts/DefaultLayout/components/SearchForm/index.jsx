import { IoSearch } from "react-icons/io5"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react"
// Thư viện giúp thêm hiệu ứng

import styles from "./SearchForm.module.scss"
import SearchResult from "./SearchResult"

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <input
                id={styles.searchInput}
                placeholder="Tìm kiếm khóa học, bài viết, video,..."
                onFocus={() => {
                    setIsOpen(true)
                }}
                onBlur={() => setIsOpen(false)}
            />
            <IoSearch className={styles.icon} />

            {isOpen && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={styles.dropDown}
                    >
                        <SearchResult />
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}

export default SearchForm
