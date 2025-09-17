import { forwardRef, useImperativeHandle, useRef } from "react"
import PropTypes from "prop-types"

import styles from "./CustomInput.module.scss"

const CustomInput = forwardRef((props, ref) => {
    const { label, placeholder, value, onChange } = props
    const inputRef = useRef(null)

    // useImperativeHandle: Công khai ra một số phương thức của component con
    // => Conponent cha có thể sử dụng các phương thức được thiết lập sẵn trong component con
    useImperativeHandle(
        ref,
        () => {
            return {
                focus() {
                    inputRef.current.focus()
                },
                blur() {
                    inputRef.current.blur()
                    inputRef.current.value = ""
                },
                getValue() {
                    return inputRef.current.value
                },
            }
        },
        []
    )

    return (
        <div>
            {label ?? <label>{label}</label>}
            <input
                ref={inputRef}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.input}
            ></input>
        </div>
    )
})

// propTypes ko được khuyến nghị dùng nữa thì phải ???
CustomInput.propTypes = {
    label: PropTypes.node,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default CustomInput
