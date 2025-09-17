import { memo, useMemo } from "react"

const ExpensiveChild = memo(({ items }) => {
    console.log("Expensive Child re-render")
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name...")
        let longest = ""
        items.forEach((item) => {
            // Thêm delay giả lập tính toán nặng
            for (let i = 0; i < 1000000000; i++) {
                i++
            }
            if (item.length > longest.length) {
                longest = item
            }
        })
        return longest
    }, [items])

    return (
        <div>
            Item có độ dài lớn nhất: {expensiveCalculation}
            {items.length !== 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {index + 1}.{item}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Chưa có items nào !!!</div>
            )}
        </div>
    )
})

export default ExpensiveChild
