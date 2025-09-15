import { IoClose } from "react-icons/io5"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import clsx from "clsx"

import styles from "./Modal.module.scss"

function Modal({
    children,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEscClick = true,
    onAfterOpen,
    onAfterClose,
    isOpen = false,
    closeTimeMS = 300, // mặc định 300ms cho animation
    className,
    onRequestClose,
    onOverlayClassName,
    bodyOpenClassName,
}) {
    const [closing, setClosing] = useState(false)
    const [shouldRender, setShouldRender] = useState(isOpen)

    // Hàm đóng modal
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRequestClose = () => {
        setClosing(true) // bắt đầu animation đóng
        setTimeout(() => {
            setShouldRender(false) // gỡ khỏi DOM sau khi đóng xong
            setClosing(false)
            onRequestClose?.()
            onAfterClose?.()
        }, closeTimeMS)
    }

    // Xử lý phím Escape
    useEffect(() => {
        const handle = (e) => {
            if (e.code === "Escape" && shouldCloseOnEscClick) {
                handleRequestClose()
            }
        }
        if (isOpen) {
            document.addEventListener("keydown", handle)
        }
        return () => {
            document.removeEventListener("keydown", handle)
        }
    }, [isOpen, shouldCloseOnEscClick, handleRequestClose])

    // Khi mở modal
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
            onAfterOpen?.()
        }
    }, [isOpen, onAfterOpen])

    // Thêm class cho body khi modal mở
    useEffect(() => {
        if (isOpen && bodyOpenClassName) {
            document.body.classList.add(bodyOpenClassName)
        }
        return () => {
            if (bodyOpenClassName) {
                document.body.classList.remove(bodyOpenClassName)
            }
        }
    }, [isOpen, bodyOpenClassName])

    if (!shouldRender) return null

    return (
        <div className={styles.modal}>
            <div
                className={clsx(styles.content, className, {
                    [styles.open]: isOpen && !closing,
                    [styles.closing]: closing,
                })}
            >
                {/* Button close */}
                <button
                    className={styles.closeBtn}
                    onClick={handleRequestClose}
                >
                    <IoClose />
                </button>

                <div className={styles.inner}>{children}</div>
            </div>

            {/* Overlay */}
            <div
                className={clsx(styles.overlay, onOverlayClassName, {
                    [styles.open]: isOpen && !closing,
                    [styles.closing]: closing,
                })}
                onClick={() => {
                    if (shouldCloseOnOverlayClick) {
                        handleRequestClose()
                    }
                }}
            ></div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onRequestClose: PropTypes.func,
    closeTimeMS: PropTypes.number,
    onOverlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    shouldCloseOnEscClick: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
    onAfterClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
}

export default Modal
