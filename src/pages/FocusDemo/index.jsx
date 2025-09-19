import Header from "../../layouts/DefaultLayout/components/Header"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import CustomInput from "../../components/CustomInput"
import styles from "./FocusDemo.module.scss"
import { useEffect, useRef, useState } from "react"

function FocusDemo() {
    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)
    const childRef1 = useRef(null)
    const childRef2 = useRef(null)

    // renderCount.current sẽ sống suốt vòng đời component cha, giúp lưu giữ giá trị mỗi lần re-render
    const renderCount = useRef(0)

    // Các phương thức focus(), blur(), getValue() sử dụng được do:
    // Sử dụng useImperativeHandle và useRef và forWardRef

    // Gọi một phương thức focus trong component con được công khai
    const handleFocus1 = () => {
        childRef1.current.focus()
    }

    const handleFocus2 = () => {
        childRef2.current.focus()
    }

    const handleBlur = () => {
        childRef1.current.blur()
        childRef2.current.blur()
    }

    // re-render ở cha chỉ sảy ra khi state ở FocusDemo thay đổi(Ở đây là setValue1 và setValue2)
    const handleGetValue = () => {
        if (childRef1.current.getValue()) {
            setValue1(childRef1.current.getValue())
        }

        if (childRef2.current.getValue()) {
            setValue2(childRef2.current.getValue())
        }
    }
    useEffect(() => {
        renderCount.current += 1
    })

    return (
        <div className={styles.content}>
            <div className={styles.left_content}>
                <div className={styles.header}>
                    <h3>Focus Demo</h3>
                    <span>
                        Component FocusDemo đã re-render: {renderCount.current}{" "}
                        lần
                    </span>
                </div>
                <div className={styles.input_wrapper}>
                    <CustomInput
                        ref={childRef1}
                        label={"Input 1"}
                        placeholder={"Nhập giá trị input 1..."}
                    />
                    <CustomInput
                        ref={childRef2}
                        label={"Input 2"}
                        placeholder={"Nhập giá trị input 2..."}
                    />
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleFocus1}>Focus Input 1</button>
                    <button onClick={handleFocus2}>Focus Input 2</button>
                    <button onClick={handleBlur}>Clear Both</button>
                    <button onClick={handleGetValue}>Get values</button>
                </div>

                <div className={styles.valueInput}>
                    <span>Giá trị input 1: {value1 ?? "Nothing..."}</span>
                    <span>Giá trị input 2: {value2 ?? "Nothing..."}</span>
                </div>
            </div>
        </div>
    )
}

export default FocusDemo
