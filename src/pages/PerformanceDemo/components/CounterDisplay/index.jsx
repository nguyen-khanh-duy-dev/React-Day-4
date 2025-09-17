import PropTypes from "prop-types"
import { memo } from "react"

const CounterDisplay = memo(({ counter }) => {
    console.log("Counter Display render")

    return <span>Counter is: {counter}</span>
})

CounterDisplay.propTypes = {
    count: PropTypes.number,
    onIncrement: PropTypes.func,
}

export default CounterDisplay
