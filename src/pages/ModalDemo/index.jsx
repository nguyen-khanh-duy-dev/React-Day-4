import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import Modal from "../../components/Modal"
import styles from "./ModalDemo.module.scss"
import { useEffect, useRef, useState } from "react"

function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false)

    const modalRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    })

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleOpenRef = () => {
        modalRef.current.open()
    }

    const handleCloseRef = () => {
        modalRef.current.close()
    }

    const handleToggleRef = () => {
        modalRef.current.toggle()
    }

    const loginContent = (
        <>
            <div className={styles.headerForm}>
                <h2 className={styles.heading}>Đăng nhập</h2>
                <span className={styles.subHeading}>
                    Tạo tài khoản để bắt đầu hành trình của bạn.
                </span>
            </div>
            <form action="" className={styles.form}>
                <input
                    ref={inputRef}
                    type="text"
                    name="email"
                    placeholder="Nhập email của bạn"
                    className={styles.inputForm}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu của bạn"
                    className={styles.inputForm}
                />
                <span className={styles.trouble}>
                    Bạn gặp vấn đề khi đăng nhập?
                </span>
                <button className={styles.customBtn}>Sign in</button>
            </form>
        </>
    )

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <div className={styles.left_content}>
                    <button onClick={openModal}>Open Modal - Day 37</button>
                    <button onClick={handleOpenRef}>
                        Open Modal Ref - Day 38
                    </button>
                    <button onClick={handleCloseRef}>
                        Close Modal Ref - Day 38
                    </button>
                    <button onClick={handleToggleRef}>
                        Toggle Modal Ref - Day 38
                    </button>
                    <Modal
                        ref={modalRef}
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        onRequestOpen={openModal}
                        className={styles.customModal}
                    >
                        {loginContent}
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ModalDemo
