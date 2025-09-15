import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import Modal from "../../components/Modal"
import styles from "./ModalDemo.module.scss"
import { useState } from "react"

function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false)
    const [typeModal, setTypeModal] = useState(null)

    const openModal = (type) => {
        setTypeModal(type)
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
        setTypeModal(null)
    }

    // nội dung login giữ nguyên
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

    const modalButtons = [
        { type: "basic", label: "Open Modal 1 - Basic" },
        { type: "animation", label: "Open Modal 2 - Animation" },
        { type: "noOverlayClose", label: "Open Modal 3 - No Overlay Close" },
        { type: "noEscClose", label: "Open Modal 4 - No ESC Close" },
        { type: "customClass", label: "Open Modal 5 - Custom Class" },
        { type: "callbacks", label: "Open Modal 6 - Callbacks" },
    ]

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <div className={styles.leftContent}>
                    {modalButtons.map((btn) => (
                        <button
                            key={btn.type}
                            onClick={() => openModal(btn.type)}
                        >
                            {btn.label}
                        </button>
                    ))}

                    {/* BASIC */}
                    <Modal
                        isOpen={isOpen && typeModal === "basic"}
                        onRequestClose={closeModal}
                    >
                        {loginContent}
                    </Modal>

                    {/* ANIMATION */}
                    <Modal
                        isOpen={isOpen && typeModal === "animation"}
                        onRequestClose={closeModal}
                        closeTimeoutMS={3000}
                        className={styles.modalWithAnimation}
                        overlayClassName={styles.overlayWithAnimation}
                    >
                        {loginContent}
                    </Modal>

                    {/* NO OVERLAY CLOSE */}
                    <Modal
                        isOpen={isOpen && typeModal === "noOverlayClose"}
                        onRequestClose={closeModal}
                        shouldCloseOnOverlayClick={false}
                    >
                        {loginContent}
                    </Modal>

                    {/* NO ESC CLOSE */}
                    <Modal
                        isOpen={isOpen && typeModal === "noEscClose"}
                        onRequestClose={closeModal}
                        shouldCloseOnEscClick={false}
                    >
                        {loginContent}
                    </Modal>

                    {/* CUSTOM CLASS */}
                    <Modal
                        isOpen={isOpen && typeModal === "customClass"}
                        onRequestClose={closeModal}
                        className={styles.customModal}
                        overlayClassName={styles.customOverlay}
                    >
                        {loginContent}
                    </Modal>

                    {/* CALLBACKS */}
                    <Modal
                        isOpen={isOpen && typeModal === "callbacks"}
                        onRequestClose={closeModal}
                        onAfterOpen={() => console.log("Modal đã mở")}
                        onAfterClose={() => console.log("Modal đã đóng")}
                    >
                        {loginContent}
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ModalDemo
