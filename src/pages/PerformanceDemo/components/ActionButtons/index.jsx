import { memo } from "react"
import PropTypes from "prop-types"

import styles from "./ActionButtons.module.scss"

const ActionButtons = memo(({ onIncrement, onReset }) => {
    console.log("Action Buttons re-render")

    return (
        <div className={styles.container}>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
})

ActionButtons.displayName = "ActionButtons"

ActionButtons.propTypes = {
    onIncrement: PropTypes.func,
    onReset: PropTypes.func,
}

export default ActionButtons
