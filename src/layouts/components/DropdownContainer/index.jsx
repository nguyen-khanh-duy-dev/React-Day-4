import clsx from "clsx"
import PropTypes from "prop-types"

import styles from "./DropdownContainer.module.scss"

function DropdownContainer({ bordered, children, className }) {
    const classNames = clsx(styles.container, className, {
        [styles.bordered]: bordered,
    })

    return <div className={classNames}>{children}</div>
}

DropdownContainer.PropTypes = {
    children: PropTypes.node,
    bordered: PropTypes.bool,
    className: PropTypes.string,
}

export default DropdownContainer
