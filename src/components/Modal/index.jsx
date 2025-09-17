import { IoClose } from "react-icons/io5"
import PropTypes from "prop-types"
import { useEffect, forwardRef, useImperativeHandle, useState } from "react"
import clsx from "clsx"

import styles from "./Modal.module.scss"

const Modal = forwardRef(function Modal(
    {
        children,
        shouldCloseOnOverlayClick = true,
        shouldCloseOnEscClick = true,
        onAfterOpen,
        onAfterClose,
        isOpen = false,
        closeTimeMS = 3000, // mặc định 300ms cho animation
        className,
        onRequestOpen,
        onRequestClose,
        onOverlayClassName,
        bodyOpenClassName,
    },
    ref
) {
    const [isVisiable, setIsVisible] = useState(false)

    useImperativeHandle(
        ref,
        () => {
            return {
                open() {
                    onRequestOpen?.()
                    onAfterOpen?.()
                    console.log("Open using ref")
                },
                close() {
                    onRequestClose?.()
                    onAfterClose?.()
                    console.log("Close using ref")
                },
                toggle() {
                    if (isOpen) {
                        this.close()
                    } else {
                        this.open()
                    }
                    console.log("Toggle using ref")
                },
            }
        },
        [onAfterClose, onAfterOpen, onRequestClose, onRequestOpen, isOpen]
    )

    // Hàm đóng modal
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRequestClose = () => {
        setTimeout(() => {
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
            setIsVisible(true)
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

    if (!isOpen) return null

    return (
        <div className={styles.modal}>
            <div className={clsx(styles.content, className)}>
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
                className={clsx(styles.overlay, onOverlayClassName)}
                onClick={() => {
                    if (shouldCloseOnOverlayClick) {
                        handleRequestClose()
                    }
                }}
            ></div>
        </div>
    )
})

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
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
