import { ImHome } from "react-icons/im"
import { ImProfile } from "react-icons/im"
import { NavLink } from "react-router"
import { TbArrowBigUpLines } from "react-icons/tb"
import { FaBox } from "react-icons/fa"

import Buttons from "../../../../components/Buttons"
import styles from "./Sidebar.module.scss"

function Sidebar() {
    const items = [
        { to: "/", title: "Home", icon: <ImHome /> },
        { to: "/profile", title: "Profile", icon: <ImProfile /> },
        { to: "/modal", title: "Modal", icon: <FaBox /> },
        { to: "/scroll", title: "Scroll", icon: <TbArrowBigUpLines /> },
    ]
    return (
        <div className={styles.container}>
            <ul>
                {items.map((item, index) => (
                    <NavLink key={index} to={item.to}>
                        {({ isActive }) => (
                            <li className={isActive ? styles.active : ""}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        )}
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
