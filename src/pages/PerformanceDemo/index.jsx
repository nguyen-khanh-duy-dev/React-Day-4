import { useCallback, useRef, useState } from "react"

import styles from "./PerformanceDemo.module.scss"
import CounterDisplay from "./components/CounterDisplay"
import ActionButtons from "./components/ActionButtons"
import ExpensiveChild from "./components/ExpensiveChild"
import Sidebar from "../../layouts/DefaultLayout/components/Sidebar"
import Header from "../../layouts/DefaultLayout/components/Header"

// Nếu ko dùng useCallback thì mỗi lần render Performance thì sẽ tạo một tham chiếu mới cho handleIncrement
// => Liên tục re-render CounterDisplay trong khi các props của CounterDisplay ko thay đổi
// => Sử dụng memo và useCallback sẽ xử lý được vấn đề đó

function PerformanceDemo() {
    const inputRef = useRef(null)
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Nguyễn Văn A")
    const [items, setItems] = useState([])

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
    }, [])

    // Nếu ko có useCallback và memo
    // Thì sẽ luôn tạo ra một tham chiếu mới chó hàm handleReset và luôn re-render ActionButtons
    // Nếu ko có thì ngay cả bấm thay đổi tên cũng sẽ thay re-render compoenent con
    const handleReset = useCallback(() => {
        setCount(0)
    }, [])

    const handleChangeName = () => {
        const names = [
            "Nguyễn Văn A",
            "Nguyễn Văn B",
            "Nguyễn Văn C",
            "Nguyễn Văn D",
            "Nguyễn Văn E",
        ]
        const random = Math.floor(Math.random() * names.length)
        console.log("Thay đổi tên")
        setName(names[random])
    }

    // Ở đây ko cần useCallback bởi vì trong ExpensiveChild ko nhận handleAddNewItems
    const handleAddNewItems = () => {
        if (
            inputRef.current.value !== "" &&
            inputRef.current.value !== items[0]
        ) {
            setItems([inputRef.current.value, ...items])
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <div className={styles.right_content}>
                    <div className={styles.change_name}>
                        <div>Name: {name}</div>
                        <button onClick={handleChangeName}>Change Name</button>
                    </div>

                    <div className={styles.counter}>
                        <CounterDisplay
                            counter={count}
                            onIncrement={handleIncrement}
                        />
                        <button onClick={handleIncrement}>
                            Increment Count
                        </button>
                        <ActionButtons
                            onIncrement={handleIncrement}
                            onReset={handleReset}
                        />
                    </div>

                    <div className={styles.addItems}>
                        <div className={styles.inputWrapper}>
                            <input
                                ref={inputRef}
                                placeholder="Add new items"
                            ></input>
                            <button onClick={handleAddNewItems}>
                                Add Items
                            </button>
                        </div>
                        <ExpensiveChild items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerformanceDemo
