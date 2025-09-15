import PropTypes from "prop-types"
import clsx from "clsx"

import styles from "./Label.module.scss"

function Label({ children, className, ...passProps }) {
    const classNames = clsx(styles.heading, className)
    return (
        <h6 {...passProps} className={classNames}>
            {children}
        </h6>
    )
}

Label.PropTypes = {
    children: PropTypes.string.isRequired,
}

export default Label
