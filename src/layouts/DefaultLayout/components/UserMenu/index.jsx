import { useEffect, useRef, useState } from "react"
import { FaUser } from "react-icons/fa"

import styles from "./UserMenu.module.scss"
import Buttons from "../../../../components/Buttons"
import DropdownContainer from "../../../components/DropdownContainer"

function UserMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const buttonRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleCloseDropdown = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false)
            }
        }

        window.addEventListener("click", handleCloseDropdown)
        return () => {
            window.removeEventListener("click", handleCloseDropdown)
        }
    })

    return (
        <div className={styles.container}>
            <Buttons
                ref={buttonRef}
                size="small"
                bordered
                rounded
                className={styles.customBtn}
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaUser />
            </Buttons>

            {isOpen && (
                <div ref={dropdownRef}>
                    <DropdownContainer className={styles.customBox}>
                        <div className={styles.header}>
                            <Buttons
                                size="small"
                                bordered
                                rounded
                                className={styles.customBtn}
                            >
                                <FaUser />
                            </Buttons>
                            <div className={styles.userInfo}>
                                <span className={styles.displayName}>
                                    Nguyễn Khánh Duy
                                </span>
                                <span className={styles.userName}>
                                    @nguyenkhanhduy31
                                </span>
                            </div>
                        </div>

                        <div className={styles.content}>
                            <ul className={styles.listItems}>
                                <li>Trang cá nhân</li>
                            </ul>
                            <ul className={styles.listItems}>
                                <li>Viết Blog</li>
                                <li>Bài viết của tôi</li>
                                <li>Bài viết đã lưu</li>
                            </ul>
                            <ul className={styles.listItems}>
                                <li>Cài đặt</li>
                                <li>Đăng xuất</li>
                            </ul>
                        </div>
                    </DropdownContainer>
                </div>
            )}
        </div>
    )
}

export default UserMenu
